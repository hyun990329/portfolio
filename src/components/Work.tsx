export default function Work() {
    return (
        <section className="relative py-24 md:py-32 w-full bg-white/0 border-t border-slate-300/40 overflow-hidden" id="work">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="mb-16 text-center md:text-left translate-y-4 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">Projects</h2>
                    <p className="text-slate-500 max-w-2xl leading-relaxed">
                        실제 비즈니스 문제를 정의하고, <br className="md:hidden" /> 기술로 해결한 주요 프로젝트들을 소개합니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* HireHub */}
                    <article className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(48,110,232,0.15)] hover:-translate-y-3 transition-all duration-500 flex flex-col translate-y-8 animate-fade-in-up animation-delay-2000">
                        <div className="aspect-video bg-slate-50 flex items-center justify-center overflow-hidden border-b border-slate-100">
                            {/* 실제 이미지가 없을 때의 placeholder */}
                            <div className="text-slate-400 text-sm font-medium group-hover:scale-110 transition-transform duration-700">
                                HireHub Showcase
                            </div>
                        </div>

                        <div className="p-8 flex-1 flex flex-col">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-mono text-slate-400">2025</span>
                                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[11px] font-bold uppercase tracking-wider">Web Platform</span>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">HireHub</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6 break-keep">
                                구직자와 기업을 연결하는 채용 플랫폼입니다. <br />
                                직관적인 UI와 빠른 검색 경험을 중심으로 설계하였습니다.
                            </p>

                            <div className="flex flex-wrap gap-1.5 mb-6">
                                {['React', 'TypeScript', 'Tailwind', 'Router', 'Recharts', 'StompJS'].map((tech) => (
                                    <span key={tech} className="px-2 py-0.5 rounded-md bg-slate-50 text-slate-500 text-[10px] font-medium border border-slate-100">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* 기술 성과 및 문제 해결 */}
                            <div className="space-y-3 mb-8">
                                <div className="p-4 rounded-xl bg-slate-50/50 border border-slate-100">
                                    <h4 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-primary">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        Key Achievements
                                    </h4>
                                    <ul className="space-y-2">
                                        <li className="text-[13px] text-slate-600 leading-relaxed flex items-start gap-2 text-left">
                                            <span className="text-primary mt-1 font-bold">·</span>
                                            StompJS 기반의 실시간 채팅 아키텍처 설계 및 최적화
                                        </li>
                                        <li className="text-[13px] text-slate-600 leading-relaxed flex items-start gap-2 text-left">
                                            <span className="text-primary mt-1 font-bold">·</span>
                                            대규모 데이터 렌더링 속도 40% 개선 (Recharts 활용)
                                        </li>
                                    </ul>
                                </div>

                                <div className="p-4 rounded-xl bg-orange-50/30 border border-orange-100/30">
                                    <h4 className="text-[11px] font-bold text-orange-700 uppercase tracking-wider mb-2 flex items-center gap-2">
                                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2">
                                            <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        Troubleshooting
                                    </h4>
                                    <p className="text-[13px] text-orange-800/80 leading-relaxed font-medium text-left">
                                        필터링 조건 변경 시 리렌더링 병목 해결 → <span className="text-orange-900">Memoization 전략</span> 도입
                                    </p>
                                </div>
                            </div>

                            <div className="mt-auto flex gap-3">
                                <a href="https://github.com/hyun990329/hirehub" target="_blank" rel="noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 text-white rounded-xl hover:bg-black transition-all text-xs font-bold shadow-sm">
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                        <path d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.138 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"></path>
                                    </svg>
                                    GitHub
                                </a>
                                <a href="https://hirehub-bn109bd4q-hyun990329s-projects.vercel.app/" target="_blank" rel="noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-slate-900 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all text-xs font-bold shadow-sm">
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                                    </svg>
                                    Demo
                                </a>
                            </div>
                        </div>
                    </article>

                    {/* 차봄 */}
                    <article className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.1)] hover:-translate-y-3 transition-all duration-500 flex flex-col translate-y-8 animate-fade-in-up animation-delay-4000">
                        <div className="aspect-video bg-emerald-50/20 flex items-center justify-center overflow-hidden border-b border-slate-100">
                            <img
                                src="/스크린샷 2026-03-01 오전 1.05.44.png"
                                alt="차봄 Mobile Showcase"
                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        <div className="p-8 flex-1 flex flex-col">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-mono text-slate-400">2025</span>
                                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[11px] font-bold uppercase tracking-wider">Mobile App</span>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">차봄 (Carbom)</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6 break-keep">
                                AI 기반 차량 예측 정비 시스템입니다. <br />
                                소모품 관리와 정비 기록을 자동화하여
                                사용자의 차량 관리 부담을 줄였습니다.
                            </p>

                            <div className="flex flex-wrap gap-1.5 mb-6">
                                {['React Native', 'Expo', 'Zustand', 'FCM', 'NativeWind', 'TypeScript'].map((tech) => (
                                    <span key={tech} className="px-2 py-0.5 rounded-md bg-slate-50 text-slate-500 text-[10px] font-medium border border-slate-100">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* 기술 성과 및 문제 해결 */}
                            <div className="space-y-3 mb-8">
                                <div className="p-4 rounded-xl bg-slate-50/50 border border-slate-100">
                                    <h4 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-emerald-500">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        Key Achievements
                                    </h4>
                                    <ul className="space-y-2">
                                        <li className="text-[13px] text-slate-600 leading-relaxed flex items-start gap-2 text-left">
                                            <span className="text-emerald-500 mt-1 font-bold">·</span>
                                            FCM 백그라운드 태스크 기반 실시간 알림 시스템 구현
                                        </li>
                                        <li className="text-[13px] text-slate-600 leading-relaxed flex items-start gap-2 text-left">
                                            <span className="text-emerald-500 mt-1 font-bold">·</span>
                                            Zustand 전역 상태 관리로 데이터 동기화 복잡도 50% 감소
                                        </li>
                                    </ul>
                                </div>

                                <div className="p-4 rounded-xl bg-orange-50/30 border border-orange-100/30">
                                    <h4 className="text-[11px] font-bold text-orange-700 uppercase tracking-wider mb-2 flex items-center gap-2">
                                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2">
                                            <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        Troubleshooting
                                    </h4>
                                    <p className="text-[13px] text-orange-800/80 leading-relaxed font-medium text-left">
                                        AI 진단 시 렌더링 성능 저하 해결 → <span className="text-orange-900">InteractionManager</span> 최적화
                                    </p>
                                </div>
                            </div>

                            <div className="mt-auto flex gap-3">
                                <a href="https://github.com/leejunhyuk1061204/AI-5-main-project" target="_blank" rel="noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 text-white rounded-xl hover:bg-black transition-all text-xs font-bold shadow-sm">
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                        <path d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.138 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"></path>
                                    </svg>
                                    GitHub
                                </a>
                                <a href="https://carbom-landing-page-a8um.vercel.app/" target="_blank" rel="noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-slate-900 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all text-xs font-bold shadow-sm">
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                                    </svg>
                                    Demo
                                </a>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
