
import Image from "next/image";
import {Container} from "../../../../components/container/container";
import React from "react";
import {Typography} from "../../../../design-system/typography/typography";
import {Button} from "../../../../design-system/buttons/button";

export const HeroTopView = () => {
    return (
        // <Container className="relative pt-40 pb-52 overflow-hidden">
        <Container className=" relative h-screen flex justify-items items-center gap-2  md:-mt-5 md:mb-0">
        <div className="w-full space-y-5 z-100  rounded animate transition ease-in-out  lg:flex">

            <Image
                src="/assets/svg/design-1-transformed.webp"
                alt="Design Svg"
                // width={950}
                // height={200}
                width={680}
                height={100}
                // OLD className="mx-15 items-center sm:w-[410px] md:w-[600px] lg:w-[800px] -z-10"
                className="ml-auto mr-auto lg:w-[730px] lg:-ml-10"
            />
            <div className="mt-10 flex-col justify-center items-center text-center lg:ml-10">

            <Typography variant="h1" component="h1" className="mx-w-lg text-[2.6rem] sm:text-[3rem] md:text-[3.6rem] lg:text-[3.9rem] lg:mt-40">
                Titre de Test !
            </Typography>

            <div className="flex flex-col">
            {/*<Typography variant="body-lg" theme="grey" component="p" className="w-full space-x-5 space-y-5 z-50 ">*/}
            <Typography variant="body-lg" theme="grey" component="p" className="w-full text-[1.4rem] sm:text-[1.5rem] md:text-[1.8rem] lg:text-[2.2rem] space-x-5 space-y-4 z-50 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Arcu ac tortor dignissim convallis.
               </Typography>

                <div className="mx-auto flex space-x-5 my-5">
                    <Button baseUrl="">Cliquer</Button>

                    <Button baseUrl="" variant="secondary">Infos</Button>
                </div>
                </div>
                </div>
        </div>
        </Container>
    )
}