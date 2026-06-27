import fotoInicio from "../../assets/images/foto-inicio.jpg"

function Hero() {
  return (
    <section id="hero" className="w-full relative">

      {/* IMAGEN PRINCIPAL */}
      <img
        src={fotoInicio}
        alt="Ana XV"
        className="w-full  object-cover"
      />

      {/* OVERLAY ELEGANTE (beige suave) */}
      <div className="absolute inset-0 bg-[#C5BAA7]/25" />

    </section>
  )
}

export default Hero