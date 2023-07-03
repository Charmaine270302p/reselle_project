

const  List = (props) => {
 

    return(
     
<>
    <div className="card">
     
            <img className="img-card" src= {props.icon} alt=""/>
   
        <div className="card-header">
            <img src= {props.images} alt=""/>
            <h1>{props.header}</h1>
        </div>
        <div className="card-body">
            <p>{props.title}</p>


        </div>
    </div>
</>

    )
}
export default  List;