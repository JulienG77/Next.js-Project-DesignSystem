import {Container} from "../../../components/container/container";
import Image from "next/image";
import React from "react";
import {Box} from "../../../design-system/box/box";
import {Typography} from "../../../design-system/typography/typography";
import Link from "next/link";
import {RegisterForm} from "./register.form";
import {FormsType} from "../../../../types/forms";

interface Props {
    form: FormsType;
}

export const RegisterView = ( {form}: Props) => {

    return (

    <Container className="grid grid-cols-2 gap-20 mb-32">
        <div className="flex items-center">

            <div className="relative w-full h-[530px]">
                <Image
                    fill
                    src="/assets/svg/Register.svg"
                    alt="Register Image"
                    className="object-scale-down"
                    >
                </Image>

            </div>
        </div>

        <div className="flex items-center">
            <Box padding_y="py-5">
                <div className="flex items-center justify-between">

                <Typography component="h1" variant="h5">
                    Inscription:
                </Typography>

                    <div className="flex items-center gap-2">

                    <Typography component="span" variant="caption4" theme="grey">
                    Déjà un compte ?
                    </Typography>

                    <Typography component="span" variant="caption4" theme="primary">
                        <Link href="/connexion">Connexion</Link>
                    </Typography>
                    </div>
                </div>
                <RegisterForm form={form}/>

                <Typography component="span" variant="caption4" theme="grey" className="max-w-md mx-auto space-y-1 text-center">
                  <div>En vous inscrivant, vous acceptez les </div>
                    <div>
                        <Link href="/#" className="text-grey ">Conditions d'Utilisation </Link>
                        et la {""}
                        <Link href="/#" className="text-grey"> Politique de confidentialité.</Link>
                    </div>
                </Typography>
            </Box>
        </div>
    </Container>

    )
}