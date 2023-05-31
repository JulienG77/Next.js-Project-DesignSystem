import React from "react";
import {Navigation} from "../navigation/navigation";
import {Footer} from "../navigation/footer";
import {Breadcrumbs} from "../breadcrumbs/breadcrumbs";

interface Props {
    children: React.ReactNode
    isdisplayBreadcrumbs?: boolean
}

export const Layout = ( {children, isdisplayBreadcrumbs = true}: Props) => {
    return (
        <>
            <Navigation />
            {isdisplayBreadcrumbs && <Breadcrumbs/>}
            {children}
            <Footer/>
            </>
    )
}