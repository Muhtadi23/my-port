const SectionTitle = ({ heading }) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <h3 className="text-3xl font-bold py-4 text-white">{heading}</h3>
            <div className="bg-white w-[25px] h-1 mx-auto"></div>
        </div>
    );
};

export default SectionTitle;