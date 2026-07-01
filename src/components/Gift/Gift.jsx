import { useState } from "react"
import gift from "../../assets/icons/gift.GIF"
import GiftModal from "./GiftModal"

function Gift() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section>

      {/* FRASE */}
      <div className="bg-[#F6F2EE] py-20 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <div className="w-20 h-[3px] rounded-full bg-[#D7CBC3] mx-auto mb-8" />

          <p
           className="
            text-[#B5A6A6]
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
              inolvidable.
            </span>
          </p>

          <div className="w-20 h-[3px] rounded-full bg-[#D7CBC3] mx-auto mt-8" />

        </div>

      </div>

      {/* BLOQUE */}

      <div className="bg-[#D7CBC3] pb-20 pt-10 px-6">

        <div
          className="max-w-2xl mx-auto text-center text-white"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >

          <img
            src={gift}
            alt="Regalo"
            className="w-[100px] h-[100px] mx-auto mb-8"
          />

          <h2 className="text-[28px] font-semibold uppercase mb-5 tracking-[0.10em]">
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
              text-[#B5A6A6]
              uppercase
              font-semibold
              tracking-[0.10em]
              transition
              hover:opacity-90
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