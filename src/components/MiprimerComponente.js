import React from "react" //Llamamos a la dependencia react ubicada en package.json
import MisegundoComponente from "./MisegundoComponente";
//Componente de función
//JSX Nos permite generar estructura similar a html
const MiprimerComponente=() => {
    return (
        <div>
            <h1>Hola mundo desde un componente hijo </h1>
            <MisegundoComponente/>
        </div>
    )
}

export default MiprimerComponente;