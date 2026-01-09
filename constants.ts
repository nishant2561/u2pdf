
import { Tool } from './types';

export const TOOLS: Tool[] = [
    { 
        id: 'word-to-pdf', 
        title: 'Word to PDF', 
        icon: '📝', 
        desc: 'Convert Word documents to PDF with perfect formatting. Ideal for resumes and reports.', 
        accept: '.doc,.docx', 
        category: 'Conversion',
        hot: true,
        about: '<p>The Word to PDF Converter allows you to convert DOC and DOCX files into high-quality PDF documents instantly. This tool preserves formatting, fonts, tables, and layout.</p>'
    },
    { 
        id: 'pdf-to-word', 
        title: 'PDF to Word', 
        icon: '📄', 
        desc: 'Turn any PDF into an editable Word file without losing design or structure.', 
        accept: '.pdf', 
        category: 'Conversion',
        hot: true,
        about: '<p>The PDF to Word tool converts PDF files into fully editable Word documents without losing formatting. Perfect for editing, updating, or reusing existing documents.</p>'
    },
    { 
        id: 'text-to-pdf', 
        title: 'Text to PDF', 
        icon: '📋', 
        desc: 'Convert plain text (.txt) files into professional PDF documents instantly.', 
        accept: '.txt', 
        category: 'Conversion',
        hot: true,
        about: '<p>The Text to PDF tool allows you to transform plain text files into clean, readable PDF documents. Perfect for saving notes, code snippets, or simple documents.</p>'
    },
    { 
        id: 'pdf-to-img', 
        title: 'PDF to Picture', 
        icon: '🖼️', 
        desc: 'Convert each page of your PDF into high-quality PNG or JPG images.', 
        accept: '.pdf', 
        category: 'Conversion',
        hot: true,
        about: '<p>The PDF to Picture tool extracts every page from your PDF and converts it into a high-resolution image. If your PDF has multiple pages, they will be provided as a convenient ZIP file.</p>'
    },
    { 
        id: 'compress-image', 
        title: 'Compress Image', 
        icon: '🖼️', 
        desc: 'Compress JPG, PNG, or WebP images to reduce size while maintaining quality.', 
        accept: 'image/jpeg, image/png, image/webp', 
        category: 'Editing',
        multiple: true,
        hot: true,
        about: '<p>Compress Image tool allows you to reduce the file size of your images (JPG, PNG, WebP) significantly without visible quality loss. Perfect for web optimization.</p>'
    },
    { 
        id: 'compress', 
        title: 'Compress PDF', 
        icon: '🗜️', 
        desc: 'Shrink PDF size without losing clarity. Best for email uploads.', 
        accept: '.pdf', 
        category: 'Editing',
        multiple: true,
        about: '<p>Compress PDF reduces the size of your PDF file without sacrificing quality. Perfect for email uploads, online form submissions, and storage saving.</p>'
    },
    { 
        id: 'compress-video', 
        title: 'Compress Video', 
        icon: '🎬', 
        desc: 'Reduce video file size (MP4, MKV, MOV) efficiently right in your browser.', 
        accept: 'video/mp4, video/quicktime, video/x-matroska, video/webm', 
        category: 'Editing',
        about: '<p>Compress Video tool shrinks large video files securely in your browser. It supports popular formats like MP4, MOV, and MKV.</p>'
    },
    { 
        id: 'merge', 
        title: 'Merge PDF', 
        icon: '📑', 
        desc: 'Join multiple PDF pages into a single organized document. Fast processing.', 
        accept: '.pdf', 
        category: 'Editing',
        multiple: true, 
        hot: true,
        about: '<p>Merge PDF lets you combine multiple PDF files into one clean, well-organized document. Ideal for combining reports, notes, forms, or scanned pages.</p>'
    },
    { 
        id: 'jpg-to-pdf', 
        title: 'JPG to PDF', 
        icon: '🖼️', 
        desc: 'Convert single or multiple images to a clear, high-resolution PDF.', 
        accept: 'image/*', 
        category: 'Conversion',
        multiple: true, 
        hot: true,
        about: '<p>JPG to PDF converts images (JPG, PNG, JPEG) into a single high-resolution PDF. Great for scanned documents, photos, handwritten notes, or receipts.</p>'
    },
    { 
        id: 'ppt-to-pdf', 
        title: 'PPT to PDF', 
        icon: '📊', 
        desc: 'Convert PowerPoint slides to PDF while preserving design and fonts.', 
        accept: '.pptx',
        category: 'Conversion',
        about: '<p>PPT to PDF changes your PowerPoint presentations into PDF format while preserving design, fonts, animations, and slide arrangement.</p>'
    },
    { 
        id: 'pdf-to-ppt', 
        title: 'PDF to PPT', 
        icon: '📉', 
        desc: 'Extract PDF content into editable PowerPoint slides.', 
        accept: '.pdf',
        category: 'Conversion',
        about: '<p>PDF to PPT transforms PDF content into editable PowerPoint slides. It helps you convert notes, reports, or documents into ready-to-edit presentation slides.</p>'
    },
    { 
        id: 'excel-to-pdf', 
        title: 'Excel to PDF', 
        icon: '📗', 
        desc: 'Convert Excel sheets to perfectly aligned PDF files.', 
        accept: '.xlsx',
        category: 'Conversion',
        about: '<p>Excel to PDF converts spreadsheets into perfectly formatted PDFs without breaking tables or charts. Great for financial reports, invoices, and data sheets.</p>'
    },
    { 
        id: 'html-to-pdf', 
        title: 'HTML to PDF', 
        icon: '🌐', 
        desc: 'Save webpages or HTML code as a structured PDF with clean formatting.', 
        accept: '.html',
        category: 'Conversion',
        about: '<p>HTML to PDF allows you to convert webpages or HTML files into neat, printable PDF documents while retaining layout, images, links, and styling.</p>'
    },
    { 
        id: 'split', 
        title: 'Remove Pages', 
        icon: '✂️', 
        desc: 'Break a PDF into smaller parts or extract specific pages easily.', 
        accept: '.pdf',
        category: 'Editing',
        about: '<p>Split PDF helps you extract selected pages or divide a large PDF into smaller files. Ideal for organizing, sharing, or separating important sections.</p>'
    },
    { 
        id: 'watermark', 
        title: 'Add Watermark', 
        icon: '🛡️', 
        desc: 'Insert text watermarks to protect your files from unauthorized use.', 
        accept: '.pdf',
        category: 'Security',
        about: '<p>The Watermark PDF tool adds text watermarks to your documents for branding or security. Great for confidential papers, drafts, and official files.</p>'
    },
    { 
        id: 'rotate', 
        title: 'Rotate PDF', 
        icon: '🔄', 
        desc: 'Rotate PDF pages to the correct angle. Simple, fast, and convenient.', 
        accept: '.pdf',
        category: 'Editing',
        about: '<p>Rotate PDF allows you to rotate pages left or right and save them permanently. Fix sideways or upside-down pages instantly.</p>'
    },
    { 
        id: 'protect', 
        title: 'Protect PDF', 
        icon: '🔒', 
        desc: 'Add password authentication to lock and secure your PDF documents.', 
        accept: '.pdf',
        category: 'Security',
        about: '<p>Protect PDF lets you secure your document with a password so only authorized people can open, copy, or print it.</p>'
    },
    { 
        id: 'page-num', 
        title: 'Add Page Numbers', 
        icon: '#️⃣', 
        desc: 'Insert custom page numbers in your PDF for professional structure.', 
        accept: '.pdf',
        category: 'Editing',
        about: '<p>Page Numbers tool allows you to insert professional and customizable page numbering into your PDF for easy organization and readability.</p>'
    }
];
