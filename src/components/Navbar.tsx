export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex justify-between items-center bg-background-light/90 backdrop-blur-md border-b border-slate-300/50">
            <a href="#home" className="flex items-center gap-2 group cursor-pointer">
                <span className="font-bold tracking-tight text-lg hover:text-primary transition-colors">Lee Kang Hyun</span>
            </a>
            <div className="hidden md:flex gap-8 items-center">
                <a className="text-sm font-medium hover:text-primary transition-colors" href="#intro">Intro</a>
                <a className="text-sm font-medium hover:text-primary transition-colors" href="#work">Projects</a>
                <a className="text-sm font-medium hover:text-primary transition-colors" href="#about">Career</a>
            </div>
            <button className="md:hidden p-2">
                <span className="material-symbols-outlined">menu</span>
            </button>
        </nav>
    );
}
