import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import ClientLayout from "./client-layout";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SMAP - 자녀의 일정과 위치 확인 서비스",
  description: "언제 어디서든 자녀의 일정과 위치를 확인하세요. 실시간 위치추적과 일정관리를 한번에.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/sunn-us/SUITE/fonts/variable/woff2/SUITE-Variable.css"
        />
        <style>{`
          :root {
            --primary-color: #3b82f6;
            --primary-dark: #2563eb;
            --primary-light: #60a5fa;
            --accent-color: #f97316;
            --accent-dark: #ea580c;
            --red-color: #ef4444;
            --red-dark: #b91c1c;
            --red-light: #f87171;
            --gradient-primary: linear-gradient(135deg, #3b82f6, #1d4ed8);
            --gradient-accent: linear-gradient(135deg, #f97316, #c2410c);
            --gradient-red: linear-gradient(135deg, #ef4444, #b91c1c);
          }
          
          body {
            overflow-x: hidden;
          }
          
          .text-balance {
            text-wrap: balance;
          }
          
          .truncate-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          
          .gradient-text {
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            background-image: var(--gradient-primary);
          }
          
          .gradient-text-red {
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            background-image: var(--gradient-red);
          }
          
          .button-glow {
            position: relative;
          }
          
          .button-glow::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 9999px;
            background: var(--gradient-primary);
            z-index: -1;
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          
          .button-glow:hover::after {
            opacity: 1;
            filter: blur(8px);
            transform: scale(1.1);
          }
          
          .button-glow-red {
            position: relative;
          }
          
          .button-glow-red::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 9999px;
            background: var(--gradient-red);
            z-index: -1;
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          
          .button-glow-red:hover::after {
            opacity: 1;
            filter: blur(8px);
            transform: scale(1.1);
          }
          
          /* 애니메이션 클래스들 */
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideInRight {
            from { transform: translateX(50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          
          @keyframes slideInLeft {
            from { transform: translateX(-50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          
          @keyframes slideInUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          .anim-fade-in {
            animation: fadeIn 0.8s ease forwards;
          }
          
          .anim-slide-right {
            animation: slideInRight 0.8s ease forwards;
          }
          
          .anim-slide-left {
            animation: slideInLeft 0.8s ease forwards;
          }
          
          .anim-slide-up {
            animation: slideInUp 0.8s ease forwards;
          }
          
          .anim-pulse {
            animation: pulse 2s infinite ease-in-out;
          }
          
          .anim-bounce {
            animation: bounce 2s infinite ease-in-out;
          }
          
          .anim-rotate {
            animation: rotate 8s linear infinite;
          }
          
          /* 스크롤 애니메이션 - 우선순위 상향 조정 */
          .reveal {
            opacity: 1;
            transform: translateY(0);
            transition: opacity 0.6s ease, transform 0.6s ease;
          }
          
          .reveal.active {
            opacity: 1;
            transform: translateY(0);
          }
          
          /* QR 코드 고정 버튼 */
          .fixed-qr-button {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 100;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: var(--gradient-primary);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
            cursor: pointer;
            transition: all 0.3s ease;
          }
          
          .fixed-qr-button:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
          }
          
          .qr-popup {
            position: fixed;
            bottom: 90px;
            right: 20px;
            z-index: 99;
            background: white;
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            width: 320px;
            transform: translateY(20px);
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s ease;
          }
          
          .qr-popup.show {
            transform: translateY(0);
            opacity: 1;
            pointer-events: all;
          }
        `}</style>
      </head>
      <body className="font-sans antialiased bg-white" style={{ fontFamily: 'SUITE Variable, sans-serif' }}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
