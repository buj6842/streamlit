import { redirect } from 'next/navigation';

export default function Home() {
    // '/' 경로에 접속하면 '/AIPlatform' 경로로 리다이렉트
    redirect('/AIPlatform');
}
