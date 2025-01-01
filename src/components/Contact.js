

export default function Contact() {
   const config = {
      email: 'nameisnav18@gmail.com',
      phone: '+91 8438887513 '
   }
   return (
      <section className='flex flex-col items-center justify-center bg-primary px-5 py-32 text-white'id = 'contact'>
         <div className='flex flex-col items-center text-center'>
            <h1 className='text-4xl border-b-4  border-secondary  mb-5 w-[150px] font-bold'>Contact</h1>
            <p className='pb-5'>I’d love to hear from you. Please feel free to reach out for any inquiries or opportunities. I'm here to help and collaborate!</p>
            <p className='py-2 '><span className='font-bold'>Email : </span> {config.email} </p>
            <p className='py-2 '><span className='font-bold'>Phone : </span> {config.phone} </p>
         </div>
      </section>
   );
}
