import {ForgottenPasswordView} from "./forgotten-password.view";
import {ResetUserPassword} from "../../../../api/authentication";

import {ForgottenPasswordFormFieldsType} from "../../../../types/forms";

import {SubmitHandler, useForm} from "react-hook-form";
import {useToggle} from "../../../../hooks/use-toggle";

import {toast} from "react-toastify";
import {useRouter} from "next/router";

export const ForgottenPasswordContainer = () => {

    const router = useRouter()

    const {value: isLoading, setValue: setIsLoading, toggle} = useToggle({initial: false})

        const {
            handleSubmit,
            control,
            formState: {errors},
            register,
            setError,
            reset,
        } = useForm<ForgottenPasswordFormFieldsType>();

    const handleResetPassword = async ({email}: ForgottenPasswordFormFieldsType) => {
        const {error} = await ResetUserPassword(email)
        if (error) {
            setIsLoading(false)
            toast.error(error.message)
            return
        }

        toast.success(`Un e-mail a été envoyé à ${email}`)
        setIsLoading(false)
        // reset()
        await
        router.push("/connexion")
        }

        const onSubmit:SubmitHandler<ForgottenPasswordFormFieldsType> = async (formData) => {
            setIsLoading(true)
            await
            handleResetPassword(formData)
            console.log('formData', formData)
        }

        return (
            <>
                <ForgottenPasswordView
                    form={{
                        errors,
                        register,
                        handleSubmit,
                        onSubmit,
                        isLoading,
                    }}
                />
            </>
        )
    }