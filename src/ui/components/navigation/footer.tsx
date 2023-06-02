        {/*** COMPOSANTS ***/}
import {ActiveLink} from "./active-link";
import {Container} from "../container/container";
import {Typography} from "../../design-system/typography/typography";
import {LinkTypes} from "../../../lib/link-types";
import {SocialNetworksButtons} from "./social-networks-buttons";
        {/*** TYPES ***/}
import {footerLinks} from "./app-links";
        {/*** MODULES ***/}
import Image from "next/image";
import {v4 as uuidv4 } from 'uuid';
import {FooterLinks} from "../../../types/app-links";
import React from "react";

export const Footer = () => {

    const currentYear = new Date().getFullYear();

    const footerNavigationList = footerLinks.map((colomnLinks) =>(
    <FooterLink key={uuidv4()} data={colomnLinks}/>
    ));

    return (
        <div className="flex-col md:justify-center bg-grey">
            <Container className="  md:flex lg:flex justify-between pt-16">
                <div className="flex flex-col items-center gap-4 mb-4">
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

                     {/*******   Liens Footer *******/}
                     <div className="text-center items-center justify-center justify-between gap-2 pt-5 text-primary sm:flex md:flex md:gap-7 w-full"
                     >
                         {footerNavigationList}
                     </div>

                 <div className="text-primary">
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
                    <div className="">
                        <SocialNetworksButtons theme="grey"/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

interface footerLinkProps {
    data: FooterLinks;
}

const FooterLink = ({ data } : footerLinkProps) => {

    const linksList = data.links.map((link) =>(

        <div key={uuidv4()}>
            {link.type === LinkTypes.INTERNAL && (
                <ActiveLink
                    href={link.baseUrl}
                >
                    {link.label}
                </ActiveLink>
            )}
            {link.type === LinkTypes.EXTERNAL  && (
                <a href={link.baseUrl}
                   target="_blank"
                >
                    {link.label}
                </a>
            )}
        </div>
    ));

    return (
        <div className="w-full">
            <Typography
            theme="white"
            variant="caption2"
            weight="medium"
            className="pb-5 underline items-center"
            >
                {data.label}
            </Typography>

            <Typography
            theme="grey"
            variant="caption3"
            className="flex flex-col justify-center space-y-4 mb-6"
            >
                {linksList}
            </Typography>

            {/*<Typography*/}
            {/*theme="white"*/}
            {/*variant="caption2"*/}
            {/*weight="medium"*/}
            {/*className="pb-5 underline items-center"*/}
            {/*>*/}
            {/*    {data.label}*/}
            {/*</Typography>*/}

            {/*<Typography*/}
            {/*theme="grey"*/}
            {/*variant="caption3"*/}
            {/*className="flex flex-col justify-center space-y-4 mb-6"*/}
            {/*>*/}
            {/*    {linksList}*/}
            {/*</Typography>*/}
        </div>
    )
        }