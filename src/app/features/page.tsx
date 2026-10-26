'use client';

import React, { useRef } from 'react';
import Image from 'next/image';

export default function FeaturesPage() {
  const downloadSectionRef = useRef<HTMLElement>(null);

  const scrollToDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    downloadSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      tag: "프라이버시 보호",
      tagColor: "bg-[#D97757]",
      title: "가족만의 프라이빗 공간",
      description: "초대제로 운영되는 안전한 그룹으로, 가족 구성원들만을 위한 비공개 그룹을 제공합니다.",
      image: "/images/emoji/lock.svg",
      imageBg: "from-[#EBE8DE] to-[#F1EFE7]",
      items: [
        { title: "초대제 운영 시스템", desc: "초대를 통해서만 가입할 수 있어 안전한 가족 공간을 보장합니다." },
        { title: "실시간 위치 공유", desc: "가족 구성원들은 언제 어디서나 서로의 위치를 실시간으로 확인할 수 있습니다." },
        { title: "정보 보안", desc: "가족의 개인정보와 위치 데이터는 철저한 보안 시스템으로 보호됩니다." }
      ]
    },
    {
      tag: "편리한 이동",
      tagColor: "bg-[#D97757]",
      title: "최적의 이동 경로 안내",
      description: "현재 위치에서 다음 일정 장소까지 T-Map의 최적 경로를 바로 제공합니다.",
      image: "/images/emoji/map.svg",
      imageBg: "from-[#EBE8DE] to-[#F1EFE7]",
      items: [
        { title: "T-Map 연동 시스템", desc: "국내 최고의 내비게이션 서비스인 T-Map과 연동되어 정확한 경로를 제공합니다." },
        { title: "원클릭 길 안내", desc: "일정 장소까지 한 번의 클릭으로 바로 경로 안내를 시작할 수 있습니다." },
        { title: "실시간 교통 정보", desc: "실시간 교통 상황을 반영한 최적의 경로를 제공합니다." }
      ],
      reverse: true
    },
    {
      tag: "맞춤형 알림",
      tagColor: "bg-[#D97757]",
      title: "가족 맞춤 스마트 알림",
      description: "입력된 일정과 장소를 기반으로 부모와 자녀 모두에게 최적화된 알림을 제공합니다.",
      image: "/images/emoji/bell.svg",
      imageBg: "from-[#EBE8DE] to-[#F1EFE7]",
      items: [
        { title: "일정 알림 설정", desc: "학교, 학원, 특별 활동 등 중요한 일정 30분 전에 알림을 받을 수 있습니다." },
        { title: "위치 기반 알림", desc: "자녀가 지정된 안전 구역에 도착하거나 떠날 때 자동으로 알림을 받습니다." },
        { title: "맞춤형 알림 설정", desc: "가족 구성원별로 원하는 유형의 알림만 선택하여 받을 수 있습니다." }
      ]
    },
    {
      tag: "이동 기록",
      tagColor: "bg-[#D97757]",
      title: "가족의 발자취 기록",
      description: "지난 2주 동안의 가족 이동 기록을 간편하게 조회할 수 있는 기능을 제공합니다.",
      image: "/images/emoji/clipboard.svg",
      imageBg: "from-[#EBE8DE] to-[#F1EFE7]",
      items: [
        { title: "2주 기록 보관", desc: "최근 2주간의 이동 기록을 자동으로 저장하여 언제든지 확인할 수 있습니다." },
        { title: "상세 방문 정보", desc: "각 장소별 방문 시간, 체류 시간 등 상세한 정보를 제공합니다." },
        { title: "경로 시각화", desc: "지도 위에 이동 경로를 시각적으로 표시하여 한눈에 파악할 수 있습니다." }
      ],
      reverse: true
    },
    {
      tag: "효율적 관리",
      tagColor: "bg-[#D97757]",
      title: "스마트 일정 관리",
      description: "부모님은 자녀의 일정을 한눈에 확인하고 직접 관리할 수 있습니다.",
      image: "/images/emoji/calendar.svg",
      imageBg: "from-[#EBE8DE] to-[#F1EFE7]",
      items: [
        { title: "원격 일정 관리", desc: "부모님이 자녀의 일정을 원격으로 추가, 수정, 삭제할 수 있습니다." },
        { title: "통합 가족 캘린더", desc: "가족 구성원 전체의 일정을 한 화면에서 확인할 수 있습니다." },
        { title: "일정 동기화", desc: "학교 행사나 중요 일정을 모든 가족 구성원과 동기화합니다." }
      ]
    },
    {
      tag: "맞춤형 설정",
      tagColor: "bg-[#D97757]",
      title: "유연한 그룹 관리",
      description: "그룹 유효 기간과 구성원의 가입 기간을 개별적으로 설정할 수 있습니다.",
      image: "/images/emoji/gear.svg",
      imageBg: "from-[#EBE8DE] to-[#F1EFE7]",
      items: [
        { title: "기간별 설정", desc: "그룹의 전체 유효 기간과 각 구성원의 개별 가입 기간을 설정할 수 있습니다." },
        { title: "권한 관리", desc: "그룹 내 구성원별로 다양한 권한을 설정할 수 있습니다." },
        { title: "다중 그룹 관리", desc: "여러 그룹을 동시에 관리할 수 있어 효율적으로 운영할 수 있습니다." }
      ],
      reverse: true
    },
    {
      tag: "간편한 요약",
      tagColor: "bg-[#D97757]",
      title: "하루를 한눈에",
      description: "하루 동안의 일정 수, 이동 시간, 총 이동 거리를 한눈에 볼 수 있는 깔끔한 요약을 제공합니다.",
      image: "/images/emoji/star.svg",
      imageBg: "from-[#EBE8DE] to-[#F1EFE7]",
      items: [
        { title: "일정 통계", desc: "하루 동안의 전체 일정 수와 완료된 일정 수를 통계로 보여줍니다." },
        { title: "이동 분석", desc: "총 이동 거리와 이동 시간을 보여주어 활동량을 파악할 수 있습니다." },
        { title: "주간/월간 트렌드", desc: "일별 데이터를 기반으로 주간 및 월간 활동 트렌드를 확인할 수 있습니다." }
      ]
    }
  ];

  return (
    <div className="flex flex-col items-center bg-[#FAF9F5]">
      {/* Hero Section */}
      <section className="w-full py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#141413]/8 shadow-sm mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#D97757] animate-pulse"></span>
            <span className="text-sm text-[#3D3D3A] font-medium">주요 기능 소개</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
            <span className="text-[#141413]">SMAP의</span>
            <span className="gradient-text"> 주요 기능</span>
          </h1>

          <p className="text-[#3D3D3A] text-lg sm:text-xl mb-10 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            자녀의 안전과 일정 관리를 위한 SMAP의 핵심 기능들을 소개합니다.
            <br />실시간 위치 확인부터 효율적인 일정 관리까지, 자녀를 위한 최고의 솔루션입니다.
          </p>

          <a
            href="#app-download"
            onClick={scrollToDownload}
            className="btn-startup inline-flex items-center animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            무료로 시작하기
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Feature Sections */}
      {features.map((feature, index) => (
        <section key={index} className="w-full py-20 relative overflow-hidden">
          {index % 2 === 0 && (
            <div className="absolute inset-0 bg-[#F1EFE7]"></div>
          )}

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-6 xl:gap-10">
              {/* Image */}
              <div className="lg:w-1/2 reveal">
                <div className={`relative rounded-3xl sm:rounded-[32px] p-6 sm:p-10 max-w-[260px] sm:max-w-sm lg:max-w-md mx-auto aspect-square flex items-center justify-center bg-gradient-to-br ${feature.imageBg ?? 'from-[#EBE8DE] to-[#F1EFE7]'} shadow-[0_20px_40px_-20px_rgba(20,20,19,0.16)] border border-[#141413]/5`}>
                  <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-white/70 blur-2xl"></div>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/60 blur-2xl"></div>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={280}
                    height={280}
                    className="relative z-10 w-[70%] sm:w-[75%] h-auto drop-shadow-[0_15px_25px_rgba(20,20,19,0.18)]"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 reveal" style={{ transitionDelay: '0.2s' }}>
                <div className="max-w-[520px] mx-auto lg:ml-0 lg:mr-auto">
                  <span className={`inline-block px-4 py-1 ${feature.tagColor} text-white rounded-full text-sm font-medium mb-4`}>
                    {feature.tag}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#141413] mb-4">{feature.title}</h2>
                  <p className="text-[#3D3D3A] text-lg mb-8 leading-relaxed">{feature.description}</p>

                  <ul className="space-y-6">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-4 reveal" style={{ transitionDelay: `${0.3 + itemIndex * 0.1}s` }}>
                        <div className={`w-10 h-10 rounded-xl ${feature.tagColor} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-[#141413] text-lg">{item.title}</p>
                          <p className="text-[#3D3D3A] mt-1">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section id="app-download" ref={downloadSectionRef} className="w-full py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F1EFE7]"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 reveal">
            <span className="text-[#141413]">지금,</span>
            <span className="gradient-text"> 무료로 시작해 보세요!</span>
          </h2>

          <p className="text-[#3D3D3A] text-lg sm:text-xl mb-12 max-w-3xl mx-auto reveal" style={{ transitionDelay: '0.1s' }}>
            가족의 행복한 일상을 지키는 파트너, SMAP의 모든 기능을 경험해보세요.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-8 reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="glass-card p-6 rounded-2xl text-center animate-pulse-glow">
              <div className="bg-[#EBE8DE] p-3 rounded-xl inline-block mb-3">
                <Image
                  src="/images/appStoreQR.jpg"
                  alt="App Store QR 코드"
                  width={140}
                  height={140}
                  className="rounded-lg"
                />
              </div>
              <p className="text-[#141413] font-semibold">App Store</p>
              <p className="text-[#73726C] text-sm">iOS</p>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center animate-pulse-glow" style={{ animationDelay: '1.5s' }}>
              <div className="bg-[#EBE8DE] p-3 rounded-xl inline-block mb-3">
                <Image
                  src="/images/googlePlayQR.jpg"
                  alt="Google Play QR 코드"
                  width={140}
                  height={140}
                  className="rounded-lg"
                />
              </div>
              <p className="text-[#141413] font-semibold">Google Play</p>
              <p className="text-[#73726C] text-sm">Android</p>
            </div>
          </div>

          <p className="mt-8 text-sm text-[#73726C] reveal" style={{ transitionDelay: '0.3s' }}>
            카메라로 QR코드를 스캔하여 앱을 설치할 수 있습니다.
          </p>
        </div>
      </section>
    </div>
  );
}