// Code EyesOnMe Component Here
function EyesOnMe(event){
    function EyesOnMe2(){
       console.log("Good!")
        }
    function EyesOnMe3(){
        console.log("Hey! Eyes on me!")
    }
    if (event===onfocus){    
    return (
        <div>
            <button onFocus={EyesOnMe2}>Eyes on me</button>
            </div>
    )}
    else{
        return( <div>
            <button onBlur={EyesOnMe3}>Eyes on me</button> 
        </div>)
    }
}
export default EyesOnMe;
