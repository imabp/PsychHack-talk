
export interface CardProps {
    title?: string;
    image?: string;
    description?: string;
    link?: string;
}

const Card = ({ title = "Awesome Title", image, description = "Awesome Project Description", link = "someawesomelink" }: CardProps) => {
    return <>
        <div className='bg-yellow-50 p-4 mr-10 pb-20 md:w-full'>
            {
                image ?
                    <div className='rounded-sm w-full p-5 h-1/2 mb-2 overflow-hidden'>
                        <img src={image} className="w-full h-full" />
                    </div>
                    : <div className='rounded-sm w-full p-5 h-1/2 bg-purple-500 mb-2 overflow-hidden'>
                        <img src={"https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"} className="w-full h-full" />
                    </div>

            }
            <p className='text-2xl font-bold  pl-5'> {title} </p>
            <p className='text-md  pl-5 mt-2'> {description} </p>
            <div className='pb-5 mt-5 pl-5'>
                <a className="text-orange-800 font-bold " href={link}>Project Submission Link</a>
            </div>
        </div>
    </>
}

export default Card;