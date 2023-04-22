function Contact(){
    return(
        <>
        <div className="flex flex-col items-center bg-white">
            <h1>Contact Me</h1>
        <form className=" flex-col m-auto w-[40%] p-8">
            <input placeholder="Full Name*" className="block bg-slate-50 p-2 text-lg m-2 w-4/5"/>
            <input placeholder="Email*" className="block bg-slate-50 p-2 text-lg m-2 w-4/5"/>
            <textarea placeholder="Message*" className="bg-slate-50 text-lg p-2 m-2 w-4/5"></textarea>


        </form>
        </div>
        </>
    )
}
export default Contact; 