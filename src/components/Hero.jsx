import "../App.css";
import catMafia from "../assets/cats_mafia.png";

function Hero() {
  return (
    <>
      <section>
        <h1>
          <span className='textYellow'>Dev jeeted</span> like a kitten.
          <br />
          We <span className='textPink'>HOLD</span>, We are
          <span className='textPink'> $CAT</span>
        </h1>
        <p>
          Step into the <span className='textPink'>$CAT</span> mafia and let the
          world see who truly <br /> dominates this
          <span className='textYellow'> era</span>!
        </p>

        <div className='catIllu'>
          <img src={catMafia} alt='Black CAT TO THE MOON' />
        </div>

        <button>Create your $CAT</button>
        <a href='https://t.me/catportal2' target='_blank'>
          <button id='telegrambtn'>Join Our Telegram</button>
        </a>
      </section>
    </>
  );
}
export default Hero;
