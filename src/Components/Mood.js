import '../Mood.css';

function Mood (props){
  return (
    < div className="d-flex align-items-center justify-content-center w-100 h-100 mb-3">
    <div className={props.cname} id={props.id}>
      <span></span>
    </div>
    </div>
  );
}

export default Mood;