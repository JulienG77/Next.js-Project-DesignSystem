import {useRouter} from "next/router";
import  {v4 as uuidv4} from "uuid";
import {Typography} from "../../design-system/typography/typography";
import clsx from "clsx";
import {RiHome3Line} from "react-icons/ri";
import React from "react";
import {Container} from "../container/container";
import Link from "next/link";

export const Breadcrumbs = () => {
    const router = useRouter()
    const asPath = router.asPath;
    const segments = asPath.split("/")
    const lastSegment = segments[segments.length -1]
    segments[0] = "accueil"

    const view = segments.map((path, index) => (

        <div key={uuidv4()} className="flex items-center">

            <Link href={ index > 0
                ? `/ ${segments.slice(1, index + 1 ).join("/") }`
                : `/` }
            >

            <Typography
            variant="caption3"
            component="span"
            className={clsx(path !== lastSegment ? "text-grey-600" : "text-grey", "capitalize hover:text-grey animate"
            )}
            >
                {path !== "accueil"
                    ? ( path.replace(/-/g, " ")
                    ) : (
                     <RiHome3Line className="mb-1 inline"/>
                    )}
            </Typography>

            { path !== lastSegment && (

                <Typography variant="caption2" component="span" className="ml-2 text-grey-600">
                    /
                </Typography>
            )}
            </Link>
        </div>
    ));

    return <Container className="flex items-center gap-2 py-7"> {view} </Container>
};

