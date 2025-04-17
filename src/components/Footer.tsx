export default function Footer() {
    return (
        <footer className="w-full border-t border-gray-200 py-8">
            <div className="container mx-auto px-4 text-center">
                <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
                <p className="text-sm text-gray-500 mt-2">
                    Built with Next.js and Tailwind CSS
                </p>
            </div>
        </footer>
    )
}