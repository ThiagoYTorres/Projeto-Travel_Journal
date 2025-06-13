import localLogo from '../assets/Local.png'
function Entry(props) {
  return (
    <>
<div className="instance1">
    <img src={props.obj.img.src} 
    alt={props.obj.img.alt} 
    className="imglocal"/>
     <div className="sobre">
    <img src={localLogo} alt="local logo" className="local"/>
    <span className="país">{props.obj.country}</span>
    <a href={props.obj.googleMapsLink} target="blank">View on Google Maps</a>
    <h1>{props.obj.title}</h1>    
    <h5 className="date">{props.obj.dates}</h5>
    <p className="text">{props.obj.text}</p>
     </div>
</div>
    </>
  )
}

export default Entry