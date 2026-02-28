export default function GlobalBackground() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
            {/* 오로라 배경 (Mesh Gradient Blobs) - 강도 최적화 (진함 방지) */}
            <div className="absolute top-[-5%] left-[-10%] w-[60%] h-[60%] bg-blue-100/30 blur-[130px] rounded-full animate-blob"></div>
            <div className="absolute top-[20%] right-[-5%] w-[50%] h-[50%] bg-purple-100/20 blur-[140px] rounded-full animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-[10%] left-[15%] w-[55%] h-[55%] bg-pink-100/25 blur-[120px] rounded-full animate-blob animation-delay-4000"></div>

            {/* 하단 가시성 보조 블롭 */}
            <div className="absolute bottom-[-10%] right-[10%] w-[45%] h-[45%] bg-blue-50/20 blur-[130px] rounded-full animate-blob animation-delay-3000"></div>
        </div>
    );
}
