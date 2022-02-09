import Head from 'next/head'
import AboutSection from '../src/containers/about'
import ExperienceSection, { ExperienceCard } from '../src/containers/experience'
import ProjectSection, { ProjectCard } from '../src/containers/projects'
import StayConnected from '../src/containers/social'
import { getStory } from '../src/lib/storyblok'

interface HomePageProps {
  experiences: ExperienceCard[];
  projects: ProjectCard[];
}


const Home = ({ experiences, projects }: HomePageProps) => {
  return (
    <div>
      <Head>
        <title>PsychHack GDSC RAIT</title>
        <meta name="description" content="PsychHack GDSC RAIT Talk by Abir Pal| Connect on twitter @imabptweets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='min-h-screen'>
          <AboutSection />
          <ExperienceSection experiences={experiences} />
          <ProjectSection projects={projects} />
          <StayConnected />
        </div>
      </main>


    </div>
  )
}

export default Home

export const getServerSideProps = async() => {

  const response = await getStory('804ad378-f107-4b60-9b07-60ae9070b303', undefined, undefined)
  const SB_experiences = response.story.content.experienceCards;
  const SB_projects = response.story.content.projectCards;

  const experiences: ExperienceCard[] = SB_experiences.map((e:any)=>{
    return {
      role: e.role,
      company: e.company,
      from: e.from,
      to: e.to,
      impacts: e.impacts,
    }
  })

  const projects:ProjectCard[]= SB_projects.map((e:any)=>{
    return {
      name: e.name,
      description: e.description,
      link: e.link,
    }
  })
 

  return {
    props: {
      experiences: experiences,
      projects:projects
    }
  }
}