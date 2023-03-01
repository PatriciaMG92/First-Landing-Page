import React from "react";

const red = ["🔴", "⚫", "⚫"];
const yellow = ["⚫", "🟡", "⚫"];
const green = ["⚫", "⚫", "🟢"];

const mySemaforo = {
    estado: null,
    setRed(){
        this.estado = red;
    },
    setGreen(){
        this.estado = green;
    },
    setYellow(){
        this.estado = yellow;
    },
}

const changeSemaforo = () =>{
    mySemaforo.setGreen()
    alert(mySemaforo.estado);
    mySemaforo.setYellow()
    alert(mySemaforo.estado);
    mySemaforo.setRed();
    alert(mySemaforo.estado);
}

const Semaforo = () =>{
    return (
        <>
        <div className="container m-5">
            <h1 className="mb-3">Mi semáforo</h1>
            <button  type="button" class="btn btn-info" onClick={changeSemaforo}>Hacer funcionar el semáforo</button>
        </div>
        </>
    )
}

export default Semaforo;