// COMPOSANTS
import {Container} from "../../ui/components/container/container";
import { Seo } from '../../ui/components/seo/seo';
import {Navigation} from "../../ui/components/navigation/navigation";
import {Footer} from "../../ui/components/navigation/footer";
import {Typography} from "../../ui/design-system/typography/typography";
import {Breadcrumbs} from "../../ui/components/breadcrumbs/breadcrumbs";
import {Button} from "../../ui/design-system/buttons/button";
import  {v4 as uuidv4} from "uuid";
import Image from "next/image";
import {Layout} from "../../ui/components/layout/layout";
import {RegisterContainer} from "../../ui/modules/authentication/register/register.container";


export default function  Register() {

    return (
        <>
            <Seo title="Inscription" description="titre"/>


            <Layout>
            <RegisterContainer/>
            </Layout>
        </>

    )
}
