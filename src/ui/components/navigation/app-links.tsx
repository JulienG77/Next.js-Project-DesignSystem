import {AppLinks} from "../../../types/app-links";

export const footerApplicationLinks:AppLinks[] = [
    {
        label:"Accueil",
        baseUrl: "/",
        type: "internal",
    },
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
        baseUrl: "/",
        type: "internal",
    },
    {
        label:"Connexion",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label:"Inscription",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label:"Mot de Passe oublié",
        baseUrl: "/#",
        type: "internal",
    },
];
const footerInformationLinks:AppLinks[] = [
    {
        label:"CGU",
        baseUrl: "/",
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

const footerSocialNetworksLinks:AppLinks[] = [
    {
        label:"LinkedIn",
        baseUrl: "/",
        type: "external",
    },
    {
        label:"GitHub",
        baseUrl: "/#",
        type: "external",
    },
    {
        label:"Mail",
        baseUrl: "/#",
        type: "external",
    },
];