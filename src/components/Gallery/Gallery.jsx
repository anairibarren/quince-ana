import { useEffect, useState } from "react"

import foto1 from "../../assets/images/foto1.jpg"
import foto2 from "../../assets/images/foto2.jpg"
import foto3 from "../../assets/images/foto3.jpg"
import foto4 from "../../assets/images/foto4.jpg"
import foto5 from "../../assets/images/foto5.jpg"
import foto6 from "../../assets/images/foto6.jpg"
import foto7 from "../../assets/images/foto7.jpg"
import foto8 from "../../assets/images/foto8.jpg"

function Gallery() {
  const photos = [
    foto1,
    foto2,
    foto3,
    foto4,
    foto5,
    foto6,
    foto7,
    foto8,
  ]

  const [current, setCurrent] = useState(0)

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length)
    }, 1500)

    return () => clearInterval(interval)
  }, [photos.length])

  return (
    <section
      id="gallery"
      className="w-full bg-[#E1DACF]"
    >
      <div className="w-full overflow-hidden">
        <img
          src={photos[current]}
          alt={`Foto ${current + 1} de Ana`}
          className="
            w-full
            h-[70vh]
            object-cover
            transition-all
            duration-[1200ms]
          "
        />
      </div>
    </section>
  )
}

export default Gallery