
import { ProcessOptions, ProcessResult } from '../types';

/**
 * Accesses libraries from the global window object.
 */
const getLibs = () => ({
  PDFLib: (window as any).PDFLib,
  pdfjsLib: (window as any).pdfjsLib,
  html2pdf: (window as any).html2pdf,
  mammoth: (window as any).mammoth,
  XLSX: (window as any).XLSX,
  PptxGenJS: (window as any).PptxGenJS,
  JSZip: (window as any).JSZip,
  FFmpeg: (window as any).FFmpeg,
  heic2any: (window as any).heic2any,
  ImageTracer: (window as any).ImageTracer,
});

export const renderPdfPage = async (pdfData: ArrayBuffer, pageNum: number, scale = 1.0): Promise<string> => {
  const libs = getLibs();
  if (!libs.pdfjsLib.GlobalWorkerOptions.workerSrc) {
    libs.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';
  }
  const pdf = await libs.pdfjsLib.getDocument({ data: pdfData }).promise;
  const page = await pdf.getPage(pageNum);
  const viewport = page.getViewport({ scale });
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.height = viewport.height;
  canvas.width = viewport.width;

  if (context) {
    await page.render({ canvasContext: context, viewport: viewport }).promise;
    return canvas.toDataURL('image/png');
  }
  return '';
};

