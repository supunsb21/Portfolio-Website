"use client";

import { useEffect, useRef } from "react";

// SVG icon strings
const ICONS: Record<string, { color: string; svg: string; label: string }> = {
  python: {
    color: "#306998",
    label: "Python",
    svg: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.0164 2C10.8193 2 9.03825 3.72453 9.03825 5.85185V8.51852H15.9235V9.25926H5.97814C3.78107 9.25926 2 10.9838 2 13.1111L2 18.8889C2 21.0162 3.78107 22.7407 5.97814 22.7407H8.27322V19.4815C8.27322 17.3542 10.0543 15.6296 12.2514 15.6296H19.5956C21.4547 15.6296 22.9617 14.1704 22.9617 12.3704V5.85185C22.9617 3.72453 21.1807 2 18.9836 2H13.0164ZM12.0984 6.74074C12.8589 6.74074 13.4754 6.14378 13.4754 5.40741C13.4754 4.67103 12.8589 4.07407 12.0984 4.07407C11.3378 4.07407 10.7213 4.67103 10.7213 5.40741C10.7213 6.14378 11.3378 6.74074 12.0984 6.74074Z" fill="url(#p0)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.9834 30C21.1805 30 22.9616 28.2755 22.9616 26.1482V23.4815L16.0763 23.4815L16.0763 22.7408L26.0217 22.7408C28.2188 22.7408 29.9998 21.0162 29.9998 18.8889V13.1111C29.9998 10.9838 28.2188 9.25928 26.0217 9.25928L23.7266 9.25928V12.5185C23.7266 14.6459 21.9455 16.3704 19.7485 16.3704L12.4042 16.3704C10.5451 16.3704 9.03809 17.8296 9.03809 19.6296L9.03809 26.1482C9.03809 28.2755 10.8192 30 13.0162 30H18.9834ZM19.9015 25.2593C19.1409 25.2593 18.5244 25.8562 18.5244 26.5926C18.5244 27.329 19.1409 27.9259 19.9015 27.9259C20.662 27.9259 21.2785 27.329 21.2785 26.5926C21.2785 25.8562 20.662 25.2593 19.9015 25.2593Z" fill="url(#p1)"/><defs><linearGradient id="p0" x1="12.5" y1="2" x2="12.5" y2="22.7407" gradientUnits="userSpaceOnUse"><stop stop-color="#327EBD"/><stop offset="1" stop-color="#1565A7"/></linearGradient><linearGradient id="p1" x1="19.5" y1="9.25928" x2="19.5" y2="30" gradientUnits="userSpaceOnUse"><stop stop-color="#FFDA4B"/><stop offset="1" stop-color="#F9C600"/></linearGradient></defs></svg>`,
  },
  powerbi: {
    color: "#F2C811",
    label: "Power BI",
    svg: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1600"><mask id="pm" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="200" y="0" width="1200" height="1600"><path d="M1333.25 0c36.86 0 66.75 29.885 66.75 66.75v1466.5c0 36.86-29.89 66.75-66.75 66.75H266.667c-36.819 0-66.667-29.85-66.667-66.67V866.667C200 829.848 229.848 800 266.667 800H525V466.667C525 429.848 554.848 400 591.667 400H850V66.75C850 29.885 879.885 0 916.75 0h416.5z" fill="#fff"/></mask><g mask="url(#pm)"><path d="M1400 66.75v1466.5c0 36.86-29.89 66.75-66.75 66.75h-416.5c-36.865 0-66.75-29.89-66.75-66.75V66.75C850 29.885 879.885 0 916.75 0h416.5c36.87 0 66.75 29.885 66.75 66.75z" fill="url(#pg0)"/><path d="M1075 466.667V1600H525V466.667C525 429.848 554.848 400 591.667 400h416.663c36.82 0 66.67 29.848 66.67 66.667z" fill="url(#pg1)"/><path d="M200 866.667v666.663c0 36.82 29.848 66.67 66.667 66.67H750V866.667C750 829.848 720.152 800 683.333 800H266.667C229.848 800 200 829.848 200 866.667z" fill="url(#pg2)"/></g><defs><linearGradient id="pg0" x1="758" y1="0" x2="1448" y2="1507" gradientUnits="userSpaceOnUse"><stop stop-color="#E6AD10"/><stop offset="1" stop-color="#C87E0E"/></linearGradient><linearGradient id="pg1" x1="525" y1="400" x2="1106" y2="1562" gradientUnits="userSpaceOnUse"><stop stop-color="#F6D751"/><stop offset="1" stop-color="#E6AD10"/></linearGradient><linearGradient id="pg2" x1="200" y1="800" x2="520" y2="1582" gradientUnits="userSpaceOnUse"><stop stop-color="#F9E589"/><stop offset="1" stop-color="#F6D751"/></linearGradient></defs></svg>`,
  },
  sql: {
    color: "#3276c3",
    label: "SQL",
    svg: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M8.562,15.256A21.159,21.159,0,0,0,16,16.449a21.159,21.159,0,0,0,7.438-1.194c1.864-.727,2.525-1.535,2.525-2V9.7a10.357,10.357,0,0,1-2.084,1.076A22.293,22.293,0,0,1,16,12.078a22.36,22.36,0,0,1-7.879-1.3A10.28,10.28,0,0,1,6.037,9.7v3.55C6.037,13.724,6.7,14.528,8.562,15.256Z" fill="#3276c3"/><path d="M8.562,21.961a15.611,15.611,0,0,0,2.6.741A24.9,24.9,0,0,0,16,23.155a24.9,24.9,0,0,0,4.838-.452,15.614,15.614,0,0,0,2.6-.741c1.864-.727,2.525-1.535,2.525-2v-3.39a10.706,10.706,0,0,1-1.692.825A23.49,23.49,0,0,1,16,18.74a23.49,23.49,0,0,1-8.271-1.348,10.829,10.829,0,0,1-1.692-.825V19.96C6.037,20.426,6.7,21.231,8.562,21.961Z" fill="#3276c3"/><path d="M16,30c5.5,0,9.963-1.744,9.963-3.894V23.269a10.5,10.5,0,0,1-1.535.762l-.157.063A23.487,23.487,0,0,1,16,25.445a23.422,23.422,0,0,1-8.271-1.351c-.054-.02-.106-.043-.157-.063a10.5,10.5,0,0,1-1.535-.762v2.837C6.037,28.256,10.5,30,16,30Z" fill="#3276c3"/><ellipse cx="16" cy="5.894" rx="9.963" ry="3.894" fill="#3276c3"/></svg>`,
  },
  pytorch: {
    color: "#EE4C2C",
    label: "PyTorch",
    svg: `<svg viewBox="-27 0 310 310" xmlns="http://www.w3.org/2000/svg"><path d="M218.281037,90.106412 C268.572988,140.398363 268.572988,221.075034 218.281037,271.716235 C169.036835,322.008186 88.0109141,322.008186 37.7189632,271.716235 C-12.5729877,221.424284 -12.5729877,140.398363 37.7189632,90.106412 L127.825375,0 L127.825375,45.053206 L119.443383,53.4351978 L59.7216917,113.156889 C22.0027285,150.177353 22.0027285,210.946794 59.7216917,248.665757 C96.7421555,286.38472 157.511596,286.38472 195.230559,248.665757 C232.949523,211.645293 232.949523,150.875853 195.230559,113.156889 L218.281037,90.106412 Z M173.227831,84.5184175 C182.486323,84.5184175 189.991814,77.0129263 189.991814,67.7544338 C189.991814,58.4959413 182.486323,50.9904502 173.227831,50.9904502 C163.969338,50.9904502 156.463847,58.4959413 156.463847,67.7544338 C156.463847,77.0129263 163.969338,84.5184175 173.227831,84.5184175 Z" fill="#EE4C2C"/></svg>`,
  },
  sklearn: {
    color: "#F7931E",
    label: "Scikit Learn",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#f89939" d="M98.18 88.13c15.63-15.62 18.23-38.36 5.8-50.78-12.43-12.42-35.17-9.82-50.8 5.8-15.63 15.62-11.11 45.48-5.8 50.78 4.29 4.29 35.17 9.82 50.8-5.8Z"/><path fill="#3499cd" d="M34.04 65.56c-9.07-9.06-22.27-10.57-29.48-3.37-7.21 7.21-5.7 20.4 3.37 29.46 9.07 9.07 26.4 6.44 29.48 3.37 2.49-2.49 5.71-20.4-3.37-29.46Z"/><path fill="#010101" d="M123.82 85.68c-.58 0-.87-.35-.87-1.06 0-.53.35-1.69 1.04-3.46 1.01-2.59 1.52-4.45 1.52-5.58 0-.68-.2-1.25-.6-1.7-.4-.45-.9-.68-1.5-.68-.88 0-1.89.41-3.03 1.24-1.14.83-2.67 2.32-4.6 4.48.28-1.4.88-3.32 1.78-5.76l-4.31.83c-.98 2.12-1.69 4.03-2.13 5.73-.22.83-.38 1.69-.49 2.56-1.35 1.31-2.23 2.1-2.61 2.39-.39.29-.8.43-1.22.43-.39 0-.7-.15-.93-.44-.23-.29-.34-.69-.34-1.18 0-.53.1-1.14.3-1.83s.64-1.99 1.33-3.9l1.64-4.52-1.61.07c-1.46 2.78-3.17 4.28-5.13 4.49.53-1.38.8-2.44.8-3.18 0-.94-.46-1.41-1.38-1.41-1.09 0-1.94.51-2.55 1.54-.62 1.03-.93 2-.93 2.91s.51 1.55 1.52 2c-.66.97-1.4 1.88-2.2 2.74-.95.94-1.69 1.66-2.23 2.13-.55.49-1.06.73-1.52.73-.72 0-1.08-.51-1.08-1.52s.4-2.75 1.2-5.35l1.56-5.18h-.99l-3.61 2c-.59-1.35-1.62-2.03-3.09-2.03-1.17 0-2.51.5-4.03 1.49-1.52.99-2.77 2.28-3.74 3.89-.75 1.24-1.21 2.54-1.38 3.88-1.36 1.36-2.38 2.24-3.06 2.65-.71.42-1.45.63-2.23.63-1.99 0-3.22-1.15-3.69-3.45 5.19-1.52 7.78-3.5 7.78-5.94 0-.92-.33-1.66-.99-2.23-.66-.57-1.54-.85-2.63-.85-2.11 0-4.03 1.01-5.76 3.03-1.57 1.83-2.42 3.86-2.57 6.09-1.43 1.41-2.51 2.34-3.21 2.79-.72.46-1.4.69-2.03.69s-1.13-.3-1.5-.9c-.38-.6-.57-1.41-.57-2.44 0-.46.05-1.3.14-2.53 2.36-2.56 4.09-4.96 5.2-7.21 1.11-2.25 1.66-4.58 1.66-6.98 0-.85-.11-1.52-.33-2.02-.22-.5-.5-.75-.84-.75-.07 0-.18.02-.32.07l-4.49 1.66c-1.53 2.92-2.84 6.11-3.91 9.58-1.07 3.46-1.61 6.43-1.61 8.9 0 1.65.38 2.96 1.16 3.94.77.98 1.79 1.47 3.05 1.47 1.1 0 2.25-.35 3.46-1.05 1.21-.7 2.61-1.79 4.22-3.26.19 1.11.65 2.04 1.37 2.8.99 1.02 2.28 1.54 3.88 1.54 1.44 0 2.75-.35 3.94-1.05 1.15-.67 2.44-1.72 3.88-3.11.12 1.04.46 1.94 1.03 2.71.73.97 1.61 1.46 2.64 1.46s2.09-.4 3.09-1.2c1-.8 2.08-2.05 3.26-3.73-.11 3.29.77 4.93 2.63 4.93.74 0 1.52-.27 2.33-.81s2.16-1.71 4.05-3.5c1.64-1.62 2.84-3.14 3.61-4.56 1.04-.18 1.99-.49 2.86-.94-1.78 2.79-2.67 5.02-2.67 6.68 0 .9.25 1.65.74 2.25.49.6 1.1.91 1.82.91 1.57 0 3.8-1.41 6.68-4.2 0 .22-.02.43-.02.65 0 .78.07 1.96.19 3.55l3.91-.92c0-1.06.02-1.9.05-2.53.06-.84.18-1.76.35-2.76.11-.59.38-1.15.81-1.68l.99-1.15c.36-.42.71-.8 1.02-1.13.37-.39.7-.72.99-.99.33-.29.62-.53.87-.69.27-.16.49-.25.65-.25.29 0 .44.19.44.57s-.28 1.26-.83 2.65c-1.04 2.59-1.56 4.52-1.56 5.78 0 .93.24 1.67.73 2.23.48.55 1.12.83 1.91.83 1.94 0 4.28-1.44 7-4.31V82.3c-1.93 2.27-3.32 3.41-4.18 3.41Z"/></svg>`,
  },
  keras: {
    color: "#D00000",
    label: "Keras",
    svg: `<svg fill="#d00001" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 0H0v24h24V0zM8.45 5.16l.2.17v6.24l6.46-6.45h1.96l.2.4-5.14 5.1 5.47 7.94-.2.3h-1.94l-4.65-6.88-2.16 2.08v4.6l-.19.2H7l-.2-.2V5.33l.17-.17h1.48z"/></svg>`,
  },
};

const GLOW = {
  cyan: {
    primary: "rgba(6,182,212,0.4)",
    secondary: "rgba(6,182,212,0.2)",
    border: "rgba(6,182,212,0.3)",
  },
  purple: {
    primary: "rgba(147,51,234,0.4)",
    secondary: "rgba(147,51,234,0.2)",
    border: "rgba(147,51,234,0.3)",
  },
};

interface SkillConfig {
  id: string;
  iconType: string;
  orbitRadius: number;
  size: number;
  speed: number;
  phaseShift: number;
  glowColor: "cyan" | "purple";
  label: string;
}

function getResponsiveConfig(containerSize: number) {
  const isMobile = window.innerWidth < 768;
  const size = Math.max(240, Math.min(containerSize, 480));
  const half = size / 2;
  const innerRadius = Math.max(60, half * (isMobile ? 0.42 : 0.5));
  const outerRadius = Math.max(innerRadius + 30, half * (isMobile ? 0.7 : 0.78));
  const baseIcon = size * (isMobile ? 0.16 : 0.18);
  const iconSize = Math.max(32, Math.min(48, baseIcon * 0.55));
  return { innerRadius, outerRadius, iconSize };
}

export default function Orbiter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const timeRef = useRef(0);
  const lastTimeRef = useRef(0);
  const isPausedRef = useRef(false);
  const activeSkillsRef = useRef<{ el: HTMLDivElement; config: SkillConfig }[]>([]);

  const buildOrbiter = () => {
    const container = containerRef.current;
    const pathsLayer = pathsRef.current;
    const skillsLayer = skillsRef.current;
    if (!container || !pathsLayer || !skillsLayer) return;

    pathsLayer.innerHTML = "";
    skillsLayer.innerHTML = "";

    const { innerRadius, outerRadius, iconSize } = getResponsiveConfig(container.clientWidth);

    const PI2_3 = (2 * Math.PI) / 3;

    // Render orbit rings
    [
      { radius: innerRadius, glow: "cyan" as const, delay: 0 },
      { radius: outerRadius, glow: "purple" as const, delay: 1.5 },
    ].forEach(({ radius, glow, delay }) => {
      const colors = GLOW[glow];
      const div = document.createElement("div");
      div.className =
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none";
      div.style.width = `${radius * 2}px`;
      div.style.height = `${radius * 2}px`;

      const inner = document.createElement("div");
      inner.className = "absolute inset-0 rounded-full";
      inner.style.background = `radial-gradient(circle, transparent 30%, ${colors.secondary} 70%, ${colors.primary} 100%)`;
      inner.style.boxShadow = `0 0 60px ${colors.primary}, inset 0 0 60px ${colors.secondary}`;
      inner.style.animation = `pulse-ring 4s ease-in-out infinite`;
      inner.style.animationDelay = `${delay}s`;

      const border = document.createElement("div");
      border.className = "absolute inset-0 rounded-full";
      border.style.border = `1px solid ${colors.border}`;
      border.style.boxShadow = `inset 0 0 20px ${colors.secondary}`;

      div.appendChild(inner);
      div.appendChild(border);
      pathsLayer.appendChild(div);
    });

    const skillsConfig: SkillConfig[] = [
      { id: "python", iconType: "python", orbitRadius: innerRadius, size: iconSize, speed: 1.5, phaseShift: 0, glowColor: "cyan", label: "Python" },
      { id: "powerbi", iconType: "powerbi", orbitRadius: innerRadius, size: iconSize, speed: 1.5, phaseShift: PI2_3, glowColor: "cyan", label: "Power BI" },
      { id: "sql", iconType: "sql", orbitRadius: innerRadius, size: iconSize, speed: 1.5, phaseShift: PI2_3 * 2, glowColor: "cyan", label: "SQL" },
      { id: "pytorch", iconType: "pytorch", orbitRadius: outerRadius, size: iconSize, speed: -0.6, phaseShift: 0, glowColor: "purple", label: "PyTorch" },
      { id: "sklearn", iconType: "sklearn", orbitRadius: outerRadius, size: iconSize, speed: -0.6, phaseShift: PI2_3, glowColor: "purple", label: "Scikit Learn" },
      { id: "keras", iconType: "keras", orbitRadius: outerRadius, size: iconSize, speed: -0.6, phaseShift: PI2_3 * 2, glowColor: "purple", label: "Keras" },
    ];

    activeSkillsRef.current = skillsConfig.map((cfg) => {
      const el = document.createElement("div");
      el.className = "skill-item";
      el.style.width = `${cfg.size}px`;
      el.style.height = `${cfg.size}px`;

      const iconData = ICONS[cfg.iconType];
      const inner = document.createElement("div");
      inner.className =
        "skill-inner relative w-full h-full p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg";
      inner.innerHTML = iconData.svg;

      inner.addEventListener("mouseenter", () => {
        inner.style.boxShadow = `0 0 30px ${iconData.color}40, 0 0 60px ${iconData.color}20`;
      });
      inner.addEventListener("mouseleave", () => {
        inner.style.boxShadow = "";
      });

      const tooltip = document.createElement("div");
      tooltip.className =
        "tooltip absolute top-full left-1/2 -translate-x-1/2 translate-y-2 px-2 py-1 bg-gray-900/95 rounded text-xs text-white whitespace-nowrap pointer-events-none opacity-0 transition-all duration-300 z-[60] shadow-lg";
      tooltip.innerText = cfg.label;
      inner.appendChild(tooltip);
      el.appendChild(inner);
      skillsLayer.appendChild(el);

      return { el, config: cfg };
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    buildOrbiter();
    lastTimeRef.current = performance.now();

    const onEnter = () => (isPausedRef.current = true);
    const onLeave = () => (isPausedRef.current = false);
    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);

    const animate = (now: number) => {
      const delta = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;

      if (!isPausedRef.current && activeSkillsRef.current.length > 0) {
        timeRef.current += delta;
        activeSkillsRef.current.forEach(({ el, config }) => {
          const angle = timeRef.current * config.speed + config.phaseShift;
          const x = Math.cos(angle) * config.orbitRadius;
          const y = Math.sin(angle) * config.orbitRadius;
          el.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
        });
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(buildOrbiter, 200);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", onResize);
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full flex items-center justify-center relative overflow-hidden py-10 md:py-0">
      <div id="orbit-container" ref={containerRef} className="relative flex items-center justify-center">
        {/* Center node */}
        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-gray-200 to-gray-400 dark:from-gray-700 dark:to-gray-900 rounded-full flex items-center justify-center z-10 relative shadow-2xl">
          <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-xl animate-pulse" />
          <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-9 md:h-9" viewBox="0 0 24 24" fill="none" stroke="url(#cg)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <defs>
                <linearGradient id="cg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="100%" stopColor="#9333EA" />
                </linearGradient>
              </defs>
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
        </div>

        <div ref={pathsRef} className="absolute inset-0 pointer-events-none" />
        <div ref={skillsRef} className="absolute inset-0" />
      </div>
    </div>
  );
}
