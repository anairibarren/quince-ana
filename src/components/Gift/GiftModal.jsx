import { useEffect, useState } from "react"
import gift from "../../assets/icons/gift.GIF"

function GiftModal({ isOpen, onClose }) {
  const alias = "anaprina"
  const banco = "Mercado Pago"

  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(alias)

      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (err) {
      console.error("Error al copiar el alias")
    }
  }

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleKey)
    }

    return () => {
      document.removeEventListener("keydown", handleKey)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        z-[999]
        bg-black/50
        backdrop-blur-sm
        flex
        items-center
        justify-center
        px-6
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          w-full
          max-w-[420px]
          bg-[#D7CBC3]
          rounded-2xl
          px-8
          py-10
          text-center
          shadow-2xl
        "
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <img
          src={gift}
          alt="Regalo"
          className="w-[80px] h-[80px] mx-auto mb-6"
        />

        <h3 className="text-white text-[24px] font-semibold mb-8">
          REGALO
        </h3>

        <div className="space-y-6 text-white mb-8">

          <div>
            <p className="uppercase tracking-[0.15em] text-sm">
              Alias
            </p>

            <p className="text-xl font-semibold">
              {alias}
            </p>
          </div>

          <div>
            <p className="uppercase tracking-[0.15em] text-sm">
              Banco
            </p>

            <p className="text-xl font-semibold">
              {banco}
            </p>
          </div>

        </div>

        <button
          onClick={handleCopy}
          className="
            mt-10
            w-full
              px-4
              py-3
              bg-white
              text-[#B5A6A6]
              uppercase
              font-semibold
              tracking-[0.10em]
          "
        >
          {copied ? "¡Alias copiado!" : "Copiar alias"}
        </button>

        <button
          onClick={onClose}
          className="
            w-full
            mt-4
            px-4
            py-3
            border
            border-white
            text-white
            uppercase
              font-semibold
              tracking-[0.10em]
          "
        >
          Cerrar
        </button>
      </div>
    </div>
  )
}

export default GiftModal