"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

declare global {
  interface Window {
    __appReady?: boolean;
  }
}

export default function Preloader() {
  const root = useRef<HTMLDivElement>(null);
  const num = useRef<HTMLSpanElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const done = () => {
      window.__appReady = true;
      window.dispatchEvent(new Event("app:ready"));
      setGone(true);
    };
    if (reduce) return done();

    const counter = { v: 0 };
    const tl = gsap.timeline({ onComplete: done });
    tl.from("[data-pre-logo]", {
      scale: 0.7,
      opacity: 0,
      duration: 0.7,
      ease: "back.out(1.6)",
    })
      .to(
        counter,
        {
          v: 100,
          duration: 1.3,
          ease: "power2.inOut",
          onUpdate: () => {
            if (num.current) num.current.textContent = String(Math.round(counter.v));
            if (bar.current) bar.current.style.transform = `scaleX(${counter.v / 100})`;
          },
        },
        0.1,
      )
      .to("[data-pre-inner]", { opacity: 0, y: -20, duration: 0.35 })
      .to(root.current, {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.9,
        ease: "expo.inOut",
      }, "-=0.1")
      .add(() => {
        window.__appReady = true;
        window.dispatchEvent(new Event("app:ready"));
      }, "-=0.45");

    return () => {
      tl.kill();
    };
  }, []);

  if (gone) return null;

  return (
    <div
      ref={root}
      className="preloader fixed inset-0 z-[100] grid place-items-center bg-[#040a1f]"
      style={{ clipPath: "inset(0 0 0 0)" }}
      role="status"
      aria-label="Loading"
    >
      <div data-pre-inner className="flex flex-col items-center gap-8">
        <div
          data-pre-logo
          className="rounded-[2rem] bg-white p-4 shadow-[0_0_80px_rgba(42,85,255,0.55)]"
        >
          <Image
            src="/logo.jpg"
            alt="Trevor's Home Solutions logo"
            width={914}
            height={1000}
            priority
            className="h-44 w-auto"
          />
        </div>
        <div className="w-56">
          <div className="h-[3px] w-full overflow-hidden rounded bg-white/15">
            <div
              ref={bar}
              className="h-full origin-left rounded bg-gradient-to-r from-[#e4202b] to-[#5b81ff]"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
          <div className="font-display mt-3 text-right text-sm font-bold tracking-widest text-white/70">
            <span ref={num}>0</span>%
          </div>
        </div>
      </div>
    </div>
  );
}
