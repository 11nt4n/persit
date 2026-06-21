import Link from "next/link";

export default function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center h-20 pb-safe px-gutter bg-surface/90 dark:bg-inverse-surface/90 backdrop-blur-lg border-t border-outline-variant/20 shadow-lg z-50 rounded-t-xl">
      <Link
        href="/login"
        className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant hover:text-primary transition-all duration-200"
      >
        <span className="material-symbols-outlined">login</span>
        <span className="font-label-md text-label-md">Login</span>
      </Link>
      <Link
        href="/register"
        className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-6 py-1 active:scale-90 transition-all duration-200"
      >
        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          person_add
        </span>
        <span className="font-label-md text-label-md">Register</span>
      </Link>
    </nav>
  );
}
