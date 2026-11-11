"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const d = dot.current;
    const r = ring.current;
    if (!d || !r) return;
    document.body.classList.add("has-cursor");

    const dx = gsap.quickTo(d, "x", { duration: 0.1, ease: "power3" });
    const dy = gsap.quickTo(d, "y", { duration: 0.1, ease: "power3" });
    const rx = gsap.quickTo(r, "x", { duration: 0.45, ease: "power3" });
    const ry = gsap.quickTo(r, "y", { duration: 0.45, ease: "power3" });

    const move = (e: PointerEvent) => {
      dx(e.clientX);
      dy(e.clientY);
      rx(e.clientX);
      ry(e.clientY);
      gsap.to([d, r], { opacity: 1, duration: 0.2, overwrite: "auto" });
    };
    const over = (e: PointerEvent) => {
      const t = (e.target as HTMLElement).closest("a, button, [data-cursor]");
      gsap.to(r, {
        scale: t ? 1.9 : 1,
        backgroundColor: t ? "rgba(228,32,43,0.12)" : "rgba(228,32,43,0)",
        duration: 0.3,
      });
      gsap.to(d, { scale: t ? 0.4 : 1, duration: 0.3 });
    };
    const leave = () => gsap.to([d, r], { opacity: 0, duration: 0.2 });

    addEventListener("pointermove", move, { passive: true });
    addEventListener("pointerover", over, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      document.body.classList.remove("has-cursor");
      removeEventListener("pointermove", move);
      removeEventListener("pointerover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <>
      <div
        ref={ring}
        className="cursor pointer-events-none fixed left-0 top-0 z-[90] -ml-5 -mt-5 h-10 w-10 rounded-full border border-accent opacity-0"
        aria-hidden="true"
      />
      <div
        ref={dot}
        className="cursor pointer-events-none fixed left-0 top-0 z-[91] -ml-[3px] -mt-[3px] h-[6px] w-[6px] rounded-full bg-accent opacity-0"
        aria-hidden="true"
      />
    </>
  );
}
