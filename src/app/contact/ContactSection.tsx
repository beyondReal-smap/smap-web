'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import ContactForm from './ContactForm';

export default function ContactSection() {
  const downloadSectionRef = useRef<HTMLDivElement>(null);

  const scrollToDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    downloadSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="pt-20 pb-16">
      {/* 헤더 섹션 */}
      <section className="bg-gradient-to-b from-blue-100 to-blue-50 py-16 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">문의하기</h1>
            <p className="text-lg text-gray-600 mb-8">
              SMAP에 관한 질문이나 제안이 있으신가요? 언제든지 문의해 주세요.
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="#download-section" 
                onClick={scrollToDownload}
                className="bg-blue-600 text-white hover:bg-blue-700 font-medium px-6 py-3 rounded-lg shadow-md transition"
              >
                무료로 시작하기
              </a>
              <a 
                href="https://schedulemap.notion.site/FAQ-8f37107b3c7c4307afd4297c7d71b5d5?pvs=4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium px-6 py-3 rounded-lg transition"
              >
                FAQ 보기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 문의 정보 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* 문의 양식 */}
            <div>
              <ContactForm />
            </div>

            {/* 추가 정보 */}
            <div>
              <div className="bg-gray-50 rounded-xl shadow p-8 h-full">
                <h2 className="text-2xl font-bold mb-6">연락처 정보</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">이메일</h3>
                      <p className="text-gray-600 mt-1">admin@smap.site</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h2 className="text-2xl font-bold mb-6">자주 묻는 질문</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">SMAP은 어떤 기기에서 사용할 수 있나요?</h3>
                      <p className="text-gray-600 mt-1">SMAP은 iOS와 Android 모두에서 사용 가능합니다. 앱 스토어 또는 구글 플레이에서 다운로드할 수 있습니다.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">SMAP은 무료인가요?</h3>
                      <p className="text-gray-600 mt-1">네, SMAP의 기본 기능은 무료로 이용하실 수 있습니다. 일부 프리미엄 기능은 추가 요금이 발생할 수 있습니다.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">더 많은 질문이 있으신가요?</h3>
                      <p className="text-gray-600 mt-1">
                        <a href="https://schedulemap.notion.site/FAQ-8f37107b3c7c4307afd4297c7d71b5d5?pvs=4" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                          전체 FAQ 보기
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 다운로드 섹션 */}
      <section id="download-section" ref={downloadSectionRef} className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-700 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">지금 무료로 시작하세요</h2>
            <p className="text-indigo-100 text-lg max-w-3xl mx-auto mb-8 text-balance whitespace-normal" style={{wordBreak: 'keep-all', wordWrap: 'normal'}}>
              가족의 행복한 일상을 위한 첫 걸음, SMAP이 함께합니다.<br />
              App Store와 Google Play에서 무료로 다운로드하세요.
            </p>
            <div className="flex flex-col gap-6 justify-center" style={{transitionDelay: '0.1s'}}>
              <div className="flex justify-center gap-8">
                <div className="text-center">
                  <div className="bg-white p-2 rounded-lg shadow-lg mb-2 inline-block">
                    <Image
                      src="/images/appStoreQR.jpg"
                      alt="App Store QR 코드"
                      width={120}
                      height={120}
                      className="rounded"
                    />
                  </div>
                  <p className="text-sm text-indigo-200">App Store</p>
                </div>
                <div className="text-center">
                  <div className="bg-white p-2 rounded-lg shadow-lg mb-2 inline-block">
                    <Image
                      src="/images/googlePlayQR.jpg"
                      alt="Google Play QR 코드"
                      width={120}
                      height={120}
                      className="rounded"
                    />
                  </div>
                  <p className="text-sm text-indigo-200">Google Play</p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-indigo-200 text-balance" style={{transitionDelay: '0.3s', wordBreak: 'keep-all', overflow: 'hidden'}}>카메라로 QR코드를 스캔하여<br />앱을 설치할 수 있습니다.</p>
          </div>
        </div>
      </section>
    </main>
  );
} 