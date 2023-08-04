export default function Hello(){

    function showName(){
        console.log("Coupang")
        
    }
    function showText(e){
        console.log(e.target.value)
    }
    return(
        <div>
            <h1>Hello</h1>
            <button onclick ={showName}>register</button>
            <button>take</button>
            <input type="text" onChange = {showText}></input>
        </div>
    );
}

