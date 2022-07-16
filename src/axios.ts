import axios, {AxiosError} from "axios";
import {Token} from "./api/auth";
import createAuthRefreshInterceptor from "axios-auth-refresh";

export const api = axios.create({
    baseURL: "https://psiu-api-kt.herokuapp.com/api/"
});

createAuthRefreshInterceptor(api, async (request) => {
    const refreshToken = localStorage.getItem("refreshToken");
    const res = await api.post("/refresh-token", {refreshToken});
    const data: Token = res.data;

    const token = `${data.tokenType} ${data.token}`;
    localStorage.setItem("token", token);
    localStorage.setItem("refreshToken", data.refreshToken);
    request.response.config.headers["Authorization"] = "Bearer " + data.token;
    return Promise.resolve();
}, {
    statusCodes: [ 401, 403 ],
    shouldRefresh(error: AxiosError): boolean {
        const refreshToken = localStorage.getItem("refreshToken")
        console.log(refreshToken !== "undefined");
        return refreshToken !== "undefined";
    }
});