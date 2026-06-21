import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm flex items-center justify-between px-margin-mobile md:px-margin-desktop h-16">
      <div className="flex items-center gap-3">
        <span
          className="material-symbols-outlined text-primary dark:text-primary-fixed"
          style={{ fontSize: "24px" }}
        >
          security
        </span>
        <Link href="/" className="font-headline-md text-headline-md font-semibold text-primary dark:text-primary-fixed">
          PERSIT
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-6">
        <Link
          href="/login"
          className="font-label-md text-label-md text-on-surface-variant hover:opacity-80 transition-opacity"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="font-label-md text-label-md text-primary font-semibold border-b-2 border-transparent hover:border-primary pb-1 transition-all"
        >
          Register
        </Link>
      </div>
    </header>
  );
}
