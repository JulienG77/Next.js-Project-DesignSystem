        {/*** COMPONENTS ***/}
        import {SocialNetworksButtons} from "../../../../components/navigation/social-networks-buttons";
        import {Container} from "../../../../components/container/container";
        import {Button} from "../../../../design-system/buttons/button";
        import {Typography} from "../../../../design-system/typography/typography";
        {/*** MODULES ***/}
        import {v4 as uuidv4 } from 'uuid';
        import Image from "next/image";
        import {RiArrowRightLine} from "react-icons/ri";


interface FeaturesListInterface {
    imagePath: string,
    imageAlt: string,
    title: string,
    description: string,
}

const featuresData: FeaturesListInterface[] = [
    {
        imagePath : "/assets/svg/Hibou Vnr Perfecto3.svg",
        imageAlt: "image descriptive",
        title: "Ressources",
        description: "blablabla",
    },
    {
        imagePath : "/assets/svg/icone-graf.svg",
        imageAlt: "image descriptive",
        title: "Entertainement",
        description: "encore blablabla",
    },
    {
        imagePath : "/assets/svg/icone-image.svg",
        imageAlt: "image descriptive",
        title: "Visibilité",
        description: "lorem ipsum pamalus",
    },
    {
        imagePath : "/assets/svg/EiffelDesign2.svg",
        imageAlt: "image descriptive",
        title: "Relations",
        description: "Blabla Ipsum",
    },
];

export const FeaturedView = () => {

    const featuredList = featuresData.map( (feature)  => (

        <div
            key={uuidv4()}
            className="flex flex-col items-center justify-center bg-white rounded p-7">

        <div className="w-full relative w-[130px] h-[130px] rounded-full mb-6 p-10 overflow-hidden">
            <Image fill
                   src={feature.imagePath}
                   alt={feature.imageAlt}
                   className="object-scale-down blur-2xl"
            />
            <Image fill
                   src={feature.imagePath}
                   alt={feature.imageAlt}
                   className="object-scale-down"
            />
        </div>

        <Typography
            variant="lead"
            component="h3"
            weight="medium"
            className="text-center mb-2.5"
        >
            {feature.title}
        </Typography>

        <Typography
            variant="body-base"
            component="p"
            theme="grey"
            className="text-center"
        >
            {feature.description}
        </Typography>

        </div>
))

    return <div className="bg-grey-300 pb-10 sm:pb-8 md:pb-0 w-full">
        <Container className="md:pb-10 lg:grid lg:grid-cols-12 lg:gap-24 lg:py-24 lg:w-full">

            <div className="md:grid md:grid-cols-2 md:col-span-7 md:gap-7">
                {featuredList}
            </div>

            <div className="w-full flex flex-col justify-between col-span-5 gap-10">
                <Typography variant="h2" component="h2" className="mb-5">
                    Lorem ipsum dolor sit amet.
                </Typography>

                <Typography variant="body-lg" theme="grey" component="p" className="mb-8">
                    Lorem ipsum dolor sit amet. In architecto nostrum et
                    voluptas libero id asperiores inventore qui natus minus.
                </Typography>

                <Button variant="secondary" baseUrl="/#" icon={{icon: RiArrowRightLine}} iconPosition="right">Start</Button>


            <div>
                <Typography variant="caption3" theme="grey" component="div" className="mb-4">
                    nostrum et voluptas libero it.
                </Typography>
                <SocialNetworksButtons/>

            </div>
            </div>
        </Container>
    </div>

};