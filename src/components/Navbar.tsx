import Link from 'next/link'

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="font-bold text-xl">YourName</Link>

                <nav className="flex gap-6">
                    <Link href="/#about" className="hover:text-blue-600 transition">About</Link>
                    <Link href="/#projects" className="hover:text-blue-600 transition">Projects</Link>
                    <Link href="/#experience" className="hover:text-blue-600 transition">Experience</Link>
                    <Link href="/#contact" className="hover:text-blue-600 transition">Contact</Link>
                </nav>
            </div>
        </header>
    )
}