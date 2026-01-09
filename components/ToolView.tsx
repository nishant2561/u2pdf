
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Tool, DownloadLink } from '../types';
import { processFiles } from '../services/pdfService';

interface ToolViewProps {
  tool: Tool;
  onBack: () => void;
}

const ToolView: React.FC<ToolViewProps> = ({ tool, onBack }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [downloadLink, setDownloadLink] = useState<DownloadLink | null>(null);

  const [splitRange, setSplitRange] = useState("");
  const [rotateAngle, setRotateAngle] = useState(90);
  const [watermarkText, setWatermarkText] = useState("");
  const [password, setPassword] = useState("");
  const [compressionLevel, setCompressionLevel] = useState(50);

  // Editor State
  const [editorContent, setEditorContent] = useState("");
  const editorRef = useRef<HTMLDivElement>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      addFiles(Array.from(e.target.files));
    }
  };

  const addFiles = async (newFiles: File[]) => {
    if (tool.id === 'text-to-pdf') {
      const f = newFiles[0];
      if (f && f.name.endsWith('.txt')) {
        const text = await f.text();
        setEditorContent(text.replace(/\n/g, '<br>'));
        if (editorRef.current) editorRef.current.innerHTML = text.replace(/\n/g, '<br>');
      } else {
        alert("Please upload a .txt file.");
      }
      return;
    }

    if (!tool.multiple) {
      if (newFiles.length > 1 || files.length > 0) {
        alert("This tool only supports one file at a time.");
        setFiles([newFiles[0]]);
        return;
      }
    }
    setFiles(prev => [...prev, ...newFiles]);
    setSuccess(false);
    setDownloadLink(null);
    setError(null);
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files?.length) {
      addFiles(Array.from(e.dataTransfer.files));
    }
  }, [files, tool.multiple, tool.id]);

  const removeFile = (idx: number) => {
    setFiles(prev => prev.filter((_, i) => i !== idx));
  };

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getTotalSize = () => files.reduce((acc, f) => acc + f.size, 0);

  const execCommand = (command: string, value: string | undefined = undefined) => {
    document.execCommand(command, false, value);
    if (editorRef.current) setEditorContent(editorRef.current.innerHTML);
  };

  const handleProcess = async () => {
    setIsProcessing(true);
    setError(null);
    try {
      const finalContent = tool.id === 'text-to-pdf' ? (editorRef.current?.innerHTML || "") : "";
      
      const res = await processFiles(tool.id, {
        files,
        textContent: finalContent,
        splitRange,
        rotateAngle,
        watermarkText,
        password,
        compressionLevel
      });

      if (res.success && res.data) {
        setSuccess(true);
        const url = URL.createObjectURL(res.data);
        setDownloadLink({ 
            url, 
            name: res.filename || 'converted.file',
            size: res.data.size 
        });
      }
    } catch (err: any) {
      setError(err.message || "An unknown error occurred.");
    } finally {
      setIsProcessing(false);
    }
  };

  const reset = () => {
    setFiles([]);
    setSuccess(false);
    setDownloadLink(null);
    setError(null);
    setSplitRange("");
    setPassword("");
    setWatermarkText("");
    setEditorContent("");
    if (editorRef.current) editorRef.current.innerHTML = "";
  };

  const isTextToPdf = tool.id === 'text-to-pdf';

  return (
    <div className="max-w-4xl mx-auto pb-20 px-4 animate-fade-in">
      <button 
        onClick={onBack}
        className="mb-8 flex items-center gap-2 text-gray-500 hover:text-primary transition-colors font-semibold bg-transparent border-none cursor-pointer"
      >
        ← Back to Home
      </button>

      <div className="backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 border border-white/40 dark:border-white/10 p-8 md:p-12 rounded-3xl shadow-xl flex flex-col items-center text-center">
        <div className="text-6xl mb-4">{tool.icon}</div>
        <h1 className="text-3xl font-black text-primary mb-2">{tool.title}</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-lg">{tool.desc}</p>

        {!success && (
          <div className="w-full space-y-6">
            {isTextToPdf ? (
              <div className="w-full text-left space-y-4">
                {/* Editor Toolbar */}
                <div className="flex flex-wrap gap-2 p-2 bg-gray-100 dark:bg-gray-700/50 rounded-xl border border-gray-200 dark:border-gray-600">
                  <select 
                    onChange={(e) => execCommand('formatBlock', e.target.value)}
                    className="p-1 rounded bg-white dark:bg-gray-800 text-xs border border-gray-300 dark:border-gray-600"
                  >
                    <option value="P">Paragraph</option>
                    <option value="H1">Heading 1</option>
                    <option value="H2">Heading 2</option>
                  </select>
                  <button onClick={() => execCommand('bold')} className="p-1 px-2 rounded hover:bg-white dark:hover:bg-gray-700 font-bold border border-gray-300 dark:border-gray-600">B</button>
                  <button onClick={() => execCommand('italic')} className="p-1 px-2 rounded hover:bg-white dark:hover:bg-gray-700 italic border border-gray-300 dark:border-gray-600">I</button>
                  <button onClick={() => execCommand('justifyLeft')} className="p-1 px-2 rounded hover:bg-white dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600">Left</button>
                  <button onClick={() => execCommand('justifyCenter')} className="p-1 px-2 rounded hover:bg-white dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600">Center</button>
                  <button onClick={() => execCommand('justifyRight')} className="p-1 px-2 rounded hover:bg-white dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600">Right</button>
                  <button onClick={() => execCommand('insertUnorderedList')} className="p-1 px-2 rounded hover:bg-white dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600">UL</button>
                  <button onClick={() => execCommand('insertOrderedList')} className="p-1 px-2 rounded hover:bg-white dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600">OL</button>
                  <button onClick={() => execCommand('removeFormat')} className="p-1 px-2 rounded hover:bg-red-50 text-red-500 border border-red-200">Clear</button>
                  
                  <div className="flex-1"></div>
                  
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="p-1 px-3 bg-primary text-white text-xs font-bold rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    Upload .txt
                  </button>
                </div>

                {/* Editor Content Area */}
                {/* Fixed: removed invalid 'placeholder' attribute which is not supported on div elements by React's type definitions */}
                <div 
                  ref={editorRef}
                  contentEditable
                  onInput={(e) => setEditorContent(e.currentTarget.innerHTML)}
                  className="w-full min-h-[400px] p-6 bg-white dark:bg-gray-900/50 rounded-2xl border border-gray-200 dark:border-gray-700 outline-none focus:border-primary transition-colors overflow-y-auto text-gray-800 dark:text-gray-100 leading-relaxed shadow-inner"
                />
                
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4">
                  <p className="text-xs text-green-600 font-medium">
                    “Your privacy is protected! No data is transmitted or stored.”
                  </p>
                  <button 
                    onClick={handleProcess}
                    disabled={isProcessing || !editorContent.trim()}
                    className={`w-full md:w-auto px-10 py-4 rounded-full font-bold text-lg text-white shadow-lg transition-all duration-300 border-none cursor-pointer ${isProcessing || !editorContent.trim() ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-primary-dark hover:shadow-primary/50 hover:-translate-y-1'}`}
                  >
                    {isProcessing ? 'Processing...' : 'Convert to PDF'}
                  </button>
                </div>
                
                <input 
                  type="file" 
                  hidden 
                  ref={fileInputRef} 
                  accept=".txt" 
                  onChange={handleFileChange}
                />
              </div>
            ) : (
              /* Standard Drop Zone for other tools */
              <div 
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className="w-full border-3 border-dashed border-gray-300 dark:border-gray-600 hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/5 transition-all duration-300 rounded-2xl p-12 cursor-pointer bg-white/40 dark:bg-gray-700/40"
              >
                <span className="text-5xl block mb-4">📂</span>
                <p className="font-bold text-lg text-gray-700 dark:text-gray-200">Drag & Drop files here</p>
                <p className="text-sm text-gray-500">or Click to Select</p>
                <input 
                  type="file" 
                  hidden 
                  ref={fileInputRef} 
                  accept={tool.accept} 
                  multiple={tool.multiple}
                  onChange={handleFileChange}
                />
              </div>
            )}
          </div>
        )}

        {files.length > 0 && !success && !isTextToPdf && (
          <div className="w-full mt-6 space-y-3">
            {files.map((f, i) => (
              <div key={i} className="flex justify-between items-center bg-white/60 dark:bg-gray-700/60 p-4 rounded-xl border border-white/20">
                <div className="flex flex-col text-left">
                     <span className="text-sm font-medium truncate text-gray-700 dark:text-gray-200">{f.name}</span>
                     <span className="text-xs text-gray-500">{formatSize(f.size)}</span>
                </div>
                <button onClick={(e) => { e.stopPropagation(); removeFile(i); }} className="text-red-500 hover:bg-red-50 p-1 rounded-full px-2 bg-transparent border-none cursor-pointer">✕</button>
              </div>
            ))}
            <div className="text-right text-xs text-gray-500 mt-2">Total Input Size: {formatSize(getTotalSize())}</div>
          </div>
        )}

        {!success && files.length > 0 && !isTextToPdf && (
          <div className="w-full mt-6 space-y-4">
            {tool.id === 'split' && (
              <div className="text-left">
                <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300">Pages to Remove (e.g. 1, 3-5)</label>
                <input type="text" value={splitRange} onChange={(e) => setSplitRange(e.target.value)} placeholder="e.g. 1, 3-5" className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-900/50 outline-none focus:border-primary" />
              </div>
            )}
            {tool.id === 'rotate' && (
              <div className="text-left">
                <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300">Rotation Angle</label>
                <select value={rotateAngle} onChange={(e) => setRotateAngle(parseInt(e.target.value))} className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-900/50 outline-none focus:border-primary">
                  <option value="90">90° Clockwise</option>
                  <option value="180">180°</option>
                  <option value="270">270° Clockwise</option>
                </select>
              </div>
            )}
            {tool.id === 'watermark' && (
              <div className="text-left">
                 <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300">Watermark Text</label>
                 <input type="text" value={watermarkText} onChange={(e) => setWatermarkText(e.target.value)} placeholder="Confidential" className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-900/50 outline-none focus:border-primary" />
              </div>
            )}
            {tool.id === 'protect' && (
              <div className="text-left">
                 <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300">Set Password</label>
                 <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter secure password" className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-900/50 outline-none focus:border-primary" />
              </div>
            )}
            {['compress', 'compress-image', 'compress-video'].includes(tool.id) && (
              <div className="text-left">
                 <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300">Compression Level: {compressionLevel}%</label>
                 <div className="flex justify-between text-xs text-gray-500 mb-1"><span>High Compression (Low Quality)</span><span>Low Compression (High Quality)</span></div>
                 <input type="range" min="10" max="100" step="10" value={compressionLevel} onChange={(e) => setCompressionLevel(parseInt(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" />
              </div>
            )}
          </div>
        )}

        {!success && files.length > 0 && !isTextToPdf && (
          <button onClick={handleProcess} disabled={isProcessing} className={`mt-8 w-full max-w-sm py-4 rounded-full font-bold text-lg text-white shadow-lg transition-all duration-300 border-none cursor-pointer ${isProcessing ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-primary-dark hover:shadow-primary/50 hover:-translate-y-1'}`}>
            {isProcessing ? 'Processing...' : 'Process Files'}
          </button>
        )}

        {error && <div className="mt-6 text-red-500 font-medium bg-red-50 dark:bg-red-900/20 px-4 py-2 rounded-lg">{error}</div>}

        {success && downloadLink && (
          <div className="w-full mt-8 p-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl animate-fade-in">
             <div className="text-5xl mb-4">🎉</div>
             <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">Success!</h3>
             <p className="text-gray-600 dark:text-gray-300 mb-6">Your file has been processed successfully.</p>
             <a href={downloadLink.url} download={downloadLink.name} className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all hover:-translate-y-1">Download File</a>
             <button onClick={reset} className="block mx-auto mt-6 text-gray-500 underline hover:text-primary bg-transparent border-none cursor-pointer">Convert Another File</button>
          </div>
        )}
      </div>

      <div className="mt-16 backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 border border-white/40 dark:border-white/10 p-8 rounded-3xl shadow-lg">
        <h3 className="text-2xl font-bold text-primary mb-4">About this Tool</h3>
        <div className="text-gray-600 dark:text-gray-300 leading-relaxed prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: tool.about }} />
      </div>
    </div>
  );
};

export default ToolView;
