import React, { useRef, useState, useEffect} from 'react';
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

  emailjs.sendForm('service_ourzo8s', 'template_araquos', form.current, 'HLwGl0S1mItjMYEd1')
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
    <div className='text-white flex justify-center items-center h-[70vh] animate-fade-down animate-once'>
      <form ref={form} onSubmit={sendFeedback} className='bg-linear-to-bl from-teal-950 to-black flex flex-col justify-center items-center w-[23rem] h-[60vh] border-[1px] space-y-8 rounded-md'>
      
      <div className='w-[300px] h-[40px] flex items-center py-2 px-3 border-[1px] border-white rounded-md mt-6'>
          <input className='outline-none text-lg' type='text' name='user_name' placeholder=' Your name' />
        </div>

        <div className='w-[300px] h-[40px] flex items-center py-2 px-3 border-[1px] border-white rounded-md'>
          <input className='outline-none text-lg' type='email' name='user_email' placeholder='Your Email' />
        </div>

        <div className='w-[300px] flex items-center py-2 px-3 border-[1px] border-white rounded-md'>
          <textarea className='outline-none text-lg'  name='message'  placeholder='How can i help you'></textarea>
        </div>

        <button type='submit' className=' px-3 text-xl' disabled={loading}>
  {loading ? 'Sending...' : 'Submit'}
</button>


        { success && <p className='text-green-500 relative top[-15px] transition-all delay-150 animate-fade animate-once'>Thank you! Your application has been sent.</p>}

      </form>
    </div>
  )
}

export default Contact;

// service_ourzo8s

// template_araquos

// HLwGl0S1mItjMYEd1