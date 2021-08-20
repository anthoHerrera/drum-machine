
import DrumPad from "./DrumPad";

const BankPad = (props) => {
    return (
        <div id="bankPad">
            {props.currentBank.map((drumKey, idx) => (
                <DrumPad
                    key={idx}
                    clipId={drumKey.id}
                    src={drumKey.url}
                    keyCode={drumKey.keyCode}
                    keyTrigger={drumKey.keyTrigger}
                    power={props.power}
                    updateDisplay={props.updateDisplay}
                />
            ))}
        </div>
    );
};

export default BankPad;
