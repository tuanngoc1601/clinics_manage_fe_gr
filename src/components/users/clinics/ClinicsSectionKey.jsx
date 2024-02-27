import React from "react";
import { Link } from "react-router-dom";

const ClinicsSectionKey = ({ keyWord, clinicsArr }) => {
    return (
        <div className="w-full flex flex-col divide-y-2 mt-6">
            <div className="h-50 w-50 flex text-2xl items-center justify-center text-white font-semibold bg-bgKey">
                {keyWord}
            </div>
            <div className="w-full flex flex-row flex-wrap pt-6 mt-4">
                {clinicsArr.map((clinic, index) => (
                    <div key={index} className="w-24 flex flex-col cursor-pointer px-2.5">
                        <Link to={`/clinics/${clinic.id}`}>
                            <img
                                src={clinic.avatar}
                                alt=""
                                className="w-full h-150 block border-2 rounded-md object-contain p-2.5"
                            />
                            <div className="flex items-center text-center justify-center text-md text-headingColor font-semibold my-4">
                                {clinic.name}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClinicsSectionKey;
