import html from '../assets/html.png'
import css from '../assets/css.png'
import mongo from '../assets/mongoDB-ts.png'
import git from '../assets/git.png'
import js from '../assets/javascript.png'
import react from '../assets/react.png'
import fig from '../assets/figma.png'


const Skills = () => {
    return (
        // <div className='lg:max-w-[1440px] mx-auto lg:flex justify-around md:flex-row sm:flex-col items-center mt-14 gap-14 p-4'>
        //     <div>
        //         {/* TODO TEXT SECTION */}
        //         <h1 className='text-5xl'>My Skills</h1>
        //         {/* <img className='' src={one} alt="" /> */}
        //     </div>
        //     <div className=''>

        //        {/* ProgressBar */}
        //        <h3 className='text-3xl'>html CSS</h3>
        //        <h3 className='text-3xl'>html CSS</h3>
        //        <h3 className='text-3xl'>html CSS</h3>
        //        <h3 className='text-3xl'>html CSS</h3>
        //     </div>


        // </div>
        <div className='p-4 max-w-[1440px] mx-auto '>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row justify-evenly">
                
                <div className="avatar justify-center">
                    <div className="w-24 mask mask-hexagon">
                        <img src={html} />
                    </div>
                </div>
                <div className="avatar justify-center">
                    <div className="w-24 mask mask-hexagon">
                        <img src={css} />
                    </div>
                </div>
                <div className="avatar justify-center">
                    <div className="w-24 mask mask-hexagon">
                        <img src={js} />
                    </div>
                </div>
                <div className="avatar justify-center">
                    <div className="w-24 mask mask-hexagon">
                        <img src={react} />
                    </div>
                </div>
                <div className="avatar justify-center">
                    <div className="w-24 mask mask-hexagon">
                        <img src={mongo} />
                    </div>
                </div>
                <div className="avatar justify-center">
                    <div className="w-24 mask mask-hexagon">
                        <img src={git} />
                    </div>
                </div>
                <div className="avatar justify-center">
                    <div className="w-24 mask mask-hexagon">
                        <img src={fig} />
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Skills;