export const processFiles = async (toolId: string, options: ProcessOptions): Promise<ProcessResult> => {
  const { files } = options;
  const libs = getLibs();

  try {
    // 1. Text to PDF
    if (toolId === 'text-to-pdf') {
      const content = options.textContent || "";
      if (!content.trim()) throw new Error("Please enter or upload some text content.");

      const styledHtml = `
        <div style="padding: 50px; font-family: 'Helvetica', 'Arial', sans-serif; font-size: 14px; line-height: 1.6; color: #000; width: 680px; background: #fff; min-height: 900px;">
          <div style="white-space: pre-wrap; word-wrap: break-word;">${content}</div>
        </div>
      `;

      const opt = { 
        margin: [10, 10], 
        filename: 'document.pdf', 
        image: { type: 'jpeg', quality: 0.98 }, 
        html2canvas: { scale: 2, useCORS: true, letterRendering: true, width: 794 }, 
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } 
      };

      const pdfBlob = await libs.html2pdf().from(styledHtml).set(opt).output('blob');
      return { success: true, data: pdfBlob, filename: 'text-document.pdf' };
    }

    if (!files?.length) throw new Error("No files selected.");

    // PDF Lib based tools
    const { PDFLib } = libs;
    if (['merge', 'protect', 'watermark', 'rotate', 'split', 'page-num', 'jpg-to-pdf'].includes(toolId)) {
        let resultPdf;
        if (toolId === 'merge') {
            resultPdf = await PDFLib.PDFDocument.create();
            for (const f of files) {
                const src = await PDFLib.PDFDocument.load(await f.arrayBuffer());
                const pages = await resultPdf.copyPages(src, src.getPageIndices());
                pages.forEach((p: any) => resultPdf.addPage(p));
            }
        } else if (toolId === 'jpg-to-pdf') {
            resultPdf = await PDFLib.PDFDocument.create();
            for (const f of files) {
                const imgBytes = await f.arrayBuffer();
                const img = f.type.includes('png') ? await resultPdf.embedPng(imgBytes) : await resultPdf.embedJpg(imgBytes);
                const page = resultPdf.addPage([595, 842]);
                const dims = img.scaleToFit(500, 700);
                page.drawImage(img, { x: 50, y: 842 - dims.height - 50, width: dims.width, height: dims.height });
            }
        } else {
            const file = files[0];
            const pdf = await PDFLib.PDFDocument.load(await file.arrayBuffer());
            
            if (toolId === 'protect') {
                const bytes = await pdf.save({ userPassword: options.password, ownerPassword: options.password });
                return { success: true, data: new Blob([bytes], {type:'application/pdf'}), filename: 'protected.pdf' };
            }
            
            if (toolId === 'rotate') {
                const rotations = options.rotations || {};
                pdf.getPages().forEach((p: any, i: number) => {
                  const deg = rotations[i] !== undefined ? rotations[i] : (options.rotateAngle || 0);
                  p.setRotation(PDFLib.degrees(deg));
                });
            }

            if (toolId === 'split') {
                const removed = new Set(options.removedPages || []);
                const indices = pdf.getPageIndices().filter(i => !removed.has(i));
                const newPdf = await PDFLib.PDFDocument.create();
                const copiedPages = await newPdf.copyPages(pdf, indices);
                copiedPages.forEach(p => newPdf.addPage(p));
                resultPdf = newPdf;
            } else if (toolId === 'watermark') {
                const config = options.watermarkConfig || { text: "U2PDF", opacity: 0.4, position: 'center' };
                pdf.getPages().forEach((p: any) => {
                    const { width, height } = p.getSize();
                    let x = width / 2 - 50;
                    let y = height / 2;
                    if (config.position === 'top-left') { x = 50; y = height - 50; }
                    else if (config.position === 'top-right') { x = width - 150; y = height - 50; }
                    else if (config.position === 'bottom-left') { x = 50; y = 50; }
                    else if (config.position === 'bottom-right') { x = width - 150; y = 50; }

                    p.drawText(config.text, { x, y, size: 40, opacity: config.opacity, color: PDFLib.rgb(0.5, 0.5, 0.5) });
                });
                resultPdf = pdf;
            } else if (toolId === 'page-num') {
                const pos = options.pageNumberPosition || 'bottom';
                pdf.getPages().forEach((p: any, i: number) => {
                  const { width, height } = p.getSize();
                  const y = pos === 'bottom' ? 20 : height - 30;
                  p.drawText(`${i+1}`, { x: width/2, y, size: 12 });
                });
                resultPdf = pdf;
            } else {
                resultPdf = pdf;
            }
        }
        const bytes = await resultPdf.save();
        return { success: true, data: new Blob([bytes], {type:'application/pdf'}), filename: 'processed.pdf' };
    }

    // Image conversions and multi-media
    if (['webp-to-png', 'jfif-to-png', 'png-to-jpg', 'webp-to-jpg', 'jfif-to-jpg', 'heic-to-jpg'].includes(toolId)) {
      const file = files[0];
      let sourceBlob: Blob = file;
      if (toolId === 'heic-to-jpg') {
        sourceBlob = await libs.heic2any({ blob: file, toType: "image/jpeg", quality: 0.8 }) as Blob;
      }
      const bmp = await createImageBitmap(sourceBlob);
      const canvas = document.createElement('canvas');
      canvas.width = bmp.width; canvas.height = bmp.height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(bmp, 0, 0);
        const mime = toolId.endsWith('png') ? 'image/png' : 'image/jpeg';
        const ext = toolId.endsWith('png') ? '.png' : '.jpg';
        const blob = await new Promise<Blob>(r => canvas.toBlob(b => r(b!), mime, 0.95));
        return { success: true, data: blob, filename: file.name.split('.')[0] + ext };
      }
    }

    if (toolId === 'pdf-to-jpg') {
      const file = files[0];
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await libs.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      const zip = new libs.JSZip();
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 2.0 });
        const canvas = document.createElement('canvas');
        canvas.width = viewport.width; canvas.height = viewport.height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          await page.render({ canvasContext: ctx, viewport: viewport }).promise;
          const blob = await new Promise<Blob>(r => canvas.toBlob(b => r(b!), 'image/jpeg', 0.9));
          zip.file(`page-${i}.jpg`, blob);
        }
      }
      return { success: true, data: await zip.generateAsync({ type: 'blob' }), filename: file.name.replace(/\.pdf$/i, '_images.zip') };
    }

    if (toolId.includes('compress')) {
      const file = files[0];
      const quality = (options.compressionLevel || 50) / 100;
      if (file.type.startsWith('image/')) {
        const bmp = await createImageBitmap(file);
        const canvas = document.createElement('canvas');
        canvas.width = bmp.width; canvas.height = bmp.height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(bmp, 0, 0);
          const blob = await new Promise<Blob>(r => canvas.toBlob(b => r(b!), file.type, quality));
          return { success: true, data: blob, filename: 'compressed_' + file.name };
        }
      }
    }

    return { success: true, data: files[0], filename: 'processed_' + files[0].name };
  } catch (error: any) {
    throw new Error(error.message || "Failed to process file.");
  }
};
