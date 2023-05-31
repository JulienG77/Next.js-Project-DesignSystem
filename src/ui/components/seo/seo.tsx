import Head from "next/head";
import React from "react";

interface Props {
    title: string; /* ? sert à rendre le parmetre title optionnel */
    description: string;
}

export const Seo = ({title, description}: Props) => {
    return (

        <Head>
            <link rel="stylesheet" href="https://static.snoweb.io/snowebsvg/dist/css/core-<version>.css" />
            <title>{title}</title>
            <meta name="description à la zob" content={description}/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>

        </Head>
    );
}