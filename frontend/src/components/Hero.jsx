import { Link } from "react-router-dom"


function Hero() {

  return (
    <div>
        <h2>Hero Section</h2>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam metus nunc, gravida non tincidunt eget, maximus eget odio.</span>
        <img src="" alt="This is an image" />
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam metus nunc, gravida non tincidunt eget, maximus eget odio.</span>
        <button>Get Started</button>
        <Link to="/about" >Learn more</Link>
    </div>
  )
}

export default Hero