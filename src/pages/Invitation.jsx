import Hero from "../components/Hero/Hero"
import Countdown from "../components/Countdown/Countdown"
import Phrase from "../components/Countdown/Phrase"
import Gallery from "../components/Gallery/Gallery"
import InfoCards from "../components/Info/InfoCards"
import Gift from "../components/Gift/Gift"
import Photo from "../components/PhotoDivider/Photo"
import RSVP from "../components/RSVP/RSVP"
import Footer from "../components/Footer/Footer"


function Invitation() {
  return (
    <>
      <Hero />
      <Countdown />
      <Phrase />
      <Gallery />
      <InfoCards />
      <Gift />
      <Photo />
      <RSVP />
      <Footer />
    </>
  )
}

export default Invitation