import "../App.css";

const Telegram = () => {
  window.location.href = "https://t.me/catportal2";
};

const Twitter = () => {
  window.location.href = "https://x.com/weholdwearecat";
};

const DexScreener = () => {
  window.location.href =
    "https://dexscreener.com/solana/avvrr1ijopobdx714xtoyz9ecd73zpep9q9c5nwrqr5z";
};

const DexTool = () => {
  window.location.href =
    "https://www.dextools.io/app/en/solana/pair-explorer/AvVrr1ijoPobDx714xToyZ9ecd73ZPep9Q9c5NWRqR5Z?t=1717870525328";
};

function Links() {
  return (
    <>
      <div className='links'>
        <h1>$CAT Link's</h1>

        <div className='btnLinks'>
          <button onClick={Telegram}>CTO Telegram</button>
          <button onClick={Twitter}>Twitter / X</button>
          <button onClick={DexScreener}>DexScreener</button>
          <button onClick={DexTool}>DexTool</button>
        </div>
      </div>
    </>
  );
}
export default Links;
