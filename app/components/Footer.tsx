"use client";  // 이 파일이 클라이언트 컴포넌트임을 명시 << 현재
// back 단과 연동되는 부분이 없기에 컴포넌트를 서버형식으로 사용하기 위해서는 모든 페이지에 작성을 해주어야 컴포넌트로 사용가능함

import React, { useEffect, useState } from "react";


const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left">
                    <h6 className="uppercase font-bold">KTDS</h6>
                    <p className="mt-2">Copyright@ 2024 KTDS Corp. All Rights Reserved.</p>
                </div>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="text-gray-400 hover:text-white">
                        개인정보 처리방침
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        이용약관
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        Contact Us
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
