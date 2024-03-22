
// eslint-disable-next-line react/prop-types
const ServiceCard = ({ service }) => {
    return (

            <div className="card min-h-[180px] bg-base-100 shadow-xl">
                <figure className="text-7xl px-10 pt-10">
                    {service.icon}
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{service.title}</h2>
                    <p>{service.description}</p>
                </div>
            </div>

    );
};

export default ServiceCard;