export default function Footer() {
    return (
        <footer className="w-full bg-spectrum-surface border-t border-spectrum-border px-6 py-8">
            <div className="max-w-4xl mx-auto">
                <p className="text-center text-spectrum-muted">© {new Date().getFullYear()} Luke McPherson. All rights reserved</p>
            </div>
        </footer>
    );
}