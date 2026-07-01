import fotoFinal from "../../assets/images/foto-final.jpg"
import final from "../../assets/icons/final.webp"

function Footer() {
  return (
    <footer
      id="footer"
    >
      {/* FOTO */}
      <img
        src={fotoFinal}
        alt="Ana"
        className="w-full h-auto object-cover"
      />

      {/* CIERRE */}
      <div className="py-8 px-6 mb-8 flex flex-col items-center text-center">

        <img
          src={final}
          alt="Final"
          className="w-16 md:w-20 mb-2 opacity-90"
        />

        <h2
          className="text-[40px] md:text-[90px] text-black"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Te espero
        </h2>

        <p
          className="mt-3 uppercase tracking-[0.35em] text-black text-[14px] md:text-[14px]"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          29 · AGOSTO · 2026
        </p>

      </div>
    </footer>
  )
}

export default Footer