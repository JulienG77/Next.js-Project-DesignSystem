import {Container} from "../../components/container/container";
import {Typography} from "../typography/typography";
import {Button} from "../buttons/button";
import {LinkTypes} from "../../../lib/link-types";
import Image from "next/image";
import clsx from "clsx";
import {className} from "postcss-selector-parser";

export const CallToActionView = () => {
    return (
        <div className="relative overflow-hidden bg-primary">
            <Container className="py-20">

                <div className="relative z-10 max-w-3xl space-y-5">

                    <Typography
                        variant="h2"
                        theme="white"
                        component="h2">
                        N'attends pour développer
                        Lorem IpipipSum gnagagna...
                    </Typography>

                    <div className="items-center max-w-max">
                    <Button
                        variant="success"
                        baseUrl="/#"
                        linkType={LinkTypes.EXTERNAL}
                        >
                        Formations
                    </Button>
                    </div>

                </div>

                <div>
                    <Image
                        width={370}
                        height={980}
                        src="/assets/svg/bomb2.svg"
                        alt="bomb svg"
                        className="absolute -bottom-[2.8rem] right-[30rem]"
                        />
                        <Image
                        width={870}
                        height={980}
                        src="/assets/svg/BombSVG/Ellipse 6.svg"
                        alt="bomb svg"
                        className="absolute -top-20 -right-[10rem]"
                        />
                        <Image
                        width={570}
                        height={980}
                        src="/assets/svg/BombSVG/Ellipse 7.svg"
                        alt="bomb svg"
                        className="absolute -bottom-[2.2rem] right-[30rem]"
                        />
                        <Image
                        width={1870}
                        height={980}
                        src="/assets/svg/BombSVG/Ellipse 8.svg"
                        alt="bomb svg"
                        className="absolute -bottom-[40rem] -right-[6rem]"
                        />
                </div>

            </Container>
        </div>
    )
}