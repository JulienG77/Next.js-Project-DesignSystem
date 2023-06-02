import {AppLinks} from "../../../types/app-links";
import {AiFillGithub, AiOutlineLinkedin} from "react-icons/ai";
import {FiMail} from "react-icons/fi";

 const footerApplicationLinks:AppLinks[] = [
    {
        label:"Accueil",
        baseUrl: "/",
        type: "internal",
    },
    // {
    //     label:"Nouveau Lien",
    //     baseUrl: "/#",
    //     type: "internal",
    // },
    {
        label:"Projets",
        baseUrl: "https://masstodo.com",
        type: "external",
    },
    {
        label:"Formations",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label:"Contact",
        baseUrl: "/#",
        type: "internal",
    },
];
const footerUserLinks:AppLinks[] = [
    {
        label:"Mon Espace",
        baseUrl: "/mon-espace",
        type: "internal",
    },
    {
        label:"Connexion",
        baseUrl: "/connexion",
        type: "internal",
    },
    {
        label:"Inscription",
        baseUrl: "/connexion/inscription",
        type: "internal",
    },
    {
        label:"Mot de Passe oublié",
        baseUrl: "/connexion/mot-de-passe-perdu",
        type: "internal",
    },
];
const footerInformationLinks:AppLinks[] = [
    {
        label:"CGU",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label:"Confidentialité",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label:"A propos",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label:"Contact",
        baseUrl: "/#",
        type: "internal",
    },
];

export const footerSocialNetworksLinks: AppLinks[] = [
    {
        label:"LinkedIn",
        baseUrl: "https://www.linkedin.com",
        type: "external",
        icon: AiOutlineLinkedin,
    },
    {
        label:"GitHub",
        baseUrl: "https://github.com/",
        type: "external",
        icon: AiFillGithub,
    },
    {
        label:"Mail",
        baseUrl: "/design-system",
        type: "internal",
        icon: FiMail,
    },
];

export const footerLinks = [
    {
        label: "App",
        links: footerApplicationLinks,
    },
    {
        label: "Utilisateurs",
        links: footerUserLinks,
    },
    {
        label: "Informations",
        links: footerInformationLinks,
    },
    {
        label: "Réseaux",
        links: footerSocialNetworksLinks,
    },
]