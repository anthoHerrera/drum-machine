import React, { Component } from "react";
import BankPad from "./BankPad";
import { bankOne, bankTwo } from "./Banks";
import "./css/DrumMachine.scss";

export class DrumMachine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            power: true,
            display: String.fromCharCode(160),
            bank: bankOne,
            bankId: "Heater Kit",
            volume: 0.3,
        };
        this.powerControl = this.powerControl.bind(this);
        this.selectBank = this.selectBank.bind(this);
        this.displayClipName = this.displayClipName.bind(this);
        this.adjustVolume = this.adjustVolume.bind(this);
        this.clearDisplay = this.clearDisplay.bind(this);
    }

    powerControl() {
        this.setState({
            power: !this.state.power,
            display: String.fromCharCode(160),
        });
    }

    selectBank() {
        if (this.state.power) {
            if (this.state.bankId === "Heater Kit") {
                this.setState({
                    display: "Smooth Piano Kit",
                    bank: bankTwo,
                    bankId: "Smooth Piano Kit",
                });
            } else {
                this.setState({
                    display: "Heater Kit",
                    bank: bankOne,
                    bankId: "Heater Kit",
                });
            }
        }
    }

    displayClipName(text) {
        if (this.state.power) {
            this.setState({
                display: text,
            });
        }
    }
    adjustVolume(e) {
        if (this.state.power) {
            this.setState({
                volume: e.target.value,
                display: "Volume: " + Math.round(e.target.value * 100),
            });
            setTimeout(() => this.clearDisplay(), 1000);
        }
    }
    clearDisplay() {
        this.setState({
            display: String.fromCharCode(160),
        });
    }

    render() {
        const powerSlider = this.state.power
            ? {
                  float: "right",
              }
            : {
                  float: "left",
              };
        const bankSlider =
            this.state.bank === bankOne
                ? {
                      float: "left",
                  }
                : {
                      float: "right",
                  };

        {
            const drumPadClips = [].slice.call(
                document.getElementsByClassName("clip")
            );
            drumPadClips.forEach((drumPadClip) => {
                drumPadClip.volume = this.state.volume;
            });
        }
        return (
            <div id="drum-machine">
                <BankPad
                    currentBank={this.state.bank}
                    power={this.state.power}
                />
                <div id="controls-container">
                    <div className="control">
                        <p>Power</p>
                        <div className="select" onClick={this.powerControl}>
                            <div className="inner" style={powerSlider} />
                        </div>
                    </div>
                    <p id="display">{this.state.display}</p>
                    <div className="volume-slider">
                        <input
                            max="1"
                            min="0"
                            onChange={this.adjustVolume}
                            step="0.01"
                            type="range"
                            value={this.state.volume}
                        />
                    </div>
                    <div className="control">
                        <p>Bank</p>
                        <div className="select" onClick={this.selectBank}>
                            <div className="inner" style={bankSlider} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DrumMachine;
