import { useState } from "react"
import gift from "../../assets/icons/gift.GIF"
import GiftModal from "./GiftModal"

function Gift() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section>

      {/* FRASE */}
      <div className="py-20 px-6 bg-white">

        <div className="max-w-5xl mx-auto text-center">

          <div className="w-40 h-[3px] bg-black mx-auto mb-4" />

          <p
            className="
              text-black
              uppercase
              leading-relaxed
              text-[18px]
              md:text-[22px]
            "
            style={{
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Hagamos que sea una noche
            <br />
            <span className="font-semibold">
              ¡inolvidable!
            </span>
          </p>

          <div className="w-40 h-[3px] bg-black mx-auto mt-4" />

        </div>

      </div>

      {/* BLOQUE */}

      <div className="bg-black pt-14 pb-20 px-6">

        <div
          className="max-w-2xl mx-auto text-center text-white"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >

          <img
            src={gift}
            alt="Regalo"
            className="w-[100px] h-[100px] mx-auto mb-8"
          />

          <h2 className="text-[28px] font-semibold uppercase tracking-[0.10em] mb-5">
            Regalo
          </h2>

          <p className="text-[17px] leading-8">
            Habrá una urna en el salón para quienes deseen dejar un regalo
            presencial. También puede ser mediante una transferencia por
            Mercado Pago.
          </p>

          <button
            onClick={() => setIsOpen(true)}
            className="
              mt-10
              px-4
              py-3
              bg-white
              text-black
              uppercase
              font-semibold
              tracking-[0.10em]
              transition
              hover:bg-gray-100
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