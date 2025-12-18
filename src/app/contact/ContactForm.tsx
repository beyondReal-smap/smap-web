'use client';

import React, { useState, CSSProperties } from 'react';

const textStyle: CSSProperties = {
  wordBreak: 'keep-all',
  overflowWrap: 'break-word'
};

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

    const body = `이름: ${name}%0D%0A이메일: ${email}%0D%0A문의 유형: ${inquiryType}%0D%0A메시지: ${message}`;
    window.location.href = `mailto:admin@smap.site?subject=SMAP 문의사항&body=${body}`;
  };

  return (
    <div className="relative">
      {showAlert && (
        <div className="absolute -top-16 left-0 right-0 mx-auto bg-rose-500/20 border border-rose-500/50 text-rose-300 px-4 py-3 rounded-xl backdrop-blur-sm">
          <p style={textStyle}>개인정보 수집 및 이용에 동의해 주세요.</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2" style={textStyle}>이름</label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition"
            placeholder="이름을 입력해주세요"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2" style={textStyle}>이메일</label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition"
            placeholder="이메일 주소를 입력해주세요"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="inquiry-type" className="block text-sm font-medium text-white/70 mb-2" style={textStyle}>문의 유형</label>
          <select
            id="inquiry-type"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition appearance-none cursor-pointer"
            style={{ ...textStyle, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='rgba(255,255,255,0.5)'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5rem' }}
          >
            <option value="" className="bg-[#1a1a2e] text-white">문의 유형을 선택해주세요</option>
            <option value="location" className="bg-[#1a1a2e] text-white">위치 추적 관련 문의</option>
            <option value="schedule" className="bg-[#1a1a2e] text-white">일정 관리 관련 문의</option>
            <option value="safety" className="bg-[#1a1a2e] text-white">자녀 안전 관련 문의</option>
            <option value="account" className="bg-[#1a1a2e] text-white">계정 관련 문의</option>
            <option value="feedback" className="bg-[#1a1a2e] text-white">피드백/제안</option>
          </select>
        </div>

        <div className="mb-5">
          <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2" style={textStyle}>메시지</label>
          <textarea
            id="message"
            rows={5}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition resize-none"
            placeholder="문의 또는 제안 사항을 자유롭게 작성해주세요."
            style={textStyle}
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative flex-shrink-0">
              <input
                type="checkbox"
                id="privacy"
                checked={privacyChecked}
                onChange={(e) => setPrivacyChecked(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-5 h-5 rounded-md bg-white/5 border border-white/20 peer-checked:bg-violet-500 peer-checked:border-violet-500 transition flex items-center justify-center">
                {privacyChecked && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                )}
              </div>
            </div>
            <span className="text-sm text-white/50 group-hover:text-white/70 transition" style={textStyle}>
              개인정보 수집 및 이용에 동의합니다. 입력하신 정보는 문의 답변 목적으로만 사용됩니다.
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="btn-startup w-full text-center"
          style={textStyle}
        >
          문의 보내기
        </button>
      </form>
    </div>
  );
}