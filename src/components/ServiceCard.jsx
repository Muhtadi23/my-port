
const ServiceCard = ({ service }) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="text-7xl px-10 pt-10">
                    {service.icon}
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{service.title}</h2>
                    <p>{service.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;