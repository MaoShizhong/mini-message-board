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
    const top = ~~(Math.random() * 90);
    const left = ~~(Math.random() * 90);

    return {
        top: `min(${top}%, 100svh - 10rem)`,
        left: `min(${left}%, 100% - min(15rem, 50vw))`,
    };
}

module.exports = {
    randomColour,
    randomPosition,
};
