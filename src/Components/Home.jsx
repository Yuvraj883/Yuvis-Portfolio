import {IoPinSharp} from 'react-icons/io5';
function Home(){
    return(
        <>
        <div className="h-screen w-screen flex flex-col ">
            <div className="flex m-auto w-[50%] h-3/5 justify-around ">
                <div className="py-12 ">
                    <h1 className="text-5xl my-4 font-extrabold ">Front-End Developer</h1>
                    <p className="py-8 px-2 inline">Hi, I am <b>Yuvraj Singh</b>, a passionate front-end developer,<br/>
                    based in <b>New Delhi, India</b><IoPinSharp className='text-red-700 inline font-bold'/>.
                    </p>
                </div>
                <div>
                    <img src="https://i2-prod.manchestereveningnews.co.uk/incoming/article25746618.ece/ALTERNATES/s1200c/0_zlatan.jpg"
                     className="h-64 w-auto rounded-full" alt="profile-img"/>
                </div>
            </div>
            <div className='bg-red-500'>
                <span>Tech Stacks: </span>
                <p></p>
            </div>
            <div>
          
            </div>

        </div>
        </>
    )
}
export default Home; 