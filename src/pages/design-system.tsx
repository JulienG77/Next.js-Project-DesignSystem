        // COMPOSANTS
import {Container} from "../ui/components/container/container";
import {Navigation} from "../ui/components/navigation/navigation";
import { Seo } from '../ui/components/seo/seo';
        // DESIGN SYSTEM
import {Avatar} from "../ui/design-system/avatar/avatar";
import {Button} from "../ui/design-system/buttons/button";
import {Logo} from "../ui/design-system/logo/logo";
import {Spinner} from "../ui/design-system/spinner/spinner";
import {Typography} from "../ui/design-system/typography/typography";
import {Layout} from "../ui/components/layout/layout";
        // ICONES
import {
    RiAncientGateFill,
    RiArtboard2Line,
    RiBrushLine,
    RiLayoutLeft2Fill,
    RiPaletteLine,
    RiSlideshow3Fill
} from "react-icons/ri";
        import clsx from "clsx";
        import {className} from "postcss-selector-parser";


export default function DesignSystem() {
    return (
        <>
            <Seo title="Design System Ui" description="titre"/>
            <meta name="description" content="description"/>

            <Layout>

                {/* TYPOGRAPHIES */}
                <Container className="space-y-20">

                    <Typography variant="h4" weight="medium">
                        Typographies :
                    </Typography>


                    <div className="flex flex-col gap-2 p-5 border border-grey-500 divide-y-2 divide-grey-40 rounded">
                        <div className="pb-5 space-y-2">

                            <Typography variant="caption3" weight="medium">
                                Display
                            </Typography>

                            <Typography variant="display">
                                LOREM IPSUM est un texte fictif
                            </Typography>
                        </div>

                        <div className="pb-5 space-y-2">
                            <Typography variant="caption3" weight="medium">
                                H1
                            </Typography>

                            <Typography variant="h1">
                                LOREM IPSUM est un texte fictif
                            </Typography>
                        </div>

                        <div className="pb-5 space-y-2">
                            <Typography variant="caption3" weight="medium">
                                H2
                            </Typography>
                            <Typography variant="h2">
                                LOREM IPSUM est un texte fictif
                            </Typography>
                        </div>

                        <div className="pb-5 space-y-2">
                            <Typography variant="caption3" weight="medium">
                                H3
                            </Typography>
                            <Typography variant="h3">
                                LOREM IPSUM est un texte fictif
                            </Typography>
                        </div>

                        <div className="pb-5 space-y-2">
                            <Typography variant="caption3" weight="medium">
                                H4
                            </Typography>
                            <Typography variant="h4">
                                LOREM IPSUM est un texte fictif
                            </Typography>
                        </div>

                        <div className="pb-5 space-y-2">
                            <Typography variant="caption3" weight="medium">
                                H4
                            </Typography>
                            <Typography variant="h4">
                                LOREM IPSUM est un texte fictif
                            </Typography>
                        </div>

                        <div className="pb-5 space-y-2">
                            <Typography variant="caption3" weight="medium">
                                H5
                            </Typography>
                            <Typography variant="h5">
                                LOREM IPSUM est un texte fictif
                            </Typography>
                        </div>

                        <div className="pb-5 space-y-2">
                            <Typography variant="caption3" weight="medium">
                                H6
                            </Typography>
                            <Typography variant="h6">
                                LOREM IPSUM est un texte fictif
                            </Typography>
                        </div>

                        <div className="pb-5 space-y-2">
                            <Typography variant="caption3">
                                Lead
                            </Typography>
                            <Typography variant="lead">
                                LOREM IPSUM est un texte fictif
                            </Typography>
                        </div>

                        <div className="pb-5 space-y-2">
                            <Typography variant="caption3">
                                Body-lg
                            </Typography>
                            <Typography variant="body-lg">
                                LOREM IPSUM est un texte fictif
                            </Typography>
                        </div>

                        <div className="pb-5 space-y-2">
                            <Typography variant="caption3">
                                Body-base
                            </Typography>
                            <Typography variant="body-base">
                                LOREM IPSUM est un texte fictif
                            </Typography>
                        </div>

                        <div className="pb-5 space-y-2">
                            <Typography variant="caption3">
                                Body-sm
                            </Typography>
                            <Typography variant="body-sm">
                                LOREM IPSUM est un texte fictif
                            </Typography>
                        </div>

                        <div className="pb-5 space-y-2">
                            <Typography variant="caption3" weight="medium">
                                Caption1
                            </Typography>
                            <Typography variant="caption1">
                                LOREM IPSUM est un texte fictif
                            </Typography>
                        </div>

                        <div className="pb-5 space-y-2">
                            <Typography variant="caption3" weight="medium">
                                Caption2
                            </Typography>
                            <Typography variant="caption2">
                                LOREM IPSUM est un texte fictif
                            </Typography>
                        </div>

                        <div className="pb-5 space-y-2">
                            <Typography variant="caption3" weight="medium">
                                Caption3
                            </Typography>
                            <Typography variant="caption3">
                                LOREM IPSUM est un texte fictif
                            </Typography>
                        </div>

                        <div className="pb-5 space-y-2">
                            <Typography variant="caption3" weight="medium">
                                Caption4
                            </Typography>
                            <Typography variant="caption4">
                                LOREM IPSUM est un texte fictif
                            </Typography>
                        </div>
                    </div>

                </Container>

                {/***** SPINNERS *****/}

                <div className="flex justify-center items-center gap-2 p-5 border border-grey-500 rounded">
                    <Typography variant="caption3" component="div">
                        Spinners :
                    </Typography>
                    <Spinner size="small"/>
                    <Spinner/>
                    <Spinner size="large"/>
                </div>

                {/***** LOGOS *****/}

                <div className="flex justify-center items-center gap-2 p-5 border border-grey-500 rounded">
                    <Typography variant="caption3" component="div">
                        Logos :
                    </Typography>
                    <Logo size="very-small"/>
                    <Logo size="small"/>
                    <Logo size="medium"/>
                    <Logo size="large"/>
                </div>

                {/***** AVATARS *****/}

                <div className="flex justify-center items-center gap-2 p-5 border border-grey-500 rounded">
                    <Typography variant="caption3" component="div">
                        Avatars :
                    </Typography>
                    <Avatar src="/assets/img/avatarM2.png" alt="avatar Male 1" size="small"/>
                    <Avatar src="/assets/img/avatarM3.png" alt="avatar Male 2"/>
                    <Avatar src="/assets/img/avatarF2.png" alt="avatar Female 1" size="large"/>
                    <Avatar src="/assets/img/wallpaper.png" alt="avatar Female 1" size="large"/>

                </div>


                {/***** BUTTONS *****/}
                <div className="flex flex-col py-2 justify-center items-center gap-2 p-5 border border-grey-500 rounded">
                    <div className="pb-2 space-y-2 text-center py-5">
                        <Typography variant="caption3" weight="medium">
                            Buttons :
                        </Typography>
                    </div>


                    <div className="flex items-center justify-center mt-3 gap-2">
                        <Button size="small"
                                variant="icon"
                                iconTheme="accent"
                                icon={{ icon: RiLayoutLeft2Fill }}
                                baseUrl=""
                                >
                        </Button>

                        <Button size="small"
                                variant="icon"
                                iconTheme="secondary"
                                icon={{ icon: RiLayoutLeft2Fill }}
                                baseUrl=""
                        />
                        <Button size="small"
                                variant="icon"
                                iconTheme="grey"
                                icon={{ icon: RiLayoutLeft2Fill }}
                                baseUrl=""
                        />
                    </div>

                    <div className="flex items-center justify-center mt-3 gap-2">
                        <Button
                            variant="icon"
                            iconTheme="accent"
                            icon={{ icon: RiBrushLine }}
                            baseUrl=""
                            >
                        </Button>


                        <Button variant="icon"
                                iconTheme="secondary"
                                icon={{ icon: RiBrushLine }}
                                baseUrl=""
                        />

                        <Button variant="icon"
                                iconTheme="grey"
                                icon={{ icon: RiBrushLine }}
                                baseUrl=""
                        />
                    </div>


                    <div className="flex items-center justify-center mt-3 mb-5 gap-2">

                        <Button
                            size="large"
                            variant="icon"
                            baseUrl=""
                        >
                            <RiPaletteLine/>
                        </Button>

                        <Button variant="icon"
                                iconTheme="secondary"
                                size="large"
                                icon={{ icon: RiPaletteLine }}
                                baseUrl=""
                        />

                        <Button variant="icon"
                                iconTheme="grey"
                                size="large"
                                icon={{ icon: RiPaletteLine }}
                                baseUrl=""
                        />
                    </div>



                    {/***** BUTTONS  ISLOADING *****/}
                    <div className="flex flex-col py-2 justify-center items-center gap-2 p-5 border border-grey-500 rounded">
                        <Typography variant="caption3" weight="medium">
                            IsLoading :
                        </Typography>

                        <div className="flex items-center justify-center mt-3 gap-2">
                            <Button isLoading
                                    size="small"
                                    variant="icon"
                                     icon={{ icon: RiLayoutLeft2Fill }}
                                     baseUrl="">
                            </Button>

                            <Button isLoading
                                    size="medium"
                                    variant="icon"
                                    iconTheme="secondary"
                                    icon={{ icon: RiLayoutLeft2Fill }}
                                    baseUrl=""
                            >
                            </Button>

                            <Button isLoading
                                    size="large"
                                    variant="icon"
                                    iconTheme="grey"
                                    icon={{ icon: RiLayoutLeft2Fill }}
                                    baseUrl=""
                            >
                            </Button>
                        </div>

                        <div className="flex items-center justify-center gap-2 py-3">
                            <Button
                                isLoading
                                size="small"
                                variant="accent"
                                baseUrl=""
                            >
                                Accent
                            </Button>

                            <Button
                                    isLoading
                                    size="medium"
                                    variant="outline"
                                    baseUrl=""
                            >
                                Outline
                            </Button>

                            <Button isLoading size="large" variant="disabled" baseUrl="">Disabled</Button>
                            <Button isLoading size="medium" variant="secondary" baseUrl="">Secondary</Button>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center mt-3 gap-2">
                        <div className="flex items-center justify-center gap-2">
                            <Button size="small" variant="accent" baseUrl="">Accent</Button>
                            <Button size="small" variant="outline" baseUrl="">Outline</Button>
                            <Button size="small" variant="disabled" baseUrl="">Disabled</Button>
                            <Button size="small" variant="secondary" baseUrl="">Secondary</Button>
                        </div>

                        <div className="flex items-center justify-center gap-2">
                            <Button variant="accent" baseUrl="">Accent</Button>
                            <Button variant="outline" baseUrl="">Outline</Button>
                            <Button variant="disabled" baseUrl="">Disabled</Button>
                            <Button variant="secondary" baseUrl="">Secondary</Button>
                        </div>

                        <div className="flex items-center justify-center gap-2">
                            <Button size="large" variant="accent" baseUrl="">Accent</Button>
                            <Button size="large" variant="outline" baseUrl="">Outline</Button>
                            <Button size="large" variant="disabled" baseUrl="">Disabled</Button>
                            <Button size="large" variant="secondary" baseUrl="">Secondary</Button>
                        </div>

                        <div className="flex items-center gap-4 py-5">
                            <Button size="large"
                                    variant="secondary"
                                    iconPosition="left"
                                    icon={{ icon: RiPaletteLine}}
                                    baseUrl=""
                            >
                                Icône à gauche
                            </Button>

                            <Button size="small"
                                    variant="accent"
                                    icon={{ icon: RiPaletteLine}}
                                    baseUrl=""
                            >
                                Icône à droite dans bouton small
                            </Button>
                        </div>
                    </div>
                </div>

                {/***** React-Icons *****/}
                <div className="flex items-center justify-center border rounded gap-2">
                    <p className=" mx-3 text-2xl text-teal-800"> Icônes &quot;React-Icons&quot;&ensp; :&ensp;</p>
                    <RiAncientGateFill></RiAncientGateFill>
                    <RiSlideshow3Fill></RiSlideshow3Fill>
                    <RiArtboard2Line></RiArtboard2Line>
                    &ensp;
                </div>

            </Layout>


            </>
    )
}