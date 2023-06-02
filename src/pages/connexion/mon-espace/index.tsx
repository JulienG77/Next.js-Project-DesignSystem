import { Seo } from '../../../ui/components/seo/seo'
import {Layout} from "../../../ui/components/layout/layout";
import {UserAccountContainer} from "../../../ui/modules/user-profile/account/user-account.container";


export default function Connexion() {
    return (
        <>
            <Seo title="Mon Espace" description="Page Espace Personnel"/>


            <Layout widthSideBar>
            <UserAccountContainer/>
            </Layout>
        </>

    )
}
