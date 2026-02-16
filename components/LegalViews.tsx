
import React from 'react';

interface LegalViewProps {
  type: 'legal' | 'security' | 'privacy' | 'terms' | 'cookies';
  onBack: () => void;
}

const LegalViews: React.FC<LegalViewProps> = ({ type, onBack }) => {
  const content = {
    legal: {
      title: "Legal Information & Disclaimer",
      body: (
        <>
          <h2 className="text-2xl font-bold mt-6 mb-4">1. Introduction to Legal Standing</h2>
          <p>Welcome to u2pdf. This legal disclaimer governs your use of our website and its associated tools. By accessing this platform, you agree to comply with and be bound by the terms outlined herein. u2pdf is an independent provider of browser-based utility services, and our relationship with users is based on a mutual understanding of technical limitations and user responsibility. This document is intended to clarify the scope of our services and the legal protections afforded to both u2pdf and its global user base.</p>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">2. Intellectual Property and Copyright</h2>
          <p>All materials on u2pdf, including the Site's design, software architecture, proprietary algorithms, logos, icons, and text, are the intellectual property of u2pdf or its content suppliers. These materials are protected by international copyright and trademark laws. You are granted a limited license to use our tools for personal or commercial document management. However, you may not decompile, reverse engineer, or redistribute any part of our software without express written consent. Any unauthorized use of our assets may lead to civil or criminal penalties as defined by international IP treaties.</p>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">3. Limitation of Liability</h2>
          <p>u2pdf provides its tools on an "as-is" and "as-available" basis. While we strive for 100% accuracy in our conversion and compression results, we make no warranties, express or implied, regarding the fitness of the output for any specific legal, professional, or medical purpose. u2pdf, its owners, and its developers shall not be liable for any damages—direct, indirect, or consequential—arising from the use of our services. This includes, but is not limited to, data loss, document corruption, or financial losses resulting from formatting errors. Users are strongly encouraged to verify all output files and maintain secure backups of their original documents.</p>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">4. Jurisdiction and Dispute Resolution</h2>
          <p>Any disputes arising from the use of u2pdf shall be governed by the laws of the jurisdiction in which u2pdf's primary operations are registered. By using the Site, you consent to the exclusive jurisdiction of these courts for all legal proceedings. In the event that any provision of this disclaimer is found to be unenforceable by a court of law, the remaining provisions shall remain in full force and effect. u2pdf reserves the right to amend this disclaimer at any time without prior notice.</p>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">5. External Links and User Responsibility</h2>
          <p>u2pdf may provide links to third-party resources for informational purposes. We do not endorse or assume responsibility for the content, security practices, or accuracy of any external site. Users interact with third-party resources at their own risk. Ultimately, the user is responsible for ensuring that their use of u2pdf does not violate any local laws or the rights of third parties, including copyright and privacy laws pertaining to the documents they choose to process.</p>
        </>
      )
    },
    security: {
      title: "Security Infrastructure & Data Safety",
      body: (
        <>
          <h2 className="text-2xl font-bold mt-6 mb-4">1. Our Holistic Security Approach</h2>
          <p>At u2pdf, security is not just a feature; it is the core foundation of our existence. We recognize that our users entrust us with highly sensitive information—ranging from financial statements and legal briefs to personal photos and identity scans. To meet this trust, we have implemented a multi-layered security infrastructure designed to prevent data leaks and unauthorized access at every stage of the user journey. Our system is built to exceed standard web security benchmarks, providing a "Zero-Trust" environment for file manipulation.</p>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">2. High-Grade HTTPS Encryption</h2>
          <p>Every interaction with u2pdf is shielded by industry-standard SSL/TLS encryption. We utilize SHA-256 with RSA encryption to create a secure tunnel between your browser and our platform. This ensures that the tools you download and the instructions you send are protected from man-in-the-middle attacks and packet sniffing. Our HTTPS deployment is strictly monitored to ensure compliance with the latest security protocols, providing a safe gateway for all document management activities.</p>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">3. The 100% Client-Side Processing Model</h2>
          <p>The crown jewel of u2pdf's security is our localized processing architecture. Most online converters are a security risk because they require you to upload your raw data to their servers. u2pdf is different. Our tools utilize WebAssembly and high-performance JavaScript libraries to perform all conversions and compressions directly in your browser's local sandbox. Your files never leave your computer. This means that u2pdf's servers never see your content, and therefore, there is no central database that can be breached to compromise your data.</p>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">4. Temporary File Handling & Volatile Memory</h2>
          <p>When you "upload" a file to a u2pdf tool, it is loaded into your browser's RAM (volatile memory). This is a non-persistent storage method. We do not have a temporary disk storage system; your data exists only while the browser tab is active. As soon as you navigate away or close the tab, the memory is cleared by the browser's garbage collection system. This automatic file deletion process is inherently secure because there is no "trash can" or "temp folder" on our servers to clean up—the data was never there in the first place.</p>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">5. Malware Protection & Access Controls</h2>
          <p>u2pdf is designed to be a sterile environment for file processing. Because we do not store user-submitted files, our infrastructure cannot be used as a vector for malware propagation. Our code is regularly audited for vulnerabilities, and we use strict Content Security Policies (CSP) to prevent cross-site scripting (XSS) and other common web threats. Furthermore, access to our Site's delivery infrastructure is restricted to a small number of verified developers using multi-factor authentication, ensuring the integrity of the tools you use.</p>
        </>
      )
    },
    privacy: {
      title: "Privacy Policy",
      body: (
        <>
          <h2 className="text-2xl font-bold mt-6 mb-4">1. Our Commitment to Anonymity</h2>
          <p>u2pdf is a "Privacy-First" platform. We believe that your digital life should be private by default. This policy outlines how we handle data and reflects our commitment to absolute transparency. We do not sell your data, we do not track your identity, and we do not store your files. In an industry where user data is often treated as a product, u2pdf stands as a sanctuary of anonymity. We follow the principle of data minimization, collecting only what is strictly necessary to deliver our services.</p>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">2. Zero Data Collection Practices</h2>
          <p>u2pdf does not require you to create an account, provide an email address, or share your name to use our tools. We do not collect "Personally Identifiable Information" (PII) from our users. When you use our converters or compressors, the metadata and content of your files stay in your browser. We do not log the names of the files you process, their sizes, or their contents. This level of privacy is achieved by removing the server-side component of the file processing workflow entirely.</p>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">3. Handling of IP Addresses and Analytics</h2>
          <p>Like almost all websites, our servers automatically receive and record non-identifiable technical logs, such as your IP address, browser type, and the page you requested. We use this data solely for security monitoring (e.g., preventing DDoS attacks) and to gather aggregate, anonymized analytics about Site performance. We may use third-party tools like Google Analytics to help us understand which tools are most popular, but this data is aggregated and never linked to specific file processing activities or your personal identity.</p>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">4. Transparency and User Rights</h2>
          <p>Under regulations like the GDPR and CCPA, you have the right to know what data is being collected about you. At u2pdf, the answer is "virtually none." Because we do not store your data, there is no database for you to request access to or deletion from. Your right to be forgotten is exercised every time you close our Site. We are committed to maintaining this high standard of transparency and will update this policy if our technical architecture ever changes in a way that affects your privacy.</p>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">5. Data Retention & Third-Party Disclosure</h2>
          <p>u2pdf has a zero-day data retention policy for user-processed files. Any transient data held in your browser memory is deleted instantly upon session termination. We do not disclose any user information to third parties because we do not have any information to disclose. We do not share IP logs with marketing partners or any other external entities, except where required by a valid legal order from a court of competent jurisdiction.</p>
        </>
      )
    },
    terms: {
      title: "Terms & Conditions",
      body: (
        <>
          <h2 className="text-2xl font-bold mt-6 mb-4">1. Agreement to Terms</h2>
          <p>These Terms and Conditions constitute a legally binding agreement between you and u2pdf regarding your access to and use of our website. By using our tools, you signify your acceptance of these terms. If you are using u2pdf on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these conditions. We reserve the right to update these terms at our discretion, and your continued use of the Site signifies your acceptance of any modifications.</p>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">2. Acceptable Use and Prohibited Content</h2>
          <p>You agree to use u2pdf only for lawful purposes. You are prohibited from using our tools to process content that is: (a) illegal or promotes illegal activities; (b) infringes on the intellectual property or privacy rights of any third party; (c) contains viruses, Trojan horses, or other harmful code; or (d) is intended to harass, threaten, or harm others. u2pdf does not monitor user-processed files, but we reserve the right to block access to the Site for users who engage in automated scraping, bulk processing via unauthorized scripts, or other activities that threaten the Site's stability.</p>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">3. Copyright Compliance</h2>
          <p>Users of u2pdf must respect the copyright of others. You must have the legal right to modify and convert the files you process on our platform. u2pdf is a neutral tool provider and does not assume any responsibility for the content of the files processed by its users. In accordance with the DMCA and other international laws, we will respond to valid notices of alleged copyright infringement concerning our Site's materials. However, since we do not store user files, we cannot "remove" content that has been processed and downloaded by a user.</p>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">4. Disclaimer of Warranties and Service Limits</h2>
          <p>u2pdf provides its services "as is" and makes no guarantees regarding the uptime, accuracy, or quality of the conversions. We do not warrant that our tools will be compatible with all file versions or that the output will be free of errors. We reserve the right to modify or discontinue any tool or feature at any time without notice. Furthermore, we are not responsible for any loss of data resulting from browser crashes, network interruptions, or user error during the processing of files.</p>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">5. Limitation of Liability & Termination</h2>
          <p>To the maximum extent permitted by law, u2pdf and its affiliates shall not be liable for any damages arising from your use of the Site. You agree to indemnify and hold u2pdf harmless from any claims, damages, or expenses resulting from your breach of these terms. u2pdf reserves the right to terminate your access to the Site for any reason, including suspected abuse of our services or violation of these Terms and Conditions. This agreement shall remain in effect until terminated by either you (by ceasing use of the Site) or u2pdf.</p>
        </>
      )
    },
    cookies: {
      title: "Cookies Policy",
      body: (
        <>
          <h2 className="text-2xl font-bold mt-6 mb-4">1. Introduction to Cookie Usage</h2>
          <p>u2pdf uses cookies and similar tracking technologies to enhance your user experience and ensure the core functionality of our Site. This policy explains what cookies are, how we use them, and the choices you have regarding their management. We believe in providing a transparent look at our technical implementation so you can browse with confidence. Our use of cookies is limited to what is strictly necessary for performance and functional improvements.</p>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">2. Types of Cookies We Use</h2>
          <p>We use three main categories of cookies: (a) <strong>First-Party Functional Cookies</strong>: These are essential for the Site to remember your settings, such as your preference for Dark Mode or your last-used tool category. These stay in your browser and are not shared. (b) <strong>Session Cookies</strong>: These are temporary cookies that expire once you close your browser. They help our scripts manage the "upload" and processing state within a single visit. (c) <strong>Performance/Analytics Cookies</strong>: These are third-party cookies (e.g., Google Analytics) that help us understand how users find our Site and which tools are most used. This data is anonymized and used only for Site optimization.</p>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">3. Purpose and Benefit of Cookies</h2>
          <p>Cookies help u2pdf work smarter. By remembering your UI preferences, we save you time and provide a more personalized experience. For analytics, cookies allow us to identify technical bugs and see where users are struggling, enabling us to continuously improve our toolset. We do not use "Targeting" or "Advertising" cookies that track you across the web to build a marketing profile. Our cookies are strictly for the betterment of the u2pdf platform and its users.</p>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">4. Consent and Control Management</h2>
          <p>By using u2pdf, you consent to our use of cookies as described in this policy. However, you have full control over your cookie settings. Most modern browsers allow you to block all cookies, accept only certain types, or delete them after every session. You can manage these settings in your browser's "Privacy" or "Security" panel. Please note that if you choose to disable all cookies, some parts of u2pdf (like your theme preference) may not function as intended.</p>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">5. Browser Settings Guidance & Opt-Out</h2>
          <p>To opt-out of analytics tracking, you can use browser extensions like the "Google Analytics Opt-out Browser Add-on." For general cookie management, you can find instructions for Chrome, Firefox, Safari, and Edge in their respective support documentation. We recommend reviewing your browser settings periodically to ensure they align with your privacy preferences. u2pdf will never penalize a user for opting out of non-essential cookies; we are committed to providing our tools to everyone, regardless of their tracking settings.</p>
        </>
      )
    }
  };

  const current = content[type];

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 animate-fade-in">
      <button onClick={onBack} className="mb-8 flex items-center gap-2 text-gray-500 hover:text-primary transition-colors font-bold bg-transparent border-none cursor-pointer">
        ← Back to Home
      </button>
      <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 border border-white/40 dark:border-white/10 p-10 rounded-3xl shadow-xl prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-black text-primary mb-8">{current.title}</h1>
        <div className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {current.body}
        </div>
      </div>
    </div>
  );
};

export default LegalViews;
