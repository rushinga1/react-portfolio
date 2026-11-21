import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, CheckCircle2, X, Download, Github, Linkedin, Instagram } from 'lucide-react';
import { HERO_PORTRAIT } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 3000);
  };

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-20 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Unboxed Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
              <span>Web Development</span>
              <span aria-hidden="true">·</span>
              <span>UI/UX Design</span>
              <span aria-hidden="true">·</span>
              <span>Client-Server Systems</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[1.15]" style={{ textWrap: 'balance' }}>
              Building practical, scalable web apps and browser-based games.
            </h1>

            {/* Lead Copy */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-xl">
              I am MUGISHA RUSHINGA Guevara — a developer and designer focused on Web Development, UI/UX Design, and Client-Server Systems, crafting responsive interfaces and interactive experiences with React, Vue.js, and Node.js.
            </p>

            {/* Availability Note */}
            <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 pt-1">
              <span>Based in Kigali, Rwanda · Open to web development, UI/UX design, and collaborative builds</span>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 rounded-lg transition-all shadow-sm"
              >
                <span>Explore Live Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <button
                type="button"
                onClick={() => setShowResumeModal(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-200 bg-zinc-100 hover:bg-zinc-200/80 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-lg transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-zinc-500" />
                <span>View Resume/CV</span>
              </button>
            </div>

            {/* Find me on */}
            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-zinc-500 dark:text-zinc-400">
              <span className="font-medium text-zinc-700 dark:text-zinc-300">Find me on</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/rushinga1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub (github.com/rushinga1)"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="p-1.5 rounded-lg text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram profile"
                  className="p-1.5 rounded-lg text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Frame */}
          <div className="lg:col-span-5 flex items-stretch">
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:h-full min-h-[360px] rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-sm group">
              <img
                src={HERO_PORTRAIT}
                alt="Portrait of MUGISHA RUSHINGA Guevara"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-[50%_14%] transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-zinc-200">
                <span className="font-medium">MUGISHA RUSHINGA Guevara</span>
                <span className="text-zinc-300">Kigali, Rwanda</span>
              </div>
            </div>
          </div>

        </div>

        {/* Full-width Metrics Row */}
        <div className="mt-14 pt-8 border-t border-zinc-200 dark:border-zinc-800 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-zinc-50 font-mono tabular-nums">
              6
            </div>
            <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Live Deployed Projects
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-zinc-50 font-mono tabular-nums">
              4
            </div>
            <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              In Development
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-zinc-50 font-mono tabular-nums">
              19
            </div>
            <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Core Technologies & Tools
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-zinc-50 font-mono tabular-nums">
              3
            </div>
            <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Browser Games Built
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Resume Modal */}
      {showResumeModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setShowResumeModal(false)}
        >
          <div
            className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[88vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800">
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  MUGISHA RUSHINGA Guevara — Curriculum Vitae
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  Web Development · UI/UX Design · Client-Server Systems
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowResumeModal(false)}
                className="p-1 rounded-md text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Resume Body */}
            <div className="py-6 space-y-6 text-sm text-zinc-700 dark:text-zinc-300">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                  Focus & Background
                </h4>
                <p className="leading-relaxed">
                  Developer and UI/UX designer focused on Web Development, UI/UX Design, and Client-Server Systems. Experienced in building practical, scalable web applications—from stock management and e-commerce storefronts to API-powered tools and interactive browser-based games.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                  Technical Stack
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  <div><strong>Frontend:</strong> HTML, CSS, JavaScript, React, Vue.js</div>
                  <div><strong>Backend:</strong> Node.js, REST APIs, Client-Server Systems</div>
                  <div><strong>Design:</strong> Figma, UI/UX Design, Prototyping</div>
                  <div><strong>Deployment:</strong> Web Deployment, Vercel, Git</div>
                  <div><strong>Tools:</strong> GitHub, VS Code, Postman</div>
                  <div><strong>Other:</strong> Responsive Design, Agile</div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                  Featured Live Builds
                </h4>
                <div className="text-xs space-y-1.5 text-zinc-600 dark:text-zinc-400">
                  <div>· <strong>Igisoro</strong> — Digital adaptation of the traditional Rwandan board game with built-in AI logic</div>
                  <div>· <strong>SmartCompany</strong> — Business stock management & inventory tracking platform</div>
                  <div>· <strong>Kigali Tech Store</strong> — Rwanda-inspired electronics e-commerce built with Vue.js</div>
                  <div>· <strong>SkyCast, MRDEVGAME & Mrdev puzzle</strong> — Weather API & browser game builds</div>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                  Contact & Links
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                  <div><strong>Primary Email:</strong> mugishaguevara12@gmail.com</div>
                  <div><strong>Secondary Email:</strong> rushingaguevara12@gmail.com</div>
                  <div><strong>Phone:</strong> 0791 895 352 / 0732 795 406</div>
                  <div><strong>GitHub:</strong> github.com/rushinga1</div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                Kigali, Rwanda · Updated 2026
              </span>
              <button
                type="button"
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm cursor-pointer"
              >
                {downloadSuccess ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>Downloaded Successfully</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Download Official PDF</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
