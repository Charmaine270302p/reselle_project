const  Case = (props) => {
 

    return(
     
<>
    <div className="case-section">
     
        <div className="icon">
            <img src= {props.image} alt=""/>
        </div>
   
        <div className="text-content">
                <h2>{props.header}</h2>
                <p>{props.title}</p>
        </div>
           
            <button> {props.btn0}</button>
     
    </div>
    


</>

    )
}
export default  Case;

