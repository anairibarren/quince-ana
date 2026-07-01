import { useEffect, useRef, useState } from "react"

function Phrase() {

  const [isVisible, setIsVisible] = useState(false)
  const contentRef = useRef(null)

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }

      },
      {
        threshold: 0.25,
      }
    )

    if (contentRef.current) {
      observer.observe(contentRef.current)
    }

    return () => observer.disconnect()

  }, [])

  return (

    <section className="bg-[#F6F2EE] py-20 px-6">

      <div
        ref={contentRef}
        className={`
          max-w-5xl
          mx-auto
          text-center
          transition-all
          duration-700
          ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }
        `}
      >

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
          Una noche, un sueño,
          <br />
          un recuerdo para toda la vida.
        </p>

        <div className="w-20 h-[3px] rounded-full bg-[#D7CBC3] mx-auto mt-8" />

      </div>

    </section>

  )

}

export default Phrase