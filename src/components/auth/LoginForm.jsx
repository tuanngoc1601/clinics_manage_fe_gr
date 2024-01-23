import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { authRequestApi } from "../../redux/requests";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = React.useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChangeInput = (e, type) => {
        const previouState = { ...formData };
        previouState[type] = e.target.value;
        setFormData(previouState);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        authRequestApi.loginUser(formData, dispatch, navigate);
    };

    return (
        <form
            className="w-1/2 flex flex-col items-center justify-center gap-6 px-14 py-4"
            onSubmit={handleSubmit}
        >
            <h1 className="uppercase font-bold text-2xl text-textColor tracking-wide">
                Login in Booking Care
            </h1>
            <div className="flex flex-col items-start justify-center gap-2 bg-transparent w-full px-4 py-2">
                <label>Email</label>
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full h-full bg-transparent text-headingColor text-lg border rounded-full outline-none px-4 py-2"
                    value={formData.email}
                    onChange={(e) => handleChangeInput(e, "email")}
                />
            </div>
            <div className="flex flex-col items-start justify-center gap-2 bg-transparent w-full px-4 py-2">
                <label>Password</label>
                <div className="flex flex-row w-full items-center border rounded-full relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="w-full h-full bg-transparent text-headingColor text-lg border-none outline-none px-4 py-2"
                        value={formData.password}
                        onChange={(e) => handleChangeInput(e, "password")}
                    />
                    {showPassword ? (
                        <span className="me-4">
                            <FaEye
                                className="text-2xl"
                                onClick={() => setShowPassword(false)}
                                role="button"
                            />
                        </span>
                    ) : (
                        <span className="me-4">
                            <FaEyeSlash
                                className="text-2xl"
                                onClick={() => setShowPassword(true)}
                                role="button"
                            />
                        </span>
                    )}
                </div>
            </div>
            <p className="text-md">
                Don't have an account{" "}
                <Link to={"/sign-up"}>
                    <motion.button
                        className="underline text-red-400"
                        whileTap={{ scale: 0.95 }}
                    >
                        Create here
                    </motion.button>
                </Link>
            </p>
            <button
                type="submit"
                className="w-full text-lg text-white bg-red-300 capitalize hover:bg-red-400 transition-all duration-150 rounded px-4 py-2"
            >
                Login
            </button>
        </form>
    );
};

export default LoginForm;
