import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import img from '../assets/contactUnDraw.svg';
function Contact(){
    const form = useRef();

    const sendEmail = (e)=>{
        e.preventDefault(); 
        console.log("function called");

        emailjs.sendForm('service_fljlucc', 'template_dihkdzp', form.current, '0_W1NUKR-qvMvdk7o')
        .then((result)=>{
            
            console.log(result); 
        }, (error)=>{
            console.log(error);
        }
        )

    }

    return(
        <>
        <div className="flex flex-col items-center bg-white w-[90%] shadow-lg m-auto px-12 py-8">
            <h1 className='text-3xl font-bolder'>Contact Me</h1>
            <div className='flex justify-around items-center p-8 m-auto'>
                <div className='w-2/4 m-auto p-2'>
                <img src={img} className='h-96 w-auto' alt="UnDraw"/>

                </div>
                <div className='p-8 w-[50%]'>
                    <h3 className='font-bolder text-2xl text-slate-500'>Get in touch</h3>
                    <p className='w-4/5  text-slate-500 my-4 font-semibold'>My inbox is always open, wheather you have a queston, project idea or just want to say hello, 
                        I will try my best to get back to you!!
                    </p>
                <form ref={form} className=" flex-col my-4 " onSubmit={sendEmail}>
                <input name='from_name' type='text' required placeholder="Full Name*" className="block bg-slate-50 p-2 text-lg m-2 w-4/5"/>
                <input name='from_email' type='email' required placeholder="Email*" className="block bg-slate-50 p-2 text-lg m-2 w-4/5"/>
                <textarea name='message' type='text' required placeholder="Message*" className="bg-slate-50 text-lg p-2 m-2 w-4/5 h-32"></textarea>
                <button type='submit' className='bg-blue-500 block  px-6 font-bold text-white mx-2 py-2 rounded-md mt-2'>Send Message</button>


                </form>
                </div>
            </div>
      
        </div>
        </>
    )
}
export default Contact; 