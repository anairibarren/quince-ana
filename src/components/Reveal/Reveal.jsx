import { useEffect, useRef, useState } from "react"

function Reveal({ children, delay = 0 }) {

  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }

      },
      {
        threshold: 0.15,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()

  }, [])

  return (

    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`
        transition-all
        duration-700
        ease-out
        ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }
      `}
    >
      {children}
    </div>

  )

}

export default Reveal