import { useState } from "react"

function Gate({ onEnter }) {
  const [loading, setLoading] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  const handleEnter = () => {
    setLoading(true)
    setFadeOut(true)

    setTimeout(() => {
      onEnter()
    }, 600)
  }

  return (
    <div
      className={`
        fixed inset-0 flex flex-col items-center justify-center text-center
        bg-[#E1DACF] transition-opacity duration-700
        ${fadeOut ? "opacity-0" : "opacity-100"}
      `}
    >
      {/* TITULO */}
      <div className="leading-none mb-8">
        <h2
          className="text-[20px] text-[#f3f4f6] tracking-[0.3em] uppercase"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Mis XV
        </h2>

        <h1
          className="text-[100px] text-[#f3f4f6]"
          style={{ fontFamily: "Allura, cursive" }}
        >
          Ana
        </h1>
      </div>

      {/* FRASE */}
      <p
        className="text-[12px] text-[#f3f4f6] leading-loose tracking-[0.2em] max-w-xl mb-10"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        Hay momentos que merecen ser vividos una sola vez.
        <br />
        Te espero para compartir este día tan especial.
      </p>

      {/* BOTON */}
      <button
        onClick={handleEnter}
        className="px-10 py-4 bg-[#C5BAA7] text-white uppercase tracking-[0.15em] font-semibold transition hover:opacity-80"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        {loading ? "Ingresando..." : "Ingresar"}
      </button>
    </div>
  )
}

export default Gate