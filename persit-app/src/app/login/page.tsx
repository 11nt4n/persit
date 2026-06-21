"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX - window.innerWidth / 2) * 0.01,
        y: (e.clientY - window.innerHeight / 2) * 0.01,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Simulate redirect
      alert("Login berhasil (Simulasi)");
    }, 1500);
  };

  return (
    <>
      <Header />
      <main className="flex-grow flex items-center justify-center px-margin-mobile py-20 mt-16 relative overflow-hidden min-h-screen">
        {/* Abstract Background Decorative Elements */}
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48 blur-3xl transition-transform duration-200"
          style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full -ml-48 -mb-48 blur-3xl transition-transform duration-200"
          style={{ transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)` }}
        />

        <div className="w-full max-w-[480px] z-10">
          {/* Login Card */}
          <div className="bg-surface border border-outline-variant/20 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-10 transition-all duration-300">
            {/* Brand Center */}
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-20 h-20 bg-primary-container/10 rounded-full flex items-center justify-center mb-4">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontSize: "40px" }}
                >
                  admin_panel_settings
                </span>
              </div>
              <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-text-primary mb-2">
                Masuk
              </h1>
            </div>

            {/* Form */}
            <form className="space-y-6" onSubmit={handleLogin}>
              {/* NRP Input */}
              <div className="space-y-2">
                <label
                  className="font-label-md text-label-md text-on-surface-variant block ml-1"
                  htmlFor="member_id"
                >
                  NRP / Member ID
                </label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">
                    person
                  </span>
                  <input
                    className="w-full pl-12 pr-4 py-3.5 bg-surface-container-lowest border border-border-light rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-outline-variant"
                    id="member_id"
                    name="member_id"
                    placeholder="Enter your ID"
                    type="text"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label
                  className="font-label-md text-label-md text-on-surface-variant block ml-1"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">
                    lock
                  </span>
                  <input
                    className="w-full pl-12 pr-12 py-3.5 bg-surface-container-lowest border border-border-light rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-outline-variant"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    type={showPassword ? "text" : "password"}
                    required
                  />
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors flex items-center justify-center"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-symbols-outlined">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Helpers */}
              <div className="flex items-center justify-between py-1">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input className="peer sr-only" type="checkbox" />
                    <div className="w-5 h-5 border-2 border-outline-variant rounded peer-checked:bg-primary peer-checked:border-primary transition-all"></div>
                    <span className="material-symbols-outlined absolute text-white text-[16px] hidden peer-checked:block">
                      check
                    </span>
                  </div>
                  <span className="font-label-md text-label-md text-on-surface-variant group-hover:text-text-primary transition-colors">
                    Remember Me
                  </span>
                </label>
                <Link
                  href="#"
                  className="font-label-md text-label-md text-primary hover:underline underline-offset-4"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                className={`w-full bg-primary-container text-on-primary-container font-headline-md text-headline-md py-4 rounded-lg shadow-sm active:scale-[0.98] transition-all flex items-center justify-center gap-3 ${
                  isLoading
                    ? "opacity-80 cursor-not-allowed"
                    : "hover:bg-primary-container/90"
                }`}
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="material-symbols-outlined animate-spin">
                      progress_activity
                    </span>
                    Authenticating...
                  </>
                ) : (
                  <>
                    <span>Login</span>
                    <span className="material-symbols-outlined">login</span>
                  </>
                )}
              </button>
            </form>

            {/* Footer Link */}
            <div className="mt-10 text-center">
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                New member?{" "}
                <Link
                  href="/register"
                  className="text-primary font-semibold hover:underline underline-offset-4 ml-1"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </div>

          {/* Additional Branding Support (Institutional Identity) */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <div className="flex gap-6 items-center">
              <Image
                className="h-12 w-auto opacity-80"
                alt="Persit Logo"
                width={120}
                height={48}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC18oznlSlQ7P_ZdhahfYU0EBbWB-KpEf848bJPVK8uc2oIi2hcnHQByjADrLB3vZF-is7ekXZxeCxKjVEfIm8xaocTWJ8GLrGhrG5Sxlwz4MtuiGKsjVwivykaqgbLd41pSVgP8IzFWkLirApQeSGKer89eUvF5o_DS84AIUolxR_NVLzP8ZLUdOW3ADPTJLMP5GCWuMiOLikusK4PnnFmN2f1LDO5NAUqDpR2uH8Rd8rQ6zmc_DG0ttpF3nchn5aXFJOQCJwR4sI"
              />
            </div>
            <p className="text-[10px] text-center uppercase tracking-widest text-on-surface-variant font-medium">
              © 2026 Persit Kartika Chandra Kirana. All Rights Reserved.
            </p>
          </div>
        </div>
      </main>
      <BottomNav />
    </>
  );
}
