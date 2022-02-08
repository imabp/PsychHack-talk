import type { GetServerSidePropsContext, NextPage } from 'next'
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
        <title>Bugtrons</title>
        <meta name="description" content="Bugtrons Talk by Abir Pal| Connect on twitter @imabptweets" />
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

export const getServerSideProps = async () => {

  const response = await getStory("e636f5ff-5e22-4416-81ad-bc39defabb7b", "undefined", "undefined")
  console.log(response);

  const DEV_experiences = response.story.content.experience;
  console.log(DEV_experiences);

  const DEV_projects = response.story.content.projects;


  const experiences: ExperienceCard[] = DEV_experiences.map((e: any) => {
    return {
      role: e.role,
      company: e.company,
      from: e.from,
      to: e.to,
      impacts: e.impacts
    }
  })
  const projects: ProjectCard[] = DEV_projects.map((e: any) => {
    return {
      name: e.name,
      description: e.description,
      link: e.link,
    }
  })


  return {
    props: {
      experiences: experiences,
      projects: projects
    }
  }
}