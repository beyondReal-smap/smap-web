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
    const loadVideo = () => {
      try {
        const player1Iframe = document.getElementById('youtubePlayer1') as HTMLIFrameElement;
        const player2Iframe = document.getElementById('youtubePlayer2') as HTMLIFrameElement;

        if (player1Iframe) {
          player1Iframe.onload = () => {
            console.log('Player 1 iframe loaded');
          };
        }

        setTimeout(() => {
          if (player1Iframe && player2Iframe) {
            player1Iframe.classList.add('hidden');
            player2Iframe.classList.remove('hidden');

            setTimeout(() => {
              player2Iframe.classList.add('hidden');
              player1Iframe.classList.remove('hidden');
            }, 5 * 60 * 1000);
          }
        }, 5 * 60 * 1000);
      } catch (e) {
        console.error('Error loading videos:', e);
      }
    };

    const timer = setTimeout(loadVideo, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleAppStoreDownload = (e: MouseEvent) => {
      e.preventDefault();
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      if (isMobile && /iPad|iPhone|iPod/.test(navigator.userAgent)) {
        window.location.href = "https://apps.apple.com/kr/app/smap-%EC%9C%84%EC%B9%98%EC%B6%94%EC%A0%81-%EC%9D%B4%EB%8F%99%EA%B2%BD%EB%A1%9C-%EC%9D%BC%EC%A0%95/id6480279658";
      } else if (!isMobile) {
        document.getElementById('pcDownloadAlert')?.classList.remove('hidden');
      }
    };

    const handleGooglePlayDownload = (e: MouseEvent) => {
      e.preventDefault();
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      if (isMobile && !/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        window.location.href = "https://play.google.com/store/apps/details?id=com.dmonster.smap";
      } else if (!isMobile) {
        document.getElementById('pcDownloadAlert')?.classList.remove('hidden');
      }
    };

    const appStoreButton = appStoreButtonRef.current;
    const googlePlayButton = googlePlayButtonRef.current;

    if (appStoreButton) appStoreButton.addEventListener('click', handleAppStoreDownload);
    if (googlePlayButton) googlePlayButton.addEventListener('click', handleGooglePlayDownload);

    return () => {
      if (appStoreButton) appStoreButton.removeEventListener('click', handleAppStoreDownload);
      if (googlePlayButton) googlePlayButton.removeEventListener('click', handleGooglePlayDownload);
    };
  }, []);

  return (
    <div className="flex flex-col items-center bg-[#0a0a0f]">
      {/* Hero Section */}
      <section className="w-full min-h-screen relative overflow-hidden flex items-center">
        {/* Animated Background Orbs */}
        <div className="bg-orb bg-orb-1"></div>
        <div className="bg-orb bg-orb-2"></div>
        <div className="bg-orb bg-orb-3"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-6/12 text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-sm text-white/70">지금 무료로 시작하세요</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up">
                <span className="text-white">자녀의 위치와 일정을</span>
                <br />
                <span className="gradient-text">한눈에 확인하세요</span>
              </h1>

              <p className="text-lg md:text-xl text-white/60 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
                SMAP으로 자녀의 실시간 위치를 확인하고 일정을 효율적으로 관리하세요.
                가족의 안전과 행복을 위한 스마트한 선택입니다.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <a
                  href="#app-download"
                  onClick={scrollToDownload}
                  className="btn-startup"
                >
                  무료로 시작하기
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2 inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <Link
                  href="/features"
                  className="btn-secondary"
                >
                  주요 기능 살펴보기
                </Link>
              </div>

              {/* Stats */}
              <div className="flex justify-center lg:justify-start gap-8 mt-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">10K+</div>
                  <div className="text-sm text-white/50">활성 사용자</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">4.8</div>
                  <div className="text-sm text-white/50">앱스토어 평점</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">99.9%</div>
                  <div className="text-sm text-white/50">위치 정확도</div>
                </div>
              </div>
            </div>

            <div className="lg:w-6/12 order-1 lg:order-2 animate-fade-in">
              <div className="relative">
                {/* Glow effect behind phone */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/30 to-fuchsia-500/30 blur-3xl scale-75"></div>
                <Image
                  src="/images/startup_hero_phone.png"
                  alt="SMAP 앱 화면"
                  width={600}
                  height={900}
                  priority
                  quality={100}
                  className="relative z-10 mx-auto drop-shadow-2xl"
                  style={{ maxHeight: '75vh', width: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white/30">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </section>

      {/* Features Introduction Section */}
      <section className="w-full py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-white">더 스마트한 일상,</span>
              <span className="gradient-text"> 위치와 일정이 만나다</span>
            </h2>
            <p className="text-white/50 text-lg max-w-3xl mx-auto">
              SMAP은 자녀의 위치 확인과 일정 관리를 하나의 앱에서 가능하게 하는 혁신적인 서비스입니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature Card 1 */}
            <div className="feature-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">실시간 위치 확인</h3>
              <p className="text-white/50">
                정확한 GPS 기술로 자녀의 현재 위치를 실시간으로 확인할 수 있습니다. 이동 경로도 쉽게 파악할 수 있어 안심할 수 있습니다.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="feature-card reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #f43f5e 0%, #ec4899 100%)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">효율적인 일정 관리</h3>
              <p className="text-white/50">
                직관적인 캘린더로 자녀의 학교, 학원, 각종 활동 일정을 관리하세요. 알림 기능으로 중요한 일정을 놓치지 않습니다.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="feature-card reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">안전 알림</h3>
              <p className="text-white/50">
                자녀가 지정된 안전 구역을 벗어나거나 들어올 때 알림을 받아보세요. 학교, 집, 학원 등 중요한 장소를 설정할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Grid Section */}
      <section className="w-full py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/10 to-transparent"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">SMAP 주요 기능</h2>
            <p className="text-white/50 max-w-3xl mx-auto">자녀의 안전과 일정을 위한 SMAP의 강력한 기능들을 알아보세요.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="glass-card rounded-2xl overflow-hidden reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/icon_location_3d.png"
                  alt="실시간 위치 확인"
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                  className="transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent"></div>
                <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-violet-500/80 text-white">
                  위치 정보
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">실시간 위치 확인</h3>
                <p className="text-white/50 text-sm">정확한 GPS 기술로 자녀의 현재 위치를 실시간으로 확인할 수 있습니다.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="glass-card rounded-2xl overflow-hidden reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/icon_schedule_3d.png"
                  alt="일정 관리"
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                  className="transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent"></div>
                <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-fuchsia-500/80 text-white">
                  일정 관리
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">일정 관리</h3>
                <p className="text-white/50 text-sm">학교, 학원 일정을 한 눈에 관리하고 중요한 일정 알림을 받을 수 있습니다.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="glass-card rounded-2xl overflow-hidden reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/icon_safety_3d.png"
                  alt="안전구역 설정"
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                  className="transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent"></div>
                <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/80 text-white">
                  안전 구역
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">안전구역 설정</h3>
                <p className="text-white/50 text-sm">자녀가 자주 방문하는 장소를 안전구역으로 설정하고 출입 알림을 받을 수 있습니다.</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="glass-card rounded-2xl overflow-hidden reveal" style={{ transitionDelay: '0.4s' }}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/icon_route_3d.png"
                  alt="이동 경로 확인"
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                  className="transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent"></div>
                <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/80 text-white">
                  이동 경로
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">이동 경로 확인</h3>
                <p className="text-white/50 text-sm">자녀의 이동 경로를 확인하여 안전하게 목적지에 도착했는지 확인할 수 있습니다.</p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="glass-card rounded-2xl overflow-hidden reveal" style={{ transitionDelay: '0.5s' }}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/icon_family_3d.png"
                  alt="다중 사용자 관리"
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                  className="transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent"></div>
                <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-purple-500/80 text-white">
                  다중 사용자
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">다중 사용자 관리</h3>
                <p className="text-white/50 text-sm">여러 자녀의 위치와 일정을 한 앱에서 효율적으로 관리할 수 있습니다.</p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="glass-card rounded-2xl overflow-hidden reveal" style={{ transitionDelay: '0.6s' }}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/icon_interface_3d.png"
                  alt="직관적인 인터페이스"
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                  className="transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent"></div>
                <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/80 text-white">
                  인터페이스
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">직관적인 인터페이스</h3>
                <p className="text-white/50 text-sm">누구나 쉽게 사용할 수 있는 직관적인 인터페이스로 설계되었습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Guide Section */}
      <section className="w-full py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">SMAP 활용 가이드</h2>
            <p className="text-white/50 text-lg max-w-3xl mx-auto">
              SMAP의 다양한 기능과 활용법을 영상으로 만나보세요.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 reveal">
            {/* Guide Video */}
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="relative pb-[56.25%] h-0">
                <ShortsSlider isGuideSlider={true} />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">SMAP 사용 가이드</h3>
                <p className="text-white/50 text-sm">SMAP 앱의 다양한 기능과 활용법을 상세한 영상으로 확인해보세요.</p>
              </div>
            </div>

            {/* Shorts Slider */}
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="relative pb-[56.25%] h-0">
                <ShortsSlider />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">SMAP 간편 설명</h3>
                <p className="text-white/50 text-sm">다양한 SMAP 기능 설명을 짧은 영상으로 확인하세요.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="w-full py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/20 via-fuchsia-900/10 to-transparent"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <div className="glass-card rounded-2xl overflow-hidden">
                <div className="relative aspect-video">
                  <div id="videoContainer" className="absolute inset-0">
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
            </div>

            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">더 스마트한 일상,</span>
                <br />
                <span className="gradient-text">위치와 일정이 만나다</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                SMAP은 가족의 안전과 일상의 조화를 이끌어내는 혁신적인 위치 기반 서비스입니다.
                첨단 기술로 가족의 삶을 더욱 풍요롭게 만들고, 소중한 모든 순간을 함께하며,
                어떤 상황에서도 가족의 안전을 최우선으로 생각하는 서비스를 제공할 것을 약속드립니다.
              </p>
              <Link
                href="/features"
                className="btn-startup inline-flex items-center"
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

      {/* Download CTA Section */}
      <section id="app-download" ref={downloadSectionRef} className="w-full py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-fuchsia-900/20 to-[#0a0a0f]"></div>
        <div className="bg-orb bg-orb-1" style={{ opacity: 0.3 }}></div>
        <div className="bg-orb bg-orb-2" style={{ opacity: 0.3 }}></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-white">지금</span>
              <span className="gradient-text"> 무료로 시작하세요</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
              가족의 행복한 일상을 위한 첫 걸음, SMAP이 함께합니다.
              <br />App Store와 Google Play에서 무료로 다운로드하세요.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-8 reveal" style={{ transitionDelay: '0.1s' }}>
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

          <p className="mt-8 text-sm text-white/40 text-center reveal" style={{ transitionDelay: '0.2s' }}>
            카메라로 QR코드를 스캔하여 앱을 설치할 수 있습니다.
          </p>
        </div>
      </section>
    </div>
  );
}
