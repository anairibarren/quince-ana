import photo from "../../assets/images/foto8.jpg"

function Photo() {
  return (
    <section className="w-full">
      <img
        src={photo}
        alt="Ana XV"
        className="
          w-full
          h-auto
          object-cover
          block
        "
      />
    </section>
  )
}

export default Photo