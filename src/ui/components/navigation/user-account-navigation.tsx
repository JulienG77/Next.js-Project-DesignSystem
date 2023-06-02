import {Button} from "../../design-system/buttons/button";
import {Typography} from "../../design-system/typography/typography";
import {Box} from "../../design-system/box/box";

import {firebaseLogOutUser} from "../../../api/authentication";

import {toast} from "react-toastify";
import {ActiveLink} from "./active-link";

export const UserAccountNavigation = () => {


    const handleLogOutUser = async () => {
        const { error } = await firebaseLogOutUser()
        if (error) {
            toast.error(error.message)
            return
        }
        toast.success("Déconnexion réussie.")
    }


    return (

        <Box className="flex flex-col gap-5 pb-5 py-3">
            <div className="flex flex-col gap-3 pb-2">
                <Typography
                    variant="caption2"
                    weight="medium">
                    <ActiveLink href="/mon-espace">Mon Compte</ActiveLink>
                </Typography>

                <Typography
                    variant="caption2"
                    weight="medium">
                    <ActiveLink href="/mes-projets">Mes Projets</ActiveLink>
                </Typography>


            </div>
            <Button
                action={ handleLogOutUser }
                variant="danger">
                Se Déconnecter
            </Button>

        </Box>
    )
}