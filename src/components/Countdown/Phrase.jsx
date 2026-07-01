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

    <section className=" py-20 px-6">

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

        <div className="w-40 h-[3px] rounded-full bg-black mx-auto mb-4" />

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
          Una noche, un sueño,
          <br />
          un recuerdo para toda la vida.
        </p>

        <div className="w-40 h-[3px] rounded-full bg-black mx-auto mt-4" />

      </div>

    </section>

  )

}

export default Phrase