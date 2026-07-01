import fotoInicio from "../../assets/images/foto-inicio.jpg"

function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* FOTO */}
      <img
        src={fotoInicio}
        alt="Ana XV"
        className="w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#B5A6A6]/35" />

    </section>
  )
}

export default Hero