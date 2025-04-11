import React from 'react';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* 헤더 섹션 */}
      <section className="w-full py-32 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">문의하기</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SMAP 서비스에 대한 문의나 피드백을 보내주세요. 
            자녀의 안전과 일정 관리를 위한 최상의 서비스를 제공하기 위해 노력하고 있습니다.
          </p>
        </div>
      </section>

      {/* 연락처 정보 및 폼 섹션 */}
      <section className="w-full py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* 연락처 정보 */}
            <div>
              <h2 className="text-3xl font-bold mb-8">고객지원</h2>

              <div className="mb-12">
                <h3 className="text-xl font-semibold mb-4">고객 지원 문의</h3>
                <p className="text-gray-600 mb-2">Email: admin@smap.site</p>
                <p className="text-gray-600 mb-2">Tel: 070-1234-5678</p>
                <p className="text-gray-600">운영시간: 평일 오전 9시 ~ 오후 6시 (공휴일 제외)</p>
              </div>

              <div className="mb-12">
                <h3 className="text-xl font-semibold mb-4">긴급 문의</h3>
                <p className="text-gray-600 mb-4">자녀 안전과 관련된 긴급 문의는 24시간 긴급지원센터를 이용해주세요.</p>
                <p className="text-gray-600 font-medium">긴급지원센터: 070-7777-7777</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">회사 위치</h3>
                <p className="text-gray-600 mb-2">Beyond Real</p>
                <p className="text-gray-600">경기도 김포시 김포한강9로75번길 66, 505-A237호 (국제프라자)</p>
              </div>
            </div>

            {/* 문의 폼 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">문의 보내기</h2>
              <form>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">이름</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" 
                    placeholder="이름을 입력해주세요" 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">이메일</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" 
                    placeholder="이메일 주소를 입력해주세요" 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="inquiry-type" className="block text-sm font-medium text-gray-700 mb-2">문의 유형</label>
                  <select 
                    id="inquiry-type" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  >
                    <option value="">문의 유형을 선택해주세요</option>
                    <option value="location">위치 추적 관련 문의</option>
                    <option value="schedule">일정 관리 관련 문의</option>
                    <option value="safety">자녀 안전 관련 문의</option>
                    <option value="account">계정 관련 문의</option>
                    <option value="feedback">피드백/제안</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">메시지</label>
                  <textarea 
                    id="message" 
                    rows={6} 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" 
                    placeholder="자녀의 안전이나 일정 관리에 관한 문의 또는 제안 사항을 자유롭게 작성해주세요."
                  ></textarea>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="privacy" 
                      className="mt-1 focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" 
                    />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                      개인정보 수집 및 이용에 동의합니다. 입력하신 정보는 문의 답변 목적으로만 사용됩니다.
                    </label>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  문의 보내기
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="w-full py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">자주 묻는 질문</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">위치 정보의 정확도는 어떤가요?</h3>
              <p className="text-gray-600">
                SMAP은 최신 GPS 기술을 활용하여 대부분의 상황에서 5~10m 내외의 정확도를 제공합니다. 
                실내나 지하와 같은 GPS 신호가 약한 곳에서는 정확도가 다소 떨어질 수 있습니다. 
                지속적인 기술 업데이트를 통해 정확도를 향상시키고 있습니다.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">배터리 소모가 많지 않나요?</h3>
              <p className="text-gray-600">
                배터리 최적화 기술을 적용하여 배터리 소모를 최소화하고 있습니다. 
                위치 추적 빈도와 정확도 사이의 균형을 유지하면서 배터리 사용량을 조절할 수 있는 
                설정 옵션을 제공하고 있어 사용자가 필요에 맞게 조정할 수 있습니다.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">여러 자녀를 한 번에 관리할 수 있나요?</h3>
              <p className="text-gray-600">
                네, 하나의 계정으로 여러 자녀를 등록하고 관리할 수 있습니다. 
                각 자녀별로 프로필을 설정하고 개별적으로 위치와 일정을 확인할 수 있으며, 
                한 화면에서 모든 자녀의 위치를 동시에 확인하는 기능도 제공합니다.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">개인정보 보호는 어떻게 되나요?</h3>
              <p className="text-gray-600">
                SMAP은 사용자 데이터 보호를 최우선으로 생각합니다. 모든 위치 및 일정 데이터는 
                암호화되어 저장되며, 부모님과 자녀만 접근할 수 있습니다. 
                개인정보처리방침에 따라 엄격하게 데이터를 관리하고 있으며, 제3자와 공유하지 않습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="w-full py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">SMAP과 함께 더 안전한 일상을 시작하세요</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            언제 어디서든 자녀의 위치와 일정을 확인하고, 안심할 수 있는 환경을 만들어보세요.
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
      </section>
    </div>
  );
} 