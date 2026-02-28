export default function About() {
    return (
        <section className="relative py-32 w-full bg-white/0 border-t border-slate-300/40 overflow-hidden" id="about">
            <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
                <div className="md:col-span-4 translate-y-4 animate-fade-in-up">
                    <h2 className="text-3xl font-bold mb-6 sticky top-32 text-slate-900">Career History</h2>
                </div>

                <div className="md:col-span-8">
                    <div className="relative border-l-2 border-slate-200 ml-4 md:ml-0 pl-8 space-y-16">

                        {/* 심화 과정 */}
                        <div className="relative translate-y-8 animate-fade-in-up animation-delay-2000">
                            {/* 타임라인 포인트 - 정확한 중앙 정렬 수식 적용 */}
                            <div className="absolute left-[-33px] -translate-x-1/2 top-1.5 w-5 h-5 bg-white border-4 border-primary rounded-full z-10 shadow-[0_0_12px_rgba(48,110,232,0.4)]"></div>

                            <div className="space-y-3">
                                <span className="inline-block px-3 py-1 rounded-full bg-slate-50 text-slate-500 font-mono text-xs font-semibold">
                                    2025.12 — 2026.02
                                </span>
                                <h4 className="font-bold text-2xl text-slate-900 tracking-tight">심화_생성형 AI활용 인재 양성</h4>
                                <p className="text-slate-500 font-medium">하이미디어 아카데미</p>

                                <ul className="space-y-3 pt-2">
                                    <li className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed break-keep">
                                        <span className="text-primary mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                                        LangChain 및 OpenAI API를 활용한 맞춤형 AI 서비스 고도화 실습
                                    </li>
                                    <li className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed break-keep">
                                        <span className="text-primary mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                                        LLM 기반의 데이터 분석 및 시각화 프로젝트 주도
                                    </li>
                                </ul>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50/50 px-2 py-0.5 rounded border border-slate-100">#Python</span>
                                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50/50 px-2 py-0.5 rounded border border-slate-100">#FastAPI</span>
                                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50/50 px-2 py-0.5 rounded border border-slate-100">#LangChain</span>
                                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50/50 px-2 py-0.5 rounded border border-slate-100">#LLM</span>
                                </div>
                            </div>
                        </div>

                        {/* 풀스택 과정 */}
                        <div className="relative translate-y-8 animate-fade-in-up animation-delay-4000">
                            {/* 타임라인 포인트 - 정확한 중앙 정렬 수식 적용 */}
                            <div className="absolute left-[-33px] -translate-x-1/2 top-1.5 w-5 h-5 bg-white border-4 border-slate-300 rounded-full z-10 shadow-sm"></div>

                            <div className="space-y-3">
                                <span className="inline-block px-3 py-1 rounded-full bg-slate-50 text-slate-500 font-mono text-xs font-semibold">
                                    2025.06 — 2025.12
                                </span>
                                <h4 className="font-bold text-2xl text-slate-900 tracking-tight">생성형 AI를 활용한 Java 풀스택</h4>
                                <p className="text-slate-500 font-medium">하이미디어 아카데미</p>

                                <ul className="space-y-3 pt-2">
                                    <li className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed break-keep">
                                        <span className="text-slate-300 mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-slate-200"></span>
                                        Spring Boot & Spring Security 기반의 엔터프라이즈급 백엔드 설계
                                    </li>
                                    <li className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed break-keep">
                                        <span className="text-slate-300 mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-slate-200"></span>
                                        React와 AWS를 연동한 클라우드 기반 풀스택 애플리케이션 구축
                                    </li>
                                </ul>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50/50 px-2 py-0.5 rounded border border-slate-100">#Java</span>
                                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50/50 px-2 py-0.5 rounded border border-slate-100">#Spring</span>
                                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50/50 px-2 py-0.5 rounded border border-slate-100">#React</span>
                                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50/50 px-2 py-0.5 rounded border border-slate-100">#AWS</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
