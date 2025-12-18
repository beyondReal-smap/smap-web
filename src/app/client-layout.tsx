"use client"

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, right: 0 });
  const [scrolled, setScrolled] = useState(false);
  const appDownloadLinkRef = useRef<HTMLAnchorElement>(null);
  const closeAlertBtnRef = useRef<HTMLButtonElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);
  const qrButtonRef = useRef<HTMLDivElement>(null);
  const qrPopupRef = useRef<HTMLDivElement>(null);
  const headerDownloadBtnRef = useRef<HTMLAnchorElement>(null);
  const mobileMenuDownloadBtnRef = useRef<HTMLAnchorElement>(null);

  const mobileMenuHomeRef = useRef<HTMLAnchorElement>(null);
  const mobileMenuFeaturesRef = useRef<HTMLAnchorElement>(null);
  const mobileMenuContactRef = useRef<HTMLAnchorElement>(null);
  const mobileMenuTryRef = useRef<HTMLAnchorElement>(null);

  const hamburgerRef = useRef<HTMLButtonElement>(null);

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 메뉴 토글
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  // 메뉴 위치 업데이트 함수
  const updateMenuPosition = useCallback(() => {
    if (hamburgerRef.current) {
      const rect = hamburgerRef.current.getBoundingClientRect();
      setMenuPosition({
        top: rect.bottom,
        right: window.innerWidth - rect.right
      });
    }
  }, []);

  // 스크롤 이벤트 핸들러
  useEffect(() => {
    let ticking = false;
    let animationFrameId: number;

    const handleScroll = () => {
      if (!ticking) {
        animationFrameId = window.requestAnimationFrame(() => {
          if (mobileMenuOpen) {
            updateMenuPosition();
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    if (mobileMenuOpen) {
      updateMenuPosition();
      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('resize', updateMenuPosition);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateMenuPosition);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [mobileMenuOpen, updateMenuPosition]);

  // 앱 다운로드 섹션으로 스크롤
  const scrollToDownloadSection = useCallback((e: MouseEvent) => {
    e.preventDefault();
    const appDownloadSection = document.getElementById('app-download');
    if (appDownloadSection) {
      appDownloadSection.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  }, []);

  // 헤더 다운로드 버튼 클릭 핸들러
  const handleHeaderDownloadClick = useCallback((e: MouseEvent) => {
    e.preventDefault();
    const path = window.location.pathname;

    if (path === '/' || path === '/features') {
      scrollToDownloadSection(e);
    } else if (path === '/contact') {
      const downloadSection = document.getElementById('download-section');
      if (downloadSection) {
        downloadSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [scrollToDownloadSection]);

  useEffect(() => {
    // 스크롤 애니메이션
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(item => {
      item.classList.remove("opacity-0");
      item.classList.add("active");
    });

    // QR 코드 토글
    const qrButton = qrButtonRef.current;
    const qrPopup = qrPopupRef.current;

    const handleQrButtonClick = () => {
      if (qrPopup) {
        qrPopup.classList.toggle('show');
      }
    };

    const handleQrOutsideClick = (event: MouseEvent) => {
      if (qrButton && qrPopup &&
        !qrPopup.contains(event.target as Node) &&
        !qrButton.contains(event.target as Node)) {
        qrPopup.classList.remove('show');
      }
    };

    if (qrButton && qrPopup) {
      qrButton.addEventListener('click', handleQrButtonClick);
      document.addEventListener('click', handleQrOutsideClick);
    }

    // 모바일 메뉴 외부 클릭 시 닫기
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const mobileMenu = document.getElementById('mobileMenu');
      const hamburgerButton = document.getElementById('hamburgerButton');

      if (mobileMenu && hamburgerButton &&
        !mobileMenu.contains(target) &&
        !hamburgerButton.contains(target) &&
        mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    // 앱 다운로드 링크 처리
    const handleAppDownload = (e: MouseEvent) => {
      e.preventDefault();
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      if (isMobile) {
        if (isIOS) {
          window.location.href = "https://apps.apple.com/kr/app/smap-%EC%9C%84%EC%B9%98%EC%B6%94%EC%A0%81-%EC%9D%B4%EB%8F%99%EA%B2%BD%EB%A1%9C-%EC%9D%BC%EC%A0%95/id6480279658";
        } else {
          window.location.href = "https://play.google.com/store/apps/details?id=com.dmonster.smap";
        }
      } else {
        document.getElementById('pcDownloadAlert')?.classList.remove('hidden');
      }
    };

    // PC 알림 닫기 버튼
    const handleCloseAlert = () => {
      document.getElementById('pcDownloadAlert')?.classList.add('hidden');
    };

    const appDownloadLink = appDownloadLinkRef.current;
    const closeAlertBtn = closeAlertBtnRef.current;

    if (appDownloadLink) {
      appDownloadLink.addEventListener('click', handleAppDownload);
    }

    if (closeAlertBtn) {
      closeAlertBtn.addEventListener('click', handleCloseAlert);
    }

    // 햄버거 버튼
    const handleHamburgerClick = (e: MouseEvent) => {
      e.stopPropagation();
      toggleMobileMenu();
    };

    const hamburgerButton = hamburgerButtonRef.current;
    if (hamburgerButton) {
      hamburgerButton.addEventListener('click', handleHamburgerClick);
    }

    // 모바일 메뉴 항목 클릭
    const handleMenuItemClick = () => {
      setMobileMenuOpen(false);
    };

    const mobileMenuRefs = [
      mobileMenuHomeRef.current,
      mobileMenuFeaturesRef.current,
      mobileMenuContactRef.current,
      mobileMenuTryRef.current
    ];

    mobileMenuRefs.forEach(ref => {
      if (ref) {
        ref.addEventListener('click', handleMenuItemClick);
      }
    });

    // 헤더 다운로드 버튼
    const headerDownloadBtn = headerDownloadBtnRef.current;
    const mobileMenuDownloadBtn = mobileMenuDownloadBtnRef.current;

    if (headerDownloadBtn) {
      headerDownloadBtn.addEventListener('click', handleHeaderDownloadClick);
    }

    if (mobileMenuDownloadBtn) {
      mobileMenuDownloadBtn.addEventListener('click', handleHeaderDownloadClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      if (appDownloadLink) {
        appDownloadLink.removeEventListener('click', handleAppDownload);
      }
      if (closeAlertBtn) {
        closeAlertBtn.removeEventListener('click', handleCloseAlert);
      }
      if (hamburgerButton) {
        hamburgerButton.removeEventListener('click', handleHamburgerClick);
      }
      mobileMenuRefs.forEach(ref => {
        if (ref) {
          ref.removeEventListener('click', handleMenuItemClick);
        }
      });
      if (qrButton && qrPopup) {
        qrButton.removeEventListener('click', handleQrButtonClick);
        document.removeEventListener('click', handleQrOutsideClick);
      }
      if (headerDownloadBtn) {
        headerDownloadBtn.removeEventListener('click', handleHeaderDownloadClick);
      }
      if (mobileMenuDownloadBtn) {
        mobileMenuDownloadBtn.removeEventListener('click', handleHeaderDownloadClick);
      }
    };

  }, [toggleMobileMenu, mobileMenuOpen, scrollToDownloadSection, handleHeaderDownloadClick]);

  return (
    <>
      {/* Glassmorphism Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled
          ? 'bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
        }`}>
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/logo.png"
              alt="SMAP 로고"
              width={48}
              height={48}
              className="h-10 w-auto transition-transform group-hover:scale-110"
            />
            <span className="text-xl font-bold gradient-text">SMAP</span>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-all duration-300 font-medium relative group">
                  홈
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-white/70 hover:text-white transition-all duration-300 font-medium relative group">
                  주요기능
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-all duration-300 font-medium relative group">
                  문의하기
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="hidden md:block">
            <a
              href="#app-download"
              ref={headerDownloadBtnRef}
              className="btn-startup text-sm"
            >
              무료로 시작하기
            </a>
          </div>

          <button
            id="hamburgerButton"
            className="md:hidden text-white p-2 z-50 rounded-lg hover:bg-white/10 transition-all"
            ref={hamburgerButtonRef}
            aria-label={mobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu - Glassmorphism */}
      {mobileMenuOpen && (
        <div
          id="mobileMenu"
          className="fixed glass-dark rounded-2xl z-50"
          style={{
            top: menuPosition.top + 8,
            right: menuPosition.right,
            width: '200px',
            boxShadow: '0 8px 32px rgba(139, 92, 246, 0.2)',
          }}
        >
          <div className="p-4">
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-white/80 hover:text-white text-sm font-medium transition py-2 px-3 rounded-lg hover:bg-white/5"
                ref={mobileMenuHomeRef}
              >
                홈
              </Link>
              <Link
                href="/features"
                className="block text-white/80 hover:text-white text-sm font-medium transition py-2 px-3 rounded-lg hover:bg-white/5"
                ref={mobileMenuFeaturesRef}
              >
                주요기능
              </Link>
              <Link
                href="/contact"
                className="block text-white/80 hover:text-white text-sm font-medium transition py-2 px-3 rounded-lg hover:bg-white/5"
                ref={mobileMenuContactRef}
              >
                문의하기
              </Link>
              <div className="pt-2">
                <a
                  href="#app-download"
                  ref={mobileMenuDownloadBtnRef}
                  className="btn-startup text-sm w-full block text-center"
                >
                  무료로 시작하기
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <main>
        {children}
      </main>

      {/* Modern Dark Footer */}
      <footer className="bg-[#0a0a0f] border-t border-white/5 py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/logo.png"
                  alt="SMAP 로고"
                  width={40}
                  height={40}
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bold gradient-text">SMAP</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                자녀의 위치와 일정을 확인하는<br />가장 신뢰할 수 있는 서비스
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/smap.official.2024/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/50 hover:text-violet-400 hover:bg-violet-500/10 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">지원</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/contact" className="text-white/50 hover:text-violet-400 transition">문의하기</Link></li>
                <li><Link href="https://schedulemap.notion.site/FAQ-8f37107b3c7c4307afd4297c7d71b5d5?pvs=4" target="_blank" className="text-white/50 hover:text-violet-400 transition">FAQ</Link></li>
                <li><Link href="https://schedulemap.notion.site/SMAP-4afc9e6b71a6434cbcbf9dc4ec6f9d9d?pvs=4" target="_blank" className="text-white/50 hover:text-violet-400 transition">도움말</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">이용약관</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="https://schedulemap.notion.site/30b32b5ad0bc4f99a39b28c0fe5f1de4?pvs=4" target="_blank" className="text-white/50 hover:text-violet-400 transition">서비스이용약관</Link></li>
                <li><Link href="https://schedulemap.notion.site/2ac62e02f97b4d61945d68c2d89109e9?pvs=4" target="_blank" className="text-white/50 hover:text-violet-400 transition">개인정보처리방침</Link></li>
                <li><Link href="https://schedulemap.notion.site/69cf94c6a04e471d8c3e3043f95baefb?pvs=4" target="_blank" className="text-white/50 hover:text-violet-400 transition">위치기반서비스약관</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">앱 다운로드</h3>
              <div className="flex gap-3">
                <div className="glass-card p-2 rounded-xl">
                  <Image
                    src="/images/appStoreQR.jpg"
                    alt="App Store QR"
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <p className="text-xs text-white/50 text-center mt-1">iOS</p>
                </div>
                <div className="glass-card p-2 rounded-xl">
                  <Image
                    src="/images/googlePlayQR.jpg"
                    alt="Google Play QR"
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <p className="text-xs text-white/50 text-center mt-1">Android</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-white/40 text-sm">
                <p><span className="text-white/60 font-medium">Beyond Real</span> | 대표: 정진 | 208-07-09695</p>
                <p className="mt-1">경기도 김포시 김포한강9로75번길 66, 505-A237호</p>
              </div>
              <p className="text-white/40 text-sm">© 2025 SMAP. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* QR Button */}
      <div className="fixed-qr-button anim-pulse" ref={qrButtonRef}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
        </svg>
      </div>

      {/* QR Popup */}
      <div className="qr-popup" ref={qrPopupRef}>
        <div className="text-center">
          <p className="font-bold text-white mb-2">앱 다운로드</p>
          <p className="text-sm text-white/60 mb-4">QR코드를 스캔하여<br />SMAP앱을 다운로드 하세요.</p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="glass-card p-3 rounded-xl">
              <Image
                src="/images/appStoreQR.jpg"
                alt="App Store QR"
                width={100}
                height={100}
                className="rounded-lg mx-auto"
              />
              <span className="text-xs text-white/60 block mt-2">App Store</span>
            </div>
            <div className="glass-card p-3 rounded-xl">
              <Image
                src="/images/googlePlayQR.jpg"
                alt="Google Play QR"
                width={100}
                height={100}
                className="rounded-lg mx-auto"
              />
              <span className="text-xs text-white/60 block mt-2">Google Play</span>
            </div>
          </div>
          <a
            href="javascript:void(0)"
            ref={appDownloadLinkRef}
            className="btn-startup w-full block text-center text-sm"
          >
            앱 다운로드
          </a>
        </div>
      </div>

      {/* PC Download Alert */}
      <div id="pcDownloadAlert" className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 hidden">
        <div className="glass-dark rounded-2xl p-8 max-w-md mx-4">
          <h3 className="text-xl font-bold text-white mb-4">모바일 환경 필요</h3>
          <p className="text-white/70 mb-6">SMAP 앱은 모바일 환경에서만 다운로드할 수 있습니다.</p>
          <div className="space-y-3 mb-6">
            <a
              href="https://play.google.com/store/apps/details?id=com.dmonster.smap"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-medium transition hover:shadow-lg hover:shadow-green-500/25"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295ZM1 13.396V2.603L6.846 8 1 13.396ZM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z" />
              </svg>
              Android 다운로드
            </a>
            <a
              href="https://apps.apple.com/kr/app/smap-%EC%9C%84%EC%B9%98%EC%B6%94%EC%A0%81-%EC%9D%B4%EB%8F%99%EA%B2%BD%EB%A1%9C-%EC%9D%BC%EC%A0%95/id6480279658"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-gray-700 to-gray-900 text-white py-3 rounded-xl font-medium transition hover:shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
              </svg>
              iOS 다운로드
            </a>
          </div>
          <button
            className="w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl transition font-medium"
            ref={closeAlertBtnRef}
          >
            닫기
          </button>
        </div>
      </div>
    </>
  );
}