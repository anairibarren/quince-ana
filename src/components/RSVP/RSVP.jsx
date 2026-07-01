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
    <section className="bg-black py-14 px-6">

      <div className="mx-auto text-center">

        {/* ICONO */}
        <div className="flex justify-center mb-4">
          <img
            src={sobre}
            alt="Confirmar asistencia"
            className="w-[110px]"
          />
        </div>

        {/* TITULO */}
        <h2
          className="text-[25px] font-bold uppercase text-white"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Confirmá tu asistencia
        </h2>

        {/* LINEA */}
        <div className="w-[100px] h-[3px] bg-white mx-auto mt-5 mb-4" />

        {/* TEXTO */}
        <div
          className=" mx-auto text-white"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          <p className="uppercase font-semibold text-lg">
            Antes del 29 de julio de 2026
          </p>

          <p className="text-[17px] mt-4">
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
            text-black
            uppercase
            font-semibold
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