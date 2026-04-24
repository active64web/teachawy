'use client';
import { useState, useEffect, useCallback } from "react";
import { ChevronUp, MessageSquare } from "lucide-react";
import "./FloatingButtons.scss";

const FloatingButtons = () => {
    const [isVisible, setIsVisible] = useState(false);

    // استخدام useCallback لضمان استقرار الدالة
    const toggleVisibility = useCallback(() => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        // التظيف (Cleanup) مهم جداً لمنع الـ Memory Leaks
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, [toggleVisibility]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="floating-actions">
            {/* زرار الصعود للأعلى - يظهر فقط عند السكرول */}
            <button
                className={`btn-top ${isVisible ? 'show' : ''}`}
                onClick={scrollToTop}
                type="button"
                aria-label="Scroll to top"
            >
                <ChevronUp size={24} strokeWidth={3} />
            </button>

            {/* زرار الواتساب - ثابت دائمًا */}
            <a
                href="https://wa.me/201234567890" // ضع رقمك هنا بالصيغة الدولية
                className="btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact on WhatsApp"
            >
                <MessageSquare size={24} fill="white" stroke="white" />
            </a>
        </div>
    );
};

export default FloatingButtons;