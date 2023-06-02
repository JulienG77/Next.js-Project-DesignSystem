import {Container} from "../container/container";
import {Logo} from "../../design-system/logo/logo";
import {Typography} from "../../design-system/typography/typography";
import {Button} from "../../design-system/buttons/button";
import {ActiveLink} from "./active-link";
import React from "react";

interface Props {

}

export const Navigation = ({}:Props) => {
    return (
        <div className="w-full bg-grey-500 hover:bg-grey-400/50 animate border-b-2 border-500">
            <Container className="flex items-center justify-between py-1.5">
                <ActiveLink href="/">
                <div className="flex items-center gap-2">

                        <div className="invisible sm:visible">
                        <Logo size="small"/>
                        </div>

                    <div className="flex flex-col -ml-[70px] mr-[15px] sm:-ml-[9px]">
                    <div className="text-grey font-bold text-[22x]">
                        TITLE
                    </div>
                    <Typography
                        variant="caption4"
                        component="span"
                        theme="grey"
                        className="mr-[10px]"
                    >
                       SLOGAN slogan
                    </Typography>
                </div>
                </div>
                </ActiveLink>

                <div className="flex items-center gap-7 ml-1">
                <Typography
                    variant="caption5"
                    component="div"
                    className=" ml-auto mr-auto font-bold flex items-center gap-3.5 sm:text-[0.8rem] sm:font-normal md:text-[1rem] lg:text-[1.3rem]"
                >
                    <ActiveLink href="/design-system">Design System</ActiveLink>
                    <ActiveLink href="/projects">Projects</ActiveLink>
                    <ActiveLink href="/Formations">Formations</ActiveLink>
                    <ActiveLink href="/Contact">Contact</ActiveLink>
                </Typography>
                </div>

                <div className="flex items-center gap-7">

                    <div className="ml-5  flex-col sm:flex-row md:flex-row lg:flex-row items-center ">
                        <Button size="very-small" baseUrl="/connexion">Connexion</Button>
                        <Button size="very-small" variant="secondary" baseUrl="/connexion/inscription" >Inscription</Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}