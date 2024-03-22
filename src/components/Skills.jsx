import one from '../assets/Steve_Austin_bio.jpg'

const Skills = () => {
    return (
        <div id='about' className='lg:max-w-[1440px] mx-auto lg:flex justify-around md:flex-row sm:flex-col items-center mt-14 gap-14 p-4'>
            <div>
                {/* TODO TEXT SECTION */}
                <h1 className='text-5xl'>My Skills</h1>
                {/* <img className='' src={one} alt="" /> */}
            </div>
            <div className=''>
               
               {/* ProgressBar */}
               <h3 className='text-3xl'>html CSS</h3>
               <h3 className='text-3xl'>html CSS</h3>
               <h3 className='text-3xl'>html CSS</h3>
               <h3 className='text-3xl'>html CSS</h3>
            </div>


        </div>
    );
};

export default Skills;