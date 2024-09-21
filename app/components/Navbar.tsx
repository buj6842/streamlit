"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
    const [showNavbar, setShowNavbar] = useState(true);

    const handleMouseEnter = (menu: string) => {
        setHoveredMenu(menu);
    };

    const handleMouseLeave = () => {
        setHoveredMenu(null);
    };

    useEffect(() => {
        let lastScrollTop = 0;
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                // 스크롤 다운 시 메뉴바 숨김
                setShowNavbar(false);
            } else {
                // 스크롤 업 시 메뉴바 표시
                setShowNavbar(true);
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // 스크롤 위치 업데이트
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full bg-gray-800 p-4 flex items-center justify-between z-50 transition-transform duration-300 ${
                showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
            }`}
        >
            {/* 왼쪽의 페이지 로고 */}
            <Link href="/" passHref>
                <div className="flex items-center cursor-pointer">
                    <Image
                        src="/images/logo.png"  // 로고 이미지 경로
                        alt="Site Logo"
                        width={100} // 로고 이미지 너비
                        height={50} // 로고 이미지 높이
                    />
                </div>
            </Link>

            {/* 메뉴 항목들 */}
            <div className="flex justify-center w-full space-x-8">
                <Link href="/AIPlatform">
                    <div className="text-white px-4 py-2 cursor-pointer hover:bg-gray-700">AI Platform</div>
                </Link>

                <div
                    className="relative text-white px-4 py-2 cursor-pointer hover:bg-gray-700"
                    onMouseEnter={() => handleMouseEnter("Technic")}
                    onMouseLeave={handleMouseLeave}
                >
                    Technic
                    {hoveredMenu === "Technic" && (
                        <div className="absolute top-full left-0 bg-gray-700 flex flex-col w-max">
                            <Link href="/Technic/LLM">
                                <div className="text-white px-4 py-2 cursor-pointer hover:bg-gray-600">LLM/RAG/Agent</div>
                            </Link>
                            <Link href="/Technic/chatbot">
                                <div className="text-white px-4 py-2 cursor-pointer hover:bg-gray-600">
                                    챗봇 (지식형-RAG / 분석형-agent / 워크플로우형)
                                </div>
                            </Link>
                        </div>
                    )}
                </div>

                <div
                    className="relative text-white px-4 py-2 cursor-pointer hover:bg-gray-700"
                    onMouseEnter={() => handleMouseEnter("Q&A")}
                    onMouseLeave={handleMouseLeave}
                >
                    Q&A
                    {hoveredMenu === "Q&A" && (
                        <div className="absolute top-full left-0 bg-gray-700 flex flex-col w-max">
                            <Link href="/QnA/Contact">
                                <div className="text-white px-4 py-2 cursor-pointer hover:bg-gray-600">제품 문의</div>
                            </Link>
                            <Link href="/QnA/Notice">
                                <div className="text-white px-4 py-2 cursor-pointer hover:bg-gray-600">주요 소식</div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
