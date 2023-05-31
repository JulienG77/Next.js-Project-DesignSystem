import {FormsType} from "../../../../types/forms";
import {Input} from "../../../design-system/forms/input";
import {Button} from "../../../design-system/buttons/button";
import React from "react";

interface Props {
    form:FormsType;
}

export const LoginForm = ({form}: Props) => {

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

                <Input
                    isLoading={isLoading}
                    placeholder="Mot de Passe"
                    type = "password"
                    register={register}
                    errors={errors}
                    errorMsg = "Vous avez oublié d'enter votre mot de passe."
                    id="password"
                />

                <Button isLoading={isLoading} type="submit" fullWidth>Connexion</Button>
            </form>
            </>
    )
}