import {Container} from "../container/container";
import {Logo} from "../../design-system/logo/logo";
import {Typography} from "../../design-system/typography/typography";
import {Button} from "../../design-system/buttons/button";
import {ActiveLink} from "./active-link";

interface Props {

}

export const Navigation = ({}:Props) => {
    return (
        <div className="bg-grey-400 border-b-2 border-500">
            <Container className="flex items-center justify-between py-1.5">
                <ActiveLink href="/">
                <div className="flex items-center gap-2.5">
                       <Logo size="medium"/>
                    <div className="flex flex-col">
                    <div className="text-grey font-extrabold text-[24px]">
                        TITLE title
                    </div>
                    <Typography
                        variant="caption4"
                        component="span"
                        theme="grey"
                    >
                       SLOGAN slogan
                    </Typography>
                </div>
                </div>
                </ActiveLink>

                <div className="flex items-center gap-7">
                <Typography
                    variant="caption3"
                    component="div"
                    className="flex items-center gap-7"
                >
                    <ActiveLink href="/design-system">Design System</ActiveLink>
                    <ActiveLink href="/projects">Projects</ActiveLink>
                    <ActiveLink href="/Formations">Formations</ActiveLink>
                    <ActiveLink href="/Contact">Contact</ActiveLink>
                </Typography>
                </div>

                <div className="flex items-center gap-7">
                    <Typography>

                    </Typography>
                    <div className="flex items-center gap-7">
                        <Button size="small" baseUrl="/connexion">Connexion</Button>
                        <Button size="small" variant="secondary" baseUrl="/connexion/inscription" >Inscription</Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}