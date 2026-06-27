import { useState } from "react"
import gift from "../../assets/icons/gift.GIF"
import GiftModal from "./GiftModal"

function Gift() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section
      id="gift"
      className="w-full"
    >
      {/* FRASE */}

      <div className="py-16 px-6 bg-white">

        <div className="max-w-4xl mx-auto text-center">

          <div className="w-[90px] h-[2px] bg-[#C5BAA7] rounded-full mx-auto mb-8" />

          <p
            className="
              text-[#8B7355]
              text-[20px]
              md:text-[28px]
              leading-[1.8]
              tracking-[0.08em]
              uppercase
            "
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Hagamos que sea una noche{" "}
            <span className="font-bold">
              inolvidable.
            </span>
          </p>

          <div className="w-[90px] h-[2px] bg-[#C5BAA7] rounded-full mx-auto mt-8" />

        </div>

      </div>

      {/* BLOQUE */}

      <div className="bg-[#C5BAA7] py-16 px-6">

        <div
          className="max-w-2xl mx-auto text-center text-white"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          <img
            src={gift}
            alt="Regalo"
            className="w-[100px] h-[100px] mx-auto mb-8"
          />

          <h2 className="text-3xl font-semibold mb-4">
            REGALO
          </h2>

          <p className="text-md">
            Habrá una urna en el salón para quienes deseen
            dejar un regalo presencial. También puede ser mediante una
            transferencia por Mercado Pago.
          </p>

          <button
            onClick={() => setIsOpen(true)}
            className="
              mt-8
              px-6
              py-4
              bg-[#E1DACF]
              text-[#8B7355]
              uppercase
              font-semibold
            "
          >
            Ver datos
          </button>

        </div>

      </div>

      <GiftModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />

    </section>
  )
}

export default Gift