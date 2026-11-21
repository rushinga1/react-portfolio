import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, CheckCircle2, Code, Sparkles, Server, Gamepad2 } from 'lucide-react';
import { HERO_PORTRAIT } from '../data/portfolioData';

export const AboutPage: React.FC = () => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 3000);
  };

  return (
    <div className="py-8 sm:py-14 space-y-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Bio Header Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            About & Focus Areas
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 leading-tight">
            Building practical, scalable applications and browser-based games.
          </h1>
          <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
            I am MUGISHA RUSHINGA Guevara, a developer and designer focused on Web Development, UI/UX Design, and Client-Server Systems. My work spans from real-time API utilities, business inventory tools, and Vue.js e-commerce storefronts to digital adaptations of traditional board games and multi-level platformers.
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Whether prototyping clean social feed flows in Figma, wiring REST APIs with Node.js and Postman, or collaborating in Agile group sprints on GitHub, I care deeply about responsive design, straightforward user experiences, and deploying reliable products to the web.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm cursor-pointer"
            >
              {downloadSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>CV Downloaded (PDF)</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>View Resume/CV</span>
                </>
              )}
            </button>

            <a
              href="https://github.com/rushinga1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span>github.com/rushinga1</span>
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span>Discuss a project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative aspect-[3/4] max-h-[480px] mx-auto rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-md">
            <img
              src={HERO_PORTRAIT}
              alt="Portrait of MUGISHA RUSHINGA Guevara"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-[50%_14%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-xs text-zinc-200 flex justify-between">
              <span>MUGISHA RUSHINGA Guevara</span>
              <span className="text-zinc-300">Kigali, Rwanda</span>
            </div>
          </div>
        </div>
      </div>

      {/* Broader Focus Areas */}
      <div className="space-y-6 pt-4 border-t border-zinc-200 dark:border-zinc-800">
        <div className="space-y-1">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Core Disciplines
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            Broader Focus Areas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm space-y-3">
            <div className="p-2 w-fit rounded-lg bg-zinc-100 dark:bg-zinc-800 text-blue-600 dark:text-blue-400">
              <Code className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
              01. Web Development
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Building practical, responsive applications using HTML, CSS, JavaScript, React, and Vue.js—from SmartCompany inventory tools to Kigali Tech Store.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm space-y-3">
            <div className="p-2 w-fit rounded-lg bg-zinc-100 dark:bg-zinc-800 text-blue-600 dark:text-blue-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
              02. UI/UX Design
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Designing clean visual systems and interactive prototypes in Figma (such as Incognito) with smooth user flows and cross-device responsiveness.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm space-y-3">
            <div className="p-2 w-fit rounded-lg bg-zinc-100 dark:bg-zinc-800 text-blue-600 dark:text-blue-400">
              <Server className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
              03. Client-Server Systems
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Connecting interfaces with Node.js backends and REST APIs for scalable group and company-commissioned builds like OnTheGo and Agruni.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm space-y-3">
            <div className="p-2 w-fit rounded-lg bg-zinc-100 dark:bg-zinc-800 text-blue-600 dark:text-blue-400">
              <Gamepad2 className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
              04. Browser-Based Games
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Engineering interactive games directly in the browser, including Igisoro (traditional Rwandan strategy with AI logic), MRDEVGAME, and Mrdev puzzle.
            </p>
          </div>
        </div>
      </div>

      {/* Daily Workflow & Tooling */}
      <div className="space-y-6 pt-4 border-t border-zinc-200 dark:border-zinc-800">
        <div className="space-y-1">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Workflow & Tooling
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            Daily Engineering Setup
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-1.5">
            <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Code Editor</div>
            <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100">VS Code</div>
            <div className="text-xs text-zinc-500">Frontend, Node.js & Git workflow</div>
          </div>
          <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-1.5">
            <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Design & Prototypes</div>
            <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Figma</div>
            <div className="text-xs text-zinc-500">UI/UX wireframes & interactive flows</div>
          </div>
          <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-1.5">
            <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">API & Collaboration</div>
            <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Postman & GitHub</div>
            <div className="text-xs text-zinc-500">REST API testing & version control</div>
          </div>
          <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-1.5">
            <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Hosting & Delivery</div>
            <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Vercel & Agile</div>
            <div className="text-xs text-zinc-500">Fast web deployment & sprint iteration</div>
          </div>
        </div>
      </div>

    </div>
  );
};
