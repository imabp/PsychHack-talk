import type { GetServerSidePropsContext, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Card from '../src/components/cards'
const Home: NextPage = () => {
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
              <Card
                title="Lorem Ipsum"
                image={undefined}
                description="Lorem Ipsum"
                link="Lorem Ipsum"
              />
               <Card
                title="Lorem Ipsum"
                image={undefined}
                description="Lorem Ipsum"
                link="Lorem Ipsum"
              />
               <Card
                title="Lorem Ipsum"
                image={undefined}
                description="Lorem Ipsum"
                link="Lorem Ipsum"
              />
               <Card
                title="Lorem Ipsum"
                image={undefined}
                description="Lorem Ipsum"
                link="Lorem Ipsum"
              />
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
  return {
    props: {}, // will be passed to the page component as props
  }
}