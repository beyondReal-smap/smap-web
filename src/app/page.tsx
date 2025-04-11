"use client"

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ShortsSlider from './components/ShortsSlider';

export default function Home() {
  const appStoreButtonRef = useRef<HTMLAnchorElement>(null);
  const googlePlayButtonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleAppStoreDownload = (e: MouseEvent) => {
      e.preventDefault();
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      if (isMobile && /iPad|iPhone|iPod/.test(navigator.userAgent)) {
        window.location.href = "https://apps.apple.com/kr/app/smap-%EC%9C%84%EC%B9%98%EC%B6%94%EC%A0%81-%EC%9D%B4%EB%8F%99%EA%B2%BD%EB%A1%9C-%EC%9D%BC%EC%A0%95/id6480279658";
      } else if (!isMobile) {
        // PC 환경에서는 모달 팝업 표시
        document.getElementById('pcDownloadAlert')?.classList.remove('hidden');
      }
    };

    const handleGooglePlayDownload = (e: MouseEvent) => {
      e.preventDefault();
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      if (isMobile && !/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        window.location.href = "https://play.google.com/store/apps/details?id=com.dmonster.smap";
      } else if (!isMobile) {
        // PC 환경에서는 모달 팝업 표시
        document.getElementById('pcDownloadAlert')?.classList.remove('hidden');
      }
    };

    const appStoreButton = appStoreButtonRef.current;
    const googlePlayButton = googlePlayButtonRef.current;

    if (appStoreButton) {
      appStoreButton.addEventListener('click', handleAppStoreDownload);
    }

    if (googlePlayButton) {
      googlePlayButton.addEventListener('click', handleGooglePlayDownload);
    }

    return () => {
      if (appStoreButton) {
        appStoreButton.removeEventListener('click', handleAppStoreDownload);
      }
      if (googlePlayButton) {
        googlePlayButton.removeEventListener('click', handleGooglePlayDownload);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      {/* 히어로 섹션 */}
      <section className="w-full py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-50 z-0"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-300 rounded-full opacity-30 blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 z-10 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-7/12 mt-16 md:mt-0 text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight reveal">
                자녀의 위치와 일정을 한눈에
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed reveal" style={{transitionDelay: '0.1s'}}>
                SMAP으로 자녀의 실시간 위치를 확인하고 일정을 효율적으로 관리하세요. 
                가족의 안전과 행복을 위한 스마트한 선택입니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start reveal" style={{transitionDelay: '0.2s'}}>
                <a 
                  href="#download" 
                  className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 px-8 py-4 rounded-xl font-medium text-white shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
                >
                  무료로 시작하기
                </a>
                <Link 
                  href="/features" 
                  className="bg-white border border-gray-200 hover:border-indigo-300 text-gray-700 px-8 py-4 rounded-xl font-medium transition duration-300"
                >
                  주요 기능 살펴보기
                </Link>
              </div>
            </div>
            <div className="lg:w-5/12 order-1 lg:order-2 reveal">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                <div className="relative bg-white rounded-3xl p-1 shadow-2xl">
                  <div className="relative rounded-3xl overflow-hidden bg-gray-100 aspect-[4/3]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="p-8 text-center">
                        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">앱 화면</h3>
                        <p className="text-gray-500 text-sm">SMAP 애플리케이션 화면 구성</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 신뢰 섹션 */}
      <section className="w-full py-12 md:py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 reveal">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">신뢰할 수 있는 서비스</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">다양한 학교 및 교육기관에서 사용 중인 SMAP의 안전하고 신뢰할 수 있는 서비스를 경험해보세요.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="reveal" style={{transitionDelay: '0.1s'}}>
              <div className="bg-gray-100 h-24 rounded-xl flex items-center justify-center p-6">
                <div className="text-center text-gray-400 font-medium">학교 로고 #1</div>
              </div>
            </div>
            <div className="reveal" style={{transitionDelay: '0.2s'}}>
              <div className="bg-gray-100 h-24 rounded-xl flex items-center justify-center p-6">
                <div className="text-center text-gray-400 font-medium">학교 로고 #2</div>
              </div>
            </div>
            <div className="reveal" style={{transitionDelay: '0.3s'}}>
              <div className="bg-gray-100 h-24 rounded-xl flex items-center justify-center p-6">
                <div className="text-center text-gray-400 font-medium">교육기관 #1</div>
              </div>
            </div>
            <div className="reveal" style={{transitionDelay: '0.4s'}}>
              <div className="bg-gray-100 h-24 rounded-xl flex items-center justify-center p-6">
                <div className="text-center text-gray-400 font-medium">교육기관 #2</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 서비스 소개 섹션 */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-white to-indigo-50 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-100 rounded-full opacity-50 blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">더 스마트한 일상, 위치와 일정이 만나다</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              SMAP은 자녀의 위치 확인과 일정 관리를 하나의 앱에서 가능하게 하는 혁신적인 서비스입니다.
              더 이상 여러 앱을 번갈아 사용할 필요가 없습니다.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg relative group hover:shadow-xl transition-all reveal" style={{transitionDelay: '0.1s'}}>
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-t-2xl"></div>
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">실시간 위치 확인</h3>
              <p className="text-gray-600">
                정확한 GPS 기술로 자녀의 현재 위치를 실시간으로 확인할 수 있습니다. 이동 경로도 쉽게 파악할 수 있어 안심할 수 있습니다.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg relative group hover:shadow-xl transition-all reveal" style={{transitionDelay: '0.2s'}}>
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-400 to-red-600 rounded-t-2xl"></div>
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">효율적인 일정 관리</h3>
              <p className="text-gray-600">
                직관적인 캘린더로 자녀의 학교, 학원, 각종 활동 일정을 관리하세요. 알림 기능으로 중요한 일정을 놓치지 않습니다.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg relative group hover:shadow-xl transition-all reveal" style={{transitionDelay: '0.3s'}}>
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-green-400 to-green-600 rounded-t-2xl"></div>
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">안전 알림</h3>
              <p className="text-gray-600">
                자녀가 지정된 안전 구역을 벗어나거나 들어올 때 알림을 받아보세요. 학교, 집, 학원 등 중요한 장소를 안전 구역으로 설정할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 동영상 콘텐츠 섹션 */}
      <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">SMAP 활용 가이드</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              SMAP의 다양한 기능과 활용법을 영상으로 만나보세요.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 reveal">
            {/* 유튜브 가로 긴 영상 (가이드) */}
            <div className="rounded-2xl overflow-hidden shadow-xl relative">
              <div className="shorts-slider-container relative">
                <div className="relative pb-[56.25%] h-0 bg-gray-100 flex items-center justify-center">
                  <ShortsSlider isGuideSlider={true} />
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-2">SMAP 사용 가이드</h3>
                <p className="text-gray-600">SMAP 앱의 다양한 기능과 활용법을 상세한 영상으로 확인해보세요.</p>
              </div>
            </div>
            
            {/* 유튜브 쇼츠 슬라이더 */}
            <div className="rounded-2xl overflow-hidden shadow-xl relative">
              <div className="shorts-slider-container relative">
                <div className="relative pb-[56.25%] h-0 bg-gray-100 flex items-center justify-center">
                  <ShortsSlider />
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-2">SMAP 간편 설명</h3>
                <p className="text-gray-600">다양한 SMAP 기능 설명을 짧은 영상으로 확인하세요. 화살표를 눌러 더 많은 쇼츠를 확인할 수 있습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 다운로드 섹션 */}
      <section id="download" className="w-full py-16 md:py-24 bg-gradient-to-br from-indigo-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">지금 무료로 시작하세요</h2>
            <p className="text-indigo-100 text-lg max-w-3xl mx-auto mb-8">
              가족의 행복한 일상을 위한 첫 걸음, SMAP이 함께합니다.<br />
              App Store와 Google Play에서 무료로 다운로드하세요.
            </p>
            <div className="flex flex-col gap-6 justify-center reveal" style={{transitionDelay: '0.1s'}}>
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
            <p className="mt-4 text-sm text-indigo-200 reveal" style={{transitionDelay: '0.3s'}}>카메라로 QR코드를 스캔하여<br />앱을 설치할 수 있습니다.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
