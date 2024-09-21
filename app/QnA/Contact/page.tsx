"use client"

import React, { useState } from 'react';

const faqs = [
    {
        category: "LLM",
        question: "LLM이 무엇인지요?",
        answer:
            "대규모 언어 모델(LLM)은 텍스트를 인식하고 생성하는 등의 작업을 수행할 수 있는 일종의 인공 지능(AI) 프로그램입니다",
    },
    {
        category: "chatbot",
        question: "챗봇은 어떻게쓰나요",
        answer: "사용용도에 맞추어 학습을시켜 사용",
    },
    {
        category: "technic",
        question: "어떤기술들에 사용이가능한가?",
        answer: "이거저거...사용할수있게....",
    },
];

const FAQPage = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('전체');
    const [openIndex, setOpenIndex] = useState<number | null>(null); // 아코디언처럼 열려있는 질문의 인덱스

    // 선택된 카테고리에 따라 FAQ 필터링
    const filteredFaqs = selectedCategory === '전체'
        ? faqs
        : faqs.filter(faq => faq.category === selectedCategory);

    // 질문 클릭 시 해당 답변을 열거나 닫음
    const toggleAnswer = (index: number) => {
        if (openIndex === index) {
            setOpenIndex(null); // 이미 열려있으면 닫음
        } else {
            setOpenIndex(index); // 아니면 해당 질문 열기
        }
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <table className="w-full table-fixed border-collapse border border-gray-300 mb-6">
                <thead>
                <tr className="bg-gray-100">
                    {/* 카테고리 클릭 시 상태 변경 */}
                    <th className="border border-gray-300 p-2 cursor-pointer" onClick={() => setSelectedCategory('전체')}>
                        전체
                    </th>
                    <th className="border border-gray-300 p-2 cursor-pointer" onClick={() => setSelectedCategory('LLM')}>
                        LLM
                    </th>
                    <th className="border border-gray-300 p-2 cursor-pointer" onClick={() => setSelectedCategory('chatbot')}>
                        챗봇
                    </th>
                    <th className="border border-gray-300 p-2 cursor-pointer" onClick={() => setSelectedCategory('technic')}>
                        기술
                    </th>
                </tr>
                </thead>
            </table>

            {/* 선택된 카테고리에 따른 FAQ 항목 렌더링 */}
            {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                    <div key={index} className="mb-4">
                        {/* 질문 클릭 시 답변 열기/닫기 */}
                        <div
                            className="cursor-pointer p-4 border-b border-gray-300 flex justify-between items-center"
                            onClick={() => toggleAnswer(index)}
                        >
                            <span className="text-teal-500 font-bold">Q) {faq.question}</span>
                            <span>{openIndex === index ? '-' : '+'}</span> {/* 열려있는 경우 '-' 닫혀있는 경우 '+' */}
                        </div>
                        {openIndex === index && (
                            <div className="p-4 bg-gray-50 border-b border-gray-300">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <p>해당 카테고리에 대한 질문이 없습니다.</p>
            )}
        </div>
    );
};

export default FAQPage;
