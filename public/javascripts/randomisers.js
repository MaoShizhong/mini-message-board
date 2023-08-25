function randomColour() {
    const [red, green, blue] = [0, 1, 2].map((el) => ~~(Math.random() * 255));
    console.log(red, green, blue);
    const fontColor = makeFontBlack(red, green, blue) ? 'black' : 'white';

    return { backgroundColor: `rgb(${red}, ${green}, ${blue})`, fontColor: fontColor };
}

function makeFontBlack(red, green, blue) {
    return red * 0.299 + green * 0.587 + blue * 0.114 > 155;
}

function randomPosition() {
    const top = ~~(Math.random() * 90);
    const right = ~~(Math.random() * 90);

    return { top: `${top}%`, right: `${right}%` };
}

module.exports = {
    randomColour,
    randomPosition,
};
