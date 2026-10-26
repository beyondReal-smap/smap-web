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
          body {
            overflow-x: hidden;
            background: #FAF9F5;
            color: #141413;
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

          /* 로컬 애니메이션 헬퍼 */
          @keyframes fadeIn {
            from { opacity: 0; }
            to   { opacity: 1; }
          }

          @keyframes slideInUp {
            from { transform: translateY(50px); opacity: 0; }
            to   { transform: translateY(0); opacity: 1; }
          }

          .anim-fade-in { animation: fadeIn 0.8s ease forwards; }
          .anim-slide-up { animation: slideInUp 0.8s ease forwards; }
          .anim-pulse { animation: none; }
          .anim-float { animation: none; }

          .qr-popup {
            position: fixed;
            bottom: 90px;
            right: 20px;
            z-index: 99;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(20, 20, 19, 0.10);
            border-radius: 16px;
            padding: 20px;
            box-shadow: 0 20px 40px rgba(20, 20, 19, 0.12);
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
      <body className="font-sans antialiased" style={{ fontFamily: 'SUITE Variable, sans-serif', background: '#FAF9F5', color: '#141413' }}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
