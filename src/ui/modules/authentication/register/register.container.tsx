import {SubmitHandler, useForm} from "react-hook-form";
import {RegisterFormFieldsType} from "../../../../types/forms";
import {RegisterView} from "./register.view";
import {firebaseCreateUser} from "../../../../api/authentication";
import { toast } from 'react-toastify';
import {useToggle} from "../../../../hooks/use-toggle";
import React from "react";
import {Button} from "../../../design-system/buttons/button";

export const RegisterContainer = () => {

    const {value: isLoading, setValue: setIsLoading, toggle} = useToggle({initial: false})
    console.log(isLoading)

    const {
        handleSubmit,
        formState: {errors},
        register,
        setError,
        reset,
    } = useForm <RegisterFormFieldsType> ();

    const handleCreateUserAuthentication = async ({ email, password, how_did_you_know } : RegisterFormFieldsType) => {

    const {error,data} = await firebaseCreateUser(email,password)
        if (error) {
            setIsLoading(false)
            toast.error(error.message)
            return
        }
        toast.success("Inscription validée !");
        setIsLoading(false)
        reset()
        console.log(data)
}

    const onSubmit: SubmitHandler <RegisterFormFieldsType> = async (formData) => {
        setIsLoading(true)
        // console.log("formData", formData);
        const { password } = formData;

        if (password.length <= 5) {
            setError("password", {
                type: "manual",
                message: "Votre mot de passe doit comporter 6 caractères au minimum.",
            });
             return
    }
        await handleCreateUserAuthentication(formData)
     };


    return (
        // <>
        //
        //     <Button action={toggle}>Cliquez</Button>

    <RegisterView
        form={{
        errors,
        register,
        handleSubmit,
        onSubmit,
        isLoading,
    }}
    />
    //
    // </>
    )
}