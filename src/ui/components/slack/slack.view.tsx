import {Container} from "../container/container";
import Image from "next/image";
import {Logo} from "../../design-system/logo/logo";
import {Typography} from "../../design-system/typography/typography";
import {Button} from "../../design-system/buttons/button";
import {LinkTypes} from "../../../lib/link-types";

export const SlackView = () => {
    return (
        <Container className="flex justify-between">
            <div className="flex flex-col justify-center max-w-2xl space-y-5">
                <div className="flex items-center gap-2">
                <Logo size="very-small"/>
                <Typography
                    variant="caption2"
                    component="span"
                    weight="medium"
                >
                Lorem de titre Ipsum
                </Typography>
                </div>

                <Typography variant="h2" component="h2">
                    Partie Slack...Blablabla
                </Typography>

                <Typography variant="body-lg" component="p" theme="grey"
                className="max-w-lg">
                    Description de slack et interêts
                </Typography>

                <Button baseUrl="https://www.slack.com" linkType={LinkTypes.EXTERNAL}>
                    Le Bouton
                    </Button>

            </div>

            <div className="relative w-[400px] h-[400px]">
                <Image
                    fill
                    src={"/assets/svg/commu.svg"}
                    // src={"/assets/svg/ComSvG/chat-conversation.svg"}
                    alt="Communication svg"
                    className="object-cover object-center rounded"
                />
            </div>
        </Container>
    );
};