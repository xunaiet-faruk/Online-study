import video from '../../assets/istockphoto-1219790607-640_adpp_is.mp4'
const Banner = () => {
    return (
        <div>
            <div className='relative'>
              
                <video src={video} autoPlay loop muted className='w-full object-cover'></video>
                <div className="absolute top-0 bg-gradient-to-r from-[#15151500] to-[#151515] w-full h-full">
                    <div className='absolute space-y-2 md:space-y-5 right-2 md:right-7 md:pl-5 pl-3 md:top-1/3 '>
                        <p className='lg:text-7xl md:text-5xl text-xl mt-10 lg:mt-0 md:mt-0 italic font-bold lg:w-1/2 text-white'>Meet, chat, and <span className='text-blue-200'>study</span> with students</p>
                        <p className='lg:text-xl italic text-white'>Join the largest global student community online and say goodbye  to lack <br/> of motivation.</p>
                        <button className='btn btn-outline  text-white'>Explore more </button>
                   </div>
                </div>
            </div>
            </div>


    );
};

export default Banner;