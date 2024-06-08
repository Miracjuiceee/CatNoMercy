import "../App.css";
import StoneLogo from "../assets/stone.png";

function Header() {
  return (
    <>
      <header>
        <img className='wLogo' src={StoneLogo} alt='WE ARE CAT MAGIC STONE' />
        <h1>
          <a href='#'>
            WE ARE <span>$CAT</span>
          </a>
        </h1>

        <nav>
          <a href='https://allmylinks.com/we-are-cat' target='_blank'>
            Social link
          </a>
          <a href='#'>WrCatGenerator</a>
          <a href='#'>Cat Journey To The Moon</a>
          <a href='#toBuy' id='buyBtn'>
            How To Buy
          </a>
        </nav>
      </header>
    </>
  );
}
export default Header;
