
import { Dispatch, SetStateAction } from "react";

type Props = {
    go: string;
    steGo: Dispatch<SetStateAction<string>>;
    id: number
    calls: string[];
    setClalls: Dispatch<SetStateAction<string[]>>
    call: string;
    winnMassage: string
}
const Call = ({ id, go, steGo, calls, setClalls, call, winnMassage }: Props) => {
    if (winnMassage) {
        return (
            <div className="square">
                <div className={call}>{call ? (call === "Circle" ? "O" : "X") : ""}</div>
            </div>
        )
    }

    const handleClick = () => {
        const taken = !calls[id];
        if (taken) {
            if (go === "Circle") {
                handleCellChange("Circle");
                steGo("Cross");
            } else if (go === "Cross") {
                handleCellChange("Cross");
                steGo("Circle");
            }
        }
    };

    const handleCellChange = (cellToChange: string) => {
        const copyCells = [...calls];
        copyCells[id] = cellToChange;
        setClalls(copyCells);
    };

    return (
        <div className="square" onClick={handleClick}>
            <div className={call}>{call ? (call === "Circle" ? "O" : "X") : ""}</div>
        </div>
    );
};

export default Call;
