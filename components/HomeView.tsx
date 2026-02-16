
import React, { useState, useMemo } from 'react';
import { TOOLS } from '../constants';
import ToolCard from './ToolCard';
import { MainCategory, SubCategory } from '../types';

interface HomeViewProps {
  onSelectTool: (toolId: string) => void;
  searchQuery?: string;
}

const HomeView: React.FC<HomeViewProps> = ({ onSelectTool, searchQuery = "" }) => {
  const [activeMainCat, setActiveMainCat] = useState<MainCategory>('CONVERT');

  const mainCategories: MainCategory[] = ['CONVERT', 'COMPRESS'];
  const subCategories: SubCategory[] = ['PDF/DOC', 'IMAGE', 'VIDEO/AUDIO'];

  const filteredTools = useMemo(() => {
    let list = TOOLS;
    if (searchQuery) {
      list = list.filter(t => 
        t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        t.desc.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else {
      list = list.filter(t => t.mainCategory === activeMainCat);
    }
    return list;
  }, [activeMainCat, searchQuery]);

  return (
    <div className="pb-20 animate-fade-in">
      {!searchQuery && (
        <section className="text-center py-16 px-6">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-gray-800 dark:text-white">
            The Ultimate <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
              PDF Solution
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            Professional document conversion and optimization tools. 100% Free and Client-Side Secure.
          </p>
          
          <div className="flex justify-center gap-4 mb-12">
            {mainCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveMainCat(cat)}
                className={`px-10 py-4 rounded-2xl font-black text-xl transition-all duration-300 transform ${
                  activeMainCat === cat && !searchQuery
                    ? 'bg-primary text-white shadow-xl shadow-primary/30 -translate-y-1'
                    : 'bg-white/40 dark:bg-gray-800/40 text-gray-500 hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>
      )}

      {searchQuery && (
        <section className="max-w-7xl mx-auto px-6 pt-10 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Search Results for "{searchQuery}"
          </h2>
        </section>
      )}

      <section id="tools" className="max-w-7xl mx-auto px-6 space-y-16">
        {searchQuery ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[400px]">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} onClick={() => onSelectTool(tool.id)} />
            ))}
            {filteredTools.length === 0 && (
              <div className="col-span-full py-20 text-center">
                <span className="text-6xl block mb-4">🔍</span>
                <p className="text-xl text-gray-400 font-bold uppercase tracking-widest">No tool found</p>
              </div>
            )}
          </div>
        ) : (
          subCategories.map(subCat => {
            const toolsInSub = filteredTools.filter(t => t.subCategory === subCat);
            if (toolsInSub.length === 0) return null;

            return (
              <div key={subCat} className="space-y-6">
                <div className="flex items-center gap-4">
                  <h3 className="text-xl font-black text-primary uppercase tracking-widest">{subCat}</h3>
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {toolsInSub.map(tool => (
                    <ToolCard key={tool.id} tool={tool} onClick={() => onSelectTool(tool.id)} />
                  ))}
                </div>
              </div>
            );
          })
        )}
      </section>

      {!searchQuery && (
        <div className="max-w-5xl mx-auto mt-24 px-6 space-y-16">
          {/* Introduction Section */}
          <section className="backdrop-blur-xl bg-white/60 dark:bg-gray-800/40 border border-white/40 dark:border-white/10 p-10 md:p-14 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-6">Introduction: u2pdf – Your Professional SaaS for File Mastery</h2>
            <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed space-y-4">
              <p>In the modern digital era, the ability to manipulate, convert, and compress files with speed and security is a non-negotiable requirement for professionals, students, and businesses alike. <strong>u2pdf</strong> is a comprehensive online PDF tools platform engineered to provide a seamless, high-performance experience for managing your most critical documents. We offer a <strong>free file converter</strong> and <strong>secure document converter</strong> suite that operates with one primary goal: empowering users through technology that respects their privacy.</p>
              <p>Our platform stands as a complete file management ecosystem. Unlike traditional converters that require slow uploads to a centralized server, u2pdf leverages cutting-edge browser technologies like WebAssembly and client-side JavaScript libraries to process your files directly on your machine. Whether you need to <strong>compress PDF online</strong> or utilize our <strong>image converter free</strong> tool, you are using an application that combines the reliability of a desktop software with the convenience of a web app. Our suite spans across document conversion, image vectorization, video optimization, and high-fidelity audio compression.</p>
              <p>Reliability, speed, and security are the three pillars of the u2pdf experience. By removing the "middle-man" server, we ensure that your files are processed at the speed of your local hardware, avoiding the bottlenecks of internet upload speeds. Our interface is designed for maximum clarity, allowing you to drag, drop, and convert with zero learning curve. From legal professionals handling sensitive contracts to creatives optimizing their portfolios, u2pdf is the trusted partner for digital productivity.</p>
            </div>
          </section>

          {/* Tools Overview Section */}
          <section className="backdrop-blur-xl bg-white/60 dark:bg-gray-800/40 border border-white/40 dark:border-white/10 p-10 md:p-14 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-6">Comprehensive Tools Overview: Conversion & Compression Excellence</h2>
            <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed space-y-6">
              <p>The u2pdf platform is bifurcated into two powerful main categories: <strong>CONVERT</strong> and <strong>COMPRESS</strong>. Each category is further subdivided into specialized modules for PDF/DOC, IMAGE, and VIDEO/AUDIO, ensuring that no matter the file type, we have a tailored solution ready for you.</p>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 underline decoration-primary/30">Document Conversion (PDF/DOC)</h3>
                <p>Our document conversion tools are the standard-bearer for fidelity. Convert <strong>Word to PDF</strong>, <strong>PowerPoint to PDF</strong>, or <strong>Text to PDF</strong> while preserving 100% of your original formatting. These tools are indispensable for students submitting academic papers, legal clerks preparing court documents, and businesses finalizing professional proposals. We also offer advanced editing features like PDF merging, splitting, and watermarking to help you craft the perfect document every time.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 underline decoration-primary/30">Image Conversion & Vectorization</h3>
                <p>Digital imagery comes in dozens of formats, many of which are incompatible with standard web usage. u2pdf provides a robust <strong>image converter free</strong> service that handles everything from high-resolution HEIC photos to modern WebP assets. Need a scalable logo? Our <strong>PNG to SVG</strong> vectorization tool turns raster graphics into mathematically defined paths. For developers and designers, these tools save hours of manual re-creation and ensure assets are always optimized for the task at hand.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 underline decoration-primary/30">Multimedia Optimization (Video/Audio)</h3>
                <p>Videos and audio files are often the largest obstacles in digital sharing. Our <strong>video compression tool</strong> and audio optimization suite allow you to downsize bulky MP4, MOV, or WAV files without sacrificing audible or visible quality. This is a game-changer for sharing presentations via email or uploading content to platforms with strict size limits. Extract audio from videos instantly or re-encode your media for universal compatibility with a single click.</p>
              </div>

              <div className="bg-primary/5 p-6 rounded-2xl border border-primary/20 italic">
                Practical use cases abound: A marketing manager can compress a high-res PDF brochure for a quick email blast; a teacher can merge multiple student submissions into one gradeable file; a photographer can batch convert HEIC photos to JPG for a client gallery. u2pdf is designed for real-world scenarios where time is of the essence.
              </div>
            </div>
          </section>

          {/* Security & Privacy Section */}
          <section className="backdrop-blur-xl bg-white/60 dark:bg-gray-800/40 border border-white/40 dark:border-white/10 p-10 md:p-14 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-6">Security & Privacy: Your Data Stays Yours</h2>
            <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed space-y-4">
              <p>At u2pdf, we believe that security is a fundamental human right in the digital space. Our <strong>privacy-first design</strong> ensures that your sensitive data is handled with the highest level of care. We utilize industry-standard <strong>HTTPS encryption</strong> for all site traffic, creating a secure tunnel for your tools to be delivered. However, the most critical part of our security model is what we <em>don't</em> do.</p>
              <p><strong>We do not store your files.</strong> Because every conversion and compression happens locally in your browser's memory, we have no "server storage" where your data could be leaked or stolen. We don't have a "cloud" that caches your files. As soon as you close your browser tab, all temporary file data is automatically purged from your RAM. This "Zero-Knowledge" approach means u2pdf is inherently safer than any service that requires you to upload your files to their infrastructure.</p>
              <p>Our commitment to security is audited through our transparent client-side code. You can verify our processing by checking your network tab—you will see that during file processing, no data is sent to an external server. We provide a <strong>secure document converter</strong> that is ideal for handling financial records, medical documents, and proprietary business information with absolute peace of mind.</p>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default HomeView;
