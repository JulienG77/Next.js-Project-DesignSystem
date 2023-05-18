import {ActiveLink} from "./active-link";

{/*** COMPOSANTS ***/}
import {Container} from "../container/container";
import {Typography} from "../../design-system/typography/typography";
        {/*** TYPES ***/}
import {footerApplicationLinks} from "./app-links";
        {/*** MODULE ***/}
import Image from "next/image";
import {v4 as uuidv4 } from 'uuid';

export const Footer = () => {

    const currentYear = new Date().getFullYear();

    const footerNavigationList = footerApplicationLinks.map((element) =>(
        <div key={uuidv4()}>{element.label}</div>
    ))

    return (
        <div className="bg-grey">
            <Container className="flex justify-between pt-16">
                <div className="flex flex-col items-center gap-2">
                    <Typography
                        variant="caption1"
                        theme="white"
                        weight="medium"
                    >
                        Lien Youtube
                    </Typography>
                    <Typography
                        variant="caption3"
                        theme="grey"
                    >
                        <q>ça sert à rien...</q>
                    </Typography>

                    <a href="https://www.youtube.com"
                       target="_blank"
                       className="underline"
                    >
                    <Image src="/assets/img/cameleonElippse.png" width="170" height="120"
                           alt="footer image"/>
                    </a>
                </div>
                {/***     <div className="text-primary">{footerNavigationList}</div> ***/}
                 <div className="text-primary">
                     <FooterLink/>
                 </div>
            </Container>

            <Container className=" pt-9 pb-11 space-y-11">
                <hr className="text-grey-800"/>
                <div className="flex items-center justify-between">
                    <Typography
                    variant="caption4"
                    theme="grey"
                    >
                        {`Copyright ©  .${currentYear} |  Propulsed by `}
                        <a href="https://masstodo.com"
                           target="_blank"
                           className="underline"
                        >
                            JuDV86
                        </a>
                        {`@MassToDo.com`}

                    </Typography>
                    <div className=""></div>
                </div>
            </Container>
        </div>
    );
};

const FooterLink = () => {

    const LinksList = footerApplicationLinks.map((link) =>(
        <div key={uuidv4()}>
            {link.type === "internal" && (
                <ActiveLink href={link.baseUrl}>
                    {link.label}
                </ActiveLink>
            )}
            {link.type === "external" && (
                <a href={link.baseUrl}
                   target="_blank"
                >
                    {link.label}
                </a>
            )}
        </div>
    ));

    return (
        <div className="min-w-[190px]">
            <Typography
            theme="white"
            variant="caption2"
            weight="medium"
            className="pb-5"
            >
                Titre
            </Typography>

            <Typography
            theme="grey"
            variant="caption3"
            className="space-y-4"
            >
                {LinksList}
            </Typography>
        </div>
    )
        }