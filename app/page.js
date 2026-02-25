'use client';

import dynamic from 'next/dynamic';
import { useState, useRef, useEffect } from 'react';

const Penflow = dynamic(() => import('penflow/react').then((m) => m.Penflow), {
  ssr: false,
  loading: () => <div className="text-white/60 text-sm">Loading...</div>,
});

export default function ScriptMotion() {
  const [text, setText] = useState('ScriptMotion');
  const [fontUrl, setFontUrl] = useState('/fonts/BrittanySignature.ttf');
  const [speed, setSpeed] = useState(1);
  const [textColor, setTextColor] = useState('#ffa200');
  const [bgColor, setBgColor] = useState('#1c1c1e');
  const [showExportMenu, setShowExportMenu] = useState(false);
  const [playheadKey, setPlayheadKey] = useState(0);

  const handleTextChange = (e) => {
    setText(e.target.value || 'ScriptMotion');
  };

  const handleFontChange = (e) => {
    setFontUrl(e.target.value);
  };

  const handleTextColorChange = (e) => {
    setTextColor(e.target.value);
  };

  const handleBgColorChange = (e) => {
    setBgColor(e.target.value);
  };

  const handleReplay = () => {
    setPlayheadKey((k) => k + 1);
  };

  const toggleExportMenu = (e) => {
    e.stopPropagation();
    setShowExportMenu(!showExportMenu);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showExportMenu && !e.target.closest('.btn-export-group')) {
        setShowExportMenu(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showExportMenu]);

  return (
    <div className="min-h-screen w-screen overflow-y-scroll flex flex-col items-center ">
      {/* Header */}
      <header className="w-full max-w-[1400px] px-10 py-8 flex justify-between items-center z-10">
        <div className="flex flex-col gap-1">
          <div className="text-[28px] text-[var(--text-primary)] tracking-wide" style={{ fontFamily: 'var(--font-allura)' }}>
            ScriptMotion
          </div>
          <div className="font-[var(--font-inter)] text-[11px] uppercase tracking-[2px] text-[var(--text-secondary)] font-medium">
            Bring words to life
          </div>
        </div>
        <div className="bg-white/10 px-[10px] py-1 rounded-[20px] text-[10px] font-[var(--font-jetbrains)] text-[var(--text-secondary)] border border-white/5">
          BETA v0.9
        </div>
      </header>

      {/* Canvas Stage */}
      <main className="flex-grow w-full max-w-[1000px]  flex justify-center items-center relative px-5">
        <div 
          className="relative w-full h-full min-h-[300px] rounded-[var(--radius-lg)] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[var(--glass-border)] flex items-center justify-center transition-all duration-400"
          style={{ background: bgColor }}
        >
          {/* <div className="grid-overlay absolute inset-0 pointer-events-none opacity-10"></div> */}
          <div className="relative z-[2] flex items-center justify-center min-h-[200px]">
            <Penflow
              text={text}
              fontUrl={fontUrl}
              color={textColor}
              autoReplay={false}
              speed={speed}
              playheadKey={playheadKey}
            />
          </div>
        </div>
      </main>

      {/* Control Panel */}
      <section className="w-full max-w-[800px] mx-4 sm:mx-6 md:mx-auto mb-6 sm:mb-10 pb-[max(1.5rem,env(safe-area-inset-bottom))] bg-[var(--glass-panel)] backdrop-blur-[var(--glass-blur)] border border-[var(--glass-border)] rounded-[var(--radius-lg)] px-4 py-5 sm:px-6 sm:py-6 flex flex-col gap-4 sm:gap-5 shadow-[0_10px_40px_rgba(0,0,0,0.3)] relative z-20">
        {/* Text Input */}
        <div className="relative w-full border-b border-white/10">
          <input
            type="text"
            className="w-full bg-transparent border-none text-[var(--text-primary)] font-[var(--font-inter)] text-lg font-normal pb-3 resize-none h-11 transition-all duration-200 focus:outline-none placeholder:text-[var(--text-secondary)]"
            placeholder="Type your text here..."
            autoComplete="off"
            value={text === 'ScriptMotion' ? '' : text}
            onChange={handleTextChange}
          />
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-5 sm:gap-6">
          {/* Settings Cluster */}
          <div className="flex flex-wrap items-end gap-6 sm:gap-10 flex-1 min-w-0">
            {/* Typography */}
            <div className="flex flex-col shrink-0">
              <label className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.12em] text-[var(--text-secondary)] mb-1.5 block">
                Typography
              </label>
              <select
                className="pill-select appearance-none bg-white/5 border border-white/10 text-[var(--text-primary)] px-4 py-2 rounded-[var(--radius-pill)] font-[var(--font-inter)] text-[13px] cursor-pointer transition-all duration-200 min-w-[140px] pr-9 hover:bg-white/10 hover:border-white/20"
                value={fontUrl}
                onChange={handleFontChange}
              >
                <option value="/fonts/BrittanySignature.ttf">Brittany Signature</option>
              </select>
            </div>

            {/* Speed */}
            <div className="flex flex-col shrink-0">
              <label className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.12em] text-[var(--text-secondary)] mb-1.5 block">
                Speed
              </label>
              <div className="flex items-center gap-2.5 h-9">
                {[0.5, 1, 1.5, 2].map((level) => (
                  <button
                    key={level}
                    className={`speed-bar w-[3px] rounded-full transition-all duration-200 cursor-pointer border-none ${
                      speed === level
                        ? 'bg-[var(--accent-orange)] shadow-[0_0_6px_var(--accent-orange)]'
                        : 'bg-[var(--text-tertiary)] hover:bg-[var(--text-secondary)]'
                    }`}
                    style={{ height: speed === level ? '24px' : '16px' }}
                    onClick={() => {
                      setSpeed(level);
                      setPlayheadKey((k) => k + 1);
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Palette */}
            <div className="flex flex-col shrink-0">
              <label className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.12em] text-[var(--text-secondary)] mb-1.5 block">
                Palette
              </label>
              <div className="flex gap-3 items-center">
                <button
                  className="w-9 h-9 rounded-full border-2 border-white/20 relative cursor-pointer transition-all duration-200 hover:scale-110 hover:border-[var(--text-primary)]"
                  onClick={() => document.getElementById('textColorPicker').click()}
                  title="Text Color"
                >
                  <div
                    className="absolute inset-[3px] rounded-full"
                    style={{ background: textColor }}
                  ></div>
                </button>
                <input
                  type="color"
                  id="textColorPicker"
                  className="absolute opacity-0 w-0 h-0"
                  value={textColor}
                  onChange={handleTextColorChange}
                />
                <button
                  className="w-9 h-9 rounded-full border-2 border-white/20 relative cursor-pointer transition-all duration-200 hover:scale-110 hover:border-[var(--text-primary)]"
                  onClick={() => document.getElementById('bgColorPicker').click()}
                  title="Background Color"
                >
                  <div
                    className="absolute inset-[3px] rounded-full"
                    style={{ background: bgColor }}
                  ></div>
                </button>
                <input
                  type="color"
                  id="bgColorPicker"
                  className="absolute opacity-0 w-0 h-0"
                  value={bgColor}
                  onChange={handleBgColorChange}
                />
              </div>
            </div>
          </div>

          {/* Actions Cluster */}
          <div className="flex items-center justify-end sm:justify-start gap-3 sm:gap-4 pt-1 sm:pt-0 shrink-0">
            <button
              className="bg-transparent border-none text-[var(--text-secondary)] font-[var(--font-inter)] text-[13px] font-medium cursor-pointer px-3 py-2.5 sm:py-2 min-h-[44px] sm:min-h-0 flex items-center gap-1.5 hover:text-[var(--text-primary)] touch-manipulation"
              onClick={handleReplay}
            >
              <svg className="w-3.5 h-3.5 stroke-current stroke-2" viewBox="0 0 24 24" fill="none">
                <path d="M20 4v5h-5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 20v-5h5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20.49 9A9 9 0 0 0 5.64 5.64L4 9" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.51 15a9 9 0 0 0 14.85 3.36L20 15" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Replay
            </button>

            <div className="btn-export-group relative">
              <button
                className="bg-[var(--text-primary)] text-black border-none h-11 sm:h-10 min-h-[44px] px-5 pl-6 rounded-[var(--radius-pill)] font-[var(--font-inter)] text-sm font-semibold cursor-pointer flex items-center gap-2 transition-all duration-100 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] active:scale-[0.98] touch-manipulation"
                onClick={toggleExportMenu}
              >
                Export
                <svg
                  className="w-4 h-4 opacity-60 transition-transform duration-200"
                  style={{ transform: showExportMenu ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div
                className={`absolute bottom-[120%] right-0 w-[180px] bg-[#1c1c1e] border border-[var(--glass-border)] rounded-[var(--radius-md)] p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-200 ${
                  showExportMenu
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible translate-y-2.5'
                }`}
              >
                <button className="block w-full text-left py-2.5 px-3 bg-transparent border-none text-[var(--text-secondary)] text-[13px] font-[var(--font-inter)] cursor-pointer rounded-lg transition-all duration-100 hover:bg-white/10 hover:text-[var(--text-primary)]">
                  Export as GIF
                </button>
                <button className="block w-full text-left py-2.5 px-3 bg-transparent border-none text-[var(--text-secondary)] text-[13px] font-[var(--font-inter)] cursor-pointer rounded-lg transition-all duration-100 hover:bg-white/10 hover:text-[var(--text-primary)]">
                  Export as Video (.mp4)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
