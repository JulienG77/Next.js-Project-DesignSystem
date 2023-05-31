import {Container} from "../../../../components/container/container";
import Image from "next/image";
import {Typography} from "../../../../design-system/typography/typography";
import {RiArrowRightLine, RiCheckboxCircleLine} from "react-icons/ri";
import {Button} from "../../../../design-system/buttons/button";


export const HighLightListView = () => {
    return (
        <Container className="py-24 space-y-10">
            <div className="flex justify-center gap-24">
                <div className="w-[560px] h-[410px] relative -mt-10">
                    <Image
                        fill
                        src={"/assets/img/annonce.jpg"}
                        alt="hilight image"
                    />
                </div>


            <div className="max-w-md space-y-7">

                <Typography variant="h3" component="h2">
                    De novice à dévelopeur en un clin d'oeil !
                </Typography>

                <div className="space-y-3">
                    <ListPoint>Progresse Rapidement.</ListPoint>
                    <ListPoint>Inspire-toi.</ListPoint>
                    <ListPoint>Gagne en assurance.</ListPoint>
                </div>

                <div className="relative inline-block">
                    <Button
                        baseUrl="/#"
                        icon= {{icon: RiArrowRightLine}}
                        iconPosition="right"
                        >
                        Let's GO !
                    </Button>
                    <Image
                        width={36}
                        height={29}
                        src="/assets/svg//cursor.svg"
                        alt="cursor"
                        className="absolute -right-2.5 -bottom-3.5"
                    />
                </div>
            </div>
            </div>

            <div className="flex flex-row-reverse space-y-5 justify-center gap-24">
                <div className="w-[560px] h-[410px] relative">
                    <Image
                        fill
                        src={"/assets/svg/ComSvG/configuration-gear.svg"}
                        alt="hilight image"
                    />
                </div>


                <div className="max-w-md space-y-7">

                    <Typography variant="h3" component="h2">
                        Développer en un clin d'oeil !
                    </Typography>

                    <div className="space-y-3">
                        <ListPoint>Partager ses projets.</ListPoint>
                        <ListPoint>Découvres de nouvelles méthodes.</ListPoint>
                        <ListPoint>Nouveaux contacts.</ListPoint>
                    </div>

                    <div className="relative inline-block">
                        <Button
                            baseUrl="/#"
                            icon= {{icon: RiArrowRightLine}}
                            iconPosition="right"
                            variant="secondary"
                        >
                            Go !
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

interface Props {
    children: React.ReactNode;
}
const ListPoint = ({children}: Props) => {
    return (
            <div className="flex items-start gap-2">
                <RiCheckboxCircleLine
                    size={24}
                    className="mt-0.5 text-secondary"
                />
                <Typography variant="body-lg" component="span">
                    {children}
                </Typography>
            </div>
    )
}