import type { Viewport } from 'next';
import './styles/globals.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
    title: 'AI:ON-U',
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    viewportFit: 'cover',
    userScalable: false,
}

const Header = () => {
    return (
        <div className="bg-slate-300">
            <Navbar />
        </div>
    );
}

const LocaleLayout = ({
                          children,
                      }: {
    children: React.ReactNode
}) => {
    return (
        <html className="h-full">
        <head>
            <meta name="theme-color" content="#FFFFFF" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        </head>
        <body className="flex flex-col min-h-screen">
        <Header />
        {/* pt-16: Navbar가 fixed 상태이므로 본문이 겹치지 않도록 상단 패딩 추가 */}
        <main className="flex-grow pt-16">
            {children}
        </main>
        <Footer />
        </body>
        </html>
    );
}

export default LocaleLayout;
