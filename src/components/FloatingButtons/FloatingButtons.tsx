'use client';
import { useState, useEffect, useCallback } from "react";
import { ChevronUp } from "lucide-react";
import "./FloatingButtons.scss";
import Image from "next/image";

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
            <button
                className={`btn-top ${isVisible ? 'show' : ''}`}
                onClick={scrollToTop}
                type="button"
                aria-label="Scroll to top"
            >
                <ChevronUp size={24} strokeWidth={3} />
            </button>

            <a
                href="https://wa.me/201156338511"
                className="btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact on WhatsApp"
            >
                <Image
                    src="/icons/whatsApp.svg"
                    alt="WhatsApp"
                    width={24}
                    height={24}
                    style={{ objectFit: "contain" }}
                />
            </a>
        </div>
    );
};

export default FloatingButtons;