import HeroImg from '../assets/hero.png';
import { AiOutlineTwitter, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

export default function Hero() {
    const config = {
        subtitle: 'I am a Full Stack Developer',
        social: {
            linkedin: 'https://www.linkedin.com/in/naveenkumarr18/',
            twitter: 'https://x.com/Naveenk55727841',
            github: 'https://github.com/Naveenkumar1812'
        }
    };

    return (
        <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
            <div className='1/2 flex-col'>
                <h1 className='text-white text-6xl font-hero-font'>
                    Hi, <br /> I'm Naveen Kumar
                    <p className='text-2xl'>{config.subtitle}</p>
                </h1>
                <div className='flex py-10'>
                    {/* Add rel="noopener noreferrer" for security */}
                    <a
                        href={config.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='pr-5 hover:text-white'
                    >
                        <AiOutlineLinkedin size={40} />
                    </a>
                    <a
                        href={config.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='pr-5 hover:text-white'
                    >
                        <AiOutlineTwitter size={40} />
                    </a>
                    <a
                        href={config.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='hover:text-white'
                    >
                        <AiOutlineGithub size={40} />
                    </a>
                </div>
            </div>
            <img className='md:w-1/3' src={HeroImg} alt="Hero" />
        </section>
    );
}
