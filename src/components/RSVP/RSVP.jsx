import sobre from "../../assets/icons/rsvp.webp"

function RSVP() {
  const phone = "5492323221286"

  const message = encodeURIComponent(
`Hola Ana!

Te confirmo mi asistencia a tu fiesta.

Cantidad de personas:

Restricción alimentaria:`
  )

  const whatsappLink = `https://wa.me/${phone}?text=${message}`

  return (
    <section
      id="asistencia"
      className="bg-[#D7CBC3] py-20"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">

        {/* ICONO */}
        <div className="flex justify-center mb-8">
          <img
            src={sobre}
            alt="Confirmar asistencia"
            className="w-[110px]"
          />
        </div>

        {/* TITULO */}
        <h2
          className="text-[30px] font-bold uppercase text-white"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Confirmá tu asistencia
        </h2>

        {/* LINEA */}
        <div className="w-[160px] h-[3px] bg-[#E1DACF] rounded-full mx-auto mt-5 mb-8" />

        {/* TEXTO */}
        <div
          className="max-w-[520px] mx-auto text-white"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          <p className="uppercase tracking-[0.08em] font-semibold text-lg">
            Antes del 29 de julio de 2026
          </p>

          <p className="text-[17px] leading-8 px-6 mt-2">
            En caso de tener alguna restricción alimentaria,
            por favor informalo al momento de confirmar tu
            asistencia.
          </p>
        </div>

        {/* BOTON */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            gap-3
            mt-10
            px-4
            py-3
            bg-white
            text-[#B5A6A6]
            uppercase
            font-semibold
            tracking-[0.10em]
          "
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Confirmar asistencia
          <span className="text-xl">→</span>
        </a>

      </div>
    </section>
  )
}

export default RSVP