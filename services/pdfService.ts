
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
});

export const processFiles = async (toolId: string, options: ProcessOptions): Promise<ProcessResult> => {
  const { files } = options;
  const libs = getLibs();

  try {
    // 17. Text to PDF (Rich Content)
    if (toolId === 'text-to-pdf') {
      const content = options.textContent || "";
      if (!content.trim()) throw new Error("Please enter or upload some text content.");

      const container = document.createElement('div');
      container.style.cssText = 'position:fixed; left:-10000px; top:0; width:794px; background:white; color:black; padding:60px; display:block; visibility:visible; box-sizing: border-box;';
      
      // We wrap content in a div with proper PDF styles
      container.innerHTML = `
        <style>
          .pdf-content { font-family: Arial, sans-serif; font-size: 14px; line-height: 1.6; color: #000; }
          .pdf-content h1 { font-size: 24px; margin-bottom: 10px; font-weight: bold; }
          .pdf-content h2 { font-size: 20px; margin-bottom: 8px; font-weight: bold; }
          .pdf-content p { margin-bottom: 12px; }
          .pdf-content ul, .pdf-content ol { margin-left: 25px; margin-bottom: 12px; }
          .pdf-content li { margin-bottom: 4px; }
        </style>
        <div class="pdf-content">${content}</div>
      `;
      document.body.appendChild(container);

      const opt = { 
        margin: 0, 
        filename: 'document.pdf', 
        image: { type: 'jpeg', quality: 0.98 }, 
        html2canvas: { scale: 2, useCORS: true, letterRendering: true }, 
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } 
      };

      try {
        const pdfBlob = await libs.html2pdf().set(opt).from(container).output('blob');
        return { success: true, data: pdfBlob, filename: 'text-document.pdf' };
      } finally {
        if (document.body.contains(container)) document.body.removeChild(container);
      }
    }

    // 18. PDF to Picture
    if (toolId === 'pdf-to-img') {
      if (!files || files.length === 0) throw new Error("No PDF file selected.");
      const file = files[0];
      const arrayBuffer = await file.arrayBuffer();

      if (!libs.pdfjsLib.GlobalWorkerOptions.workerSrc) {
        libs.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';
      }
      const pdf = await libs.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      const images: { name: string, blob: Blob }[] = [];
      
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 2.0 });
        const canvas = document.createElement('canvas');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          await page.render({ canvasContext: ctx, viewport: viewport }).promise;
          const blob = await new Promise<Blob>((resolve) => canvas.toBlob((b) => resolve(b!), 'image/png'));
          images.push({ name: `page-${i}.png`, blob });
        }
      }

      if (images.length === 1) {
        return { success: true, data: images[0].blob, filename: file.name.replace(/\.pdf$/i, '.png') };
      } else {
        const zip = new libs.JSZip();
        images.forEach(img => zip.file(img.name, img.blob));
        const zipContent = await zip.generateAsync({ type: 'blob' });
        return { success: true, data: zipContent, filename: file.name.replace(/\.pdf$/i, '_images.zip') };
      }
    }

    // Standard PDF-Lib/FFmpeg tools below...
    if (!files || files.length === 0) throw new Error("No files selected.");
    const file = files[0];
    const arrayBuffer = await file.arrayBuffer();

    // 1. Word to PDF
    if (toolId === 'word-to-pdf') {
      const { value } = await libs.mammoth.convertToHtml({ arrayBuffer });
      if (!value) throw new Error("Could not extract text from the document.");
      const container = document.createElement('div');
      container.style.cssText = 'position:fixed; left:-10000px; top:0; width:794px; background:white; color:black; padding:40px; display:block; visibility:visible;';
      container.innerHTML = `<style>body { font-family: 'Times New Roman', serif; line-height: 1.6; color:#000; background:#fff; } img { max-width: 100%; height: auto; display: block; margin: 15px auto; object-fit: contain; } table { width: 100%; border-collapse: collapse; margin-bottom: 15px; } td, th { border: 1px solid #000; padding: 8px; } p { margin-bottom: 12px; } h1, h2, h3 { margin-top: 20px; font-weight: bold; }</style><div class="word-content">${value}</div>`;
      document.body.appendChild(container);
      await new Promise(resolve => setTimeout(resolve, 800));
      const opt = { margin: 15, filename: file.name.replace(/\.docx?$/i, '.pdf'), image: { type: 'jpeg', quality: 0.98 }, html2canvas: { scale: 2, useCORS: true, letterRendering: true, windowWidth: 794, scrollY: 0 }, jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } };
      try {
        const pdfBlob = await libs.html2pdf().set(opt).from(container).output('blob');
        return { success: true, data: pdfBlob, filename: opt.filename };
      } finally {
        if (document.body.contains(container)) document.body.removeChild(container);
      }
    }

    // 2. PDF to Word
    if (toolId === 'pdf-to-word') {
      const pdf = await libs.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      let fullHtml = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Converted Document</title><style>body { font-family: 'Arial', sans-serif; line-height: 1.5; } .page-container { position: relative; margin-bottom: 20px; } img.page-bg { width: 100%; height: auto; display: block; } .text-overlay { margin-top: 10px; }</style></head><body>`;
      for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale: 1.5 });
          let imgData = '';
          try {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            if (ctx) {
                canvas.width = viewport.width; canvas.height = viewport.height;
                await page.render({ canvasContext: ctx, viewport: viewport }).promise;
                imgData = canvas.toDataURL('image/jpeg', 0.8);
            }
          } catch (e) {}
          const textContent = await page.getTextContent();
          let pageText = ""; let lastY = -1;
          for (const item of textContent.items) {
             if (item.transform && lastY !== -1 && Math.abs(item.transform[5] - lastY) > 10) pageText += "<br>";
             pageText += (item as any).str + " ";
             if (item.transform) lastY = (item as any).transform[5];
          }
          fullHtml += `<div class="page-container">${imgData ? `<img src="${imgData}" width="${viewport.width}" style="max-width:100%"><br><br>` : ''}<div class="text-overlay"><p>${pageText}</p></div></div><br clear=all style='mso-special-character:line-break;page-break-before:always'>`;
      }
      fullHtml += "</body></html>";
      return { success: true, data: new Blob([fullHtml], {type: 'application/msword'}), filename: file.name.replace('.pdf', '.doc') };
    }

    // 3. Compress Image
    if (toolId === 'compress-image') {
        const quality = (options.compressionLevel || 50) / 100;
        const processedBlobs = [];
        for (const f of files) {
            const bmp = await createImageBitmap(f);
            const canvas = document.createElement('canvas');
            canvas.width = bmp.width; canvas.height = bmp.height;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.drawImage(bmp, 0, 0);
                const blob = await new Promise<Blob | null>(resolve => canvas.toBlob(resolve, f.type === 'image/png' ? 'image/jpeg' : f.type, quality));
                if (blob) processedBlobs.push({ name: f.name, blob });
            }
        }
        if (processedBlobs.length === 1) return { success: true, data: processedBlobs[0].blob, filename: `compressed_${processedBlobs[0].name}` };
        const zip = new libs.JSZip();
        processedBlobs.forEach(item => zip.file(item.name, item.blob));
        const zipContent = await zip.generateAsync({ type: "blob" });
        return { success: true, data: zipContent, filename: "compressed_images.zip" };
    }

    // 4. Compress Video
    if (toolId === 'compress-video') {
        const { createFFmpeg, fetchFile } = libs.FFmpeg;
        const ffmpeg = createFFmpeg({ log: true, corePath: 'https://unpkg.com/@ffmpeg/core@0.11.6/dist/ffmpeg-core.js' });
        await ffmpeg.load();
        ffmpeg.FS('writeFile', file.name, await fetchFile(file));
        const crf = Math.round(51 - (((options.compressionLevel || 50) / 100) * (51 - 18)));
        await ffmpeg.run('-i', file.name, '-vcodec', 'libx264', '-crf', crf.toString(), 'output.mp4');
        const data = ffmpeg.FS('readFile', 'output.mp4');
        return { success: true, data: new Blob([data.buffer], { type: 'video/mp4' }), filename: `compressed_${file.name.replace(/\.[^/.]+$/, "")}.mp4` };
    }

    // 5. Compress PDF
    if (toolId === 'compress') {
      const quality = Math.max(0.1, (options.compressionLevel || 50) / 100);
      const processedPdfs = [];
      for (const f of files) {
          const pdf = await libs.pdfjsLib.getDocument({ data: await f.arrayBuffer() }).promise;
          const newPdf = await libs.PDFLib.PDFDocument.create();
          for (let i = 1; i <= pdf.numPages; i++) {
              const page = await pdf.getPage(i);
              const viewport = page.getViewport({ scale: 1.0 });
              const canvas = document.createElement('canvas');
              const ctx = canvas.getContext('2d');
              if (ctx) {
                canvas.width = viewport.width; canvas.height = viewport.height;
                await page.render({ canvasContext: ctx, viewport: viewport }).promise;
                const img = await newPdf.embedJpg(canvas.toDataURL('image/jpeg', quality));
                newPdf.addPage([viewport.width, viewport.height]).drawImage(img, { x: 0, y: 0, width: viewport.width, height: viewport.height });
              }
          }
          processedPdfs.push({ name: f.name, blob: new Blob([await newPdf.save()], {type:'application/pdf'}) });
      }
      if (processedPdfs.length === 1) return { success: true, data: processedPdfs[0].blob, filename: `compressed_${processedPdfs[0].name}` };
      const zip = new libs.JSZip();
      processedPdfs.forEach(item => zip.file(item.name, item.blob));
      return { success: true, data: await zip.generateAsync({ type: "blob" }), filename: "compressed_pdfs.zip" };
    }

    // 6. Image to PDF
    if (toolId === 'jpg-to-pdf') {
      const doc = await libs.PDFLib.PDFDocument.create();
      for (const f of files) {
          const imgBytes = await f.arrayBuffer();
          const img = f.type.includes('png') ? await doc.embedPng(imgBytes) : await doc.embedJpg(imgBytes);
          const A4_W = 595.28; const A4_H = 841.89;
          const page = doc.addPage([A4_W, A4_H]);
          const scale = Math.min(A4_W / img.width, A4_H / img.height);
          page.drawImage(img, { x: (A4_W - img.width * scale) / 2, y: (A4_H - img.height * scale) / 2, width: img.width * scale, height: img.height * scale });
      }
      return { success: true, data: new Blob([await doc.save()], {type: 'application/pdf'}), filename: 'images.pdf' };
    }

    // PDF LIB TOOLS
    const { PDFLib } = libs;
    if (toolId === 'merge') {
        const merged = await PDFLib.PDFDocument.create();
        for (const f of files) {
            const src = await PDFLib.PDFDocument.load(await f.arrayBuffer());
            (await merged.copyPages(src, src.getPageIndices())).forEach((p:any) => merged.addPage(p));
        }
        return { success: true, data: new Blob([await merged.save()], {type:'application/pdf'}), filename: 'merged.pdf' };
    }

    if (toolId === 'split') {
        const pdf = await PDFLib.PDFDocument.load(arrayBuffer);
        const pagesToRemove = new Set((options.splitRange || "").split(',').map(s => parseInt(s.trim()) - 1));
        const newPdf = await PDFLib.PDFDocument.create();
        const keep = pdf.getPageIndices().filter((i:number) => !pagesToRemove.has(i));
        (await newPdf.copyPages(pdf, keep)).forEach((p:any) => newPdf.addPage(p));
        return { success: true, data: new Blob([await newPdf.save()], {type:'application/pdf'}), filename: 'modified.pdf' };
    }

    if (toolId === 'watermark') {
        const pdf = await PDFLib.PDFDocument.load(arrayBuffer);
        pdf.getPages().forEach((p:any) => {
            const { width, height } = p.getSize();
            p.drawText(options.watermarkText || "U2PDF", { x: width/2-100, y: height/2, size: 50, opacity: 0.3, rotate: PDFLib.degrees(45), color: PDFLib.rgb(0.5, 0.5, 0.5) });
        });
        return { success: true, data: new Blob([await pdf.save()], {type:'application/pdf'}), filename: 'watermarked.pdf' };
    }

    if (toolId === 'rotate') {
        const pdf = await PDFLib.PDFDocument.load(arrayBuffer);
        pdf.getPages().forEach((p:any) => p.setRotation(PDFLib.degrees(options.rotateAngle || 90)));
        return { success: true, data: new Blob([await pdf.save()], {type:'application/pdf'}), filename: 'rotated.pdf' };
    }

    if (toolId === 'protect') {
        const pdf = await PDFLib.PDFDocument.load(arrayBuffer);
        const bytes = await pdf.save({ userPassword: options.password, ownerPassword: options.password, encryptionKeyLength: 128 });
        return { success: true, data: new Blob([bytes], {type:'application/pdf'}), filename: 'protected.pdf' };
    }

    if (toolId === 'page-num') {
        const pdf = await PDFLib.PDFDocument.load(arrayBuffer);
        pdf.getPages().forEach((p:any, idx:number) => {
            const { width } = p.getSize();
            p.drawText(`${idx+1}`, { x: width/2, y: 20, size: 12, color: PDFLib.rgb(0, 0, 0) });
        });
        return { success: true, data: new Blob([await pdf.save()], {type:'application/pdf'}), filename: 'numbered.pdf' };
    }

    // PPT/EXCEL/HTML
    if (toolId === 'excel-to-pdf') {
        const workbook = libs.XLSX.read(new Uint8Array(arrayBuffer), { type: 'array' });
        const html = libs.XLSX.utils.sheet_to_html(workbook.Sheets[workbook.SheetNames[0]]);
        const el = document.createElement('div');
        el.innerHTML = `<style>table{border-collapse:collapse;width:100%;font-family:sans-serif;}td,th{border:1px solid #ddd;padding:8px;}</style>${html}`;
        el.style.cssText = 'position:fixed;top:0;left:-10000px;width:1000px;background:white;padding:20px;';
        document.body.appendChild(el);
        await new Promise(r => setTimeout(r, 300));
        try { return { success: true, data: await libs.html2pdf().from(el).set({ margin: 10, jsPDF: { orientation: 'landscape' } }).output('blob'), filename: file.name.replace(/\.xlsx$/i,'.pdf') }; }
        finally { document.body.removeChild(el); }
    }

    if (toolId === 'ppt-to-pdf') {
      const zip = new libs.JSZip();
      const pdfDoc = await libs.PDFLib.PDFDocument.create();
      const content = await zip.loadAsync(file);
      const slideFiles = Object.keys(content.files).filter(k => k.match(/ppt\/slides\/slide\d+\.xml/)).sort((a,b) => (parseInt(a.match(/slide(\d+)\.xml/)?.[1] || '0') - parseInt(b.match(/slide(\d+)\.xml/)?.[1] || '0')));
      for (let slide of slideFiles) {
          let page = pdfDoc.addPage([842, 595]);
          const xml = await content.file(slide).async("string");
          const xmlDoc = new DOMParser().parseFromString(xml, "text/xml");
          const tags = xmlDoc.getElementsByTagName("*");
          let text = [];
          for (let i=0; i < tags.length; i++) if (tags[i].localName === 't') text.push(tags[i].textContent || "");
          let y = 545;
          text.forEach(t => { if(y>50){ page.drawText(t.replace(/[\x00-\x1F\x7F-\x9F]/g, ""), { x: 50, y, size: 12 }); y -= 18; } });
      }
      return { success: true, data: new Blob([await pdfDoc.save()], {type: 'application/pdf'}), filename: file.name.replace('.pptx', '.pdf') };
    }

    if (toolId === 'pdf-to-ppt') {
      const pdf = await libs.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      const pptx = new libs.PptxGenJS();
      for(let i=1; i<=pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale: 1.5 });
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          if (ctx) {
            canvas.width = viewport.width; canvas.height = viewport.height;
            await page.render({ canvasContext: ctx, viewport: viewport }).promise;
            pptx.addSlide().addImage({ data: canvas.toDataURL("image/jpeg", 0.8), x: 0, y: 0, w: "100%", h: "100%" });
          }
      }
      return { success: true, data: await pptx.write({ outputType: 'blob' }), filename: file.name.replace('.pdf', '.pptx') };
    }

    if (toolId === 'html-to-pdf') {
      const el = document.createElement('div');
      el.innerHTML = await file.text();
      el.style.cssText = 'position:fixed; left:-10000px; top:0; width:794px; background:white; padding:20px;';
      document.body.appendChild(el);
      await new Promise(r => setTimeout(r, 300));
      try { return { success: true, data: await libs.html2pdf().from(el).set({ margin: 10 }).output('blob'), filename: file.name.replace(/\.html$/i,'.pdf') }; }
      finally { document.body.removeChild(el); }
    }

    throw new Error(`Tool ${toolId} logic not implemented.`);
  } catch (error: any) {
    throw new Error(error.message || "Failed to process document.");
  }
};
