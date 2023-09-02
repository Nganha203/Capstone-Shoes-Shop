import { UserRegister } from "src/types";
import { axiosWithAuth, axiosWithoutAuth } from "./config.service"
import { TUserProfileUpdate } from "src/pages/profile";
export const userLogin = async (data: { email: string; password: string }) => {
    try {
        const resp = await axiosWithoutAuth({
            method: "post",
            url: "/Users/signin",
            data,
        });
        return resp.data;
    } catch (error) {
        console.log(error)
    }
};
export const signup = async (data: UserRegister) => {
    try {
        const resp = await axiosWithoutAuth({
            method: "post",
            url: "/Users/signup",
            data,
        });
        return resp.data;
    } catch (err) {
        console.log(err)
    }
}
export const getProfile = async () => {
    try {
        const resp = await axiosWithAuth({
            method: 'post',
            url: '/Users/getProfile'
        })
        return resp;
    } catch (err) {
        console.log(err)
    }
}
export const updateProfile = async (data: TUserProfileUpdate) => {
    try {
        const resp = await axiosWithAuth({
            method: 'post',
            url: '/Users/updateProfile',
            data
        })
        return resp;
    } catch (err) {
        console.log(err)
    }
}
export const updatePassword = async (data: string) => {
    try {
        const resp = await axiosWithAuth({
            method: 'post',
            url: '/Users/changePassword',
            data: {
                newPassword: data
            }
        })
        return resp;
    } catch (err) {
        console.log(err)
    }
}