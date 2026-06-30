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
        fixed inset-0
        flex flex-col items-center justify-center
        text-center
        px-8
        bg-[#e5d8c3]
        transition-opacity
        duration-700
        ${fadeOut ? "opacity-0" : "opacity-100"}
      `}
    >
      {/* TÍTULO */}
      <div>
        <h2
          className="text-[20px] uppercase tracking-[0.30em] text-[#F3F4F6]"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Mis XV
        </h2>

        <h1
          className="text-[100px] leading-none text-[#F3F4F6]"
          style={{ fontFamily: "Allura, cursive" }}
        >
          Ana
        </h1>
      </div>

      {/* FRASE */}
      <p
        className="
          mt-3
          mb-10
          w-full
          max-w-4xl
          text-[16px]
          md:text-[14px]
          leading-6
          text-[#F3F4F6]
        "
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        Hay momentos que merecen ser vividos una sola vez.
        Te espero para compartir este día tan especial.
      </p>

      {/* BOTÓN */}
      <button
        onClick={handleEnter}
        className="
          px-10
          py-4
          bg-[#b8ac98]
          text-white
          uppercase
          tracking-[0.15em]
          font-semibold
          transition
          hover:opacity-80
        "
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        {loading ? "Ingresando..." : "Ingresar"}
      </button>
    </div>
  )
}

export default Gate