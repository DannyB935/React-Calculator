
function OperationButton(props){

    return(

        <div onClick={()=>{props.onClick(props.operation)}} className="operation-button"> {props.operation} </div>

    );
}

export default OperationButton;