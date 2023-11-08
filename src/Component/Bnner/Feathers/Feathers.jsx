import { motion } from 'framer-motion'
const Feathers = () => {
    return (
        
        <div  className="container mx-auto">
            <h1 className="text-5xl text-center font-bold italic mt-20 mb-10">All <span className="text-red-500">Features </span> </h1>
            <motion.div initial={{ y: -150 }} animate={{ y: 0 }} transition={{ duration: "2", delay: "1" }} className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mb-20 ml-4 md:ml-0 lg:ml-0 ">
                <div className="card  bg-base-100 shadow-xl ">
                    <figure className="px-10 pt-10">
                        <img src={'https://i.ibb.co/PtWcfC5/image.png'} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">The good kind of
                            peer pressure</h2>
                        <p className="">You know how your parents always say peer pressure is bad? Well… when it comes to studying, they’re wrong. Studying with peers helps you get better grades - and that’s scientifically proven.</p>
                        <div className="text-center">
                            <a href="#" className="text-red-500 ">Read more</a>
                        </div>
                    </div>

                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={'https://i.ibb.co/KqC7fhf/image.png'} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">24/7 support,
                            all year round</h2>
                        <p className="">Find a study buddy (or a procrastinate-mate), access exclusive boot camps, chat with tutors, or ask for community help. When you need a break, take a 5 min guided mindfulness session..</p>
                        <div className="text-center">
                            <a href="#" className="text-red-500 ">Read more</a>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={'https://i.ibb.co/brMDWjh/image.png'} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Studying,
                            reloaded </h2>
                        <p className="">Let’s be honest, any task is more fun when you know there’s a reward at the end of it. We’ll track your progress and gamify your study sessions – all you have to do is set session goals, start the timer and you’ll get rewarded..</p>
                        <div className="text-center">
                            <a href="#" className="text-red-500 ">Read more</a>
                        </div>
                    </div>

                </div>




                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={'https://i.ibb.co/56ZYJdk/person-working-with-floating-screens.jpg'} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Study Buddy Connect</h2>
                        <p className=""> StudyBuddyConnect organizes study groups based on specific topics, allowing students to join discussions and collaborate on assignments. It offers interactive quizzes to test knowledge and facilitate learning. The platform provides a study resources repository..</p>
                        <div className="text-center">
                            <a href="#" className="text-red-500 ">Read more</a>
                        </div>
                    </div>

                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={'https://i.ibb.co/54GwCrW/pexels-canva-studio-3153198.jpg'} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Learn Together
                             </h2>
                        <p className="">LearnTogether offers live streaming lectures, enabling students to attend virtual classes in real-time. It includes study group matching, where users can find compatible study partners based on their learning goals and interests. The platform supports study goal setting, helping users set and achieve their academic objectives..</p>
                        <div className="text-center">
                            <a href="#" className="text-red-500 ">Read more</a>
                        </div>
                    </div>

                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={'https://i.ibb.co/FYh5GdQ/image.png'} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">SGroup LearnHub
                         </h2>
                        <p className="">GroupLearnHub provides collaborative project workspaces for students to work together on assignments and projects. It integrates a calendar for study schedules, allowing users to plan study sessions and stay organized. The platform includes discussion boards for group discussions and idea sharing..</p>
                        <div className="text-center">
                            <a href="#" className="text-red-500 ">Read more</a>
                        </div>
                    </div>

                </div>
            </motion.div>
    </div>
    );
};

export default Feathers;