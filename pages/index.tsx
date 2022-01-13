import type { GetServerSidePropsContext, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Card, { CardProps } from '../src/components/cards'
import { getStory } from '../src/lib/storyblok'

interface HomePageProps{
  ProjectCards:CardProps[]
}

const Home = ({ProjectCards}:HomePageProps) => {
  return (
    <div>
      <Head>
        <title>Hack The League</title>
        <meta name="description" content="Hack The League! Demo Project Showcased by Abir Pal| Connect on twitter @imabptweets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='h-screen'>

          <div className='h-1/4 w-full text-center  text-white p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            <div className="text-5xl  mt-10 font-bold"> Hack The League! </div>
            <div className="text-2xl mt-5">
              Awesome Projects
            </div>
          </div>
          <div className='m-5'>
            <div className='grid  grid-cols-3 gap-5 sm:grid-cols-1 md:grid-cols-4  '>
             {
               ProjectCards.map(project=><Card
                key={project.link as string}
                title={project.title as string}
                image={project.image as string}
                description={project.description as string}
                link={project.link as string}
              />)
             }
            </div>
          </div>
        </div>
      </main>


    </div>
  )
}

export default Home

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // Write Server Side Logic 
  const {story} = await getStory(undefined,undefined,'home');
  const projectCards = story.content.projects.map((project:any)=>{
    return {
      title: project.title,
      image: project.image.filename,
      description:project.description,
      link: project.link
    }
  })
  return {
    props: {
      ProjectCards:projectCards as CardProps[]
    }, // will be passed to the page component as props
  }
}