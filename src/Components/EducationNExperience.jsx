import { useState } from 'react'
const EducationNExperience = () => {
  const [education, setEducation] = useState('false')
  const [experience, setExperience] = useState('true')

  const handleEducation = () => {
    setEducation('true')
    setExperience('false')
  }

  const handleExperience = () => {
    setExperience('true')
    setEducation('false')
  }

  return (
    <>
      <div className='my-24 h-auto p-12 md:block hidden'>
        <h1 className='text-3xl  text-center m-8'>Education & Experience</h1>

        <div className='flex flex-row justify-center items-center font-bold mb-8 rounded-md bg-white p-2 w-min mx-auto text-2xl'>
          <button
            onClick={handleEducation}
            className={
              education === 'true'
                ? 'm-2 px-8 py-2 bg-[#E5BA73] rounded-md cursor-pointer text-white text-2xl'
                : 'm-2 px-8 py-2 bg-white rounded-md cursor-pointer text-black hover:bg-[#f1f5f9]'
            }
          >
            Education
          </button>
          <button
            onClick={handleExperience}
            className={
              experience === 'true'
                ? 'm-2 px-8 py-2 bg-[#E5BA73] rounded-md cursor-pointer text-white text-2xl'
                : 'm-2 px-8 py-2 bg-white rounded-md cursor-pointer text-black hover:bg-[#f1f5f9]'
            }
          >
            Experience
          </button>
        </div>
        {
          // Education
          education === 'true' && (
            <div>
              <div className='relative h-24 m-0 p-0 '>
                <div>
                  <div className='bg-white p-4 text-black w-[40%] rounded-md ml-8 float-left shadow-xl mb-8'>
                    <div className='border-l-2 h-56 absolute left-[50%] border-solid border-black'></div>
                    <div className='absolute  w-[30px] h-[30px] top-[50%] rounded-full bg-black left-[49%]  '></div>
                    <h1 className='font-bold text-2xl '>
                      Maharaja Surajmal Institute of Technology | GGSIPU
                    </h1>
                    <h3 className='font-semibold text-gray-500'>
                      BTech in Information Technology | 2022-2025
                    </h3>
                    <ul className='text-gray-500 p-2'>
                    <li className=' list-disc mx-0'>
                        Completed Graduation with 8.1 CGPA.
                      </li>
                      <li className=' list-disc mx-0'>
                        Runner Up at Front End Contest organised at Maharaja
                        Agrasen Institute of Technology (MAIT).(April, 2024)
                      </li>

                      <li className=' list-disc mx-0'>
                        Runner Up at IIC MSIT Ideathon.(April, 2024)
                      </li>
                      <li className=' list-disc mx-0'>
                        Headed the organisation of Robo-War event in the Annual
                        Tech Fest of MSIT. (January 2024)
                      </li>

                      <li className=' list-disc mx-0'>
                        Participated in the Google Solution Challenge and made a
                        contribution to the Google Developer Students Club
                        (GDSC-MSIT) as a web developer.(December 2022–July 2023)
                      </li>

                      <li className=' list-disc mx-0'>
                        Won Inter Department Football Tournament 2022, with IT
                        Department.(December 2023)
                      </li>
                      <li className=' list-disc mx-0'>
                        Joint top scorer of the Inter Department Tournmanet
                        2022.(December 2023){' '}
                      </li>
                      <li className=' list-disc mx-0'>
                        Won 6 medals at the Annual Sports Days in the track and
                        field competitions across.(April 2023- January 2024)
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
              <div className=''>
                <div className='relative h-24  my-8 p-0 '>
                  <div className='bg-white p-4  text-black w-[40%] float-right mr-8 rounded-md shadow-xl '>
                    <div className='border-l-2 h-56 absolute left-[50%] border-solid border-black'></div>
                    <div className='absolute w-[30px] h-[30px] top-[50%] rounded-full bg-black left-[49%]  '></div>
                    <h1 className='font-bold text-2xl '>
                      Ambedkar Institute of Technology | DSEU
                    </h1>
                    <h3 className='font-semibold text-gray-500'>
                      Diploma in Computer Engineering | 2019-2022
                    </h3>
                    <ul className='text-gray-500 p-2'>
                      <li className=' list-disc mx-0'>
                        Secured 85.7% in diploma, 3rd rank in the Computer
                        Engineering department.
                      </li>
                      <li className=' list-disc mx-0'>
                        Did an internship at DSEU and got to interact with the
                        then Deputy CM & Education Minister Shri Manish Sisodiya
                        ji.
                      </li>
                      <li className=' list-disc mx-0'>
                        Been Class Representative for 5 semesters.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )
        }
        {
          // Experience
          experience === 'true' && (
            <div className='h-auto'>
              <div className='relative h-24 m-0 p-0 '>
                <div className='flex flex-col justify-center'>
                  <div className='border-l-2 h-56 absolute left-[50%] border-solid border-black shadow-xl '></div>
                  <div className='absolute w-[30px] h-[30px] top-[80%] my-auto rounded-full bg-black left-[49%]  '></div>
                  <div className='bg-white p-4 text-black w-[40%] rounded-md ml-8 float-left '>
                    <h1 className='font-bold text-2xl '>ZS</h1>
                    <h3 className='font-semibold text-gray-600'>
                      Backend Engineer | December 2025 - Present | Gurugram, India
                    </h3>
                    <ul className='text-gray-500 p-2'>
                      <li className=' list-disc mx-0'>
                        Developed backend microservices for the Kural AI Analytics Platform, delivering 5+ end-to-end features.
                      </li>
                      <li className=' list-disc mx-0'>
                        Refactored large-scale data ingestion pipelines from Pandas to Polars, achieving a 7x increase in processing speed.
                      </li>
                      <li className=' list-disc mx-0'>
                        Skills: Python, Polars, Microservices, System Observability.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='relative h-24  m-8 p-0 '>
                <div>
                  <div className='border-l-2 h-56 absolute left-[50%] border-solid border-black shadow-xl'></div>
                  <div className='absolute w-[30px] h-[30px] top-[70%] rounded-full bg-black left-[49%]  '></div>
                  <div className='bg-white p-4 text-black w-[40%] float-right mr-5 rounded-md '>
                    <h1 className='font-bold text-2xl '>HAWKMARTECH</h1>
                    <h3 className='font-semibold text-gray-600'>
                      Backend & AI Engineer (SDE-I) | Dec 2024 - Nov 2025 | Gurugram, India
                    </h3>
                    <ul className='text-gray-500 p-2'>
                      <li className=' list-disc mx-0'>
                        Architected REST and GraphQL APIs for high-traffic platforms (One Turf News), supporting 1M+ users.
                      </li>
                      <li className=' list-disc mx-0'>
                        Built an agentic RAG-based GenAI system using LangChain and n8n to automate 80% of real-time content generation.
                      </li>
                      <li className=' list-disc mx-0'>
                        Skills: Node.js, GraphQL, Redis, LangChain, n8n, RAG.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </div>
      {/* Small screen  view */}
      <div className='my-24 h-auto p-6 md:hidden block'>
        <h1 className='text-3xl  text-center m-8'>Education & Experience</h1>

        <div className='flex flex-row justify-center items-center font-bold mb-8 rounded-md bg-white p-1 w-min mx-auto text-xl'>
          <button
            onClick={handleEducation}
            className={
              education === 'true'
                ? 'm-2 px-2 py-1 bg-[#E5BA73] rounded-md cursor-pointer text-white text-2xl'
                : 'm-2 px-2 py-1 bg-white rounded-md cursor-pointer text-black hover:bg-[#f1f5f9]'
            }
          >
            Education
          </button>
          <button
            onClick={handleExperience}
            className={
              experience === 'true'
                ? 'm-2 px-2 py-1 bg-[#E5BA73] rounded-md cursor-pointer text-white text-2xl'
                : 'm-2 px-2 py-1 bg-white rounded-md cursor-pointer text-black hover:bg-[#f1f5f9]'
            }
          >
            Experience
          </button>
        </div>
        {education === 'true' && (
          <div className='flex border-l-4 border-black h-108 flex-col '>
            <div className='bg-white p-4 text-black w-[100%] rounded-md ml-8 float-left relative shadow-xl '>
              <div className='absolute w-[30px] h-[30px]  my-auto rounded-full bg-black left-[-14%] top-[50%]  '></div>

              <h1 className='font-bold text-xl '>
                Maharaja Surajmal Institute of Technology | GGSIPU
              </h1>
              <h3 className='font-semibold text-gray-600'>
                BTech in Information Technology | 2022-2025
              </h3>
              <ul className='text-gray-500 p-2'>
                <li className=' list-disc mx-0'>Completed Graduation with 8.1 CGPA.</li>
              </ul>
            </div>

            <div className='bg-white p-4 text-black w-[100%] rounded-md ml-8 float-left relative shadow-xl mt-8'>
              <div className='absolute w-[30px] h-[30px]  my-auto rounded-full bg-black left-[-14%] top-[50%]  '></div>

              <h1 className='font-bold text-xl '>
                Ambedkar Institute of Technology | DSEU
              </h1>
              <h3 className='font-semibold text-gray-600'>
                Diploma in Computer Engineering | 2019-2022
              </h3>

              <ul className='text-gray-500 p-2'>
                <li className=' list-disc mx-0'>
                  Secured 85.7% in diploma, 3rd rank in the Computer Engineering
                  department.
                </li>
                <li className=' list-disc mx-0'>
                  Did an internship at DSEU and got to interact with the then
                  Deputy CM & Education Minister Shri Manish Sisodiya ji.
                </li>
                <li className=' list-disc mx-0'>
                  Been Class Representative for 5 semesters.
                </li>
              </ul>
            </div>
          </div>
        )}

        {experience === 'true' && (
          <div className='flex border-l-4 border-black h-108 flex-col '>
            <div className='bg-white p-4 text-black w-[100%] rounded-md ml-8 float-left relative shadow-xl '>
              <div className='absolute w-[30px] h-[30px]  my-auto rounded-full bg-black left-[-14%] top-[50%]  '></div>

              <h1 className='font-bold text-xl '>ZS</h1>
              <h3 className='font-semibold text-gray-600'>
                Backend Engineer | Dec 2025 - Present
              </h3>
              <ul className='text-gray-500 p-2'>
                <li className=' list-disc mx-0'>
                  Developed backend microservices for Kural AI Analytics.
                </li>
                <li className=' list-disc mx-0'>
                  Refactored pipelines (7x speed increase using Polars).
                </li>
                <li className=' list-disc mx-0'>
                  Skills: Python, Polars, Microservices.
                </li>
              </ul>
            </div>

            <div className='bg-white p-4 text-black w-[100%] rounded-md ml-8 float-left relative shadow-xl mt-8'>
              <div className='absolute w-[30px] h-[30px]  my-auto rounded-full bg-black left-[-14%] top-[50%]  '></div>

              <h1 className='font-bold text-xl '>HAWKMARTECH</h1>
              <h3 className='font-semibold text-gray-600'>
                Backend & AI Engineer | Dec 2024 - Nov 2025
              </h3>

              <ul className='text-gray-500 p-2'>
                <li className=' list-disc mx-0'>
                  Architected APIs for 1M+ users platform.
                </li>
                <li className=' list-disc mx-0'>
                  Built agentic RAG-based GenAI system.
                </li>
                <li className=' list-disc mx-0'>
                  Skills: Node.js, GraphQL, LangChain, n8n.
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
export default EducationNExperience
