import { useEffect, useRef, useState } from "react"

import calendar from "../../assets/icons/calendar.WEBP"
import pin from "../../assets/icons/pin.webp"
import diamond from "../../assets/icons/diamond.WEBP"

function InfoBlock({
  background,
  image,
  title,
  children,
  button = false,
  link,
  delay = 0,
  isVisible,
  light = false,
}) {
  return (
    <div
      className="
        w-full
        min-h-[400px]
        flex
        flex-col
        items-center
        justify-center
        text-center
        px-8
      "
      style={{
        backgroundColor: background,
        fontFamily: "Montserrat, sans-serif",
      }}
    >

      {/* CONTENIDO CON ANIMACIÓN */}
      <div
        className={`
          flex
          flex-col
          items-center
          transition-all
          duration-700
          ease-out
          ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }
        `}
        style={{
          transitionDelay: `${delay}ms`,
        }}
      >

        {/* ICONO */}
        <img
          src={image}
          alt={title}
          className="w-[85px] h-[85px] md:w-[100px] md:h-[100px] object-contain mb-6"
        />

        {/* TITULO */}
        <h3
          className={`text-[20px] md:text-[22px] font-semibold tracking-[0.20em] mb-6 ${
            light ? "text-white" : "text-[#b1927d]"
          }`}
        >
          {title}
        </h3>

        {/* CONTENIDO */}
        <div
          className={`text-[16px] md:text-[18px] leading-[1.8] space-y-3 ${
            light ? "text-white" : "text-[#b1927d]"
          }`}
        >
          {children}
        </div>

        {/* BOTÓN */}
        {button && (
          <div className="flex flex-col items-center mt-6">

            <div className="w-[80px] h-[2px] bg-[#d0bbad] rounded-full mb-6" />

            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-4
                py-3
                bg-[#d0bbad]
                text-white
                font-semibold
                text-md
                uppercase
                transition
                hover:opacity-90
              "
            >
              Cómo llegar
            </a>

          </div>
        )}

      </div>

    </div>
  )
}

function InfoCards() {

  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }

      },
      {
        threshold: 0.2,
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()

  }, [])

  return (

    <section
      id="info"
      ref={sectionRef}
      className="w-full bg-white grid grid-cols-1 md:grid-cols-3"
    >

      {/* CUÁNDO */}
      <InfoBlock
        background="#D7CBC3"
        image={calendar}
        title="¿CUÁNDO?"
        delay={0}
        isVisible={isVisible}
        light={true}
      >
        <p>29 DE AGOSTO DE 2026</p>
        <p>| 21:00 HS - 05:00 HS |</p>
      </InfoBlock>

      {/* DÓNDE */}
      <InfoBlock
        background="#FFFFFF"
        image={pin}
        title="¿DÓNDE?"
        button={true}
        link="https://maps.app.goo.gl/dAyam8ZLhgbXVAoy6"
        delay={150}
        isVisible={isVisible}
      >
        <p className="text-lg font-medium">
          Malevo Eventos
        </p>
      </InfoBlock>

      {/* DRESS CODE */}
      <InfoBlock
        background="#D7CBC3"
        image={diamond}
        title="DRESS CODE"
        delay={300}
        isVisible={isVisible}
        light={true}
      >
        <p className="font-semibold uppercase">
          Elegante
        </p>

        <div className="w-[80px] h-[3px] rounded-full bg-white rounded-full mx-auto my-5" />

        <p>
          Evitar el color azul
        </p>

      </InfoBlock>

    </section>

  )
}

export default InfoCards