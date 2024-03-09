import heroBg from '../assets/stanley-dai-73OZYNjVoNI-unsplash.jpg'

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-3xl">
                        <h3 className='text-white text-2xl'>Welcome</h3>
                        <h1 className="mb-5 text-7xl font-bold text-white">I am Miran Muhtadi</h1>
                        {/* <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                        <button className="btn bg-[#eb4034] text-white border-none px-8 border rounded-full">Download CV</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;