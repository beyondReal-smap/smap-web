'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!privacyChecked) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
      return;
    }
    
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const inquiryType = (document.getElementById('inquiry-type') as HTMLSelectElement).value;
    const message = (document.getElementById('message') as HTMLTextAreaElement).value;
    
    // 이메일 본문 생성
    const body = `이름: ${name}%0D%0A이메일: ${email}%0D%0A문의 유형: ${inquiryType}%0D%0A메시지: ${message}`;
    
    // mailto 링크 열기
    window.location.href = `mailto:admin@smap.site?subject=SMAP 문의사항&body=${body}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 relative">
      {showAlert && (
        <div className="absolute top-2 left-0 right-0 mx-auto w-5/6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>개인정보 수집 및 이용에 동의해 주세요.</p>
        </div>
      )}
      <h2 className="text-2xl font-bold mb-6">문의 보내기</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">이름</label>
          <input 
            type="text" 
            id="name" 
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" 
            placeholder="이름을 입력해주세요" 
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">이메일</label>
          <input 
            type="email" 
            id="email" 
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" 
            placeholder="이메일 주소를 입력해주세요" 
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="inquiry-type" className="block text-sm font-medium text-gray-700 mb-2">문의 유형</label>
          <select 
            id="inquiry-type" 
            required
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
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" 
            placeholder="자녀의 안전이나 일정 관리에 관한 문의 또는 제안 사항을 자유롭게 작성해주세요."
          ></textarea>
        </div>
        
        <div className="mb-8">
          <div className="flex items-start">
            <input 
              type="checkbox" 
              id="privacy" 
              checked={privacyChecked}
              onChange={(e) => setPrivacyChecked(e.target.checked)}
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
  );
} 