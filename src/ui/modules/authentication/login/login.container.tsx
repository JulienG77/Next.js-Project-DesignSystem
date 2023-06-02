import   {LoginView} from "./login.view";

import React, {useEffect, useState} from "react";
import {SubmitHandler} from "react-hook-form";
import {useForm} from "react-hook-form";
import {useToggle} from "../../../../hooks/use-toggle";
import {LoginFormFieldsType} from "../../../../types/forms";

import {onAuthStateChanged } from "firebase/auth";
import {firebaseSignInUser} from "../../../../api/authentication";
import {auth } from "../../../../config/firebase-config";

import {toast} from "react-toastify";
import {useRouter} from "next/router";


export const LoginContainer = () => {
    const router = useRouter()

    const {value: isLoading, setValue: setIsLoading, toggle} = useToggle({initial: false})

    console.log(router)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log("user", user)

            } else {
                console.log('pas connecté !')

            }
        });
    }, [])

    const {
        handleSubmit,
        control,
        formState: {errors},
        register,
        setError,
        reset,
    } = useForm<LoginFormFieldsType>();

    const handleSignInUser = async (
        {email,password} :
            LoginFormFieldsType) => { const {error} = await firebaseSignInUser(email, password)

        if (error) {
            setIsLoading(false)
            toast.error(error.message)
            return
        }

        toast.success("Connexion réussie.Bienvenue !")
        setIsLoading(false)
        reset()
        await
        router.push("connexion/mon-espace")
    }

    const onSubmit:SubmitHandler<LoginFormFieldsType> = async (formData) => {
        setIsLoading(true)
        const { password } = formData

        if (password.length <= 5) {
            setError("password", {
                type: "manual",
                message: "Votre mot de passe doit comporter au moins 6 caractères.",
            })
            setIsLoading(false)
            return
        }
        handleSignInUser(formData)
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