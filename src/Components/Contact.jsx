import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import img from '../assets/contactUnDraw.svg';

function Contact() {
    const form = useRef();
    const [values, setValues] = useState({
        from_name: '',
        from_email: '',
        message: '',
    });
    const [btn_text, setBtnText] = useState('Send Message');
    const [showConfirmation, setShowConfirmation] = useState(false);

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setBtnText('Sending...');
        emailjs.sendForm('service_fljlucc', 'template_dihkdzp', form.current, '0_W1NUKR-qvMvdk7o')
            .then((result) => {
                setBtnText('Send Message');
                setValues({ from_name: '', from_email: '', message: '' });
                setShowConfirmation(true);
                setTimeout(() => {
                    setShowConfirmation(false);
                }, 3000); // Hide confirmation after 3 seconds
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    };

    return (
        <>
            <div className="md:flex hidden flex-col items-center bg-white w-[90%] shadow-lg m-auto px-12 py-8">
                <h1 className='text-3xl font-bolder'>Contact Me</h1>
                <div className='flex justify-around items-center p-8 m-auto'>
                    <div className='w-2/4 m-auto p-2'>
                        <img src={img} className='h-96 w-auto' alt="UnDraw" />
                    </div>
                    <div className='p-8 w-[50%]'>
                        <h3 className='font-bolder text-2xl text-slate-500'>Get in touch</h3>
                        <p className='w-4/5  text-slate-500 my-4 font-semibold'>My inbox is always open, whether you have a question, project idea, or just want to say hello. I will try my best to get back to you!</p>
                        <form ref={form} className="flex-col my-4" onSubmit={sendEmail}>
                            <input value={values.from_name} onChange={onChange} name='from_name' type='text' required placeholder="Full Name*" className="block bg-slate-50 p-2 text-lg m-2 w-4/5" />
                            <input value={values.from_email} onChange={onChange} name='from_email' type='email' required placeholder="Email*" className="block bg-slate-50 p-2 text-lg m-2 w-4/5" />
                            <textarea value={values.message} onChange={onChange} name='message' type='text' required placeholder="Message*" className="bg-slate-50 text-lg p-2 m-2 w-4/5 h-32"></textarea>
                            <button type='submit' className='bg-blue-500 block  px-6 font-bold text-white mx-2 py-2 rounded-md mt-2'>{btn_text}</button>
                        </form>
                    </div>
                </div>
            </div>
            {/* Mobile View  */}
            <div className="md:hidden flex flex-col items-center bg-white w-[90%] shadow-lg m-auto py-4 ">
                <h1 className='text-3xl font-bolder'>Contact Me</h1>
                <div className='flex flex-col justify-around items-center p-8 m-auto'>
                    <div className=' m-auto pt-0 pb-2 px-2'>
                        <img src={img} className='h-96 w-auto' alt="UnDraw" />
                    </div>
                    <div className='p-2'>
                        <h3 className='font-bolder text-2xl text-slate-500'>Get in touch</h3>
                        <p className='  text-slate-500 my-1 font-semibold'>My inbox is always open, whether you have a question, project idea, or just want to say hello. I will try my best to get back to you!</p>
                        <form ref={form} className="flex-col my-4" onSubmit={sendEmail}>
                            <input value={values.from_name} onChange={onChange} name='from_name' type='text' required placeholder="Full Name*" className="block bg-slate-50 p-2 text-lg m-2 w-[95%]" />
                            <input value={values.from_email} onChange={onChange} name='from_email' type='email' required placeholder="Email*" className="block bg-slate-50 p-2 text-lg m-2 w-[95%]" />
                            <textarea value={values.message} onChange={onChange} name='message' type='text' required placeholder="Message*" className="bg-slate-50 text-lg p-2 m-2 w-[95%] h-32"></textarea>
                            <button type='submit' className='bg-blue-500 block float-right px-6 font-bold text-white mx-2 py-2 rounded-md mt-2'>{btn_text}</button>
                        </form>
                    </div>
                </div>
            </div>
            {showConfirmation && (
                <div className="fixed bottom-32 right-10 bg-green-500 text-white px-4 py-2 rounded-md">
                    Message Sent!
                </div>
            )}
        </>
    );
}

export default Contact;
