import { useEffect, useRef, useState } from "react"

function Countdown() {

  const eventDate = new Date("2026-08-29T21:00:00")

  const calculateTimeLeft = () => {

    const difference = eventDate - new Date()

    if (difference <= 0) {
      return {
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0,
      }
    }

    return {
      dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / 1000 / 60) % 60),
      segundos: Math.floor((difference / 1000) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const [isVisible, setIsVisible] = useState(false)

  const sectionRef = useRef(null)

  useEffect(() => {

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)

  }, [])

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {

          setIsVisible(true)
          observer.disconnect()

        }

      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {

      observer.observe(sectionRef.current)

    }

    return () => observer.disconnect()

  }, [])

  return (

    <section
      id="countdown"
      ref={sectionRef}
      className="
        relative
        -mt-[100vh]
        h-screen
        flex
        flex-col
        items-center
        justify-center
        text-center
        z-10
      "
    >

      <div
        className={`
          transition-all
          duration-700
          ${isVisible ? "opacity-100" : "opacity-0 translate-y-6"}
        `}
      >

        {/* TITULO */}

        <h2
          className="text-[40px] text-white md:text-[48px] font-medium"
          style={{
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Mis XV{" "}
          <span className="font-bold">
            Ana
          </span>
        </h2>

        {/* CONTADOR */}

        <div
          className="flex justify-center gap-4 mt-8 flex-wrap"
          aria-live="polite"
        >

          <TimeBox number={timeLeft.dias} label="DÍAS" />
          <TimeBox number={timeLeft.horas} label="HORAS" />
          <TimeBox number={timeLeft.minutos} label="MINUTOS" />
          <TimeBox number={timeLeft.segundos} label="SEGUNDOS" />

        </div>

      </div>

    </section>

  )

}

function TimeBox({ number, label }) {

  return (

    <div className="flex flex-col items-center min-w-[70px]">

      <span
        className="text-5xl md:text-6xl font-bold text-white"
        style={{
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        {number}
      </span>

      <span
        className="uppercase font-semibold text-[14px] text-white"
        style={{
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        {label}
      </span>

    </div>

  )

}

export default Countdown