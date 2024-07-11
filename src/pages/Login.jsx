import React from "react";
import LoginForm from "../components/auth/LoginForm";
import { useSelector } from "react-redux";
import HomePage from "./users/HomePage";

const Login = () => {
    const currentUser = useSelector((state) => state.auth.login.currentUser);

    if (currentUser) return <HomePage />;
    
    return (
        <div className="w-full min-h-screen flex flex-row items-center bg-bgLogin bg-cover bg-center bg-no-repeat">
            <LoginForm />
        </div>
    );
};

export default Login;
