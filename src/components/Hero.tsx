export default function Hero() {
    return (
        <header className="relative pt-40 pb-32 px-6 md:px-12 flex flex-col items-center justify-center text-center min-h-screen overflow-hidden" id="home">
            <div className="max-w-5xl mx-auto space-y-12 relative z-10 mb-20">
                {/* 메인 타이틀 - 커스텀 애니메이션 적용 */}
                <div className="animate-fade-in-up">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] text-slate-900 break-keep">
                        보이지 않는<br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">1%의 디테일</span>로<br />
                        경험을 완성합니다
                    </h1>
                </div>

                {/* 서브 설명 - 지연 로딩 효과 */}
                <div className="max-w-xl mx-auto mt-12 pt-10 border-t border-slate-300/50 animate-fade-in-up animation-delay-2000">
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium break-keep drop-shadow-sm">
                        '사용자라면 지금 무엇이 불편할까?'를 먼저 질문하고 <br className="hidden md:block" /> 답을 코드로 증명해 냅니다.
                    </p>
                </div>
            </div>

            {/* 하단 스크롤 유도 가이드 - 위치 조정 및 가시성 개선 */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40 z-20">
                <a href="#intro" className="flex flex-col items-center gap-2 text-slate-400 hover:text-primary transition-colors">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-white/50 px-2 py-0.5 rounded">Scroll</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </a>
            </div>
        </header>
    );
}
