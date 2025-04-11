"use client";

import React, { useEffect, useRef, useState } from 'react';

type ShortsItem = {
  id: string;
  title: string;
  description: string;
  isShort: boolean;
};

interface ShortsSliderProps {
  isGuideSlider?: boolean;
}

export default function ShortsSlider({ isGuideSlider = false }: ShortsSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesVisible, setSlidesVisible] = useState(1);
  
  const shorts: ShortsItem[] = isGuideSlider 
    ? [
      { id: 'Ba83-yfjvBQ', title: 'SMAP 사용 가이드 #1', description: 'SMAP 앱 소개 및 기본 설정', isShort: false },
      { id: 'JgZov6z0Htg', title: 'SMAP 사용 가이드 #2', description: '자녀 위치 확인 상세 가이드', isShort: false },
      { id: 'Bvzaz5vFyAo', title: 'SMAP 사용 가이드 #3', description: '가족 일정 관리 상세 가이드', isShort: false },
    ]
    : [
      { id: 'lF1RfSb-XJg', title: 'SMAP 간편 설명 #1', description: '실시간 위치 확인 기능 사용법', isShort: true },
      { id: 'XUJpC8DaDsQ', title: 'SMAP 간편 설명 #2', description: '일정 관리 기능 활용하기', isShort: true },
      { id: 'zFULBJR1934', title: 'SMAP 간편 설명 #3', description: '안전 알림 설정 방법', isShort: true },
      { id: 'jNpupeI4ACU', title: 'SMAP 간편 설명 #4', description: '이동 경로 확인하기', isShort: true },
      { id: 'UPS_46Cjaz0', title: 'SMAP 간편 설명 #5', description: '앱 설정 및 커스터마이징', isShort: true },
    ];
  
  useEffect(() => {
    const updateSlidePosition = () => {
      if (sliderRef.current) {
        // 슬라이드 너비 계산
        const slide = sliderRef.current.querySelector('.shorts-slide');
        if (slide) {
          const slideWidth = slide.getBoundingClientRect().width;
          const margin = 8; // 좌우 마진 합계
          
          // 현재 컨테이너 너비
          const containerWidth = sliderRef.current.parentElement?.getBoundingClientRect().width || 0;
          
          // 한 화면에 보이는 슬라이드 수 계산
          const visibleSlides = Math.floor(containerWidth / (slideWidth + margin));
          setSlidesVisible(Math.max(1, visibleSlides));
          
          // 슬라이더 위치 조정
          sliderRef.current.style.transform = `translateX(-${currentIndex * (slideWidth + margin)}px)`;
        }
      }
    };
    
    // 최초 실행
    updateSlidePosition();
    
    // 리사이즈 이벤트에 대응
    window.addEventListener('resize', updateSlidePosition);
    return () => window.removeEventListener('resize', updateSlidePosition);
  }, [currentIndex]);
  
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  
  const handleNext = () => {
    if (currentIndex < shorts.length - slidesVisible) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  
  return (
    <>
      {/* 쇼츠 비디오들 */}
      <div className="shorts-wrapper absolute inset-0 flex items-center justify-center overflow-hidden">
        <div 
          ref={sliderRef}
          className="flex items-center justify-start transition-transform duration-300 ease-in-out"
        >
          {shorts.map((short, index) => (
            <div 
              key={short.id}
              className="shorts-slide flex-shrink-0 mx-1 relative" 
              style={{ 
                width: '31.64%', 
                aspectRatio: '9/16', 
                height: '100%' 
              }}
            >
              <iframe 
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${short.id}${short.isShort ? '?short=1' : ''}`}
                title={short.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 text-white text-xs opacity-0 hover:opacity-100 transition-opacity duration-200">
                <div className="font-bold truncate">{short.title}</div>
                <div className="truncate">{short.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* 네비게이션 버튼 */}
      <button 
        className={`absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full p-2 shadow-md transition-all duration-200 focus:outline-none ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        onClick={handlePrev}
        disabled={currentIndex === 0}
        aria-label="이전 쇼츠 보기"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-800">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button 
        className={`absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full p-2 shadow-md transition-all duration-200 focus:outline-none ${currentIndex >= shorts.length - slidesVisible ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        onClick={handleNext}
        disabled={currentIndex >= shorts.length - slidesVisible}
        aria-label="다음 쇼츠 보기"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-800">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
      
      {/* 인디케이터 */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
        {shorts.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`${index + 1}번째 영상으로 이동`}
          />
        ))}
      </div>
    </>
  );
} 