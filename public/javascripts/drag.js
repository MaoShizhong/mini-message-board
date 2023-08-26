const messages = document.querySelectorAll('.message');

messages.forEach((message) => {
    message.ondragstart = () => false;
    message.addEventListener('mousedown', handleDragStart);
});

function handleDragStart(e) {
    const message = e.currentTarget;

    const shiftX = e.clientX - message.getBoundingClientRect().left;
    const shiftY = e.clientY - message.getBoundingClientRect().top;

    message.style.zIndex = 1000;
    document.body.append(message);

    moveAt(e.pageX, e.pageY);

    // moves the ball at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
        message.style.left =
            pageX - shiftX > 0 ? `min(${pageX - shiftX + 'px'}, 100% - min(15rem, 50vw))` : 0;
        message.style.top =
            pageY - shiftY > 0 ? `min(${pageY - shiftY + 'px'}, 100svh - 10rem)` : 0;
    }

    function handleMouseMove(e) {
        moveAt(e.pageX, e.pageY);
    }

    // move the ball on mousemove
    document.addEventListener('mousemove', handleMouseMove);

    // drop the ball, remove unneeded handlers
    message.onmouseup = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        message.onmouseup = null;
    };

    // drop if mouse leaves
    document.onmouseleave = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.onmouseleave = null;
        message.onmouseup = null;
    };
}
