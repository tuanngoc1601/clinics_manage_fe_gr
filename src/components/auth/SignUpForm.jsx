import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { authRequestApi } from "../../redux/requests";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUpForm = () => {
    const [formData, setFormData] = React.useState({
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        phoneNumber: "",
        gender: "",
        password: "",
        confirmPassword: "",
    });
    const [showPassword, setShowPassword] = React.useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChangeSignupForm = (e, type) => {
        const previouState = { ...formData };
        previouState[type] = e.target.value;
        setFormData(previouState);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        authRequestApi.registerUser(formData, dispatch, navigate);
    };

    return (
        <form
            className="w-1/2 flex flex-col items-center justify-center gap-1 px-14 py-4"
            onSubmit={handleSubmit}
        >
            <h1 className="uppercase font-bold text-2xl text-textColor tracking-wide">
                Sign up in Health Grades
            </h1>
            <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col items-start justify-center gap-2 bg-transparent w-full px-4 py-1">
                    <label>First Name</label>
                    <input
                        type="text"
                        placeholder="First Name"
                        className="w-full h-full bg-transparent text-headingColor text-lg border rounded-full outline-none px-4 py-2"
                        value={formData.firstName}
                        onChange={(e) => handleChangeSignupForm(e, "firstName")}
                    />
                </div>
                <div className="flex flex-col items-start justify-center gap-2 bg-transparent w-full px-4 py-1">
                    <label>Last Name</label>
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full h-full bg-transparent text-headingColor text-lg border rounded-full outline-none px-4 py-2"
                        value={formData.lastName}
                        onChange={(e) => handleChangeSignupForm(e, "lastName")}
                    />
                </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-2 bg-transparent w-full px-4 py-2">
                <label>Email</label>
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full h-full bg-transparent text-headingColor text-lg border rounded-full outline-none px-4 py-2"
                    value={formData.email}
                    onChange={(e) => handleChangeSignupForm(e, "email")}
                />
            </div>
            <div className="flex flex-col items-start justify-center gap-2 bg-transparent w-full px-4 py-2">
                <label>Address</label>
                <input
                    type="text"
                    placeholder="Address"
                    className="w-full h-full bg-transparent text-headingColor text-lg border rounded-full outline-none px-4 py-2"
                    value={formData.address}
                    onChange={(e) => handleChangeSignupForm(e, "address")}
                />
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col items-start justify-center gap-2 bg-transparent w-full px-4 py-1">
                    <label>Phone Number</label>
                    <input
                        type="text"
                        placeholder="Phone Number"
                        className="w-full h-full bg-transparent text-headingColor text-lg border rounded-full outline-none px-4 py-2"
                        value={formData.phoneNumber}
                        onChange={(e) =>
                            handleChangeSignupForm(e, "phoneNumber")
                        }
                    />
                </div>
                <div className="flex flex-col items-start justify-center gap-2 bg-transparent w-full px-4 py-1">
                    <label>Gender</label>
                    <select
                        id="gender"
                        value={formData.gender}
                        required
                        className="w-full h-full bg-transparent text-headingColor text-lg border rounded-full outline-none px-4 py-2"
                        onChange={(e) => handleChangeSignupForm(e, "gender")}
                    >
                        <option value="" disabled className="hidden">
                            Gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-2 bg-transparent w-full px-4 py-2">
                <label>Password</label>
                <div className="flex flex-row w-full items-center border rounded-full relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="w-full h-full bg-transparent text-headingColor text-lg border-none outline-none px-4 py-2"
                        value={formData.password}
                        onChange={(e) => handleChangeSignupForm(e, "password")}
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
            <div className="flex flex-col items-start justify-center gap-2 bg-transparent w-full px-4 py-2">
                <label>Confirm Password</label>
                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full h-full bg-transparent text-headingColor text-lg border rounded-full outline-none px-4 py-2"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                        handleChangeSignupForm(e, "confirmPassword")
                    }
                />
            </div>
            <p className="text-md">
                I have an account{" "}
                <Link to={"/login"}>
                    <motion.button
                        className="underline text-red-400"
                        whileTap={{ scale: 0.95 }}
                    >
                        Login here
                    </motion.button>
                </Link>
            </p>
            <button
                type="submit"
                className="w-full text-lg text-white bg-red-300 capitalize hover:bg-red-400 transition-all duration-150 rounded px-4 py-2"
            >
                Sign Up
            </button>
        </form>
    );
};

export default SignUpForm;
