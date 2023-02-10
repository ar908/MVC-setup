const Transection = ({transection}) =>{
    // const style = { padding: "5px", border: "2px solid", margin: "5px", display: "flex" , just}
    return(
        <div style={{ padding: "5px 20px", border: "2px solid", margin: "5px", display: "flex", 
        justifyContent: "space-between", borderRadius: "5px" }}>
            <div>{transection.amount}</div>
            <div>{transection.type}</div>
            <div>{transection.category}</div>
            <div>{transection.date}</div>
            <div>{transection.reference}</div>
            <div>{transection.description}</div>
        </div>
    )
}

export default Transection