import {
    loginFailed,
    loginStart,
    loginSuccess,
    logoutFailed,
    logoutStart,
    logoutSuccess,
    registerFailed,
    registerStart,
    registerSuccess,
} from "../authSlice";
import { authService } from "../../services";
import toast from "react-hot-toast";

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await authService.handleLoginService(user);
        dispatch(loginSuccess(res.data.data));
        navigate("/");
        toast.success("Đăng nhập thành công!");
    } catch (err) {
        dispatch(loginFailed());
        toast.error("Email hoặc mật khẩu không đúng!");
    }
};

export const registerUser = async (user, dispatch, navigate) => {
dispatch(registerStart());
    try {
        await authService.handleRegisterService(user);
        dispatch(registerSuccess());
        const userLogin = {
            email: user.email,
            password: user.password,
        };
        loginUser(userLogin, dispatch, navigate);
        toast.success("Đăng kí tài khoản thành công!");
    } catch (err) {
        dispatch(registerFailed());
        toast.error("Email đã được sử dụng cho tài khoản khác!");
    }
};

export const logoutUser = async (dispatch, navigate) => {
    dispatch(logoutStart());
    try {
        await authService.handleLogoutService();
        dispatch(logoutSuccess());
        navigate("/login");
    } catch (err) {
        dispatch(logoutFailed());
    }
};
