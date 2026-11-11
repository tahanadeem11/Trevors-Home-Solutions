"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const words = (el: Element) => Array.from(el.querySelectorAll<HTMLElement>(".wi"));

export default function ScrollFx() {
  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    /* ---------- Smooth scroll (Lenis) wired to ScrollTrigger ---------- */
    const lenis = new Lenis({ lerp: 0.1, anchors: true });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    let onReady: (() => void) | undefined;
    const ctx = gsap.context(() => {
      /* ---------- Scroll progress ---------- */
      gsap.to("[data-progress]", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { scrub: 0.2, start: 0, end: "max" },
      });

      /* ---------- Hero intro (waits for the preloader) ---------- */
      const heroWords: HTMLElement[] = [];
      document.querySelectorAll<HTMLElement>("[data-hero-split]").forEach((el) => {
        heroWords.push(...words(el));
      });

      const intro = gsap.timeline({ paused: true, defaults: { ease: "power4.out" } });
      intro
        .fromTo(
          heroWords,
          { yPercent: 115, y: 0 },
          { yPercent: 0, y: 0, duration: 1.1, stagger: 0.06 },
        )
        .to("[data-hero]", { opacity: 1, y: 0, duration: 0.9, stagger: 0.1 }, "-=0.7");
      onReady = () => intro.play();
      if (window.__appReady) onReady();
      else window.addEventListener("app:ready", onReady, { once: true });

      /* ---------- Split headings on scroll ---------- */
      document.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => {
        const ws = words(el);
        gsap.fromTo(ws, { yPercent: 115, y: 0 }, {
          yPercent: 0,
          y: 0,
          duration: 0.9,
          stagger: 0.05,
          ease: "power4.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      /* ---------- Generic reveals ---------- */
      ScrollTrigger.batch("[data-reveal]", {
        start: "top 90%",
        once: true,
        onEnter: (els) =>
          gsap.to(els, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.1,
            overwrite: true,
          }),
      });

      /* ---------- Parallax images ---------- */
      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const amt = parseFloat(el.dataset.parallax || "12");
        gsap.fromTo(
          el,
          { yPercent: -amt },
          {
            yPercent: amt,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });

      /* ---------- Counters ---------- */
      document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
        const end = parseFloat(el.dataset.count || "0");
        const obj = { v: 0 };
        gsap.to(obj, {
          v: end,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => (el.textContent = String(Math.round(obj.v))),
          scrollTrigger: { trigger: el, start: "top 92%" },
        });
      });

      /* ---------- Process line draw ---------- */
      gsap.fromTo(
        "[data-line]",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: "[data-line-wrap]",
            start: "top 70%",
            end: "bottom 60%",
            scrub: true,
          },
        },
      );

      /* ---------- Horizontal gallery (desktop only) ---------- */
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const wrap = document.querySelector<HTMLElement>("[data-hscroll]");
        const track = document.querySelector<HTMLElement>("[data-htrack]");
        if (!wrap || !track) return;
        const dist = () => Math.max(0, track.scrollWidth - window.innerWidth);
        gsap.to(track, {
          x: () => -dist(),
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            pin: true,
            scrub: 0.8,
            start: "top top",
            end: () => "+=" + dist(),
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
        gsap.to("[data-hbar]", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top top",
            end: () => "+=" + dist(),
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      });

      /* ---------- Radar rings ---------- */
      gsap.from("[data-ring]", {
        scale: 0,
        opacity: 0,
        transformOrigin: "250px 250px",
        duration: 1.2,
        stagger: 0.18,
        ease: "expo.out",
        scrollTrigger: { trigger: "[data-radar]", start: "top 80%" },
      });
      gsap.from("[data-city]", {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "back.out(2)",
        transformOrigin: "center",
        scrollTrigger: { trigger: "[data-radar]", start: "top 70%" },
      });
    });

    /* ---------- Pointer effects (spotlight, tilt, magnetic) ---------- */
    const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
    const onMove = (e: PointerEvent) => {
      const t = e.target as HTMLElement;
      const spot = t.closest<HTMLElement>(".spot");
      if (spot) {
        const r = spot.getBoundingClientRect();
        spot.style.setProperty("--mx", `${e.clientX - r.left}px`);
        spot.style.setProperty("--my", `${e.clientY - r.top}px`);
      }
      const tilt = t.closest<HTMLElement>("[data-tilt]");
      if (tilt) {
        const r = tilt.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        gsap.to(tilt, {
          rotateY: px * 14,
          rotateX: -py * 14,
          transformPerspective: 900,
          duration: 0.5,
          ease: "power3.out",
        });
      }
      const mag = t.closest<HTMLElement>("[data-magnetic]");
      if (mag) {
        const r = mag.getBoundingClientRect();
        gsap.to(mag, {
          x: (e.clientX - (r.left + r.width / 2)) * 0.3,
          y: (e.clientY - (r.top + r.height / 2)) * 0.4,
          duration: 0.4,
          ease: "power3.out",
        });
      }
    };
    const onOut = (e: PointerEvent) => {
      const t = e.target as HTMLElement;
      const tilt = t.closest<HTMLElement>("[data-tilt]");
      if (tilt && !tilt.contains(e.relatedTarget as Node)) {
        gsap.to(tilt, { rotateX: 0, rotateY: 0, duration: 0.8, ease: "elastic.out(1,0.5)" });
      }
      const mag = t.closest<HTMLElement>("[data-magnetic]");
      if (mag && !mag.contains(e.relatedTarget as Node)) {
        gsap.to(mag, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1,0.4)" });
      }
    };
    if (fine) {
      document.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerout", onOut, { passive: true });
    }

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      if (onReady) window.removeEventListener("app:ready", onReady);
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerout", onOut);
      ctx.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}
