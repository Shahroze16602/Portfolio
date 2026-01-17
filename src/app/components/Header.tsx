import Link from 'next/link';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-[60] px-6 md:px-12 py-8 flex justify-between items-center mix-blend-difference text-white">
            <Link href="/" className="text-xl font-bold tracking-tighter uppercase hover:opacity-70 transition-opacity">
                Antigravity
            </Link>
            <nav className="flex gap-6">
                <Link href="/" className="text-sm font-mono uppercase tracking-[0.2em] hover:opacity-50 transition-opacity">
                    Home
                </Link>
                <Link href="/resume" className="text-sm font-mono uppercase tracking-[0.2em] hover:opacity-50 transition-opacity">
                    Resume
                </Link>
            </nav>
        </header>
    );
}
