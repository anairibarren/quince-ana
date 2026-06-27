import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import Countdown from "../components/Countdown/Countdown"
import InfoCards from "../components/Info/InfoCards"
import Gallery from "../components/Gallery/Gallery"
import Gift from "../components/Gift/Gift"
import RSVP from "../components/RSVP/RSVP"
import Footer from "../components/Footer/Footer"

function Invitation() {
  return (
    <>
      <Navbar />
      <Hero />
      <Countdown />
      <Gallery />
      <InfoCards />
      <Gift />
      <RSVP />
      <Footer />
    </>
  )
}

export default Invitation