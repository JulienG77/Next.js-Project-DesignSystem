import {footerSocialNetworksLinks} from "./app-links";
import {v4 as uuidv4 } from 'uuid';
import {Button} from "../../design-system/buttons/button";
import clsx from "clsx";
import { BiMessageAltError} from "react-icons/bi";

interface Props {
    theme?: "grey" | "accent" | "secondary";
    className?: string;
}

export const SocialNetworksButtons = ({ className, theme="accent", }: Props) => {

    const icoList = footerSocialNetworksLinks.map((socialNetworks) => (

      <Button
          key={uuidv4()}
          variant="icon"
          iconTheme={theme}
          icon={{icon: socialNetworks.icon ? socialNetworks.icon : BiMessageAltError, }}
          baseUrl={socialNetworks.baseUrl}
          linkType={socialNetworks.type}
      />
    ))

    return (
        <div className={clsx(className,"flex items-center gap-2.5")}>{icoList}</div>
    )
}