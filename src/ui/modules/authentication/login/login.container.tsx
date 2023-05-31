import   {LoginView} from "./login.view";
import {useForm} from "react-hook-form";
import {SubmitHandler} from "react-hook-form";
import {LoginFormFieldsType} from "../../../../types/forms";
import React,{useState} from "react";

export const LoginContainer = () => {

    const [isLoading, setIsLoading] = useState <boolean>(false)

    const {
        handleSubmit,
        control,
        formState: {errors},
        register,
        setError,
        reset,
    } = useForm<LoginFormFieldsType>();

    const onSubmit:SubmitHandler<LoginFormFieldsType> = async (formData) => {
        setIsLoading(true)
        console.log('formData', formData)
    }

    return (

            <LoginView
                form={{
                    errors,
                    register,
                    handleSubmit,
                    onSubmit,
                    isLoading,
                }}
            />

    )
}