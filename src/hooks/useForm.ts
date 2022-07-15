import React, { useState } from "react";

interface Form<Type> {
    onChange: any
    onSubmit: any
    values: Type
    isLoading: boolean
}

export function useForm<Type>(initialState: Type, callback: () => any): Form<Type> {
    const [values, setValues] = useState(initialState);
    const [isLoading, setLoading] = useState(false);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [event.target.id]: event.target.value});
    };

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        await callback();
        setLoading(false);
    };

    return {
        onChange,
        onSubmit,
        values,
        isLoading
    };
}