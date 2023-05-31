import React from "react";
import {HeroTopView} from "./components/hero-top/hero-top.view";
import {FeaturedView} from "./components/featured/featured.view";
import {SlackView} from "../../components/slack/slack.view";
import {NewsCoursView} from "./components/News-Cours/news-cours.view";
import {HighLightListView} from "./components/hilight-list/hilight-list.view";
import {CallToActionView} from "../../design-system/call-to-action/call-to-action.view";



export const LandingPageView= () => {
    return (
     <>
    <HeroTopView/>
    <FeaturedView/>
    <SlackView/>
    <NewsCoursView/>
    <HighLightListView/>
    <CallToActionView/>
    </>
    )
}