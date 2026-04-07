import { SuccessSectionStats } from "../Home/SuccessAndFeatures"
import { AboutHero } from "./AboutHero"
import { Banner } from "../Partials/Banner"
import { TeamSection } from "./TeamSection"
import { Footer } from "../../components/Footer"
export const AboutUs = () => {
  return (
    <>
      <AboutHero />

      <SuccessSectionStats />

      <Banner />

      <TeamSection />

      <Footer />


    </>
  )
}