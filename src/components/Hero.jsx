import heroBg from '../assets/stanley-dai-73OZYNjVoNI-unsplash.jpg'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="hero-overlay bg-black bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-3xl">
                        <h3 className='text-white text-3xl'>Welcome</h3>
                        {/* <h1 className="mb-5 text-7xl font-bold text-white">I am Miran Muhtadi</h1> */}
                        <div>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed once, initially
                                    'I am Miran Muhtadi',
                                    500,
                                    'I am a Front-end Developer'
                                ]}
                                speed={50}
                                style={{ fontSize: '4.5em', color: 'white' }}
                                repeat={Infinity}
                            />
                        </div>
                        <button className="btn bg-[#eb4034] text-white border-none px-8 border rounded-full">Download CV</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;