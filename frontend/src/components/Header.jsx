import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
        <nav className="flex m-4 justify-center flex-col text-hover-orange">
          <h1 className="text-3xl font-bold">Food planner</h1>
          <p className="font-thin">Here to help you with your meal prep</p>
          <Link to="/" className="text-lg font-semibold text-hover-orange">Home</Link>
          <Link to="/about" className="text-lg font-semibold text-hover-orange">About</Link>
          <Link to="/browse" className="text-lg font-semibold text-hover-orange"><img src="" alt="This is a search icon" /></Link>
        </nav>
      </header>
  )
}

export default Header;
