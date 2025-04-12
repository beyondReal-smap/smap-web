"use client"

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ShortsSlider from './components/ShortsSlider';

export default function Home() {
  const appStoreButtonRef = useRef<HTMLAnchorElement>(null);
  const googlePlayButtonRef = useRef<HTMLAnchorElement>(null);
  const downloadSectionRef = useRef<HTMLElement>(null);

  const scrollToDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    downloadSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // 간단한 영상 재생 처리 - 복잡한 API 사용하지 않음
    const loadVideo = () => {
      try {
        // 영상이 하얗게 변하는 문제 해결을 위해 iframe을 직접 조작
        const player1Iframe = document.getElementById('youtubePlayer1') as HTMLIFrameElement;
        const player2Iframe = document.getElementById('youtubePlayer2') as HTMLIFrameElement;
        
        // iframe 로드 완료 이벤트 리스너 추가
        if (player1Iframe) {
          player1Iframe.onload = () => {
            console.log('Player 1 iframe loaded');
          };
        }
        
        // 영상 1 종료 후 영상 2로 전환 (5분 후 자동 전환 - 평균 영상 길이 감안)
        setTimeout(() => {
          if (player1Iframe && player2Iframe) {
            console.log('Switching to video 2');
            player1Iframe.classList.add('hidden');
            player2Iframe.classList.remove('hidden');
            
            // 영상 2 종료 후 다시 영상 1로 전환 (5분 후)
            setTimeout(() => {
              console.log('Switching back to video 1');
              player2Iframe.classList.add('hidden');
              player1Iframe.classList.remove('hidden');
            }, 5 * 60 * 1000); // 5분
          }
        }, 5 * 60 * 1000); // 5분
      } catch (e) {
        console.error('Error loading videos:', e);
      }
    };
    
    // 페이지 로드 후 약간의 지연을 두고 영상 로드
    const timer = setTimeout(loadVideo, 1000);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

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
      <section className="w-full py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-6/12 mt-16 md:mt-0 text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight reveal text-balance whitespace-normal" style={{wordBreak: 'keep-all', wordWrap: 'normal'}}>
                자녀의 위치와 일정을 한눈에
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed reveal text-balance whitespace-normal" style={{transitionDelay: '0.1s', wordBreak: 'keep-all', wordWrap: 'normal'}}>
                SMAP으로 자녀의 실시간 위치를 확인하고 일정을 효율적으로 관리하세요.<br />
                가족의 안전과 행복을 위한 스마트한 선택입니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start reveal" style={{transitionDelay: '0.2s'}}>
                <a 
                  href="#app-download" 
                  onClick={scrollToDownload}
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
            <div className="lg:w-6/12 order-1 lg:order-2 reveal">
              <div className="flex justify-center items-center w-full">
                <div className="w-full max-w-xl">
                  <Image
                    src="/images/main.webp"
                    alt="SMAP 앱 화면"
                    width={1200}
                    height={1800}
                    priority
                    quality={100}
                    style={{width: '100%', height: 'auto', maxHeight: '85vh'}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 더 스마트한 일상, 위치와 일정이 만나다 섹션 */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-white to-blue-100 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-200 rounded-full opacity-50 blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance whitespace-normal" style={{wordBreak: 'keep-all', wordWrap: 'normal'}}>더 스마트한 일상, 위치와 일정이 만나다</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto text-balance whitespace-normal" style={{wordBreak: 'keep-all', wordWrap: 'normal'}}>
              SMAP은 자녀의 위치 확인과 일정 관리를 하나의 앱에서 가능하게 하는 혁신적인 서비스입니다.<br />
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
              <h3 className="text-xl font-bold mb-4 text-balance">실시간 위치 확인</h3>
              <p className="text-gray-600 text-balance" style={{wordBreak: 'keep-all', overflow: 'hidden'}}>
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
              <h3 className="text-xl font-bold mb-4 text-balance">효율적인 일정 관리</h3>
              <p className="text-gray-600 text-balance" style={{wordBreak: 'keep-all', overflow: 'hidden'}}>
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
              <h3 className="text-xl font-bold mb-4 text-balance">안전 알림</h3>
              <p className="text-gray-600 text-balance" style={{wordBreak: 'keep-all', overflow: 'hidden'}}>
                자녀가 지정된 안전 구역을 벗어나거나 들어올 때 알림을 받아보세요. 학교, 집, 학원 등 중요한 장소를 안전 구역으로 설정할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SMAP 주요 기능 섹션 */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-500 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-400 rounded-full opacity-30 blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-balance">SMAP 주요 기능</h2>
            <p className="text-blue-100 max-w-3xl mx-auto text-balance" style={{wordBreak: 'keep-all', overflow: 'hidden'}}>자녀의 안전과 일정을 위한 SMAP의 강력한 기능들을 알아보세요.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden reveal" style={{transitionDelay: '0.1s'}}>
              <div className="relative aspect-[4/3] overflow-hidden bg-blue-50 border-b border-gray-200">
                <Image
                  src="/images/2.webp"
                  alt="실시간 위치 확인"
                  fill
                  style={{objectFit: 'cover', objectPosition: '50% 40%'}}
                  className="transition-transform duration-500 hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">위치 정보</span>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-3 text-gray-800 text-balance">실시간 위치 확인</h3>
                <p className="text-gray-600 text-balance" style={{wordBreak: 'keep-all', overflow: 'hidden'}}>정확한 GPS 기술로 자녀의 현재 위치를 실시간으로 확인할 수 있습니다.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden reveal" style={{transitionDelay: '0.2s'}}>
              <div className="relative aspect-[4/3] overflow-hidden bg-red-50 border-b border-gray-200">
                <Image
                  src="/images/5.webp"
                  alt="일정 관리"
                  fill
                  style={{objectFit: 'cover', objectPosition: '50% 0%'}}
                  className="transition-transform duration-500 hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">일정 관리</span>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-3 text-gray-800 text-balance">일정 관리</h3>
                <p className="text-gray-600 text-balance" style={{wordBreak: 'keep-all', overflow: 'hidden'}}>학교, 학원 일정을 한 눈에 관리하고 중요한 일정을 놓치지 않도록 알림을 받을 수 있습니다.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden reveal" style={{transitionDelay: '0.3s'}}>
              <div className="relative aspect-[4/3] overflow-hidden bg-green-50 border-b border-gray-200">
                <Image
                  src="/images/4.webp"
                  alt="내장소(안전구역) 설정"
                  fill
                  style={{objectFit: 'cover', objectPosition: '50% 45%'}}
                  className="transition-transform duration-500 hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">안전 구역</span>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-3 text-gray-800 text-balance">안전구역 설정</h3>
                <p className="text-gray-600 text-balance" style={{wordBreak: 'keep-all', overflow: 'hidden'}}>자녀가 자주 방문하는 장소를 안전구역으로 설정하고 출입 알림을 받을 수 있습니다.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden reveal" style={{transitionDelay: '0.4s'}}>
              <div className="relative aspect-[4/3] overflow-hidden bg-yellow-50 border-b border-gray-200">
                <Image
                  src="/images/8.webp"
                  alt="이동 경로 확인"
                  fill
                  style={{objectFit: 'cover', objectPosition: '50% 40%'}}
                  className="transition-transform duration-500 hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">이동 경로</span>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-3 text-gray-800 text-balance">이동 경로 확인</h3>
                <p className="text-gray-600 text-balance" style={{wordBreak: 'keep-all', overflow: 'hidden'}}>자녀의 이동 경로를 확인하여 안전하게 목적지에 도착했는지 확인할 수 있습니다.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden reveal" style={{transitionDelay: '0.5s'}}>
              <div className="relative aspect-[4/3] overflow-hidden bg-purple-50 border-b border-gray-200">
                <Image
                  src="/images/2.webp"
                  alt="다중 사용자 관리"
                  fill
                  style={{objectFit: 'cover', objectPosition: '50% 80%'}}
                  className="transition-transform duration-500 hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">다중 사용자</span>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-3 text-gray-800 text-balance">다중 사용자 관리</h3>
                <p className="text-gray-600 text-balance" style={{wordBreak: 'keep-all', overflow: 'hidden'}}>여러 자녀의 위치와 일정을 한 앱에서 효율적으로 관리할 수 있습니다.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden reveal" style={{transitionDelay: '0.6s'}}>
              <div className="relative aspect-[4/3] overflow-hidden bg-indigo-50 border-b border-gray-200">
                <Image
                  src="/images/7.webp"
                  alt="직관적인 인터페이스"
                  fill
                  style={{objectFit: 'cover', objectPosition: '50% 75%'}}
                  className="transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">인터페이스</span>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-3 text-gray-800 text-balance">직관적인 인터페이스</h3>
                <p className="text-gray-600 text-balance" style={{wordBreak: 'keep-all', overflow: 'hidden'}}>누구나 쉽게 사용할 수 있는 직관적인 인터페이스로 설계되었습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 동영상 콘텐츠 섹션 */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-100 rounded-full opacity-30 blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">SMAP 활용 가이드</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto text-balance" style={{wordBreak: 'keep-all', overflow: 'hidden'}}>
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
                <h3 className="text-xl font-bold mb-2 text-balance">SMAP 사용 가이드</h3>
                <p className="text-gray-600 text-balance" style={{wordBreak: 'keep-all', overflow: 'hidden'}}>SMAP 앱의 다양한 기능과 활용법을 상세한 영상으로 확인해보세요.</p>
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
                <h3 className="text-xl font-bold mb-2 text-balance">SMAP 간편 설명</h3>
                <p className="text-gray-600 text-balance" style={{wordBreak: 'keep-all', overflow: 'hidden'}}>다양한 SMAP 기능 설명을 짧은 영상으로 확인하세요. 화살표를 눌러 더 많은 쇼츠를 확인할 수 있습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 비전 및 약속 섹션 */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-100 to-indigo-200 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-300 rounded-full opacity-30 blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <div className="rounded-2xl overflow-hidden shadow-xl relative aspect-video">
                <div id="videoContainer" className="absolute inset-0 bg-gray-100">
                  <iframe 
                    id="youtubePlayer1"
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/fRLxsHCvwuQ?autoplay=1&mute=1&enablejsapi=1&rel=0&showinfo=0&playsinline=1&loop=1" 
                    title="SMAP 소개 영상" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="absolute inset-0"
                  ></iframe>
                  <iframe 
                    id="youtubePlayer2"
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/xOqCizxr2uk?enablejsapi=1&rel=0&showinfo=0&playsinline=1&mute=1" 
                    title="SMAP 추가 영상" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="absolute inset-0 hidden"
                  ></iframe>
                </div>
              </div>
            </div>
            
            <div className="reveal" style={{transitionDelay: '0.2s'}}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance whitespace-normal" style={{wordBreak: 'keep-all', wordWrap: 'normal'}}>더 스마트한 일상, 위치와 일정이 만나다</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 space-y-1 text-balance whitespace-normal" style={{wordBreak: 'keep-all', wordWrap: 'normal'}}>
                SMAP은 가족의 안전과 일상의 조화를 이끌어내는 혁신적인 위치 기반 서비스입니다. 
                첨단 기술로 가족의 삶을 더욱 풍요롭게 만들고, 소중한 모든 순간을 함께하며, 
                어떤 상황에서도 가족의 안전을 최우선으로 생각하는 서비스를 제공할 것을 약속드립니다.
              </p>
              <Link 
                href="/features" 
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition duration-300 shadow-md hover:shadow-lg"
              >
                주요 기능 상세보기
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 다운로드 섹션 */}
      <section id="app-download" ref={downloadSectionRef} className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-700 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">지금 무료로 시작하세요</h2>
            <p className="text-indigo-100 text-lg max-w-3xl mx-auto mb-8 text-balance whitespace-normal" style={{wordBreak: 'keep-all', wordWrap: 'normal'}}>
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
            <p className="mt-4 text-sm text-indigo-200 reveal text-balance" style={{transitionDelay: '0.3s', wordBreak: 'keep-all', overflow: 'hidden'}}>카메라로 QR코드를 스캔하여<br />앱을 설치할 수 있습니다.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
