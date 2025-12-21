export default function Statement(props){
    return(
        <div>
            <h1>You have ${props.balance} in your bank account</h1>
            <h1>Today you have spent ${props.total}. You are able to spend ${(props.limit)-(props.total)} more dollars from your ${props.limit} daily limit</h1>
        </div>
    );
};