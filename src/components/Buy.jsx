import "../App.css";
import CatEyes from "../assets/cat_eyes.png";
import Phantom from "../assets/phantom.png";
import SolFlare from "../assets/solflare.png";
import Stone from "../assets/stone.png";

const copyCA = function getCA() {
  navigator.clipboard.writeText("CURoogRbbH6kTFfCVivAoxqjXGnwrxGZPtmvaKa7GkKb");
  alert("CA have been copied to your clipboard");
};

const goRaydium = () => {
  window.location.href =
    "https://raydium.io/swap/?inputMint=sol&outputMint=CURoogRbbH6kTFfCVivAoxqjXGnwrxGZPtmvaKa7GkKb";
};

const goJupiter = () => {
  window.location.href =
    "https://jup.ag/swap/SOL-CURoogRbbH6kTFfCVivAoxqjXGnwrxGZPtmvaKa7GkKb";
};

const dlPhantom = () => {
  window.location.href = "https://phantom.app/";
};

const dlSolflare = () => {
  window.location.href = "https://solflare.com/";
};

function Buy() {
  return (
    <>
      <article id='toBuy'>
        <h1>How To Buy ?</h1>
        <p>
          Download a Wallet who support Solana Blockchain <br />
          <span className='textPink'>(Phantom, Solflare...)</span>
        </p>

        <div className='dlContent'>
          <div className='dl p'>
            <img
              src={Phantom}
              id='Phantom'
              alt='Phantom Wallet'
              onClick={dlPhantom}
            />
            <button id='btnPhantom' onClick={dlPhantom}>
              Download Phantom Wallet
            </button>
          </div>

          <div className='dl s'>
            <img
              src={SolFlare}
              id='Solflare'
              alt='SolFlare Wallet'
              onClick={dlSolflare}
            />
            <button id='btnSolflare' onClick={dlSolflare}>
              Download Solflare Wallet
            </button>
          </div>
        </div>

        <p className='textPink'>!! Secure your seed phrase on a paper !!</p>

        <h2>
          Copy Our <span className='textPink'>Contract Address</span>
        </h2>

        <a
          href='https://dexscreener.com/solana/AvVrr1ijoPobDx714xToyZ9ecd73ZPep9Q9c5NWRqR5Z'
          target='_blank'
        >
          CURoogRbbH6kTFfCVivAoxqjXGnwrxGZPtmvaKa7GkKb
        </a>
        <button onClick={copyCA}>Copy CA</button>

        <p id='copy_done'>{copyCA.innerText}</p>

        <h3>
          Go on <span className='textLemon'>Jupiter</span> or
          <span className='textPink'> Raydium</span> and paste the contract
          adress
        </h3>

        <div className='dlContent'>
          <div className='dl j'>
            <img src={CatEyes} alt='eyes $CAT' onClick={goJupiter} />
            <button id='btnJupiter' onClick={goJupiter}>
              Go to Jupiter
            </button>
          </div>

          <div className='dl r'>
            <img src={Stone} alt='stone $CAT' onClick={goRaydium} />
            <button id='btnRaydium' onClick={goRaydium}>
              Go to Raydium
            </button>
          </div>
        </div>
      </article>
    </>
  );
}
export default Buy;
