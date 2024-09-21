import Link from "next/link";
import AnimatedText from '../components/AnimatedText'

const Apps = async () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <AnimatedText text="안녕하세요"/>
            <Link href="/apps">/apps</Link>
        </div>

    )
}

export default Apps