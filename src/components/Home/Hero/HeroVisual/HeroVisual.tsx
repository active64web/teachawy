'use client';
import "./HeroVisual.scss";

const HeroVisual = () => {
    return (
        <div className="hero-laptop-teaching">
            <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* --- جسم اللابتوب --- */}
                <g className="laptop-structure">
                    {/* الشاشة الخارجية (Dark Frame) */}
                    <rect x="150" y="100" width="500" height="340" rx="20" fill="#2D2D2D" stroke="#1A1A1A" strokeWidth="2" />
                    {/* الشاشة الداخلية (White Screen) */}
                    <rect x="165" y="115" width="470" height="310" rx="12" fill="#FFFFFF" />
                    {/* القاعدة (Silver Base) */}
                    <path d="M130 440C130 435 150 430 170 430H630C650 430 670 435 670 440V450C670 465 650 475 630 475H170C150 475 130 465 130 450V440Z" fill="#C0C0C0" />
                    <rect x="360" y="435" width="80" height="4" rx="2" fill="#A0A0A0" />
                </g>

                {/* --- محتوى الفيديو (داخل الشاشة) --- */}
                <mask id="screen-clip">
                    <rect x="165" y="115" width="470" height="310" rx="12" fill="white" />
                </mask>

                <g mask="url(#screen-clip)">
                    {/* خلفية الفيديو (Light Grid) */}
                    <rect x="165" y="115" width="470" height="310" fill="#F9FBFF" />
                    <line x1="165" y1="160" x2="635" y2="160" stroke="#0056B3" strokeOpacity="0.05" strokeWidth="1" />

                    {/* المعلم البطل (Teacher Fig) */}
                    <g className="teacher-group">
                        {/* الجسم */}
                        <path d="M320 425C320 360 350 310 400 310C450 310 480 360 480 425" fill="#0056B3" />
                        {/* الرأس */}
                        <circle cx="400" cy="250" r="45" fill="#E2E8F0" />
                        {/* الذراع والبيان */}
                        <path d="M440 330L520 240" stroke="#0056B3" strokeWidth="8" strokeLinecap="round" className="arm-action" />
                    </g>

                    {/* واجهة المشغل (Player UI) */}
                    <rect x="185" y="375" width="430" height="35" rx="8" fill="white" fillOpacity="0.9" stroke="#EEE" strokeWidth="1" />
                    <circle cx="210" cy="392" r="8" fill="#D9A03C" className="play-btn" />
                    <rect x="230" y="390" width="340" height="4" rx="2" fill="#E2E8F0" />
                    <rect x="230" y="390" width="150" height="4" rx="2" fill="#0056B3" className="progress-bar" />
                </g>

                {/* --- أيقونات طائرة (بعيدة عن اللابتوب لمنع التداخل) --- */}
                <g className="floating-ui video-ui">
                    <rect x="640" y="120" width="80" height="60" rx="15" fill="#D9A03C" fillOpacity="0.9" />
                    <path d="M670 140L695 150L670 160V140Z" fill="white" />
                </g>

                <g className="floating-ui chat-ui">
                    <rect x="80" y="320" width="100" height="50" rx="25" fill="#22C55E" fillOpacity="0.9" />
                    <rect x="105" y="342" width="50" height="6" rx="3" fill="white" fillOpacity="0.8" />
                </g>
            </svg>
        </div>
    );
};

export default HeroVisual;