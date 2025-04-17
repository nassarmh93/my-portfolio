export default function Footer() {
    return (
        <footer className="w-full border-t border-gray-200 py-8">
            <div className="container mx-auto px-4 text-center">
                <p>© {new Date().getFullYear()} Mohammad Nassar. All rights reserved.</p>
            </div>
        </footer>
    )
}