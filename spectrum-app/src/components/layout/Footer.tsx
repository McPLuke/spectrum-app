export default function Footer() {
    return (
        <footer className="w-full bg-white border-t border-gray-200 px-6 py-8">
            <div className="max-w-4xl mx-auto">
                <p className="text-center text-gray-600">© {new Date().getFullYear()} Luke McPherson. All rights reserved</p>
            </div>
        </footer>
    );
}