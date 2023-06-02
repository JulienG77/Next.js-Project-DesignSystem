import {Container} from "../../../components/container/container";
import {Box} from "../../../design-system/box/box";
import {Typography} from "../../../design-system/typography/typography";
import {LoginForm} from "./loginForm";
import {FormsType} from "../../../../types/forms";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
    form: FormsType;
}

export const LoginView = ({form}: Props) => {

    return (
        <>

        <Container className="grid grid-cols-2 gap-20 mb-32">
            <div className="flex items-center">

                <div className="relative w-full h-[530px]">
                    <Image
                        fill
                        src="/assets/svg/Login.svg"
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
                            Connexion:
                        </Typography>

                        <div className="flex items-center gap-2">

                            <Typography component="span" variant="caption4" theme="grey">
                                Pas de compte ?
                            </Typography>

                            <Typography component="span" variant="caption4" theme="primary">
                                <Link href="/connexion/inscription">S'inscrire</Link>
                            </Typography>
                        </div>
                    </div>
                    <LoginForm form={form}/>
                    <Typography variant ="caption4" theme="primary">
                        <Link href="/connexion/mot-de-passe-perdu"
                        className="flex justify-center"
                        >
                            Mot de passe oublié ?
                        </Link>
                    </Typography>
                </Box>
            </div>
        </Container>
            </>
    )
}