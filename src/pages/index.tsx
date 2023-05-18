import { Seo } from '../ui/components/seo/seo'
import {Navigation} from "../ui/components/navigation/navigation";
import {Footer} from "../ui/components/navigation/footer";

export default function Home() {
  return (
    <>
      <Seo title="Design System Ui" description="titre"/>
      <meta name="description" content="description"/>

      <Navigation/>
      <Footer/>
</>

  )
}
