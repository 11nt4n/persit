"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SplashPage() {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleStart = () => {
    setIsNavigating(true);
    setTimeout(() => {
      router.push("/login");
    }, 800);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth > 768) {
        setMousePos({
          x: e.clientX / window.innerWidth - 0.5,
          y: e.clientY / window.innerHeight - 0.5,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden bg-surface-bright text-on-surface">
      {/* Atmospheric Decorative Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute -top-[15%] -left-[10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[100px] transition-transform duration-200 ease-out"
          style={{
            transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)`,
          }}
        />
        <div
          className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-secondary-container/10 rounded-full blur-[120px] transition-transform duration-200 ease-out"
          style={{
            transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px)`,
          }}
        />
      </div>

      {/* Main Splash Content */}
      <main
        className={`relative z-10 w-full max-w-lg px-margin-mobile flex-1 flex flex-col items-center justify-center text-center transition-all duration-800 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isNavigating
            ? "opacity-0 -translate-y-5"
            : "opacity-100 translate-y-0 animate-splash-in"
        }`}
      >
        {/* Logo Section */}
        <div className="mb-stack-lg relative">
          <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl scale-125" />
          <Image
            alt="Persit KCK Logo"
            className="w-56 h-56 md:w-64 md:h-64 object-contain logo-glow relative z-10 transition-transform duration-700 hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcDpU5Y05onODnhILTNXgE5-jFBX2uByAAC2J9PUVVirbnpea6UGPvy3E2hZf_nJ5eEQU9k11RAN66zINPpynbJoBTgo1CYj9UPYj9MYQSpWWSFYUdJWe0I2DF36V_383SobS63wTXwg_NG3YSPtCW_jJ-AXxDDPrR2WsS8mnVXVrnGfX6XJH5d2iVzH03anV2Lc0so0RClwUVcwCjIH2Agfd75pIx_KUzFoPBybz1Sa_Z3yqMmV7d_OMvCKRijWda8rsAL-9fc48"
            width={256}
            height={256}
            priority
          />
        </div>

        {/* Identity Section */}
        <div className="space-y-stack-sm mb-12">
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight px-4">
            PERSIT
          </h1>
          <p className="font-body-lg text-body-lg text-text-primary">
            Sistem Informasi Terintegrasi
          </p>
        </div>

        {/* Primary Action */}
        <div className="w-full max-w-[280px] mt-8">
          <button
            onClick={handleStart}
            className="w-full h-14 bg-primary-container text-on-primary-container rounded-full font-headline-md text-headline-md shadow-[0_8px_16px_rgba(133,168,37,0.2)] hover:shadow-[0_12px_24px_rgba(133,168,37,0.3)] hover:-translate-y-1 active:translate-y-0 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            {isNavigating ? (
              <svg
                className="animate-spin h-5 w-5 text-on-primary-container"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              <>
                Mulai
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </>
            )}
          </button>
        </div>
      </main>

      {/* Footer Identity */}
      <footer
        className={`relative z-10 w-full pb-10 text-center transition-all duration-800 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isNavigating ? "opacity-0" : "opacity-100 animate-splash-in"
        }`}
        style={{ animationDelay: "0.5s" }}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="h-[1px] w-12 bg-outline-variant opacity-30 mb-2" />
          <p className="font-label-sm text-label-sm text-outline tracking-widest uppercase opacity-70">
            © 2026 Persit Kartika Chandra Kirana
          </p>
        </div>
      </footer>
    </div>
  );
}
