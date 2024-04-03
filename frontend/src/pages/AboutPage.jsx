import Header from "../components/Header"
import Footer from "../components/Footer"

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between text-orange-800">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Lorem Ipsum</h2>
          <p className="mb-4 ml-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam metus nunc, gravida non tincidunt eget, maximus eget odio.
            Suspendisse in scelerisque nibh, et facilisis justo.
            Phasellus aliquet urna a quam venenatis euismod.
            Morbi aliquet fermentum elit. Donec a scelerisque dolor.
            Curabitur nisl elit, lacinia ut cursus eget, bibendum sed lorem.
            Proin fringilla urna vel nulla condimentum bibendum.
            Integer at erat ultricies, pharetra neque at, accumsan mauris.
          </p>
          <h2 className="text-xl font-semibold mb-2 mt-10">Lorem Ipsum</h2>
          <p className="mb-4 ml-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam metus nunc, gravida non tincidunt eget, maximus eget odio.
            Suspendisse in scelerisque nibh, et facilisis justo.
            Phasellus aliquet urna a quam venenatis euismod.
            Morbi aliquet fermentum elit. Donec a scelerisque dolor.
            Curabitur nisl elit, lacinia ut cursus eget, bibendum sed lorem.
            Proin fringilla urna vel nulla condimentum bibendum.
            Integer at erat ultricies, pharetra neque at, accumsan mauris.
            Sed sodales, mi sit amet porttitor interdum, lacus lectus tincidunt metus, eu fermentum nunc sapien vitae mi.
            Phasellus aliquet urna a quam venenatis euismod.
            Morbi aliquet fermentum elit. Donec a scelerisque dolor.
            Curabitur nisl elit, lacinia ut cursus eget, bibendum sed lorem.
            Proin fringilla urna vel nulla condimentum bibendum.
            Integer at erat ultricies, pharetra neque at, accumsan mauris.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutPage