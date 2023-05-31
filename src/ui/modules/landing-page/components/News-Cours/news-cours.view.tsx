import {Container} from "../../../../components/container/container";
import {Typography} from "../../../../design-system/typography/typography";
import Image from "next/image";
import {RiPlayCircleLine} from "react-icons/ri";

export const NewsCoursView = () => {
    return (
        <div className="bg-grey-300">
            <Container className="py-24 text-center">
                <Typography variant="h2" component="h2" className="mb-2.5">
                    Sections News & Infos !
                </Typography>

                <Typography variant="lead" component="h3" className="mb-5">
                    Retrouvez toutes les dernières infos par ici
                </Typography>

                <Typography variant="caption3" component="p" theme="grey" className="mb-16">
                    Pour rester informer des dernières actus.
                </Typography>

                <a href="/#" target="_blank">
                    <div className="relative bg-grey-400 rounded h-[550px]">

                        <div className="gap-2 relative h-full flex flex-col items-center justify-center text-white rounded bg-grey rounded z-10 opacity-0 hover:opacity-95 animate">
                            <RiPlayCircleLine size={42}/>
                            <Typography
                            variant="caption2"
                            theme="white"
                            className="uppercase"
                            weight="medium"
                            >
                                LoremIpsum
                            </Typography>
                        </div>

                    <Image fill src={"/assets/svg/ComSvG/illustration-accueil.svg"} alt="svg chat"/>

                    </div>
                </a>
            </Container>

        </div>
    )
}