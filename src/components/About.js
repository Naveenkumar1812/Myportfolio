 import AboutImage from '../assets/about.png';

 export default function About() {
    const config = {
        line1: 'Hii, I am a Full Stack Developer passionate about creating user-friendly, responsive, and efficient web applications, seamlessly integrating front-end and back-end technologies.',
        line2: 'I have expertise in front-end tools like HTML, CSS, JavaScript, Tailwind CSS, and React.js, and back-end technologies such as Node.js, Express.js, MongoDB, Mongoose, and MySQL, enabling me to build robust and scalable web applications.'

    }
    return <section className='flex flex-col md:flex-row bg-secondary px-5' id = 'about'>
        <div className=' py-5 md:w-1/2'>
            <img src = {AboutImage} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[180px] font-bold'>About Me</h1>
                <p className='pb-5'> {config.line1} </p>
                <p> {config.line2}  </p>
            </div>
        </div>

    </section>
 }