import React, { useEffect } from "react";
import LoginForm from "../components/auth/LoginForm";

const Login = () => {
    return (
        <div className="w-full min-h-screen flex flex-row items-center bg-bgLogin bg-cover bg-center bg-no-repeat">
            <LoginForm />
        </div>
    );
};

export default Login;
