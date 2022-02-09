import { useState } from "react"

export interface ExperienceCard {
    role: string,
    company: string,
    from: string,
    to: string,
    impacts: string,
}

export type ExperienceSectionProps= {
    experiences: ExperienceCard[];
}
const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
    const [impact, setImpact] = useState("Click on Job Cards to view the detailed description of Impacts and Work ")

    return <div
        className='h-screen justify-around w-full text-white p-10
  bg-gradient-to-b from-gray-700  to-gray-900'
    >
        <div className="text-6xl mx-auto mb-10 font-bold">
            Experience
        </div>
        <div className='flex justify-around'>

            <div className='flex flex-col w-1/5 h-2/3'>
                {
                    experiences && experiences.map((experience: ExperienceCard) => {
                        return <>
                            <div
                                onClick={() => setImpact(experience.impacts)}
                                className='border-2 mb-10 p-4 cursor-pointer hover:bg-white hover:text-gray-600  border-white rounded-md'>
                                <div className='text-lg  font-bold'>
                                    {experience.role}
                                </div>
                                <div className='text-lg  font-bold'>
                                    {experience.company}
                                </div>
                                <div className='text-sm'>
                                    {experience.from} -- {experience.to}

                                </div>
                            </div>
                        </>
                    })
                }


            </div>
            <div className='flex flex-col w-3/5  h-2/3'>
                <div className='text-4xl font-bold'>Work and Impact.</div>
                <div className='text-xl mt-5 '>
                    {impact}
                </div>
            </div>
        </div>
    </div>
}

export default ExperienceSection;
