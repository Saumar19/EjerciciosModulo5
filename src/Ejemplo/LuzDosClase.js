import React, {Fragment, Component} from "react";

class LuzDosClase extends Component{
    constructor(){
        super() 
        this.state = {
            color: "black"
    }
}

    render(){
        return(
            <Fragment>
                <div style = {{backgroundColor: this.state.color}} className="luzDos"></div>
            </Fragment>
        )
    }
}

export default LuzDosClase;