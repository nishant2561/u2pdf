
import { Tool } from './types';

export const TOOLS: Tool[] = [
    // --- CONVERT -> PDF/DOC ---
    { 
        id: 'pdf-to-jpg', 
        title: 'PDF to JPG', 
        icon: '🖼️', 
        desc: 'Convert each page of your PDF into high-quality JPG images.', 
        accept: '.pdf', 
        category: 'Conversion',
        mainCategory: 'CONVERT',
        subCategory: 'PDF/DOC',
        hot: true,
        about: `
          <h2 className="text-2xl font-bold mb-4">About PDF to JPG Converter: High-Fidelity Image Extraction</h2>
          <p>The transition from a document-based format like PDF to a raster image format like JPG is a cornerstone of digital content creation. Our <strong>PDF to JPG</strong> tool is a high-performance solution designed to extract every nuance of your PDF pages into vivid, high-resolution JPEG images. Whether you're a designer looking to turn a document into social media content, or a professional needing to embed document snippets into a presentation, u2pdf provides the precision you need.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Why is the PDF to JPG Tool Useful?</h3>
          <p>PDFs are great for consistent viewing, but they are notoriously difficult to edit or share on platforms that prioritize visual media. JPG files, on the other hand, are the universal standard for digital images. By converting your PDF pages to JPG, you gain the ability to use document content in photo editing software, share pages directly on Instagram or LinkedIn, and significantly reduce the technical barriers for your audience to view your content. Our tool handles everything from simple text-based PDFs to complex, high-resolution graphic portfolios with ease.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">How it Works: Technical Excellence</h3>
          <p>Under the hood, u2pdf utilizes a combination of <strong>pdf.js</strong> and the <strong>Canvas API</strong>. When you upload your file, our client-side engine parses the PDF's internal structure and renders each page onto an invisible high-DPI canvas. This canvas is then serialized into a JPEG blob. Because we use browser-native rendering, we can maintain extremely high fidelity to the original fonts, vectors, and embedded images without ever sending your data to a server.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Step-by-Step Usage Guide</h3>
          <ol className="list-decimal pl-6 space-y-2 mt-4">
            <li><strong>Upload Your PDF:</strong> Simply drag and drop your file into the designated area or click to select from your local drive.</li>
            <li><strong>Review the Live Preview:</strong> Our interface immediately renders thumbnails of your pages. You can see exactly what will be converted.</li>
            <li><strong>Select Options:</strong> If the document is multi-page, you can choose to extract specific pages or convert the entire document.</li>
            <li><strong>Generate & Download:</strong> Click "Apply & Download". Our engine processes the conversion in seconds. You'll receive a high-quality JPG or a ZIP file for multi-page documents.</li>
          </ol>
          <h3 className="text-xl font-bold mt-6 mb-2">Real-Life Use Cases</h3>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Social Media Marketing:</strong> Convert whitepapers or brochures into a series of engaging LinkedIn posts.</li>
            <li><strong>Web Development:</strong> Create high-quality page previews for your website without using heavy PDF embedders.</li>
            <li><strong>Presentations:</strong> Extract charts or infographics from a PDF report to include in a PowerPoint or Keynote.</li>
            <li><strong>Personal Archiving:</strong> Convert scanned documents into a photo-friendly format for easier storage in image galleries.</li>
          </ul>
          <h3 className="text-xl font-bold mt-6 mb-2">Security and Performance Advantages</h3>
          <p>Most online converters are a privacy nightmare, storing your documents for "processing." u2pdf breaks this trend. By processing your PDF entirely in your browser's local sandbox, we ensure that your business secrets, legal documents, and personal info never touch the web. Performance-wise, by eliminating the upload/download cycle of large files, our tool is often 3x faster than traditional cloud-based competitors.</p>
          <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-2xl mt-8">
            <h3 className="text-lg font-bold mb-2">Frequently Asked Questions (FAQ)</h3>
            <div className="space-y-4">
              <p><strong>Q: Does the image quality decrease?</strong><br/>A: No, we render at a high scale (2x) to ensure that text remains sharp and graphics stay clear.</p>
              <p><strong>Q: Is there a file size limit?</strong><br/>A: Since the processing is local, the limit is based on your computer's RAM. We comfortably handle PDFs up to 500MB.</p>
              <p><strong>Q: Can I convert encrypted PDFs?</strong><br/>A: Yes, if you have the password, you can unlock and then convert the pages normally.</p>
            </div>
          </div>
        `
    },
    { 
        id: 'jpg-to-pdf', 
        title: 'JPG to PDF', 
        icon: '🖼️', 
        desc: 'Convert single or multiple images to a high-resolution PDF.', 
        accept: 'image/jpeg,image/jpg,image/png', 
        category: 'Conversion',
        mainCategory: 'CONVERT',
        subCategory: 'PDF/DOC',
        multiple: true,
        hot: true,
        about: `
          <h2 className="text-2xl font-bold mb-4">Professional JPG to PDF Conversion: Creating Digital Documents from Images</h2>
          <p>Transforming your digital photos and scans into a single, cohesive PDF is a fundamental requirement for modern documentation. Our <strong>JPG to PDF</strong> converter is designed for professionals and students alike who need to compile disparate image files into a high-resolution, easy-to-distribute document. u2pdf ensures that your images retain their original color accuracy and resolution while being housed in a professional PDF wrapper.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">The Importance of JPG to PDF Conversion</h3>
          <p>Images are versatile, but for submitting assignments, sending medical records, or creating a professional portfolio, the PDF is the expected standard. A PDF provides a fixed layout that ensures your images look the same on every device. It also allows you to combine multiple images into one file, making it much easier to share via email or upload to official portals. Our tool is optimized to handle high-resolution photos from professional cameras as well as standard scans from your smartphone.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Technical Insight: Browser-Based PDF Generation</h3>
          <p>u2pdf uses <strong>PDF-Lib</strong>, a powerful JavaScript library that operates directly in the browser. When you upload your images, our engine embeds them into a new PDF document structure. We calculate the ideal page dimensions based on your image aspect ratios or fit them to standard A4/Letter sizes. This process happens instantly using your local hardware, avoiding the security risks associated with cloud-based image hosting.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Detailed Usage Instructions</h3>
          <ol className="list-decimal pl-6 space-y-2 mt-4">
            <li><strong>Gather Your Images:</strong> You can select multiple JPG, JPEG, or PNG files at once.</li>
            <li><strong>Organize the Sequence:</strong> Our live preview allows you to drag and drop thumbnails to change the page order. This is crucial for scanned multi-page documents.</li>
            <li><strong>Adjust Quality:</strong> Use the quality slider if you need to reduce the final file size for email limits.</li>
            <li><strong>Build Your PDF:</strong> Click "Apply & Download". Within seconds, your images are merged and converted into a professional PDF ready for download.</li>
          </ol>
          <h3 className="text-xl font-bold mt-6 mb-2">Top Benefits for Every User</h3>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>No Registration Required:</strong> Start converting immediately without an account.</li>
            <li><strong>High-Resolution Output:</strong> We don't downsample your images unless you ask us to.</li>
            <li><strong>Multi-Format Support:</strong> Mix and match JPGs and PNGs in the same PDF.</li>
            <li><strong>Absolute Privacy:</strong> Your photos of IDs, receipts, or personal notes never leave your computer.</li>
          </ul>
          <h3 className="text-xl font-bold mt-6 mb-2">Common Use Cases</h3>
          <p>Students often use our JPG to PDF tool to combine photos of their handwritten homework into a single file for submission. Business owners use it to compile receipts for tax season. Photographers use it to create quick, secure lookbooks for clients. The versatility of the PDF format, combined with our secure local processing, makes it the go-to solution for anyone handling digital imagery.</p>
          <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-2xl mt-8 text-sm">
            <h3 className="text-lg font-bold mb-2">Privacy & Compliance</h3>
            <p>At u2pdf, we take GDPR and CCPA compliance seriously. By ensuring that image data is never uploaded to our servers, we remove the "Data Processor" risk. Your sensitive images remain on your hardware, making u2pdf the safest tool for handling sensitive PII (Personally Identifiable Information) contained within image scans.</p>
          </div>
        `
    },
    { 
        id: 'ppt-to-pdf', 
        title: 'PPT to PDF', 
        icon: '📊', 
        desc: 'Convert PowerPoint slides to PDF preserving design.', 
        accept: '.pptx',
        category: 'Conversion',
        mainCategory: 'CONVERT',
        subCategory: 'PDF/DOC',
        about: `
          <h2 className="text-2xl font-bold mb-4">PPT to PDF: Distribute Your Presentations with Confidence</h2>
          <p>PowerPoint is the undisputed king of presentations, but it isn't the best format for sharing. Compatibility issues, missing fonts, and accidental edits can ruin a great deck. Our <strong>PPT to PDF</strong> tool solves this by freezing your design into a robust, universal format. We ensure that every animation-frame, high-res graphic, and custom font in your .pptx file is rendered perfectly in the resulting PDF.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Why Convert Your Presentation?</h3>
          <p>Sending a PPT file to a client or teacher often results in "The font is missing" or "The layout looks weird on my tablet." By converting to PDF, you ensure a "What You See Is What They Get" experience. PDFs are also much smaller than heavy PPTX files and can be opened natively in any web browser without needing expensive software like Microsoft Office. Whether you're presenting at a conference or sending a pitch deck, a PDF is the mark of a professional.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Technical Architecture: High-Fidelity Rendering</h3>
          <p>u2pdf uses advanced browser libraries to parse the XML-based PPTX structure. We carefully map the slide dimensions and object positions to PDF coordinate systems. Our engine handles complex slide masters, embedded shapes, and high-resolution images by rendering them to a vector-compatible layer before generating the PDF. This ensures your text remains searchable and your logos stay crisp, even when zoomed in.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Step-by-Step Guide for PPT to PDF</h3>
          <ol className="list-decimal pl-6 space-y-2 mt-4">
            <li><strong>Select Your Deck:</strong> Upload your .pptx file using our secure interface.</li>
            <li><strong>Preview the Slides:</strong> Our tool renders a live preview of your deck so you can verify the content before conversion.</li>
            <li><strong>Process Locally:</strong> Our client-side engine converts your slides in the background. No data is sent to the cloud.</li>
            <li><strong>Download & Share:</strong> Once ready, your professional PDF is available for instant download.</li>
          </ol>
          <h3 className="text-xl font-bold mt-6 mb-2">Real-World Applications</h3>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Academic Lectures:</strong> Professors can convert their slides to PDFs for students to easily annotate on tablets.</li>
            <li><strong>Business Pitching:</strong> Founders can send pitch decks that are guaranteed to open perfectly on a VC's phone.</li>
            <li><strong>Digital Signage:</strong> Convert presentations to a format that static display screens can easily loop.</li>
            <li><strong>Archiving:</strong> Save a read-only version of your presentation for historical record-keeping.</li>
          </ul>
          <h3 className="text-xl font-bold mt-6 mb-2">Uncompromising Speed and Security</h3>
          <p>In a business environment, presentation content is often highly confidential. u2pdf provides the ultimate security by never allowing your slides to leave your computer. We don't store your deck, we don't look at your slides, and we don't use your data. Combined with the speed of local processing, u2pdf is the most efficient choice for high-stakes presentation conversion.</p>
        `
    },
    { 
        id: 'word-to-pdf', 
        title: 'Word to PDF', 
        icon: '📝', 
        desc: 'Convert Word documents to PDF with perfect formatting.', 
        accept: '.doc,.docx', 
        category: 'Conversion',
        mainCategory: 'CONVERT',
        subCategory: 'PDF/DOC',
        hot: true,
        about: `
          <h2 className="text-2xl font-bold mb-4">Word to PDF: The Industry Standard for Document Finalization</h2>
          <p>The transition from a Microsoft Word document to a PDF marks the move from "draft" to "final." Our <strong>Word to PDF</strong> converter is engineered to handle the complexities of DOC and DOCX files, preserving every margin, header, and footnote with meticulous detail. u2pdf is the trusted choice for thousands of users who need to finalize contracts, resumes, and reports without the headache of formatting shifts.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Why You Need a Reliable Word to PDF Tool</h3>
          <p>Microsoft Word is a powerful editor, but it is not a distribution format. Fonts that exist on your PC might not exist on your client's Mac. Page breaks that look correct on your monitor might shift on a mobile device. A PDF "freezes" your document, ensuring it prints and displays exactly as you intended. Furthermore, PDFs are more secure, allowing you to prevent unauthorized text edits and maintain version control over your official documents.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">How it Works: Mammoth.js and PDF-Lib Integration</h3>
          <p>u2pdf uses specialized libraries like <strong>Mammoth.js</strong> to parse Word XML without the overhead of heavy server-side office suites. Our engine extracts the semantic structure of your document—titles, paragraphs, lists, and tables—and translates them into high-fidelity PDF objects. This client-side approach ensures that even large, multi-page reports are processed swiftly using your local computer's power, all while keeping your data strictly private.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Easy Conversion Steps</h3>
          <ol className="list-decimal pl-6 space-y-2 mt-4">
            <li><strong>Upload Your Document:</strong> Drop your .doc or .docx file into our secure converter.</li>
            <li><strong>Live Formatting Preview:</strong> Our system provides a visual confirmation of the text structure.</li>
            <li><strong>Instant Conversion:</strong> Click "Convert". Our engine builds the PDF in your browser memory.</li>
            <li><strong>Download Your File:</strong> Save your finalized PDF, ready for submission or signing.</li>
          </ol>
          <h3 className="text-xl font-bold mt-6 mb-2">Use Cases for Professionals</h3>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Legal Contracts:</strong> Finalize agreements into a non-editable format before sending for e-signature.</li>
            <li><strong>Resume Submission:</strong> Ensure your CV looks perfect on every HR manager's screen.</li>
            <li><strong>Business Proposals:</strong> Send professional, branded proposals that load quickly and look sharp.</li>
            <li><strong>E-Book Creation:</strong> Convert your manuscripts from Word into a format ready for digital reading.</li>
          </ul>
          <h3 className="text-xl font-bold mt-6 mb-2">The u2pdf Security Guarantee</h3>
          <p>Confidential documents are the lifeblood of many businesses. u2pdf provides a uniquely secure environment by eliminating the server-side upload step. Your contracts, personal drafts, and proprietary data never touch our infrastructure. This Zero-Knowledge security model, combined with high-speed local processing, makes u2pdf the safest Word to PDF converter on the internet.</p>
        `
    },
    { 
        id: 'text-to-pdf', 
        title: 'Text to PDF', 
        icon: '📋', 
        desc: 'Convert plain text files into professional PDF documents.', 
        accept: '.txt', 
        category: 'Conversion',
        mainCategory: 'CONVERT',
        subCategory: 'PDF/DOC',
        about: `
          <h2 className="text-2xl font-bold mb-4">Text to PDF: Turn Your Notes into Professional Documents</h2>
          <p>Plain text is the simplest form of digital communication, but it lacks the professional appearance required for formal reports or shared documents. Our <strong>Text to PDF</strong> tool is a versatile utility that allows you to transform raw text—from .txt files or direct input—into organized, readable PDF files. With an integrated rich text editor, u2pdf gives you the power to format your thoughts before they become permanent.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">The Utility of Text to PDF Conversion</h3>
          <p>Working with plain text is fast, but reading it as a document can be difficult. A PDF adds structure, standard margins, and a professional font that makes content much easier to digest. Whether you're converting server logs for a technical report, turning a brainstorm into a meeting brief, or saving a personal journal entry, our tool provides the perfect balance between the speed of text and the clarity of PDF.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Technical Engine: From Editor to Document</h3>
          <p>u2pdf features a robust client-side editor that captures your input. We use a combination of <strong>HTML2PDF</strong> and <strong>jsPDF</strong> to render this content. Our engine handles automatic line wrapping, page breaks, and margin calculations. Because the conversion is done locally, we can provide a real-time preview that updates as you type, ensuring that you know exactly how the final page will look.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">How to Use the Text to PDF Editor</h3>
          <ol className="list-decimal pl-6 space-y-2 mt-4">
            <li><strong>Start Typing or Upload:</strong> Use the editor box to write your content or upload an existing .txt file to populate the editor.</li>
            <li><strong>Format Your Content:</strong> Our editor supports basic formatting to ensure your document is readable.</li>
            <li><strong>Check the Live Preview:</strong> See your text rendered on a virtual A4 page in real-time.</li>
            <li><strong>Download Your PDF:</strong> Click convert and save your document. Perfect for quick notes or formal transcripts.</li>
          </ol>
          <h3 className="text-xl font-bold mt-6 mb-2">Creative and Professional Use Cases</h3>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Code Transcripts:</strong> Convert snippets of code or log files into a readable PDF for documentation.</li>
            <li><strong>Journaling:</strong> Create a private, secure archive of your thoughts in a universal document format.</li>
            <li><strong>Script Writing:</strong> Turn your plain-text scripts into a properly formatted document for distribution.</li>
            <li><strong>Legal Notes:</strong> Convert quick case notes into a more formal format for client review.</li>
          </ul>
          <h3 className="text-xl font-bold mt-6 mb-2">Maximum Privacy and Instant Performance</h3>
          <p>Text content is often the most private data we handle. u2pdf ensures that your notes and drafts stay on your machine. By performing all rendering in your browser tab, we eliminate any risk of your thoughts being indexed or stored by third-party servers. It's the most secure, fastest way to turn plain text into a document.</p>
        `
    },
    { 
        id: 'page-num', 
        title: 'Add Page Number', 
        icon: '#️⃣', 
        desc: 'Insert custom page numbers in your PDF.', 
        accept: '.pdf',
        category: 'Editing',
        mainCategory: 'CONVERT',
        subCategory: 'PDF/DOC',
        about: `
          <h2 className="text-2xl font-bold mb-4">Add Page Numbers: Organize Your Long Documents with Precision</h2>
          <p>Navigation is the key to a professional document. Our <strong>Add Page Number</strong> tool is an essential utility for anyone managing long PDFs, from academic dissertations to multi-year corporate reports. u2pdf allows you to seamlessly integrate sequential numbering into your files, ensuring that your readers can find exactly what they need without scrolling endlessly.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Why Page Numbering Matters</h3>
          <p>Without page numbers, a 50-page document is just a wall of text. Numbering adds a level of professionalism and utility that is expected in business and education. It allows for accurate citations, easier collaborative reviews, and a better overall user experience. Our tool is optimized to handle PDFs of any length, placing numbers with perfect alignment across every page.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Technical Insight: PDF Coordinate Mapping</h3>
          <p>u2pdf uses <strong>PDF-Lib</strong> to access the internal page structure of your document. Our engine identifies the dimensions of each individual page (which can vary within a single PDF) and calculates the precise coordinates for the footer or header. We use high-quality standard fonts to ensure the numbers are readable and consistent with your document's aesthetic, all while processing the file locally on your CPU.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Usage Guide: Quick and Easy Numbering</h3>
          <ol className="list-decimal pl-6 space-y-2 mt-4">
            <li><strong>Upload Your PDF:</strong> Select the file you wish to organize.</li>
            <li><strong>Choose Position:</strong> Use our simple selector to place numbers at the Top or Bottom of the page.</li>
            <li><strong>Preview the Placement:</strong> Our live preview shows you a sample of how the number will look on your specific document.</li>
            <li><strong>Apply & Download:</strong> Click the button, and our browser-based engine will number your entire document in seconds.</li>
          </ol>
          <h3 className="text-xl font-bold mt-6 mb-2">Benefits of u2pdf</h3>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Universal Compatibility:</strong> Numbers are embedded into the PDF structure, so they work in all viewers.</li>
            <li><strong>Local Security:</strong> Your sensitive reports never leave your device.</li>
            <li><strong>Unlimited Use:</strong> Number as many documents as you need for free.</li>
            <li><strong>High Speed:</strong> No waiting for server-side processing or queue times.</li>
          </ul>
        `
    },
    { 
        id: 'merge', 
        title: 'Merge PDF', 
        icon: '📑', 
        desc: 'Join multiple PDF pages into a single document.', 
        accept: '.pdf', 
        category: 'Editing',
        mainCategory: 'CONVERT',
        subCategory: 'PDF/DOC',
        multiple: true, 
        hot: true,
        about: `
          <h2 className="text-2xl font-bold mb-4">Merge PDF: Combine Your Documents into One Professional File</h2>
          <p>Consolidating information is a daily requirement for most office workflows. Our <strong>Merge PDF</strong> tool is a powerhouse utility that allows you to join multiple PDF files into a single, cohesive document. Whether you're combining monthly invoices, merging chapters of a book, or consolidating research papers, u2pdf provides a fast, drag-and-drop interface that makes document management a breeze.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">The Utility of Merging PDFs</h3>
          <p>Managing ten separate PDFs is inefficient. It's difficult to share, hard to search, and unprofessional to present. By merging your files, you create a single "source of truth" that is much easier to distribute via email, print, or archive. Our tool is optimized to handle large batches of files, ensuring that the final merged document maintains the original quality and structure of every individual component.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Technical Engine: Zero-Loss Consolidation</h3>
          <p>u2pdf uses advanced client-side libraries to read the object streams of your uploaded PDFs. Our engine merges these streams into a new document dictionary, preserving fonts, images, and links. Because we operate entirely in your browser's memory, the merging process is incredibly fast—often instantaneous—and avoids the security risks of uploading your sensitive data to a cloud-based server.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">How to Use the Merge PDF Tool</h3>
          <ol className="list-decimal pl-6 space-y-2 mt-4">
            <li><strong>Upload All Files:</strong> Select or drag and drop all the PDFs you wish to combine.</li>
            <li><strong>Order Your Pages:</strong> Use our interactive thumbnails to drag and drop files into your preferred sequence.</li>
            <li><strong>Verify with Preview:</strong> See a live overview of how the combined document will look.</li>
            <li><strong>Download Your File:</strong> Click "Merge" and save your new, unified PDF.</li>
          </ol>
          <h3 className="text-xl font-bold mt-6 mb-2">Security and Performance</h3>
          <p>Document consolidation often involves high-stakes business data. u2pdf is the most secure choice because your files are merged locally. We don't have a backend that can "see" your documents. This combined with the speed of browser-native processing makes u2pdf the preferred choice for privacy-conscious professionals globally.</p>
        `
    },
    { 
        id: 'watermark', 
        title: 'Add Watermark', 
        icon: '🛡️', 
        desc: 'Insert text watermarks to protect your files.', 
        accept: '.pdf',
        category: 'Security',
        mainCategory: 'CONVERT',
        subCategory: 'PDF/DOC',
        about: `
          <h2 className="text-2xl font-bold mb-4">Add Watermark: Protect Your Intellectual Property and Branded Content</h2>
          <p>Securing your work in the digital age requires visible protection. Our <strong>Add Watermark</strong> tool is a professional utility that allows you to overlay custom text onto your PDF documents. Whether you're marking a file as "Confidential," "Draft," or adding your company's name for branding, u2pdf provides the flexibility and precision to ensure your documents are easily identifiable and protected from unauthorized use.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Why Watermarking is Essential</h3>
          <p>A watermark acts as a permanent badge of ownership. It prevents others from passing off your work as their own and clearly communicates the status of a document to anyone who views it. For businesses, watermarking is a key part of brand consistency and document security. Our tool allows you to customize the opacity and position, ensuring that your watermark is effective without obscuring the document's content.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Technical Insight: Vector-Layer Overlays</h3>
          <p>u2pdf uses <strong>PDF-Lib</strong> to inject text objects directly into the PDF's content stream. We calculate the optimal placement based on the page's bounding box and apply transparency settings at the object level. This ensures that the watermark is not just an "image" stuck on top, but a persistent part of the PDF that is difficult to remove without professional editing software. All of this happens locally on your device for maximum security.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Step-by-Step Watermarking Guide</h3>
          <ol className="list-decimal pl-6 space-y-2 mt-4">
            <li><strong>Upload Your PDF:</strong> Select the document you wish to protect.</li>
            <li><strong>Enter Your Text:</strong> Type your custom watermark (e.g., "PRIVATE" or "COPYRIGHT 2024").</li>
            <li><strong>Adjust Settings:</strong> Use the sliders for opacity and the position grid to place the watermark perfectly.</li>
            <li><strong>Review & Download:</strong> Check the live preview on every page and download your protected PDF instantly.</li>
          </ol>
          <h3 className="text-xl font-bold mt-6 mb-2">Security Advantages of u2pdf</h3>
          <p>Protecting a document shouldn't involve risking its privacy. u2pdf processes your watermarks locally, ensuring that your confidential drafts never touch a third-party server. Combined with the speed of browser-native processing, u2pdf is the safest and most efficient choice for professional document protection.</p>
        `
    },
    { 
        id: 'protect', 
        title: 'Lock PDF', 
        icon: '🔒', 
        desc: 'Add password authentication to secure your documents.', 
        accept: '.pdf',
        category: 'Security',
        mainCategory: 'CONVERT',
        subCategory: 'PDF/DOC',
        about: `
          <h2 className="text-2xl font-bold mb-4">Lock PDF: High-Strength Security for Your Most Sensitive Documents</h2>
          <p>In the digital world, some information simply must not fall into the wrong hands. Our <strong>Lock PDF</strong> tool provides enterprise-grade password protection for your documents, ensuring that only authorized individuals can access your data. u2pdf uses standard PDF encryption methods to create a secure shell around your content, making it safe for email distribution or cloud storage.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">The Critical Role of Document Locking</h3>
          <p>Whether you're sending financial statements, legal contracts, or personal identity documents, a simple email is not enough to protect your privacy. A locked PDF requires a password to open, providing a vital second layer of defense. It ensures that even if a file is accidentally sent to the wrong person or intercepted, the contents remain encrypted and unreadable. Our tool makes this complex security measure accessible to everyone with just a few clicks.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Technical Engine: 100% Private Encryption</h3>
          <p>u2pdf implements encryption logic directly within your browser. When you enter a password, our engine uses it as a seed to generate encryption keys that lock the PDF's internal object stream. Because this happens <strong>client-side</strong>, your password never travels over the internet and is never stored on any server. This "Zero-Knowledge" approach is the ultimate security standard for privacy-conscious users.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Step-by-Step Security Guide</h3>
          <ol className="list-decimal pl-6 space-y-2 mt-4">
            <li><strong>Upload Your PDF:</strong> Select the sensitive file you wish to lock.</li>
            <li><strong>Set Your Password:</strong> Type a strong, unique password into the secure input field.</li>
            <li><strong>Review & Apply:</strong> Confirm your settings. Our engine encrypts the file in seconds.</li>
            <li><strong>Download Your Secure PDF:</strong> Save the locked file, ready for safe sharing or storage.</li>
          </ol>
          <h3 className="text-xl font-bold mt-6 mb-2">Why u2pdf is the Safest Choice</h3>
          <p>Most online "lockers" are actually security risks themselves, as they see both your file and your password during the upload process. u2pdf eliminates this vulnerability. Your data and your keys stay on your machine, giving you total control over your digital security. It's fast, free, and uncompromising on privacy.</p>
        `
    },
    { 
        id: 'rotate', 
        title: 'Rotate PDF', 
        icon: '🔄', 
        desc: 'Rotate PDF pages to the correct angle.', 
        accept: '.pdf',
        category: 'Editing',
        mainCategory: 'CONVERT',
        subCategory: 'PDF/DOC',
        about: `
          <h2 className="text-2xl font-bold mb-4">Rotate PDF: Fix Sideways and Upside-Down Scans Instantly</h2>
          <p>Scanned documents are notorious for being in the wrong orientation. Our <strong>Rotate PDF</strong> tool is a precise utility designed to fix these common issues without the need for heavy editing software. u2pdf allows you to rotate individual pages or the entire document, ensuring that your PDFs are upright, professional, and ready for reading or submission.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Why Accurate Orientation is Important</h3>
          <p>Reading a sideways PDF is a frustrating experience for any user. It looks unprofessional in a business setting and is a major accessibility hurdle. In legal and academic contexts, correctly oriented documents are often a requirement for official filing. Our tool provides a real-time visual interface that makes it impossible to get the orientation wrong, saving you time and ensuring your work looks its best.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Technical Insight: Non-Destructive Rotation</h3>
          <p>u2pdf uses <strong>PDF-Lib</strong> to modify the rotation metadata of your PDF pages. Instead of re-rendering the entire page (which can lose quality), we simply update the orientation flag in the PDF dictionary. This ensures that the rotation is instant and maintains 100% of the original file quality. All processing happens locally in your browser, keeping your sensitive scans completely private.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Detailed Usage Instructions</h3>
          <ol className="list-decimal pl-6 space-y-2 mt-4">
            <li><strong>Upload Your PDF:</strong> Select the file with the orientation issues.</li>
            <li><strong>Rotate Individual Pages:</strong> Use the "Rotate" buttons on our interactive page thumbnails to spin pages 90° at a time.</li>
            <li><strong>Global Rotation:</strong> Apply rotation to the entire document if every page is sideways.</li>
            <li><strong>Review & Download:</strong> See the results in real-time and save your corrected PDF instantly.</li>
          </ol>
          <h3 className="text-xl font-bold mt-6 mb-2">Security and Performance</h3>
          <p>Scanned documents often contain highly sensitive personal information. u2pdf ensures your privacy by performing the entire rotation locally. We don't see your scans, and we don't store your files. This Zero-Knowledge approach, combined with the speed of metadata manipulation, makes u2pdf the fastest and safest rotation tool available.</p>
        `
    },
    { 
        id: 'split', 
        title: 'Remove Page', 
        icon: '✂️', 
        desc: 'Extract specific pages or remove them from a PDF.', 
        accept: '.pdf',
        category: 'Editing',
        mainCategory: 'CONVERT',
        subCategory: 'PDF/DOC',
        about: `
          <h2 className="text-2xl font-bold mb-4">Remove Page: Tailor Your PDF Documents to Your Exact Needs</h2>
          <p>Large PDFs often contain pages that you simply don't need—blank pages, cover sheets, or unnecessary appendices. Our <strong>Remove Page</strong> tool (also known as a PDF Splitter) is a surgical utility that allows you to prune your documents with ease. u2pdf provides an intuitive thumbnail-based interface where you can visually select the pages you want to keep or delete, resulting in a leaner, more focused file.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">The Utility of PDF Page Removal</h3>
          <p>Sending a 50-page PDF when only 3 pages are relevant is inefficient and unprofessional. It wastes bandwidth and the recipient's time. By removing unnecessary pages, you make your documents more impactful and easier to manage. Our tool is also perfect for "splitting" a document—simply remove everything except the section you want to share. It's the ultimate tool for document customization.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Technical Engine: Stream Filtering</h3>
          <p>u2pdf uses advanced browser libraries to filter the internal object stream of your PDF. When you select pages for removal, our engine builds a new PDF dictionary containing only the referenced page objects and their associated assets (fonts, images). This is a highly efficient process that happens entirely in your local browser memory, ensuring your original file data remains 100% private and the output is generated in seconds.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Step-by-Step Pruning Guide</h3>
          <ol className="list-decimal pl-6 space-y-2 mt-4">
            <li><strong>Upload Your PDF:</strong> Select the file you wish to edit.</li>
            <li><strong>Select Pages for Removal:</strong> Click on the thumbnails of pages you want to delete. A red cross will appear.</li>
            <li><strong>Use Manual Range:</strong> Type specific page numbers (e.g., 1, 3-5) for faster processing of large files.</li>
            <li><strong>Apply & Download:</strong> Click the button, and our engine will create your new, slimmed-down PDF instantly.</li>
          </ol>
          <h3 className="text-xl font-bold mt-6 mb-2">Why u2pdf is the Safest Choice</h3>
          <p>Editing documents often involves handling confidential information. u2pdf provides total security because your files are processed locally. We have no backend that can "see" your documents, making it the fastest and safest way to manage your PDF pages without risking a data breach.</p>
        `
    },

    // --- CONVERT -> IMAGE ---
    { 
        id: 'webp-to-png', 
        title: 'WebP to PNG', 
        icon: '🖼️', 
        desc: 'Convert WebP images to lossless PNG format.', 
        accept: '.webp',
        category: 'Conversion',
        mainCategory: 'CONVERT',
        subCategory: 'IMAGE',
        about: `
          <h2 className="text-2xl font-bold mb-4">WebP to PNG Converter: Universal Compatibility for Modern Web Assets</h2>
          <p>WebP is a cutting-edge image format designed for the web, but it often lacks support in legacy photo editors, certain operating systems, and social media platforms. Our <strong>WebP to PNG</strong> tool is a professional-grade converter that restores universal compatibility to your digital assets. By converting WebP to PNG, you ensure that your images—especially those with transparency—can be opened and edited anywhere without quality degradation.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Why Convert WebP to PNG?</h3>
          <p>While WebP is excellent for saving bandwidth, it can be a significant hurdle in professional workflows. Designers using older versions of Photoshop, marketing teams uploading to certain CMS platforms, and users trying to view photos on legacy hardware all face compatibility issues. PNG is the industry standard for lossless, transparent raster images. Converting to PNG ensures that your graphics look sharp on every screen and remain editable in every software suite.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Technical Engine: Lossless Bitstream Decoding</h3>
          <p>u2pdf uses the browser's native image decoding engine to parse WebP bitstreams. We render the decoded image onto a high-performance HTML5 Canvas, maintaining 100% of the original alpha channel (transparency). This canvas is then serialized into a PNG blob using lossless compression algorithms. Because this entire process is <strong>client-side</strong>, your high-value graphics are never transmitted over the internet, keeping your proprietary designs completely secure.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Usage Guide for High-Quality Conversion</h3>
          <ol className="list-decimal pl-6 space-y-2 mt-4">
            <li><strong>Select Your WebP File:</strong> Drag your asset into the u2pdf converter.</li>
            <li><strong>Verify the Image:</strong> See an instant preview of the image and its resolution.</li>
            <li><strong>Process Instantly:</strong> Our engine converts the file in milliseconds using your local CPU.</li>
            <li><strong>Download Your PNG:</strong> Save your compatible, high-quality image file.</li>
          </ol>
          <h3 className="text-xl font-bold mt-6 mb-2">Benefits of u2pdf</h3>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Lossless Quality:</strong> No pixels are lost during the format change.</li>
            <li><strong>Transparency Support:</strong> Full alpha channel preservation.</li>
            <li><strong>Absolute Privacy:</strong> Your creative assets stay on your machine.</li>
            <li><strong>High Speed:</strong> Faster than any cloud-based alternative.</li>
          </ul>
        `
    },
    { 
        id: 'jfif-to-png', 
        title: 'JFIF to PNG', 
        icon: '🖼️', 
        desc: 'Convert JFIF files to standard PNG images.', 
        accept: '.jfif',
        category: 'Conversion',
        mainCategory: 'CONVERT',
        subCategory: 'IMAGE',
        about: `
          <h2 className="text-2xl font-bold mb-4">JFIF to PNG: Solve File Recognition Errors with Professional Conversion</h2>
          <p>JFIF is a variant of the JPEG format that frequently causes "Unsupported File Format" errors in software like Discord, Slack, and older versions of Microsoft Office. Our <strong>JFIF to PNG</strong> tool is a specialized utility that fixes these errors by transforming your images into the widely supported PNG format. u2pdf ensures that your photos are accessible across all platforms without sacrificing visual fidelity.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">The Practical Utility of JFIF Conversion</h3>
          <p>Finding a JFIF file in your downloads can be frustrating when you're trying to meet a deadline. Many websites and apps simply do not recognize the .jfif extension, even though the underlying data is similar to a JPG. Converting to PNG not only solves the extension issue but also moves your image into a format that is better for further editing and layering. Our tool is designed to handle everything from personal smartphone photos to professional camera exports.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Technical Workflow: Extension Normalization</h3>
          <p>When you provide a JFIF file, u2pdf's browser-based engine decodes the JPEG-compressed data and projects it onto a Canvas element. We then use the browser's native PNG encoder to re-package the data. This process effectively strips any non-standard JFIF headers and provides a "clean" PNG file. This entire transformation occurs in your browser's RAM, ensuring that your private photos are never uploaded to a server.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Steps for Success</h3>
          <ol className="list-decimal pl-6 space-y-2 mt-4">
            <li><strong>Upload Your JFIF:</strong> Drop the problematic file into our secure converter.</li>
            <li><strong>Live Metadata Preview:</strong> See the image resolution and confirm the file contents.</li>
            <li><strong>Convert Locally:</strong> Our script processes the image in the blink of an eye.</li>
            <li><strong>Download Your PNG:</strong> Save the file and use it in any application without errors.</li>
          </ol>
          <h3 className="text-xl font-bold mt-6 mb-2">Why u2pdf?</h3>
          <p>Your personal photos are private. u2pdf provides the most secure way to handle JFIF files because we never see them. By eliminating the need for a server-side upload, we provide a lightning-fast service that respects your privacy and ensures your files are ready for any digital task.</p>
        `
    },
    { 
        id: 'png-to-jpg', 
        title: 'PNG to JPG', 
        icon: '📸', 
        desc: 'Change transparent PNGs to universal JPG format.', 
        accept: '.png',
        category: 'Conversion',
        mainCategory: 'CONVERT',
        subCategory: 'IMAGE',
        about: `
          <h2 className="text-2xl font-bold mb-4">PNG to JPG: Universal Compatibility and Optimized File Sizes</h2>
          <p>While PNG is excellent for transparency and quality, the JPG format is the undisputed king of web compatibility and storage efficiency. Our <strong>PNG to JPG</strong> tool allows you to convert your graphics into a format that is easier to share, faster to load, and accepted by every website on the planet. u2pdf provides a high-performance conversion engine that maintains the color depth and clarity of your original images.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Why Switch from PNG to JPG?</h3>
          <p>PNG files, especially those with high detail, can be massive—often 10x larger than a comparable JPG. If you're uploading photos to a blog, sending them via email, or submitting them to a government portal, file size limits are a real concern. Converting to JPG significantly reduces the footprint of your images while maintaining high visual quality. It also ensures that systems that don't support PNG's alpha channel (transparency) don't display your images with unpredictable black backgrounds.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Technical Process: Background Flattening</h3>
          <p>Since JPG does not support transparency, our converter must "flatten" the image. When you upload a transparent PNG, u2pdf automatically fills the transparent areas with a clean white background before encoding the data as a high-quality JPEG. We use the browser's hardware-accelerated Canvas API to ensure this flattening is smooth and free of artifacts. This process happens entirely in your browser memory, guaranteeing that your private images never touch a third-party server.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Usage Guide</h3>
          <ol className="list-decimal pl-6 space-y-2 mt-4">
            <li><strong>Select Your PNG:</strong> Upload the image you wish to convert.</li>
            <li><strong>Review with Live Preview:</strong> See how your image looks and check its dimensions.</li>
            <li><strong>Initiate Conversion:</strong> Our client-side script processes the conversion instantly.</li>
            <li><strong>Save Your JPG:</strong> Download the new, optimized file for sharing or web use.</li>
          </ol>
          <h3 className="text-xl font-bold mt-6 mb-2">Privacy and Performance</h3>
          <p>u2pdf is the fastest way to convert PNGs because it eliminates the upload/download cycle of heavy files. Most importantly, your images stay on your device. This Zero-Knowledge security model makes u2pdf the safest choice for handling sensitive documents, personal photos, and proprietary graphics.</p>
        `
    },
    { 
        id: 'png-to-svg', 
        title: 'PNG to SVG', 
        icon: '📐', 
        desc: 'Vectorize your PNG images into scalable SVG format.', 
        accept: '.png',
        category: 'Conversion',
        mainCategory: 'CONVERT',
        subCategory: 'IMAGE',
        about: `
          <h2 className="text-2xl font-bold mb-4">PNG to SVG: High-Precision Vectorization for Scalable Web Graphics</h2>
          <p>Raster images like PNG lose quality when zoomed, but vectors like SVG are mathematically defined and remain crystal clear at any scale. Our <strong>PNG to SVG</strong> tool is a professional vectorization utility that traces the paths of your images to create high-quality, scalable graphics. This is a vital tool for web designers, developers, and logo designers who need to modernize their assets for high-resolution displays.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">The Power of Vector Graphics</h3>
          <p>SVGs are the gold standard for web iconography and logos. Because they are code-based, they have tiny file sizes and can be easily styled with CSS. By vectorizing your PNG, you're essentially future-proofing your graphics. Whether it's a simple icon or a complex logo, an SVG will look perfectly sharp on everything from an old mobile phone to a 4K monitor. Our tool handles the complex task of path-tracing so you don't have to manually recreate your designs in expensive software.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Technical Insight: Path-Tracing Algorithms</h3>
          <p>u2pdf utilizes <strong>ImageTracerJS</strong>, a powerful library that analyzes the pixel data of your PNG and calculates the mathematical curves (Bézier paths) that best fit the image contours. Our engine identifies color boundaries and simplifies them into vector paths. This entire computational process occurs <strong>client-side</strong> in your browser, ensuring that your proprietary designs and trademarks never leave your device.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Step-by-Step Vectorization Guide</h3>
          <ol className="list-decimal pl-6 space-y-2 mt-4">
            <li><strong>Upload Your PNG:</strong> For best results, use high-contrast images or logos.</li>
            <li><strong>Analyze the Preview:</strong> See an instant preview of your image.</li>
            <li><strong>Vectorize Locally:</strong> Our engine traces the paths in real-time.</li>
            <li><strong>Download Your SVG:</strong> Save your scalable, code-ready graphic file.</li>
          </ol>
          <h3 className="text-xl font-bold mt-6 mb-2">Why u2pdf is Better</h3>
          <p>Most online vectorizers charge for high-quality tracing or limit your use. u2pdf is 100% free and unlimited. More importantly, we offer absolute privacy. Your designs are never uploaded to a server, making u2pdf the safest environment for developing corporate identities and personal creative projects.</p>
        `
    },
    { 
        id: 'heic-to-jpg', 
        title: 'HEIC to JPG', 
        icon: '📱', 
        desc: 'Convert Apple HEIC photos to compatible JPG images.', 
        accept: '.heic',
        category: 'Conversion',
        mainCategory: 'CONVERT',
        subCategory: 'IMAGE',
        about: `
          <h2 className="text-2xl font-bold mb-4">HEIC to JPG: Open Your iPhone Photos on Any Device</h2>
          <p>Apple's HEIC format is efficient for storage, but it is notoriously difficult to view on Windows PCs, Android phones, and older web browsers. Our <strong>HEIC to JPG</strong> tool is a specialized converter that solves this compatibility gap. We provide a seamless way to transform your mobile photos into the universally supported JPG format, ensuring that your memories can be shared and viewed by everyone, regardless of their hardware.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Why You Need HEIC Conversion</h3>
          <p>If you've ever tried to email a photo from your iPhone to a Windows user, you've likely encountered the "Cannot Open File" error. HEIC (High Efficiency Image Coding) is a great technology, but the rest of the digital world is still catching up. Converting to JPG is a necessary step for uploading to most social media sites, printing photos at a retail kiosk, or sharing images with friends on different platforms. Our tool maintains the rich colors and detail of your original photos while moving them to a format that everyone can use.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Technical Engine: Browser-Based HEIF Decoding</h3>
          <p>u2pdf utilizes <strong>heic2any</strong>, a sophisticated JavaScript library that performs the complex task of decoding HEIF/HEIC data. Our engine extracts the pixel data and metadata (like EXIF) from the HEIC container and re-encodes it into a high-quality JPEG. This entire transformation is handled <strong>locally on your device</strong>. Because HEIC photos often contain private location and time data, u2pdf's client-side approach is the only way to ensure your personal info stays strictly private.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Quick Usage Instructions</h3>
          <ol className="list-decimal pl-6 space-y-2 mt-4">
            <li><strong>Upload Your HEIC:</strong> Drag your .heic files into the u2pdf secure area.</li>
            <li><strong>Review the Metadata:</strong> Check the photo preview and resolution.</li>
            <li><strong>Convert Instantly:</strong> Our engine decodes and re-encodes the image in seconds.</li>
            <li><strong>Download Your JPG:</strong> Save your compatible photo and share it anywhere.</li>
          </ol>
          <h3 className="text-xl font-bold mt-6 mb-2">Privacy and Performance</h3>
          <p>u2pdf is the fastest way to handle HEIC files because it avoids the massive upload times of high-res photos to a cloud server. Most importantly, we provide total security. Your photos are never sent to our servers, ensuring your private life remains private. It's fast, free, and built for your security.</p>
        `
    },
    { 
        id: 'webp-to-jpg', 
        title: 'WebP to JPG', 
        icon: '🖼️', 
        desc: 'Convert WebP images to standard JPG format.', 
        accept: '.webp',
        category: 'Conversion',
        mainCategory: 'CONVERT',
        subCategory: 'IMAGE',
        about: `
          <h2 className="text-2xl font-bold mb-4">WebP to JPG: Restore Universal Visibility to Modern Web Images</h2>
          <p>WebP is the future of web imagery, but it is not yet the universal standard for all applications. Many older photo viewers, professional editing software, and legacy websites simply cannot open .webp files. Our <strong>WebP to JPG</strong> tool provides a robust, professional-grade solution to this problem, allowing you to convert these modern assets into the widely supported JPG format in seconds.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">The Practical Benefit of WebP to JPG Conversion</h3>
          <p>If you've downloaded an image from the web only to find your computer can't open it, you've encountered the WebP hurdle. For designers, developers, and casual users, being able to quickly "re-format" these images into JPG is a huge productivity boost. JPG is the industry standard for photographic content and is accepted by every platform from email clients to social media. Our tool ensures your images are ready for any digital task without losing the visual impact of the original asset.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Technical Workflow: Hardware-Accelerated Decoding</h3>
          <p>u2pdf leverages the browser's native decoding capabilities to process WebP data. We render the image onto a high-DPI Canvas, flattening any transparency with a white background to ensure compatibility with the JPG format. This process is optimized for speed using your local CPU and GPU. Because the entire conversion is <strong>client-side</strong>, your image data never crosses the internet to reach a server, providing the ultimate in data privacy.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Step-by-Step Conversion Guide</h3>
          <ol className="list-decimal pl-6 space-y-2 mt-4">
            <li><strong>Select Your WebP:</strong> Drop your file into the secure u2pdf zone.</li>
            <li><strong>Check the Preview:</strong> Confirm the image is correct and see its resolution.</li>
            <li><strong>Process Instantly:</strong> Our engine converts the file using your local hardware.</li>
            <li><strong>Download Your JPG:</strong> Save the resulting file for use in any application.</li>
          </ol>
          <h3 className="text-xl font-bold mt-6 mb-2">The u2pdf Security Promise</h3>
          <p>Your privacy is our mission. u2pdf is the safest way to convert images because we don't have a backend to store them. By performing all processing in your browser memory, we ensure your personal and professional assets remain 100% under your control. It's fast, free, and built with integrity.</p>
        `
    },

    // --- CONVERT -> VIDEO/AUDIO ---
    { 
        id: 'mov-to-mp4', 
        title: 'MOV to MP4', 
        icon: '🎥', 
        desc: 'Convert MOV videos to the popular MP4 format.', 
        accept: '.mov',
        category: 'Conversion',
        mainCategory: 'CONVERT',
        subCategory: 'VIDEO/AUDIO',
        about: `
          <h2 className="text-2xl font-bold mb-4">MOV to MP4: Universal Video Compatibility for Every Device</h2>
          <p>Apple's QuickTime MOV format is high-quality but often fails to play on Android devices, Windows Media Player, and many smart TVs. Our <strong>MOV to MP4</strong> tool is a high-performance video converter that transforms your clips into the universally accepted MP4 (H.264) format. u2pdf ensures that your videos are ready for social media, professional presentations, and sharing with friends on any platform.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">The Importance of Video Re-Encoding</h3>
          <p>Video compatibility is a major hurdle in digital communication. Sending a MOV file can lead to frustrating "File Format Not Supported" errors. By converting to MP4, you're moving your media into the most compatible container in the world. MP4 provides an excellent balance between high visual quality and efficient file size, making it the ideal choice for uploading to YouTube, LinkedIn, or sending via messaging apps. Our tool focuses on preserving your video's frame rate, resolution, and audio sync during the transition.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Technical Engine: Browser-Based Video Processing</h3>
          <p>u2pdf utilizes modern browser APIs and, where supported, WebAssembly-based encoders to process your video data. We read the MOV container and re-package the video and audio streams into an MP4 wrapper. This complex re-encoding occurs <strong>entirely in your local browser environment</strong>. Because video files are often large and contain personal moments, u2pdf's client-side approach is the only way to ensure your privacy while avoiding the multi-minute upload times of cloud-based converters.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Usage Guide for MOV to MP4</h3>
          <ol className="list-decimal pl-6 space-y-2 mt-4">
            <li><strong>Upload Your MOV:</strong> Select your video file from your device.</li>
            <li><strong>Play the Preview:</strong> Use our integrated media player to verify the clip.</li>
            <li><strong>Start the Re-Encode:</strong> Our engine processes the conversion using your local CPU.</li>
            <li><strong>Save Your MP4:</strong> Download the compatible video and share it instantly.</li>
          </ol>
          <h3 className="text-xl font-bold mt-6 mb-2">Unmatched Security and Speed</h3>
          <p>u2pdf is the fastest and safest video converter because it eliminates the server-side bottleneck. Most online converters keep your videos for hours or days; we never see them. Your content stays in your browser's RAM, ensuring that your private home movies or confidential work videos remain 100% private. Experience the future of secure video management today.</p>
        `
    },
    { 
        id: 'mp4-to-mov', 
        title: 'MP4 to MOV', 
        icon: '🎬', 
        desc: 'Convert MP4 files to high-quality MOV videos.', 
        accept: '.mp4',
        category: 'Conversion',
        mainCategory: 'CONVERT',
        subCategory: 'VIDEO/AUDIO',
        about: `
          <h2 className="text-2xl font-bold mb-4">MP4 to MOV: Professional Video Conversion for Creative Workflows</h2>
          <p>While MP4 is the standard for distribution, the MOV format is often preferred in professional editing environments, particularly on macOS and within software like Final Cut Pro and Adobe Premiere. Our <strong>MP4 to MOV</strong> tool provides a high-fidelity conversion that allows you to integrate universal MP4 clips into high-end production timelines. u2pdf ensures that your creative vision is maintained with zero quality loss.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Why Professional Editors Use MOV</h3>
          <p>MOV is a flexible "container" that can house professional-grade codecs with much higher bitrates than standard MP4 files. For editors working in an Apple-centric ecosystem, using MOV files can lead to smoother playback and faster rendering in post-production. Our tool allows you to quickly transform consumer-grade MP4 clips from cameras and phones into a format that is more "native" to professional editing software, streamlining your workflow and improving efficiency.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Technical Workflow: Container Transmuxing</h3>
          <p>u2pdf's browser-based engine handles the complex task of video transmuxing. We extract the video and audio bitstreams from the MP4 file and wrap them in a QuickTime-compliant MOV container. This process is highly optimized to run <strong>locally on your device</strong>. Because professional video assets are often high-value and confidential, u2pdf's client-side architecture is the most secure way to manage your footage without risking it on a third-party server.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Simple Conversion Steps</h3>
          <ol className="list-decimal pl-6 space-y-2 mt-4">
            <li><strong>Select Your MP4:</strong> Upload your video to the u2pdf secure area.</li>
            <li><strong>Verify the Clip:</strong> Check the resolution and duration in our live player.</li>
            <li><strong>Process Instantly:</strong> Our engine converts the file in your browser memory.</li>
            <li><strong>Download Your MOV:</strong> Save your professional-grade video file.</li>
          </ol>
          <h3 className="text-xl font-bold mt-6 mb-2">The u2pdf Privacy Guarantee</h3>
          <p>Your creative work is your property. u2pdf respects your intellectual property by ensuring that your videos never leave your machine. Most online converters are a liability for professionals; we are your secure partner. Experience high-speed, 100% private video conversion with no registration and no fees.</p>
        `
    },
    { 
        id: 'mp4-to-mp3', 
        title: 'MP4 to MP3', 
        icon: '🎵', 
        desc: 'Extract audio from MP4 video to MP3 format.', 
        accept: '.mp4',
        category: 'Conversion',
        mainCategory: 'CONVERT',
        subCategory: 'VIDEO/AUDIO',
        about: `
          <h2 className="text-2xl font-bold mb-4">MP4 to MP3: High-Quality Audio Extraction for Podcasts and Music</h2>
          <p>Oftentimes, the most valuable part of a video is what you hear, not what you see. Our <strong>MP4 to MP3</strong> tool allows you to surgically extract the audio track from any video file and save it as a high-bitrate MP3. Whether you're a student turning a lecture video into a study podcast, or a music lover creating an audio library from live performances, u2pdf provides the precision you need.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">The Utility of Audio Extraction</h3>
          <p>Videos are massive files that drain battery and storage. If you only need to listen to the content, an MP3 is the perfect solution. It's much smaller, works on every audio player, and can be easily shared via messaging apps. Our tool is optimized to extract audio with crystal clarity, maintaining the original sample rate and depth. This is essential for converting video interviews into transcripts or turning webinar recordings into mobile-friendly audio content.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Technical Engine: Stream Separation and Encoding</h3>
          <p>u2pdf uses advanced browser technologies to isolate the audio stream from the video container. We then use a client-side encoder to package this data into a standard MP3 file. This entire process occurs <strong>entirely in your browser's RAM</strong>. Because video files can be private and large, u2pdf's client-side approach is the only way to ensure your security while avoiding the slow upload process of traditional cloud-based audio extractors.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Detailed Usage Instructions</h3>
          <ol className="list-decimal pl-6 space-y-2 mt-4">
            <li><strong>Upload Your MP4:</strong> Drag your video into our secure converter.</li>
            <li><strong>Listen to the Audio:</strong> Use our player to confirm the audio quality.</li>
            <li><strong>Extract Instantly:</strong> Our engine separates the audio in seconds using your local CPU.</li>
            <li><strong>Download Your MP3:</strong> Save your new audio file for use on any device.</li>
          </ol>
          <h3 className="text-xl font-bold mt-6 mb-2">Security and Performance</h3>
          <p>u2pdf is the fastest and safest way to extract audio because it eliminates the risk of data leaks on external servers. We don't see your videos, we don't store your audio, and we don't track your content. Your private recordings and high-value media stay 100% under your control. It's fast, free, and built with your privacy in mind.</p>
        `
    },
    { 
        id: 'mov-to-mp3', 
        title: 'MOV to MP3', 
        icon: '🎶', 
        desc: 'Convert MOV video audio to MP3 files.', 
        accept: '.mov',
        category: 'Conversion',
        mainCategory: 'CONVERT',
        subCategory: 'VIDEO/AUDIO',
        about: `
          <h2 className="text-2xl font-bold mb-4">MOV to MP3: Professional Audio Extraction from QuickTime Videos</h2>
          <p>MOV files often contain high-fidelity PCM audio that is perfect for professional audio projects. Our <strong>MOV to MP3</strong> tool provides a reliable, high-speed way to extract these audio tracks and convert them into the universal MP3 format. u2pdf ensures that the rich sound quality of your original recordings is maintained, making your audio ready for editing, podcasts, or portable listening.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Why Extract Audio from MOV?</h3>
          <p>MOV is a standard format for professional video recording on iPhones and Macs. If you've recorded an interview, a musical performance, or a voice note in MOV, you likely need a separate audio file for distribution. MP3 is the world's most popular audio format, offering excellent compression and universal playback. By extracting the audio, you significantly reduce the file size and make the content accessible on any device, from smartphone apps to professional DAWs (Digital Audio Workstations).</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Technical Workflow: Browser-Native Extraction</h3>
          <p>u2pdf utilizes modern browser APIs to access the internal media streams of your MOV file. We decode the audio data and re-encode it as an MP3 bitstream. This entire computational task is handled <strong>locally on your computer</strong>. Professional media assets are often confidential; u2pdf's client-side architecture is the most secure way to handle your high-value audio without risking it on a third-party server. Experience the power of professional audio tools in your browser.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Step-by-Step Instructions</h3>
          <ol className="list-decimal pl-6 space-y-2 mt-4">
            <li><strong>Select Your MOV:</strong> Upload your video to the u2pdf secure area.</li>
            <li><strong>Verify with Preview:</strong> Play the audio in our built-in media player.</li>
            <li><strong>Process Instantly:</strong> Our engine extracts the audio using your local hardware.</li>
            <li><strong>Download Your MP3:</strong> Save the high-quality audio file for immediate use.</li>
          </ol>
          <h3 className="text-xl font-bold mt-6 mb-2">The u2pdf Security Promise</h3>
          <p>Your media is yours. u2pdf respects your privacy by ensuring that your videos never leave your machine. Most online extractors are a liability for professionals; we are your secure alternative. Experience high-speed, 100% private audio conversion with no fees and no registration.</p>
        `
    },

    // --- COMPRESS -> PDF/DOC ---
    { 
        id: 'compress', 
        title: 'PDF Compress', 
        icon: '🗜️', 
        desc: 'Shrink PDF size without losing clarity.', 
        accept: '.pdf', 
        category: 'Editing',
        mainCategory: 'COMPRESS',
        subCategory: 'PDF/DOC',
        about: `
          <h2 className="text-2xl font-bold mb-4">PDF Compress: Intelligent Optimization for Leaner, Faster Documents</h2>
          <p>Large PDF files are a major bottleneck in digital communication. They fail in email attachments, take forever to upload, and drain mobile data. Our <strong>PDF Compress</strong> tool is a professional optimization utility designed to shrink your document's footprint while maintaining exceptional visual clarity. u2pdf uses advanced compression algorithms to ensure your files are lightweight but still look professional.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">The Strategic Value of PDF Compression</h3>
          <p>Every kilobyte matters when you're submitting a job application, filing legal documents, or sharing a portfolio. A compressed PDF loads faster, uses less storage, and is much more likely to pass through strict email gateway limits. Our tool specifically targets high-resolution images and unnecessary metadata within the PDF, reducing size by up to 90% in some cases. This is an essential tool for anyone who wants their digital documents to be as efficient as possible.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Technical Insight: Stream Filtering and Downsampling</h3>
          <p>u2pdf uses <strong>PDF-Lib</strong> and specialized client-side optimizers to parse the PDF object tree. Our engine identifies high-resolution bitmap images and applies intelligent downsampling and re-compression. We also strip away redundant data like document history and unused font subsets. This entire optimization process happens <strong>locally in your browser</strong>. Because business documents are often highly confidential, u2pdf's client-side approach is the only way to ensure your security while optimizing your files.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Usage Guide for Maximum Efficiency</h3>
          <ol className="list-decimal pl-6 space-y-2 mt-4">
            <li><strong>Upload Your Large PDF:</strong> Drop the file into our secure compressor.</li>
            <li><strong>Select Quality:</strong> Use our slider to find the perfect balance between size and clarity.</li>
            <li><strong>Review the Stats:</strong> See the original vs. the estimated output size in real-time.</li>
            <li><strong>Apply & Download:</strong> Our engine optimizes the file instantly. Save your new, leaner PDF.</li>
          </ol>
          <h3 className="text-xl font-bold mt-6 mb-2">Security and Performance</h3>
          <p>u2pdf is the fastest and safest way to shrink PDFs because it avoids the risk of data leaks on third-party servers. We don't see your documents, we don't store your files, and we don't have a backend to hack. Your private reports and personal docs stay 100% under your control. It's fast, free, and built with integrity.</p>
        `
    },
    { 
        id: 'doc-compress', 
        title: 'DOC Compress', 
        icon: '📄', 
        desc: 'Optimize Word document file size.', 
        accept: '.doc,.docx', 
        category: 'Editing',
        mainCategory: 'COMPRESS',
        subCategory: 'PDF/DOC',
        about: `
          <h2 className="text-2xl font-bold mb-4">DOC Compress: Optimize Your Word Documents for Professional Sharing</h2>
          <p>Word documents, especially those with many images and embedded objects, can quickly become too large for email attachments and cloud storage. Our <strong>DOC Compress</strong> tool is a specialized utility that optimizes your .doc and .docx files to reduce their file size without affecting the text or formatting. u2pdf ensures that your reports, proposals, and manuscripts are easy to share and professional in every detail.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Why Compress Your Word Files?</h3>
          <p>Large Word files are a common source of frustration in office environments. They can crash email clients, take too long to sync with cloud folders, and exceed the limits of document management systems. By compressing your DOC files, you make them more mobile-friendly and ensure they can be distributed without technical hiccups. Our tool specifically targets the internal structure of the Word container, optimizing embedded images and cleaning up redundant XML data for a leaner, faster file.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Technical Workflow: XML Structure Optimization</h3>
          <p>A modern .docx file is essentially a ZIP archive of XML data and media. u2pdf's browser-based engine decodes this archive, identifies high-resolution media assets, and applies modern compression techniques. We also optimize the internal XML structure to remove historical bloat. This entire process occurs <strong>locally on your device</strong>. Because Word documents often contain private thoughts and business secrets, u2pdf's client-side architecture is the most secure way to manage your writing projects.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Step-by-Step Optimization Guide</h3>
          <ol className="list-decimal pl-6 space-y-2 mt-4">
            <li><strong>Select Your DOCX:</strong> Upload your document to the u2pdf secure area.</li>
            <li><strong>Monitor the Size:</strong> See the current file size and our estimated reduction.</li>
            <li><strong>Process Instantly:</strong> Our engine optimizes the file in your browser's RAM.</li>
            <li><strong>Download Your Optimized File:</strong> Save your leaner document for easy sharing.</li>
          </ol>
          <h3 className="text-xl font-bold mt-6 mb-2">The u2pdf Security Promise</h3>
          <p>Your work is your legacy. u2pdf respects your intellectual property by ensuring that your documents never leave your machine. Most online compressors are a liability for privacy; we are your secure partner. Experience high-speed, 100% private document optimization with no fees and no registration.</p>
        `
    },
    { 
        id: 'ppt-compress', 
        title: 'PPT Compress', 
        icon: '📉', 
        desc: 'Reduce the file size of your presentations.', 
        accept: '.pptx', 
        category: 'Editing',
        mainCategory: 'COMPRESS',
        subCategory: 'PDF/DOC',
        about: `
          <h2 className="text-2xl font-bold mb-4">PPT Compress: Shrink Your Presentations for Seamless Distribution</h2>
          <p>PowerPoint decks are notorious for their massive file sizes, often ballooning due to high-resolution slides, animations, and high-fidelity graphics. Our <strong>PPT Compress</strong> tool is a professional optimization utility that allows you to reduce the footprint of your .pptx files without sacrificing the impact of your presentation. u2pdf ensures that your decks are easy to email, quick to download, and ready for any meeting.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">The Importance of Presentation Optimization</h3>
          <p>A 100MB presentation is a technical failure. It might not send via email, it will load slowly on a client's laptop, and it might even crash on a mobile device. By compressing your PPT files, you ensure a smooth, professional experience for your audience. Our tool intelligently targets the media assets within your slides—the images and videos that cause the bloat—and applies efficient compression while keeping the text and shapes crisp and searchable. This is essential for sales teams, educators, and students alike.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Technical Engine: Media-Asset Optimization</h3>
          <p>u2pdf uses advanced browser libraries to unzip the .pptx container and analyze its contents. Our engine identifies high-resolution images on your slides and applies modern compression algorithms. We also optimize the underlying XML data to remove unnecessary metadata. This entire computational process occurs <strong>client-side in your browser</strong>. Because business presentations are often highly confidential, u2pdf's client-side approach is the only way to ensure your proprietary data remains 100% under your control.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Usage Guide for Perfect Presentations</h3>
          <ol className="list-decimal pl-6 space-y-2 mt-4">
            <li><strong>Upload Your PPTX:</strong> Drag your large deck into the u2pdf secure zone.</li>
            <li><strong>Check the Preview:</strong> See your slide thumbnails and current file size.</li>
            <li><strong>Compress Instantly:</strong> Our engine optimizes the deck in your browser memory.</li>
            <li><strong>Download Your Optimized File:</strong> Save your leaner presentation for easy sharing.</li>
          </ol>
          <h3 className="text-xl font-bold mt-6 mb-2">Unmatched Speed and Privacy</h3>
          <p>u2pdf is the fastest and safest way to shrink presentations because it avoids the risk of data leaks on third-party servers. We don't see your slides, we don't store your data, and we don't have a backend to compromise. Your private research and professional decks stay 100% on your device. It's fast, free, and built for integrity.</p>
        `
    },

    // --- COMPRESS -> IMAGE ---
    { 
        id: 'jpg-compress', 
        title: 'JPG Compress', 
        icon: '🖼️', 
        desc: 'Reduce JPG image size with quality control.', 
        accept: '.jpg,.jpeg', 
        category: 'Editing',
        mainCategory: 'COMPRESS',
        subCategory: 'IMAGE',
        about: `
          <h2 className="text-2xl font-bold mb-4">JPG Compress: Professional Image Optimization with Real-Time Precision</h2>
          <p>Our <strong>JPG Compress</strong> tool is a powerful utility designed for web developers, social media managers, and photographers who need to reduce image file sizes without noticeable quality loss. u2pdf provides a real-time quality slider that allows you to see the immediate effect of compression on your photo. This ensures you find the perfect balance between a lightweight file for fast loading and the clarity needed for a professional look.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">The Strategic Role of Image Compression</h3>
          <p>High-resolution JPGs can be incredibly large, slowing down website load times and consuming unnecessary storage. For web developers, optimizing images is a key part of SEO and user experience. For casual users, shrinking photos makes them much easier to share via email or messaging apps. Our tool uses sophisticated lossy compression algorithms to strip away data that is invisible to the human eye, resulting in files that are up to 80% smaller while still looking stunning.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Technical Insight: Lossy Data Reduction</h3>
          <p>u2pdf leverages the browser's hardware-accelerated Canvas API to re-encode your JPG data. When you adjust the compression slider, our engine re-samples the image bitstream using adjusted quantization tables. This process effectively reduces the detail in complex areas of the photo that the eye doesn't prioritize. This entire computational task is handled <strong>locally on your device</strong>. Because your photos often contain personal moments or sensitive locations, u2pdf's client-side approach is the only way to ensure your privacy while optimizing your assets.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Step-by-Step Optimization Guide</h3>
          <ol className="list-decimal pl-6 space-y-2 mt-4">
            <li><strong>Upload Your JPG:</strong> Select the image you want to optimize.</li>
            <li><strong>Adjust the Slider:</strong> Watch the live preview and file size estimate update in real-time.</li>
            <li><strong>Verify Quality:</strong> Ensure the image remains sharp at your desired size.</li>
            <li><strong>Download Your Optimized Image:</strong> Save the resulting file for use on any platform.</li>
          </ol>
          <h3 className="text-xl font-bold mt-6 mb-2">Security and Speed Advantages</h3>
          <p>u2pdf is the fastest way to handle JPG optimization because it eliminates the server-side upload bottleneck. Most online compressors keep your photos for analytics; we never see them. Your images stay in your browser's RAM, ensuring your private photos remain 100% private. It's fast, free, and built for your security.</p>
        `
    },
    { 
        id: 'png-compress', 
        title: 'PNG Compress', 
        icon: '🖼️', 
        desc: 'Compress PNG files while maintaining transparency.', 
        accept: '.png', 
        category: 'Editing',
        mainCategory: 'COMPRESS',
        subCategory: 'IMAGE',
        about: `
          <h2 className="text-2xl font-bold mb-4">PNG Compress: Advanced Lossless Optimization for Web Graphics</h2>
          <p>PNG files are the standard for high-quality, transparent web graphics, but they can be notoriously bulky. Our <strong>PNG Compress</strong> tool provides professional-grade optimization that significantly reduces file sizes without sacrificing the "alpha channel" (transparency) or visual clarity of your assets. This is an essential tool for UI/UX designers and developers who want to improve site performance while maintaining a premium aesthetic.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Why Use PNG Compression?</h3>
          <p>A single unoptimized PNG can easily exceed 5MB, which is a major hurdle for website load times and mobile data users. By compressing your PNGs, you're directly improving your site's speed and SEO ranking. Our tool targets the internal color palettes and metadata within the PNG container, using advanced techniques to find a more efficient way to store the same visual information. The result is a high-performance graphic that looks identical to the original but loads in a fraction of the time.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Technical Workflow: Bitstream Re-Packaging</h3>
          <p>u2pdf's browser-based engine handles the complex task of PNG optimization. We decode the PNG structure and apply modern compression filters that re-organize the pixel data for better ZIP-style compression. We also strip away non-essential metadata chunks (like creation date or software headers) that add unnecessary bytes. This entire process occurs <strong>entirely in your local browser environment</strong>. Because your icons and logos are valuable IP, u2pdf's client-side architecture is the most secure way to manage your graphics without risking them on a third-party server.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Usage Guide for Design Professionals</h3>
          <ol className="list-decimal pl-6 space-y-2 mt-4">
            <li><strong>Select Your PNG:</strong> Drag your high-quality graphic into the secure u2pdf zone.</li>
            <li><strong>Observe the Reduction:</strong> See the current file size vs. our estimated output.</li>
            <li><strong>Process Instantly:</strong> Our engine optimizes the file using your local hardware.</li>
            <li><strong>Download Your Optimized File:</strong> Save your lean, high-performance PNG.</li>
          </ol>
          <h3 className="text-xl font-bold mt-6 mb-2">The u2pdf Privacy Guarantee</h3>
          <p>Your creative assets are your property. u2pdf respects your privacy by ensuring that your images never leave your machine. Most online compressors are a liability for designers; we are your secure partner. Experience high-speed, 100% private image optimization with no fees and no registration.</p>
        `
    },

    // --- COMPRESS -> VIDEO/AUDIO ---
    { 
        id: 'compress-video', 
        title: 'Video Compress', 
        icon: '🎬', 
        desc: 'Reduce video file size efficiently in your browser.', 
        accept: 'video/*', 
        category: 'Editing',
        mainCategory: 'COMPRESS',
        subCategory: 'VIDEO/AUDIO',
        about: `
          <h2 className="text-2xl font-bold mb-4">Video Compress: Shrink Bulky Video Files without Sacrificing Clarity</h2>
          <p>High-definition videos are beautiful, but their massive file sizes make them a nightmare for sharing and storage. Our <strong>Video Compress</strong> tool is a professional optimization utility designed to shrink your MP4, MOV, and other video files for easy distribution. u2pdf uses advanced re-encoding algorithms to ensure your content stays sharp and your audio remains clear while significantly reducing the overall footprint.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">The Strategic Value of Video Optimization</h3>
          <p>Whether you're sending a presentation to a client, uploading a clip to social media, or trying to fit a video into an email attachment, file size limits are everywhere. By compressing your videos, you ensure they play smoothly on mobile devices and don't get blocked by strict mail servers. Our tool focuses on optimizing the video bitrate—the amount of data processed per second—finding the "sweet spot" where quality remains high but file size drops dramatically. This is an essential tool for social media managers, remote workers, and casual creators.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Technical Insight: Browser-Based Re-Encoding</h3>
          <p>u2pdf utilizes modern browser APIs and WebAssembly-based encoders to process your video data. We read the video stream and apply efficient H.264 or similar compression techniques directly in your browser. This complex computational task is handled <strong>entirely in your local browser environment</strong>. Because video files are often private and contain high-value moments, u2pdf's client-side approach is the only way to ensure your security while avoiding the multi-minute upload times of cloud-based compressors.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Step-by-Step Optimization Guide</h3>
          <ol className="list-decimal pl-6 space-y-2 mt-4">
            <li><strong>Upload Your Video:</strong> Select the file you wish to optimize.</li>
            <li><strong>Review the Stats:</strong> See the current duration, resolution, and estimated size reduction.</li>
            <li><strong>Start the Compression:</strong> Our engine processes the re-encoding using your local CPU.</li>
            <li><strong>Save Your New Video:</strong> Download the optimized file, ready for easy sharing.</li>
          </ol>
          <h3 className="text-xl font-bold mt-6 mb-2">Unmatched Privacy and Performance</h3>
          <p>u2pdf is the fastest and safest way to shrink videos because it eliminates the risk of data leaks on third-party servers. We don't see your movies, we don't store your content, and we don't have a backend that can be compromised. Your private home videos and professional clips stay 100% on your device. It's fast, free, and built with integrity.</p>
        `
    },
    { 
        id: 'audio-compress', 
        title: 'Audio Compress', 
        icon: '🎙️', 
        desc: 'Reduce audio file size (MP3, AAC).', 
        accept: 'audio/*', 
        category: 'Editing',
        mainCategory: 'COMPRESS',
        subCategory: 'VIDEO/AUDIO',
        about: `
          <h2 className="text-2xl font-bold mb-4">Audio Compress: High-Performance Sound Optimization</h2>
          <p>Large audio files—like high-bitrate podcasts, voice recordings, and music tracks—can take up significant storage and cause issues during sharing. Our <strong>Audio Compress</strong> tool is a professional utility that allows you to shrink your MP3 and AAC files while maintaining exceptional sound quality. u2pdf ensures that your voice notes, interviews, and creative projects are lean, mobile-friendly, and ready for any platform.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">The Utility of Audio Compression</h3>
          <p>Every byte counts when you're managing a large audio library or sending files to clients. A compressed audio file loads faster, uses less data, and is much easier to attach to emails or share via messaging apps. Our tool intelligently targets the bitrate and sample rate of your audio, focusing on stripping away frequencies and data that the human ear doesn't prioritize. The result is a crystal-clear audio file that is a fraction of its original size—perfect for mobile listening and web streaming.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Technical Workflow: Sample Rate and Bitrate Optimization</h3>
          <p>u2pdf leverages modern browser APIs to decode your audio data into raw waveforms. We then apply a high-efficiency encoder that re-packages this data with optimized parameters. This entire process occurs <strong>locally on your computer</strong>. Because audio recordings often contain private conversations or sensitive interviews, u2pdf's client-side architecture is the most secure way to manage your audio without risking it on a third-party server. Experience the power of professional audio tools in your browser.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Detailed Usage Instructions</h3>
          <ol className="list-decimal pl-6 space-y-2 mt-4">
            <li><strong>Select Your Audio:</strong> Upload your file to the u2pdf secure area.</li>
            <li><strong>Verify with Preview:</strong> Play the audio in our built-in media player to check for clarity.</li>
            <li><strong>Process Instantly:</strong> Our engine optimizes the file in your browser memory.</li>
            <li><strong>Download Your Optimized File:</strong> Save your lean, high-quality audio file.</li>
          </ol>
          <h3 className="text-xl font-bold mt-6 mb-2">The u2pdf Security Promise</h3>
          <p>Your audio is your voice. u2pdf respects your privacy by ensuring that your recordings never leave your machine. Most online compressors are a liability for privacy; we are your secure partner. Experience high-speed, 100% private audio optimization with no fees and no registration.</p>
        `
    },
    { 
        id: 'wav-compress', 
        title: 'WAV Compress', 
        icon: '🔊', 
        desc: 'Compress heavy WAV audio files.', 
        accept: '.wav', 
        category: 'Editing',
        mainCategory: 'COMPRESS',
        subCategory: 'VIDEO/AUDIO',
        about: `
          <h2 className="text-2xl font-bold mb-4">WAV Compress: Shrink Massive Audio Files for Professional Distribution</h2>
          <p>WAV files are prized for their lossless quality, but their uncompressed nature makes them massive—often 10x larger than an MP3. Our <strong>WAV Compress</strong> tool is a specialized utility that optimizes these heavy files, reducing their size while maintaining the high-fidelity sound needed for creative and professional work. u2pdf ensures your high-quality recordings are distributable without the massive bandwidth overhead.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Why Optimize WAV Files?</h3>
          <p>Sharing a 100MB WAV file for a 5-minute recording is impractical for most web-based workflows. It's difficult to email, slow to download, and can even fail in some messaging apps. By compressing your WAV files, you make them manageable for collaborative reviews, mobile listening, and digital archiving. Our tool focuses on optimizing the internal bit-depth and sample rate to find the most efficient representation of your audio, ensuring that your work remains professional and clear.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Technical Engine: High-Precision Waveform Re-Encoding</h3>
          <p>u2pdf uses advanced browser technologies to parse the raw PCM data within your WAV container. Our engine applies high-efficiency re-encoding that simplifies the waveform data without introducing audible artifacts. This complex computational task is handled <strong>entirely in your local browser environment</strong>. Because professional audio assets are often proprietary and confidential, u2pdf's client-side approach is the only way to ensure your security while optimizing your high-value media.</p>
          <h3 className="text-xl font-bold mt-6 mb-2">Usage Guide for Audio Professionals</h3>
          <ol className="list-decimal pl-6 space-y-2 mt-4">
            <li><strong>Upload Your WAV:</strong> Drop your large audio file into the secure u2pdf zone.</li>
            <li><strong>Analyze the Preview:</strong> See the current file size and use our player to verify the content.</li>
            <li><strong>Compress Instantly:</strong> Our engine optimizes the file using your local CPU.</li>
            <li><strong>Download Your Optimized File:</strong> Save your resulting leaner audio file.</li>
          </ol>
          <h3 className="text-xl font-bold mt-6 mb-2">Unmatched Speed and Privacy</h3>
          <p>u2pdf is the fastest and safest way to handle WAV optimization because it avoids the massive upload times of high-fidelity audio. Most online compressors keep your audio for hours; we never see it. Your files stay in your browser's RAM, ensuring your private recordings and unreleased tracks remain 100% private. Experience professional-grade audio management today.</p>
        `
    }
];
