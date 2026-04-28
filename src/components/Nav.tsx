"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/membership", label: "Membership" },
  { href: "/courses", label: "Courses" },
  { href: "/community", label: "Community" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-ivory/85 backdrop-blur border-b border-honey/15"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex items-center justify-between">
        <Link
          href="/"
          aria-label="Beehive for Life home"
          className="font-serif text-xl md:text-2xl text-deep flex items-center gap-2"
        >
          <span aria-hidden className="text-honey">✦</span>
          <span className="tracking-wide">Beehive for Life</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-[0.95rem] text-charcoal">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="link-underline hover:text-terracotta transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
        >
          <span className="block h-px w-6 bg-deep" />
          <span className="block h-px w-6 bg-deep" />
          <span className="block h-px w-6 bg-deep" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-y-0 right-0 w-full max-w-sm bg-cream shadow-warm flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-honey/20">
                <span className="font-serif text-xl text-deep">Menu</span>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="text-deep text-2xl leading-none"
                >
                  ×
                </button>
              </div>
              <nav className="flex-1 px-6 py-8 flex flex-col gap-5 text-2xl font-serif text-charcoal">
                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block py-1 hover:text-terracotta transition-colors"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="px-6 py-6 border-t border-honey/20 text-sm text-charcoal-muted">
                hello@beehiveforlife.com
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
