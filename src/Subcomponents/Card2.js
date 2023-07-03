
const  List2 = (props) => {
 

    return(
     
<>
    <div className="content-features">
        <div className="cardheader">
            <img src= {props.images} alt=""/>
            <h1>{props.header}</h1>
        </div>
        <div className="cardbody">
            <p>{props.title}</p>


        </div>
    </div>
</>

    )
}
export default  List2;