import Link from 'next/link';
import Image from '../components/image';

const About = () => {
    return (
        <div style={{ fontSize: '20px', fontFamily: 'sans-serif' }}>
            <h1>About</h1>
            <Link href='/'>
                <button>Back to Home</button>
            </Link>
            <Image></Image>
            <p>SSR Magic</p>
        </div>
    );
}

export default About;