import globeIcon from '../assets/Globe.png';

function Header() {
  return (
    <header>
        <nav className="nav">
            <img src={globeIcon}/><span>my travel journal</span>
        </nav>

    </header>
  )
}

export default Header