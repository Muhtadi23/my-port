import my from '../assets/myImg.jpg'
import ibra from '../assets/ibra.jpg'
import one from '../assets/one.jpg'

const About = () => {
    return (
        <div className='max-w-[1440px] mx-auto flex flex-row-reverse items-center mt-14 gap-14'>
            <div className='text-white'>
                <h3 className='text-3xl font-bold mb-6'>About Me</h3>
                <h2 className='text-5xl font-bold mb-6'>Hello! <span className='text-[#eb4034]'>I am Miran Muhtadi</span></h2>
                <p className='font-bold'>I combine our passion for design focused in people with advanced development technologies. 350+ clients have procured exceptional results and happiness while working with me.
                </p>
                <p className='font-bold mt-4'>
                    Delivering work within time and budget which meets client’s requirements is our moto. when an unknown printer took a galley of type and scrambled it to make a type specimen book lorem Ipsum has been the industry's standard. Lorem Ipsum has been the industry's standard dummy text ever since.
                </p>
                <div className='mt-6'>
                    <div>
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn bg-[#eb4034] text-white border-none px-8 border rounded-full" onClick={() => document.getElementById('my_modal_3').showModal()}>About More</button>
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn bg-[#eb4034] btn-sm btn-circle absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg">Hello!</h3>
                                <p className="py-4">Press ESC key or click on ✕ button to close</p>
                            </div>
                        </dialog>
                    </div>

                </div>
            </div>
            <div><img className='' src={one} alt="" /></div>
        </div>
    );
};

export default About;