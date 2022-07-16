import React, { useState } from "react";
import {AxiosError, AxiosResponse} from "axios";

interface Form<Type, R> {
    onChange: any
    onSubmit: any
    values: Type
    isLoading: boolean
    data?: R
    isSuccess: boolean
    error?: AxiosError
}

export interface Response {
    data?: any
    error?: any
    success: boolean
}

export function useForm<Type, R>(initialState: Type,
                              callback: () => Promise<AxiosResponse>,
                              onSuccess?: (data: any) => any,
                              onError?: (error: AxiosError) => any): Form<Type, R> {
    const [values, setValues] = useState(initialState);
    const [data, setData] = useState<R>();
    const [isSuccess, setSuccess] = useState(false);
    const [error, setError] = useState<any>();
    const [isLoading, setLoading] = useState(false);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [event.target.id]: event.target.value});
    };

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await callback();
            setData(response.data);
            setSuccess(true);
            onSuccess?.(response.data);
        } catch (e) {
            const error = e as AxiosError;
            setError(error);
            setSuccess(false);
            onError?.(error);
        }
        setLoading(false);
    };

    return {
        onChange,
        onSubmit,
        values,
        isLoading,
        data,
        isSuccess,
        error
    };
}