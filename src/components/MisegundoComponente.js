import React from "react" 
import MitercerComponente from "./MitercerComponente";

const MisegundoComponente=() => {
    return (
        <div>
            <h1>Mi segundo componente, hijo del primer componente </h1>
            <MitercerComponente/>
        </div>
    )
}

export default MisegundoComponente;
