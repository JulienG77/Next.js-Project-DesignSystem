import Head from "next/head";

interface Props {
    title: string; /* ? sert à rendre le parmetre title optionnel */
    description: string;
}

export const Seo = ({title, description}: Props) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description à la zob" content={description}/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
    );
}