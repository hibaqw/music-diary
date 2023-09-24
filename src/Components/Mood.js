import '../Mood.css';
function Mood(props) {

  function test(){
    console.log("here");
  }

  return (
    < div className="d-flex align-items-center justify-content-center w-100 h-100 mb-3">
      <a href="/mood-selected" disabled={props.inactive} className= {`d-flex primary ${props.cname}` } id={props.id} onClick={props.onMoodClick} >
          <span></span>
      </a>
    </div>

  );
}

export default Mood;