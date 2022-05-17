import React, { Fragment, Component} from "react";

class LuzClase extends Component {
    constructor(){
        super();
        this.state = {
            color: "black"
        }
    }


  render() {
    return (
      <Fragment>
        <div style = {{backgroundColor: this.state.color}} className="luz"></div>
      </Fragment>
    );
  }
}

export default LuzClase;
