import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginForm from "../components/auth/LoginForm";

const Login = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.login.currentUser);

    useEffect(() => {
        if(user) {
            navigate("/");
        }
    }, []);

    return (
        <div className="w-full min-h-screen flex flex-row items-center bg-bgLogin bg-cover bg-center bg-no-repeat">
            <LoginForm />
        </div>
    );
};

export default Login;
