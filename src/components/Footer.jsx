export default function Footer() {
    return (
        <footer className="bg-white border-t w-full">
            <div className="p-4 text-center text-sm text-gray-600">
                © {new Date().getFullYear()} MySite
            </div>
        </footer>
    );
}
