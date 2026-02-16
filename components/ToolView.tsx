
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Tool, DownloadLink, WatermarkConfig } from '../types';
import { processFiles, renderPdfPage } from '../services/pdfService';

interface ToolViewProps {
  tool: Tool;
  onBack: () => void;
}

const ToolView: React.FC<ToolViewProps> = ({ tool, onBack }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [downloadLink, setDownloadLink] = useState<DownloadLink | null>(null);

  // Live Interaction States
  const [removedPages, setRemovedPages] = useState<Set<number>>(new Set());
  const [rotations, setRotations] = useState<Record<number, number>>({});
  const [watermarkConfig, setWatermarkConfig] = useState<WatermarkConfig>({ text: "U2PDF", opacity: 0.4, position: 'center' });
  const [pageNumberPosition, setPageNumberPosition] = useState<'top' | 'bottom'>('bottom');
  const [compressionLevel, setCompressionLevel] = useState(50);
  const [password, setPassword] = useState("");
  const [splitRange, setSplitRange] = useState("");

  // UI States
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  const editorRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const generatePreviews = async (selectedFiles: File[]) => {
    if (selectedFiles.length === 0) return;
    setError(null);

    const firstFile = selectedFiles[0];
    
    // PDF Previews
    if (firstFile.type === 'application/pdf' || firstFile.name.endsWith('.pdf')) {
      try {
        const buffer = await firstFile.arrayBuffer();
        const pdf = await (window as any).pdfjsLib.getDocument({ data: buffer }).promise;
        const pageCount = Math.min(pdf.numPages, 100);
        const pagePreviews: string[] = [];
        for (let i = 1; i <= pageCount; i++) {
          const p = await renderPdfPage(buffer, i, 0.4);
          pagePreviews.push(p);
        }
        setPreviews(pagePreviews);
      } catch (e) {
        console.error("Preview generation failed", e);
      }
    } 
    // Image Previews
    else if (firstFile.type.startsWith('image/')) {
      const url = URL.createObjectURL(firstFile);
      setImagePreviewUrl(url);
    }
    // Video Previews
    else if (firstFile.type.startsWith('video/')) {
      const url = URL.createObjectURL(firstFile);
      setVideoUrl(url);
    }
    // Audio Previews
    else if (firstFile.type.startsWith('audio/')) {
      const url = URL.createObjectURL(firstFile);
      setAudioUrl(url);
    }
  };

  const addFiles = async (newFiles: File[]) => {
    const updatedFiles = tool.multiple ? [...files, ...newFiles] : [newFiles[0]];
    setFiles(updatedFiles);
    setSuccess(false);
    setDownloadLink(null);
    generatePreviews(updatedFiles);
  };

  const togglePageRemoval = (idx: number) => {
    const next = new Set(removedPages);
    if (next.has(idx)) next.delete(idx);
    else next.add(idx);
    setRemovedPages(next);
    const range = Array.from(next).map(i => i + 1).sort((a,b) => a-b).join(', ');
    setSplitRange(range);
  };

  const handleRotatePage = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const current = rotations[idx] || 0;
    setRotations({ ...rotations, [idx]: (current + 90) % 360 });
  };

  const handleProcess = async () => {
    setIsProcessing(true);
    setError(null);
    try {
      const res = await processFiles(tool.id, {
        files,
        textContent: editorRef.current?.innerText || "",
        splitRange,
        rotateAngle: rotations[0] || 0,
        rotations,
        removedPages: Array.from(removedPages),
        watermarkConfig,
        pageNumberPosition,
        password,
        compressionLevel
      });

      if (res.success && res.data) {
        setSuccess(true);
        const url = URL.createObjectURL(res.data);
        setDownloadLink({ url, name: res.filename || 'u2pdf_result', size: res.data.size });
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsProcessing(false);
    }
  };

  const reset = () => {
    setFiles([]);
    setPreviews([]);
    setRemovedPages(new Set());
    setRotations({});
    setSuccess(false);
    setDownloadLink(null);
    setImagePreviewUrl(null);
    setVideoUrl(null);
    setAudioUrl(null);
  };

  return (
    <div className="max-w-6xl mx-auto pb-20 px-4 animate-fade-in">
      <button onClick={onBack} className="mb-6 flex items-center gap-2 text-gray-500 hover:text-primary transition-colors font-bold bg-transparent border-none cursor-pointer">
        ← Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
        <div className="lg:col-span-4 space-y-6">
          <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 border border-white/40 dark:border-white/10 p-6 rounded-3xl shadow-xl">
            <div className="text-4xl mb-2">{tool.icon}</div>
            <h1 className="text-2xl font-black text-primary mb-1">{tool.title}</h1>
            <p className="text-sm text-gray-500 mb-6">{tool.desc}</p>

            {files.length === 0 ? (
              <div 
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => { e.preventDefault(); addFiles(Array.from(e.dataTransfer.files)); }}
                className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-8 text-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-all"
              >
                <div className="text-3xl mb-2">📁</div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Click or Drop File</p>
                <input type="file" hidden ref={fileInputRef} accept={tool.accept} multiple={tool.multiple} onChange={(e) => addFiles(Array.from(e.target.files || []))} />
              </div>
            ) : (
              <div className="space-y-4">
                {tool.id === 'split' && (
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-gray-400">Pages to Remove</label>
                    <input type="text" value={splitRange} onChange={(e) => setSplitRange(e.target.value)} placeholder="e.g. 1, 3-5" className="w-full p-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 outline-none focus:ring-2 ring-primary/20" />
                  </div>
                )}
                {tool.id === 'watermark' && (
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-black uppercase text-gray-400">Watermark Text</label>
                      <input type="text" value={watermarkConfig.text} onChange={(e) => setWatermarkConfig({...watermarkConfig, text: e.target.value})} className="w-full p-3 rounded-xl bg-white dark:bg-gray-900 border" />
                    </div>
                    <div>
                      <label className="text-xs font-black uppercase text-gray-400">Opacity ({Math.round(watermarkConfig.opacity * 100)}%)</label>
                      <input type="range" min="0" max="1" step="0.1" value={watermarkConfig.opacity} onChange={(e) => setWatermarkConfig({...watermarkConfig, opacity: parseFloat(e.target.value)})} className="w-full accent-primary" />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {['top-left', 'top-right', 'center', 'bottom-left', 'bottom-right'].map(pos => (
                        <button key={pos} onClick={() => setWatermarkConfig({...watermarkConfig, position: pos as any})} className={`p-2 text-[10px] rounded-lg border ${watermarkConfig.position === pos ? 'bg-primary text-white border-primary' : 'bg-transparent border-gray-200 text-gray-400'}`}>{pos.replace('-', ' ')}</button>
                      ))}
                    </div>
                  </div>
                )}
                {tool.id === 'page-num' && (
                  <div>
                    <label className="text-xs font-black uppercase text-gray-400">Position</label>
                    <div className="flex gap-2 mt-1">
                      {['top', 'bottom'].map(p => (
                        <button key={p} onClick={() => setPageNumberPosition(p as any)} className={`flex-1 p-2 rounded-lg border ${pageNumberPosition === p ? 'bg-primary text-white' : 'bg-transparent'}`}>{p}</button>
                      ))}
                    </div>
                  </div>
                )}
                {tool.id.includes('compress') && (
                   <div>
                    <label className="text-xs font-black uppercase text-gray-400">Compression Level ({compressionLevel}%)</label>
                    <input type="range" min="10" max="100" value={compressionLevel} onChange={(e) => setCompressionLevel(parseInt(e.target.value))} className="w-full accent-primary" />
                   </div>
                )}
                {tool.id === 'protect' && (
                  <div>
                    <label className="text-xs font-black uppercase text-gray-400">Set Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200" />
                  </div>
                )}

                {!success ? (
                  <button onClick={handleProcess} disabled={isProcessing} className="w-full py-4 bg-primary text-white rounded-2xl font-black shadow-lg shadow-primary/30 hover:-translate-y-1 transition-all disabled:bg-gray-400">
                    {isProcessing ? 'Processing...' : 'Apply & Download'}
                  </button>
                ) : (
                  <div className="space-y-3">
                    <a href={downloadLink?.url} download={downloadLink?.name} className="block w-full text-center py-4 bg-green-500 text-white rounded-2xl font-black shadow-lg">Download Result</a>
                    <button onClick={reset} className="w-full text-sm font-bold text-gray-500 underline bg-transparent border-none">Reset</button>
                  </div>
                )}
                {error && <p className="text-xs text-red-500 font-bold bg-red-50 p-3 rounded-xl">{error}</p>}
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="backdrop-blur-xl bg-white/40 dark:bg-gray-800/40 border border-white/20 dark:border-white/10 rounded-3xl p-6 h-full min-h-[500px] shadow-inner relative">
            <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Live Preview</h3>
            
            {files.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                <span className="text-8xl">🖼️</span>
              </div>
            )}

            {previews.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 overflow-y-auto max-h-[700px] p-2">
                {previews.map((src, i) => {
                  const isRemoved = removedPages.has(i);
                  const rotation = rotations[i] || 0;
                  return (
                    <div key={i} onClick={() => tool.id === 'split' && togglePageRemoval(i)} className={`relative group cursor-pointer transition-all duration-300 rounded-lg overflow-hidden border-2 shadow-sm ${isRemoved ? 'border-red-500 opacity-50' : 'border-transparent hover:border-primary'}`}>
                      {tool.id === 'watermark' && (
                        <div className={`absolute inset-0 flex pointer-events-none z-10 transition-opacity ${watermarkConfig.position === 'center' ? 'items-center justify-center' : watermarkConfig.position === 'top-left' ? 'items-start justify-start p-2' : watermarkConfig.position === 'top-right' ? 'items-start justify-end p-2' : watermarkConfig.position === 'bottom-left' ? 'items-end justify-start p-2' : 'items-end justify-end p-2'}`} style={{ opacity: watermarkConfig.opacity }}>
                          <span className="text-[10px] font-bold text-gray-400 bg-white/20 px-1 rounded rotate-[-45deg]">{watermarkConfig.text}</span>
                        </div>
                      )}
                      {tool.id === 'page-num' && (
                        <div className={`absolute left-0 right-0 text-center text-[10px] font-bold text-primary z-10 ${pageNumberPosition === 'top' ? 'top-1' : 'bottom-1'}`}>
                          {i + 1}
                        </div>
                      )}
                      <img src={src} alt={`Page ${i+1}`} className="w-full h-auto transition-transform" style={{ transform: `rotate(${rotation}deg)` }} />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-[10px] py-1 text-center opacity-0 group-hover:opacity-100 transition-opacity">Page {i + 1}</div>
                      {tool.id === 'rotate' && <button onClick={(e) => handleRotatePage(i, e)} className="absolute top-1 right-1 bg-primary text-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-all z-20">🔄</button>}
                      {isRemoved && <div className="absolute inset-0 bg-red-500/20 flex items-center justify-center z-20"><span className="text-3xl text-red-600 font-black">✕</span></div>}
                    </div>
                  );
                })}
              </div>
            )}

            {imagePreviewUrl && (
              <div className="flex flex-col items-center gap-4">
                <div className="relative group max-w-full">
                  <img src={imagePreviewUrl} alt="Preview" className="rounded-xl shadow-lg max-h-[500px]" />
                  {tool.id.includes('compress') && (
                    <div className="mt-4 flex gap-4 w-full">
                      <div className="flex-1 text-center bg-gray-100 p-2 rounded"><span className="text-[10px] block uppercase text-gray-400">Original</span><span className="font-bold">{(files[0].size / 1024).toFixed(1)} KB</span></div>
                      <div className="flex-1 text-center bg-primary/10 p-2 rounded"><span className="text-[10px] block uppercase text-primary">Est. Output</span><span className="font-bold">{(files[0].size * (compressionLevel/100) / 1024).toFixed(1)} KB</span></div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {videoUrl && (
              <div className="space-y-4">
                <video src={videoUrl} controls className="w-full rounded-2xl shadow-xl bg-black" />
                <div className="flex justify-between text-xs font-bold text-gray-500 px-2">
                  <span>{(files[0].size / (1024*1024)).toFixed(1)} MB</span>
                  <span className="text-primary uppercase">{files[0].type.split('/')[1]}</span>
                </div>
              </div>
            )}

            {audioUrl && (
              <div className="h-full flex flex-col items-center justify-center space-y-8">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-5xl animate-pulse">🎵</div>
                <audio src={audioUrl} controls className="w-full max-w-md" />
                <p className="text-sm font-bold text-gray-400">{files[0].name}</p>
              </div>
            )}

            {tool.id === 'text-to-pdf' && (
              <div ref={editorRef} contentEditable className="w-full h-[600px] p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-700 outline-none overflow-y-auto text-gray-800 dark:text-gray-100 shadow-inner leading-relaxed" title="Start typing your document here..." />
            )}
          </div>
        </div>
      </div>

      {/* SEO About Section */}
      <section className="mt-12 backdrop-blur-xl bg-white/60 dark:bg-gray-800/40 border border-white/40 dark:border-white/10 p-10 md:p-14 rounded-3xl shadow-lg animate-fade-in">
        <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: tool.about }} />
      </section>
    </div>
  );
};

export default ToolView;
