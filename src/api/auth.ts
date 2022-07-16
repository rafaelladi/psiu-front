import {api} from "../axios";
import {AxiosResponse} from "axios";

export interface Token {
    token: string
    refreshToken: string
    tokenType: string
}

export interface SignInRequest {
    email: string
    password: string
}

export const signIn = async (body: SignInRequest): Promise<AxiosResponse> => {
    const res = await api.post("/auth/sign-in", body);

    const data = res.data as Token;

    const token = `${data.tokenType} ${data.token}`;

    api.defaults.headers.common["Authorization"] = token;

    localStorage.setItem("token", token);
    localStorage.setItem("refreshToken", data.refreshToken);

    return res;
}

export interface SignUpRequest {
    name: string
    email: string
    password: string
}

export const signUp = async (body: SignUpRequest) => {

}