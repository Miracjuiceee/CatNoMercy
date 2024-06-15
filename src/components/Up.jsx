import "../App.css";

const thisUP = () => {
  window.location.href = "#Hero";
};

function GoUp() {
  return (
    <>
      <button id='up' onClick={thisUP}>
        <a href='#Hero'>UP</a>
      </button>
    </>
  );
}
export default GoUp;
