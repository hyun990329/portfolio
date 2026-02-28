export default function Footer() {
    return (
        <footer className="py-8 px-6 bg-slate-50 text-center border-t border-slate-300/30" id="contact">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                <div className="text-slate-400 text-sm">
                    © 2026 Lee Kang Hyun. All rights reserved. <br className="md:hidden" />
                    <span className="hidden md:inline"> | </span>
                    Built with React & Tailwind CSS.
                </div>
            </div>
        </footer>
    );
}
