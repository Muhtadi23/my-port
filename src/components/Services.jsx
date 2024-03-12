import SectionTitle from "./SectionTitle";
import { FaLaptopCode, FaWordpress } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const ServiceData = [
    {
        _id:1,
        title: "Web Design",
        description:
            "Used for astronomical observations, capturing stunning images of the universe.",
        icon: <FaLaptopCode className="text-7xl" />,
    },
    {
        _id:2,
        title: "WordPress",
        description:
            ", it's a habitable artificial satellite orbiting Earth and serves as a space environment research laboratory",
        icon: <FaWordpress className="text-7xl" />,

    },
    {
        _id:3,
        title: "GPS",
        description:
            "Part of the Global Positioning System (GPS) used for navigation.",
        icon: <FaLaptopCode className="text-7xl" />,
    },
];

const Services = () => {
    return (
        <div>
            <SectionTitle
                heading={"My Services"}
            ></SectionTitle>

            <div className="flex justify-evenly text-white gap-6">
                {
                    ServiceData.map(service =><ServiceCard key={service._id} service={service} ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;