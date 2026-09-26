import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex-1 min-h-[70vh] flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-surface-100 border border-surface-border text-accent flex items-center justify-center mx-auto shadow-card">
            <Compass className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-accent uppercase tracking-wider">
              404 &bull; Page Not Found
            </span>
            <h1 className="text-3xl font-extrabold text-text-primary">
              Route Does Not Exist
            </h1>
            <p className="text-sm text-text-secondary leading-relaxed">
              The project case study or page you requested could not be located in this portfolio.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center space-x-2 bg-accent text-slate-950 font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-accent-hover transition-colors shadow-glow"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio Home</span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
