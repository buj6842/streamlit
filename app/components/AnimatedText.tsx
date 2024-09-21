"use client";  // 이 파일이 클라이언트 컴포넌트임을 명시

import React, { useEffect, useState } from "react";

interface AnimatedTextProps {
    text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
    const [displayedText, setDisplayedText] = useState<string[]>([]);

    useEffect(() => {
        const letters = text.split("");
        letters.forEach((letter, index) => {
            setTimeout(() => {
                setDisplayedText((prev) => [...prev, letter]);
            }, index * 100); // 글자 하나당 100ms 딜레이
        });
    }, [text]);

    return (
        <div>
            {displayedText.map((letter, index) => (
                <span

                    key={index}
                    className="letter-animation"
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    {letter}
                </span>
            ))}
        </div>
    );
};

export default AnimatedText;
