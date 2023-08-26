function randomColour() {
    const [red, green, blue] = [
        ~~(Math.random() * 255),
        ~~(Math.random() * 255),
        ~~(Math.random() * 255),
    ];

    const fontColor = shouldMakeFontBlack(red, green, blue) ? 'black' : 'white';

    return {
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        fontColor: fontColor,
    };
}

function shouldMakeFontBlack(red, green, blue) {
    return red * 0.299 + green * 0.587 + blue * 0.114 > 155;
}

function randomPosition() {
    const top = ~~(Math.random() * 85);
    const right = ~~(Math.random() * 85);

    return { top: `${top}%`, right: `${right}%` };
}

module.exports = {
    randomColour,
    randomPosition,
};
