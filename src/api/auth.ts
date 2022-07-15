import {api} from "../axios";

export interface Token {
    token: string
    refreshToken: string
    tokenType: string
}

export interface SignInRequest {
    email: string
    password: string
}

export const signIn = async (body: SignInRequest) => {
    const res = await api.post("/auth/sign-in", body);
    if(res.status !== 200) {
        //TODO CREATE ERROR MESSAGE?
        return;
    }

    const data = res.data;

    const token = `${data.tokenType} ${data.token}`;

    api.defaults.headers.common["Authorization"] = token;

    localStorage.setItem("token", token);
    localStorage.setItem("refreshToken", data.refreshToken);
}

export interface SignUpRequest {
    name: string
    email: string
    password: string
}

export const signUp = async (body: SignUpRequest) => {

}