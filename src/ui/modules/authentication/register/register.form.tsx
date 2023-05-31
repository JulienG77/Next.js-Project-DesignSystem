import {FormsType} from "../../../../types/forms"
import {Button} from "../../../design-system/buttons/button";
import {Input} from "../../../design-system/forms/input";
import React from "react";


interface Props {
    form: FormsType;
}

export const RegisterForm = ({form}: Props) => {
    const {
        control,
        onSubmit,
        errors,
        isLoading,
        register,
        handleSubmit
    } = form;

    return (

            <form onSubmit={ handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-5">

                <Input
                isLoading={isLoading}
                placeholder="MartyMcFly@gmal.com"
                type ="email"
                register={register}
                errors={errors}
                errorMsg ="Merci de renseigner ce champs."
                id="email"
                />

                <Input
                isLoading={isLoading}
                placeholder="Mot de Passe"
                type = "password"
                register={register}
                errors={errors}
                errorMsg = "Un mot de passe fort comporte au moins 11 caractères dont des caractères spéciaux."
                id="password"
                />

                <Input
                isLoading={isLoading}
                placeholder="Comment nous avez-vous connus ?"
                // type = "text"
                register={register}
                errors={errors}
                errorMsg = "Merci de remplir ce champs SVP."
                id="how_did_you_know"
                />

                <Button
                    isLoading={isLoading}
                    type="submit"
                    fullWidth
                >
                    S'inscrire
                </Button>
            </form>

    )
}