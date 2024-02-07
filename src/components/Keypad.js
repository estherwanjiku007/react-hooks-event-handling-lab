// Code Keypad Component Here

function Keypad ({event}){
    function Keypad2(){
        console.log("Entering password...")
    }
    return (
        <div>
            <input type="password" onChange={Keypad2}/>
        </div>
    )
}

export default Keypad;