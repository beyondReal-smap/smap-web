import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function FeaturesPage() {
  return (
    <div className="flex flex-col items-center">
      {/* 헤더 섹션 */}
      <section className="w-full py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 z-0"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl anim-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-300 rounded-full opacity-20 blur-3xl anim-pulse"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance anim-fade-in">SMAP의 주요 기능</h1>
          <p className="text-gray-600 text-lg sm:text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-balance anim-slide-up" style={{animationDelay: '0.2s'}}>
            자녀의 안전과 일정 관리를 위한 SMAP의 핵심 기능들을 소개합니다. 
            실시간 위치 확인부터 효율적인 일정 관리까지, 자녀를 위한 최고의 솔루션입니다.
          </p>
        </div>
      </section>

      {/* 위치 추적 기능 */}
      <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 reveal">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl rotate-2 scale-105 opacity-20 blur-lg"></div>
                <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-1 shadow-xl">
                  <div className="bg-white rounded-xl p-6 h-[450px] flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4 anim-pulse">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-600">
                          <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-xl font-semibold mb-2">위치 추적 화면</p>
                      <p className="text-sm text-gray-500">실시간으로 자녀의 위치를 확인할 수 있습니다</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0 reveal" style={{transitionDelay: '0.2s'}}>
              <div className="space-y-2">
                <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">실시간 모니터링</div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">실시간 위치 추적</h2>
              </div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                언제 어디서든 자녀의 현재 위치를 확인하세요. 정확한 GPS 기술을 활용한 
                실시간 위치 추적으로 자녀의 안전을 확보할 수 있습니다.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 reveal" style={{transitionDelay: '0.3s'}}>
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-lg">정확한 GPS 추적</p>
                    <p className="text-gray-600 mt-1">최신 GPS 기술을 활용하여 정확한 위치 정보를 제공합니다. 오차 범위를 최소화하여 신뢰할 수 있는 위치 데이터를 확인할 수 있습니다.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 reveal" style={{transitionDelay: '0.4s'}}>
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-lg">이동 경로 추적</p>
                    <p className="text-gray-600 mt-1">자녀의 이동 경로를 확인할 수 있어 정확하게 어디를 방문했는지 알 수 있습니다. 일정 시간 동안의 이동 경로를 지도에서 확인할 수 있습니다.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 reveal" style={{transitionDelay: '0.5s'}}>
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-lg">배터리 최적화</p>
                    <p className="text-gray-600 mt-1">배터리 사용량을 최적화하여 자녀의 기기 배터리를 절약하면서도 정확한 위치 정보를 제공합니다.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 일정 관리 기능 */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-gray-50 to-red-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 to-red-600"></div>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2 reveal">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl rotate-2 scale-105 opacity-20 blur-lg"></div>
                <div className="relative bg-gradient-to-br from-red-500 to-red-700 rounded-2xl p-1 shadow-xl">
                  <div className="bg-white rounded-xl p-6 h-[450px] flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4 anim-pulse">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                        </svg>
                      </div>
                      <p className="text-xl font-semibold mb-2">일정 관리 화면</p>
                      <p className="text-sm text-gray-500">직관적인 인터페이스로 모든 일정을 한눈에</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0 reveal" style={{transitionDelay: '0.2s'}}>
              <div className="space-y-2">
                <div className="inline-block px-4 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">효율적인 관리</div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">일정 관리</h2>
              </div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                자녀의 모든 일정을 한 곳에서 체계적으로 관리하세요. 학교, 학원, 친구 만남까지 
                모든 활동을 등록하고 알림을 받아 효율적인 일정 관리가 가능합니다.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 reveal" style={{transitionDelay: '0.3s'}}>
                  <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-lg">직관적인 캘린더</p>
                    <p className="text-gray-600 mt-1">사용하기 쉬운 인터페이스로 모든 일정을 한눈에 확인하고 관리할 수 있습니다. 월간, 주간, 일간 보기를 지원합니다.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 reveal" style={{transitionDelay: '0.4s'}}>
                  <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-lg">반복 일정 설정</p>
                    <p className="text-gray-600 mt-1">주간 또는 월간 반복 일정을 설정하여 정기적인 활동을 효율적으로 관리할 수 있습니다. 학교나 학원 일정을 한 번만 등록하면 됩니다.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 reveal" style={{transitionDelay: '0.5s'}}>
                  <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-lg">중요도 설정</p>
                    <p className="text-gray-600 mt-1">일정별 중요도를 설정하여 가장 중요한 활동에 집중할 수 있도록 합니다. 중요한 일정에 대한 특별 알림을 받을 수 있습니다.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 안전 구역 설정 */}
      <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 reveal">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl rotate-2 scale-105 opacity-20 blur-lg"></div>
                <div className="relative bg-gradient-to-br from-green-500 to-green-700 rounded-2xl p-1 shadow-xl">
                  <div className="bg-white rounded-xl p-6 h-[450px] flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4 anim-pulse">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                      </div>
                      <p className="text-xl font-semibold mb-2">안전 구역 설정 화면</p>
                      <p className="text-sm text-gray-500">안심할 수 있는 구역을 설정하고 알림 받기</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0 reveal" style={{transitionDelay: '0.2s'}}>
              <div className="space-y-2">
                <div className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">안전 관리</div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">안전 구역 설정</h2>
              </div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                자주 방문하는 장소를 안전 구역으로 설정하고 자녀가 해당 구역을 벗어나거나 
                들어올 때 알림을 받을 수 있습니다. 학교, 집 등 중요한 장소를 등록하세요.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 reveal" style={{transitionDelay: '0.3s'}}>
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-lg">다양한 안전 구역 설정</p>
                    <p className="text-gray-600 mt-1">학교, 집, 학원 등 다양한 장소를 안전 구역으로 설정할 수 있으며, 각 구역마다 반경 크기를 조절할 수 있습니다.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 reveal" style={{transitionDelay: '0.4s'}}>
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-lg">즉시 알림</p>
                    <p className="text-gray-600 mt-1">자녀가 안전 구역을 벗어나거나 들어올 때 즉시 알림을 받아 빠르게 확인할 수 있습니다. 실시간 알림으로 안전을 확보하세요.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 reveal" style={{transitionDelay: '0.5s'}}>
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-lg">시간 기반 관리</p>
                    <p className="text-gray-600 mt-1">특정 시간대에만 안전 구역 알림을 받도록 설정할 수 있어 불필요한 알림을 줄이고 필요한 시간에 집중할 수 있습니다.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 활동 기록 및 리포트 */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2 reveal">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl rotate-2 scale-105 opacity-20 blur-lg"></div>
                <div className="relative bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-1 shadow-xl">
                  <div className="bg-white rounded-xl p-6 h-[450px] flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4 anim-pulse">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                        </svg>
                      </div>
                      <p className="text-xl font-semibold mb-2">활동 리포트 화면</p>
                      <p className="text-sm text-gray-500">자녀의 활동을 통계적으로 확인하고 분석하기</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0 reveal" style={{transitionDelay: '0.2s'}}>
              <div className="space-y-2">
                <div className="inline-block px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">데이터 분석</div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">활동 기록 및 리포트</h2>
              </div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                자녀의 이동 경로와 방문 장소를 확인하고, 주간/월간 리포트를 통해 
                생활 패턴을 파악할 수 있습니다. 자녀의 활동에 대한 통찰력을 얻으세요.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 reveal" style={{transitionDelay: '0.3s'}}>
                  <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-lg">상세 이동 기록 확인</p>
                    <p className="text-gray-600 mt-1">특정 날짜의 자녀 이동 경로를 시간 순서대로 확인할 수 있어 어디서 얼마나 시간을 보냈는지 알 수 있습니다.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 reveal" style={{transitionDelay: '0.4s'}}>
                  <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-lg">방문 장소 통계</p>
                    <p className="text-gray-600 mt-1">가장 자주 방문한 장소와 체류 시간을 분석하여 통계로 제공합니다. 학교, 학원, 친구 집 등 주요 장소를 파악할 수 있습니다.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 reveal" style={{transitionDelay: '0.5s'}}>
                  <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-lg">일정 완료율 분석</p>
                    <p className="text-gray-600 mt-1">계획된 일정의 완료율을 확인하여 자녀의 일정 준수 상태를 파악할 수 있습니다. 효율적인 일정 관리를 지원합니다.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="w-full py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-800 z-0"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full opacity-20 blur-3xl anim-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full opacity-20 blur-3xl anim-pulse"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white reveal">지금, 무료로 시작해 보세요!</h2>
          <p className="text-blue-100 text-lg sm:text-xl mb-10 max-w-3xl mx-auto reveal" style={{transitionDelay: '0.1s'}}>
            가족의 행복한 일상을 지키는 파트너, SMAP의 모든 기능을 경험해보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center reveal" style={{transitionDelay: '0.2s'}}>
            <a 
              href="#download" 
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl font-medium transition shadow-lg hover:shadow-xl group"
            >
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:animate-bounce">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                앱 다운로드
              </span>
            </a>
            <Link 
              href="/contact" 
              className="bg-transparent border border-white text-white px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition"
            >
              더 알아보기
            </Link>
          </div>
          <p className="text-blue-200 mt-8 text-sm reveal" style={{transitionDelay: '0.3s'}}>카메라로 QR코드를 찍으면 설치할 수 있습니다.</p>
        </div>
      </section>
    </div>
  );
} 