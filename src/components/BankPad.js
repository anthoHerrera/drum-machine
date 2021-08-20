import React, { Component } from "react";
import DrumPad from "./DrumPad";

export class BankPad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bank: this.props.currentBank,
        };
    }
    render() {
        return (
            <div id="bankPad">
                {this.state.bank.map((drumKey, idx) => (
                    <DrumPad 
                        key={idx}
                        clipId={drumKey.id}
                        src={drumKey.url} 
                        keyCode={drumKey.keyCode}
                        keyTrigger={drumKey.keyTrigger}
                        power={this.props.power}

                    />
                ))}
            </div>
        );
    }
}

export default BankPad;
