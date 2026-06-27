import sobre from "../../assets/icons/rsvp.gif"

function RSVP() {
  const phone = "5492323221286"

  const message = encodeURIComponent(
`Hola Ana! Te confirmo mi asistencia a tu fiesta!

Cantidad de personas:

Restricción alimentaria:`
  )

  const whatsappLink = `https://wa.me/${phone}?text=${message}`

  return (
    <section
      id="asistencia"
      className="bg-white flex justify-center py-20"
    >
      <div className="max-w-[900px] w-full px-6 text-center">

        {/* ICONO */}
        <div className="flex justify-center mb-6">
          <img
            src={sobre}
            alt="Confirmar asistencia"
            className="w-[110px]"
          />
        </div>

        {/* TÍTULO */}
        <h2
          className="text-[30px] font-bold uppercase text-[#8B7355]"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Confirmá tu asistencia
        </h2>

        {/* LÍNEA */}
        <div className="w-[160px] h-[4px] bg-[#C5BAA7] rounded-full mx-auto mt-5 mb-8" />

        {/* TEXTO */}
        <div
          className=" mx-auto text-[#8B7355]"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          <p className="uppercase text-md font-bold">
            Antes del 29 de julio de 2026
          </p>

          <p className="mt-4 text-sm">
            En caso de tener alguna restricción alimentaria, por favor informalo al momento de confirmar tu asistencia.
          </p>
        </div>

        {/* BOTÓN */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            gap-3
            mt-10
            px-8
            py-4
            bg-[#D4CCBC]
            text-white
            font-semibold
            uppercase
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