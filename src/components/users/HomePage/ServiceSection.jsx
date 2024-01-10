import React from "react";
import { services } from "../../../utils/services";
import { Link } from "react-router-dom";

const ServiceSection = () => {
    return (
        <div className="w-full flex flex-col px-10 mt-20">
            <h3 className="text-2xl font-semibold text-start text-headingColor">
                Dịch vụ toàn diện
            </h3>
            <div className="grid grid-cols-2 gap-x-12 gap-y-10 mt-8">
                {services.map((service, index) => (
                    <ItemService key={index} service={service} />
                ))}
            </div>
        </div>
    );
};

const ItemService = ({ service }) => {
    return (
        <Link to={'/services/specialists'}>
            <div className="flex flex-row gap-x-12 px-10 py-5 bg-bgItem bg-center bg-repeat bg-cover border-2 border-boderItem rounded-3xl cursor-pointer">
                <img src={service.image} alt="" className="w-14 h-14" />
                <p className="flex items-center text-2xl font-semibold text-textColor">
                    {service.name}
                </p>
            </div>
        </Link>
    );
};

export default ServiceSection;
