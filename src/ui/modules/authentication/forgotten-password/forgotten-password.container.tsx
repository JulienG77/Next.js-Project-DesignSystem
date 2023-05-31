import {ForgottenPasswordView} from "./forgotten-password.view";
import {SubmitHandler, useForm} from "react-hook-form";
import {ForgottenPasswordFormFieldsType} from "../../../../types/forms";
import {useState} from "react";

export const ForgottenPasswordContainer = () => {

        const [isLoading, setIsLoading] = useState <boolean>(false)

        const {
            handleSubmit,
            control,
            formState: {errors},
            register,
            setError,
            reset,
        } = useForm<ForgottenPasswordFormFieldsType>();

        const onSubmit:SubmitHandler<ForgottenPasswordFormFieldsType> = async (formData) => {
            setIsLoading(true)
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