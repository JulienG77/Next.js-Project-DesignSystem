import React from "react";
import {Navigation} from "../navigation/navigation";
import {Footer} from "../navigation/footer";
import {Breadcrumbs} from "../breadcrumbs/breadcrumbs";
import {Container} from "../container/container";
import {UserAccountNavigation} from "../navigation/user-account-navigation";

interface Props {
    children: React.ReactNode
    isdisplayBreadcrumbs?: boolean
    widthSideBar?: boolean
}

export const Layout = ( {children, isdisplayBreadcrumbs = true, widthSideBar}: Props) => {

    let view: React.ReactElement = <> </>

    if (widthSideBar) {
        view = (
            <Container className="mb-14">
                <div className="grid grid-cols-12 gap-7">

                    <div className="col-span-3">
                    <UserAccountNavigation/>
                    </div>

                    <div className="col-span-9 bg-primary-200">{children}</div>
                </div>
            </Container>
        )
    } else {
        view = <> {children} </>
    }

    return (
        <>
            <Navigation />
            {isdisplayBreadcrumbs && <Breadcrumbs/>}
            {/*{children}*/}
            {view}
            <Footer/>
            </>
    )
}