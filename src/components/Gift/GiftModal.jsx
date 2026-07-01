import { useEffect, useState } from "react"

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
      className="
        fixed
        inset-0
        bg-black/70
        flex
        items-center
        justify-center
        px-6
        z-50
      "
      onClick={onClose}
    >

      <div
        onClick={(e) => e.stopPropagation()}
        className="
          w-full
          max-w-[420px]
          bg-white
          px-8
          py-10
          text-center
          shadow-2xl
        "
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >

        <h3 className="text-black text-[24px] font-semibold mb-8 uppercase tracking-[0.10em]">
          Regalo
        </h3>

        <div className="space-y-7 text-black mb-8">

          <div>

            <p className="uppercase tracking-[0.15em] text-sm mb-2">
              Alias
            </p>

            <p className="text-xl font-semibold">
              {alias}
            </p>

          </div>

          <div>

            <p className="uppercase tracking-[0.15em] text-sm mb-2">
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
            w-full
            py-3
            bg-black
            text-white
            uppercase
            font-semibold
            tracking-[0.10em]
            transition
            hover:bg-neutral-800
          "
        >
          {copied ? "¡Alias copiado!" : "Copiar alias"}
        </button>

        <button
          onClick={onClose}
          className="
            w-full
            mt-4
            py-3
            border
            border-black
            text-black
            uppercase
            font-semibold
            tracking-[0.10em]
            transition
            hover:bg-black
            hover:text-white
          "
        >
          Cerrar
        </button>

      </div>

    </div>
  )
}

export default GiftModal