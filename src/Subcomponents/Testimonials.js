const  Case1 = (props) => {
 

    return(
     
<>
    <div className="card">
        <div className="card-header">
            <img src= {props.images} alt=""/>
        </div>
        <div className="card-body">
            <h3>{props.header}</h3>
            <h5>{props.subheader}</h5>
            <p className="testimonials-txt">{props.title}</p>
        </div>
    </div>
</>

    )
}
export default  Case1;