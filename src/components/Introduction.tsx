export default function Introduction() {
    return (
        <section className="relative py-24 w-full bg-white/0 border-t border-slate-300/40 overflow-hidden" id="intro">
            <div className="max-w-4xl mx-auto px-6 md:px-12 text-center md:text-left flex flex-col md:flex-row items-center md:items-start gap-12 relative z-10">

                {/* 프로필 이미지 영역 - 위로 떠오는 애니메이션 */}
                <div className="w-48 h-64 md:w-56 md:h-[18rem] shrink-0 rounded-2xl bg-slate-100 overflow-hidden flex items-center justify-center border-4 border-white shadow-xl translate-y-8 animate-fade-in-up">
                    <img src="/profile.jpeg" alt="Lee Kang Hyun Profile" className="w-full h-full object-cover object-top" />
                </div>

                {/* 소개 텍스트 영역 - 순차적 애니메이션 */}
                <div className="flex-1 space-y-6">
                    <div className="translate-y-4 animate-fade-in-up animation-delay-2000">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                            프론트엔드 개발자 <span className="text-primary">이강현</span>입니다.
                        </h2>
                    </div>

                    {/* 핵심 정보 리스트 */}
                    <div className="space-y-6 pt-2 translate-y-4 animate-fade-in-up animation-delay-4000">
                        {/* 학력 */}
                        <div>
                            <h3 className="font-semibold text-slate-900 text-sm mb-1 uppercase tracking-wider opacity-60">Education</h3>
                            <p className="text-slate-600 text-sm font-medium">학점은행제 경영 전문학사 (2026.7월 졸업 예정 / 학점 이수 완료)</p>
                        </div>

                        {/* 기술 스택 */}
                        <div>
                            <h3 className="font-semibold text-slate-900 text-sm mb-1 uppercase tracking-wider opacity-60">Tech Stack</h3>
                            <div className="flex flex-col gap-2 mt-1">
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-[13px] text-slate-600 bg-slate-50 px-2.5 py-0.5 rounded-md border border-slate-100 font-medium">React</span>
                                    <span className="text-[13px] text-slate-600 bg-slate-50 px-2.5 py-0.5 rounded-md border border-slate-100 font-medium">React Native</span>
                                    <span className="text-[13px] text-slate-600 bg-slate-50 px-2.5 py-0.5 rounded-md border border-slate-100 font-medium">TypeScript</span>
                                    <span className="text-[13px] text-slate-600 bg-slate-50 px-2.5 py-0.5 rounded-md border border-slate-100 font-medium">JavaScript</span>
                                    <span className="text-[13px] text-slate-600 bg-slate-50 px-2.5 py-0.5 rounded-md border border-slate-100 font-medium">Tailwind CSS</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-[13px] text-slate-500 bg-slate-50 px-2.5 py-0.5 rounded-md border border-slate-100 font-medium">Git</span>
                                    <span className="text-[13px] text-slate-500 bg-slate-50 px-2.5 py-0.5 rounded-md border border-slate-100 font-medium">AWS</span>
                                    <span className="text-[13px] text-slate-500 bg-slate-50 px-2.5 py-0.5 rounded-md border border-slate-100 font-medium">Vercel</span>
                                </div>
                            </div>
                        </div>

                        {/* 코어 밸류 */}
                        <div>
                            <h3 className="font-semibold text-slate-900 text-sm mb-1 uppercase tracking-wider opacity-60">Core Value</h3>
                            <p className="text-slate-600 text-sm leading-relaxed break-keep font-medium">
                                단순히 돌아가는 코드를 넘어, <br className="hidden md:block"></br> 사용자 경험과 성능 최적화 사이의 균형을 끊임없이 고민합니다.
                            </p>
                        </div>
                    </div>

                    {/* 연락처 및 링크 영역 */}
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-6 mt-6 border-t border-slate-300/50 translate-y-4 animate-fade-in-up animation-delay-4000">
                        <a href="mailto:dlrkdgus1999@gmail.com" className="flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-xl hover:bg-slate-800 transition-all text-sm font-bold shadow-sm active:scale-95">
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[18px] h-[18px] fill-current">
                                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                            </svg>
                            Gmail
                        </a>
                        <a href="https://github.com/hyun990329" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-white text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all text-sm font-bold shadow-sm active:scale-95">
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[18px] h-[18px] fill-current">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.138 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"></path>
                            </svg>
                            GitHub
                        </a>
                    </div>

                </div>

            </div>
        </section>
    );
}
