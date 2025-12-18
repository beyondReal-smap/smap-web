import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout";

export const inter = Inter({
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
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/sunn-us/SUITE/fonts/variable/woff2/SUITE-Variable.css"
        />
        <style>{`
          :root {
            --primary-violet: #8b5cf6;
            --primary-fuchsia: #d946ef;
            --primary-cyan: #06b6d4;
            --gradient-primary: linear-gradient(135deg, #8b5cf6 0%, #d946ef 50%, #06b6d4 100%);
            --gradient-button: linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%);
            --gradient-hero: linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0f172a 100%);
          }
          
          body {
            overflow-x: hidden;
            background: #0a0a0f;
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
          
          /* 애니메이션 클래스들 */
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideInUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          
          @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(30px, -30px) rotate(5deg); }
            50% { transform: translate(-20px, 20px) rotate(-5deg); }
            75% { transform: translate(20px, 10px) rotate(3deg); }
          }
          
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
            50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.5), 0 0 60px rgba(217, 70, 239, 0.3); }
          }
          
          .anim-fade-in {
            animation: fadeIn 0.8s ease forwards;
          }
          
          .anim-slide-up {
            animation: slideInUp 0.8s ease forwards;
          }
          
          .anim-pulse {
            animation: pulse-glow 3s ease-in-out infinite;
          }
          
          .anim-float {
            animation: float 20s ease-in-out infinite;
          }
          
          /* 스크롤 애니메이션 */
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
            width: 56px;
            height: 56px;
            border-radius: 16px;
            background: var(--gradient-button);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 20px rgba(139, 92, 246, 0.4);
            cursor: pointer;
            transition: all 0.3s ease;
          }
          
          .fixed-qr-button:hover {
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 8px 30px rgba(139, 92, 246, 0.5);
          }
          
          .qr-popup {
            position: fixed;
            bottom: 90px;
            right: 20px;
            z-index: 99;
            background: rgba(15, 15, 35, 0.95);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(139, 92, 246, 0.3);
            border-radius: 16px;
            padding: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
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
