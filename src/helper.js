
export function getTickDistancesMap(labels, axisType = "x") {
    const ticks = document.getElementsByClassName("tick");
    let output = {};
    for (let obj of ticks) {
        if (labels.includes(obj.__data__)) {
            output[obj.__data__] = obj.attributes.transform.textContent;
        }
    }
    Object.keys(output).forEach((key) => {
        if (axisType === "y") {
            output[key] = Number(
                output[key].replace("translate(0,", "").replace(")", "")
            );
        } else if (axisType === "x") {
            output[key] = Number(
                output[key].replace("translate(", "").replace(",0)", "")
            );
        }
    });
    return output;
}

export function convertNumber(valuearg) {
    let value = valuearg;
    if (value < 0) {
        //Handling the negative values
        value = value * -1;
    }
    if (value >= 1000000000) {
        value = value / 1000000000;
        value = value % 1 !== 0 ? value.toFixed(2) + "B" : value + "B";
    } else if (value >= 1000000) {
        value = value / 1000000;
        value = value % 1 !== 0 ? value.toFixed(2) + "M" : value + "M";
    } else if (value >= 1000) {
        value = value / 1000;
        value = value % 1 !== 0 ? value.toFixed(2) + "K" : value + "K";
    } else if (value < 1000) {
        value = value % 1 !== 0 ? value : value;
    }

    if (valuearg < 0) {
        //Handling the negative values
        value = "-" + value;
    }
    return value;
}
