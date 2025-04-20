import { useRef, useState, useEffect} from 'react';
import emailjs from '@emailjs/browser';



function Contact() {

  useEffect(() => {
    document.title = 'Ansh Sonone | Contact';
  }, []);

  const form: any = useRef('')

  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false);

const sendFeedback = (e: any) => {
  e.preventDefault();
  setLoading(true);

  emailjs.sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAIL_PUBLIC_ID)
    .then(() => {
      setSuccess(true);
      form.current.reset();
    })
    .catch((error) => {
      console.error('Email send error:', error);
      setSuccess(false);
    })
    .finally(() => setLoading(false));
};


  return (
    <div className='text-white flex justify-center items-center h-screen animate-fade-down animate-once'>
      <form ref={form} onSubmit={sendFeedback} className='flex flex-col items-center w-full sm:w-[23rem] h-[60vh] border-[1px] space-y-2 rounded-md form-container'>
      
      <div className='w-[300px] h-[40px] flex items-center py-2 px-3 border-[1px] border-zinc-700 rounded-md'>
          <input className='outline-none text-lg ' type='text' name='user_name' placeholder='Company / Personal name' />
        </div>

        <div className='w-[300px] h-[40px] flex items-center py-2 px-3 border-[1px] border-zinc-700 rounded-md'>
          <input className='outline-none text-lg' type='email' name='user_email' placeholder='Company / Personal ' />
        </div>

        <div className='w-[300px] flex items-center py-2 px-3 border-[1px] border-zinc-700 rounded-md'>
          <textarea className='outline-none text-lg'  name='message'  placeholder='How can i help you'></textarea>
        </div>

        <button type='submit' className=' py-2 px-6 text-lg text-gray-400 bg-zinc-900 rounded-md transition-all delay-150 cursor-pointer' disabled={loading}>
  {loading ? 'Sending...' : 'Submit'}
</button>


        { success && <p className='text-green-500 relative top[-15px] transition-all delay-150 animate-fade animate-once'>Thank you! Your application has been sent.</p>}

      </form>
    </div>
  )
}

export default Contact;