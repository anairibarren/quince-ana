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
        bg-white
        transition-opacity
        duration-700
        ${fadeOut ? "opacity-0" : "opacity-100"}
      `}
    >

      {/* TÍTULO */}
      <h1
        className="
          font-medium
          uppercase
          text-[30px]
        "
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        Mis XV{" "}
        <span >
          Ana
        </span>
      </h1>

      {/* FRASE */}
      <p
        className="
          mt-8
          mb-12
          max-w-2xl
          text-[16px]
          uppercase
        "
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        QUIERO QUE SEAS PARTE DE ESTE MOMENTO TAN IMPORTANTE PARA MÍ
      </p>

      {/* BOTÓN */}
      <button
        onClick={handleEnter}
        className="
          px-4
          py-4
          bg-black
          text-white
          uppercase
          tracking-[0.15em]
          font-semibold
          text-[18px]
        "
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        {loading ? "Ingresando..." : "Ingresar"}
      </button>

    </div>
  )
}

export default Gate