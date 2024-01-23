import React from "react";
import SignUpForm from "../components/auth/SignUpForm";

const SignUp = () => {
    return (
        <div className="w-full min-h-screen flex flex-row items-center bg-bgLogin bg-cover bg-center bg-no-repeat">
            <SignUpForm />
        </div>
    );
};

export default SignUp;
