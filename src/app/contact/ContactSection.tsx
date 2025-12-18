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
    <main className="bg-[#0a0a0f]">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="bg-orb bg-orb-1"></div>
        <div className="bg-orb bg-orb-2"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse"></span>
              <span className="text-sm text-white/70">언제든지 연락주세요</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
              <span className="text-white">무엇이든</span>
              <span className="gradient-text"> 물어보세요</span>
            </h1>

            <p className="text-lg text-white/60 mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              SMAP에 관한 질문이나 제안이 있으신가요? 언제든지 문의해 주세요.
            </p>

            <div className="flex justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <a
                href="#download-section"
                onClick={scrollToDownload}
                className="btn-startup"
              >
                무료로 시작하기
              </a>
              <a
                href="https://schedulemap.notion.site/FAQ-8f37107b3c7c4307afd4297c7d71b5d5?pvs=4"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                FAQ 보기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">문의하기</h2>
              <ContactForm />
            </div>

            {/* Info Section */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="glass-card rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">연락처 정보</h2>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">이메일</h3>
                    <a href="mailto:admin@smap.site" className="text-white/60 hover:text-violet-400 transition">admin@smap.site</a>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="glass-card rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">자주 묻는 질문</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">SMAP은 어떤 기기에서 사용할 수 있나요?</h3>
                    <p className="text-white/50">iOS와 Android 모두에서 사용 가능합니다. 앱 스토어 또는 구글 플레이에서 다운로드할 수 있습니다.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">SMAP은 무료인가요?</h3>
                    <p className="text-white/50">네, SMAP의 기본 기능은 무료로 이용하실 수 있습니다. 일부 프리미엄 기능은 추가 요금이 발생할 수 있습니다.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">더 많은 질문이 있으신가요?</h3>
                    <a
                      href="https://schedulemap.notion.site/FAQ-8f37107b3c7c4307afd4297c7d71b5d5?pvs=4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-violet-400 hover:text-violet-300 font-medium transition"
                    >
                      전체 FAQ 보기 →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download-section" ref={downloadSectionRef} className="w-full py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-fuchsia-900/20 to-[#0a0a0f]"></div>
        <div className="bg-orb bg-orb-1" style={{ opacity: 0.3 }}></div>
        <div className="bg-orb bg-orb-2" style={{ opacity: 0.3 }}></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-white">지금</span>
              <span className="gradient-text"> 무료로 시작하세요</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
              가족의 행복한 일상을 위한 첫 걸음, SMAP이 함께합니다.
              <br />App Store와 Google Play에서 무료로 다운로드하세요.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <div className="glass-card p-6 rounded-2xl text-center animate-pulse-glow">
              <div className="bg-white p-3 rounded-xl inline-block mb-3">
                <Image
                  src="/images/appStoreQR.jpg"
                  alt="App Store QR 코드"
                  width={140}
                  height={140}
                  className="rounded-lg"
                />
              </div>
              <p className="text-white font-medium">App Store</p>
              <p className="text-white/50 text-sm">iOS</p>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center animate-pulse-glow" style={{ animationDelay: '1.5s' }}>
              <div className="bg-white p-3 rounded-xl inline-block mb-3">
                <Image
                  src="/images/googlePlayQR.jpg"
                  alt="Google Play QR 코드"
                  width={140}
                  height={140}
                  className="rounded-lg"
                />
              </div>
              <p className="text-white font-medium">Google Play</p>
              <p className="text-white/50 text-sm">Android</p>
            </div>
          </div>

          <p className="mt-8 text-sm text-white/40 text-center">
            카메라로 QR코드를 스캔하여 앱을 설치할 수 있습니다.
          </p>
        </div>
      </section>
    </main>
  );
}