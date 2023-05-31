import React, {useState} from "react";
import {FormsType} from "../../../../types/forms";
import {Input} from "../../../design-system/forms/input";
import {Button} from "../../../design-system/buttons/button";

interface Props {
    form:FormsType;
}

export const ForgetPasswordForm = ( {form}: Props) => {
    const {
        control,
        onSubmit,
        errors,
        isLoading,
        register,
        handleSubmit,
    } = form;


    return (
        <>
            <form onSubmit={ handleSubmit (onSubmit)} className="pt-8 pb-5 space-y-5">

                <Input
                    isLoading={isLoading}
                    placeholder="MartyMcFly@gmal.com"
                    type = "email"
                    register={register}
                    errors={errors}
                    errorMsg = "Merci de renseigner ce champs."
                    id="email"
                />


                <Button isLoading={isLoading} type="submit" fullWidth>Connexion</Button>
            </form>
        </>
    )
}