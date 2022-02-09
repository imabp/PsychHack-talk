import Head from 'next/head'
import AboutSection from '../src/containers/about'
import ExperienceSection, { ExperienceCard } from '../src/containers/experience'
import ProjectSection, { ProjectCard } from '../src/containers/projects'
import StayConnected from '../src/containers/social'

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
export const getServerSideProps = () => {
  const experiences: ExperienceCard[] = [{
    role: "Role",
    company: "Company",
    from: "Aug YYYY",
    to: "Aug YYYY",
    impacts: "Impacts at Job A"
  },
  {
    role: "Role",
    company: "Company",
    from: "Aug YYYY",
    to: "Aug YYYY",
    impacts: "Impacts at Job B"
  },
  {
    role: "Role",
    company: "Company",
    from: "Aug YYYY",
    to: "Aug YYYY",
    impacts: "Impacts at Job C"
  }

  ]

  const projects:ProjectCard[] = [{
    name:"Project 1",
    description: "Lorem Ipsum Lorem Ipsum",
    link:""
  },{
    name:"Project 2",
    description: "Lorem Ipsum Lorem Ipsum",
    link:""
  },{
    name:"Project 3",
    description: "Lorem Ipsum Lorem Ipsum",
    link:""
  },
  {
    name:"Project 4",
    description: "Lorem Ipsum Lorem Ipsum",
    link:""
  },
  {
    name:"Project 5",
    description: "Lorem Ipsum Lorem Ipsum",
    link:""
  },]
  return {
    props: {
      experiences: experiences,
      projects:projects
    }
  }
}