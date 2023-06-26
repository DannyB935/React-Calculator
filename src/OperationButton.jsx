
function OperationButton(props){

    return(

        <div onClick={()=>{props.onClick(props.operation)}} > {props.operation} </div>

    );
}

export default OperationButton;