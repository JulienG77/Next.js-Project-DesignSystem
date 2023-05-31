
import Image from "next/image";
import {Container} from "../../../../components/container/container";
import React from "react";
import {Typography} from "../../../../design-system/typography/typography";
import {Button} from "../../../../design-system/buttons/button";

export const HeroTopView = () => {
    return (
        // <Container className="relative pt-40 pb-52 overflow-hidden">
        <Container className=" relative h-screen flex gap-2 pt-40 pb-60 ">
        <div className="w-1/2 space-y-5 z-100 hover:bg-grey-400/50 rounded animate transition ease-in-out">
            <Typography variant="h1" component="h1" className="mx-w-lg">
                Titre de Test !
            </Typography>

            <Typography variant="body-lg" theme="grey" component="p" className="w-full space-x-5 space-y-5 z-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Arcu ac tortor dignissim convallis. Rutrum tellus pellentesque eu tincidunt.Rutrum tellus pellentesque eu tincidunt.Rutrum tellus pellentesque eu tincidunt.
               </Typography>

                <div className="flex space-x-5 pt-2.5">
                    <Button baseUrl="">Cliquer</Button>

                    <Button baseUrl="" variant="secondary">Infos</Button>

                </div>
                </div>

            <Image
                src="/assets/svg/design-1-transformed.webp"
                alt="Design Svg"
                width={950}
                height={200}
                className=" w-100 md:w-600 md:flex absolute top-0 -right-[230px] -z-10"
                />
        </Container>
    )
}