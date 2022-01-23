(function () {

    const link = document.querySelectorAll('body > .ex-hover');
    const UserCursor = document.querySelector('.UserCursor');

    const animateit = function (e) {
        const a = this.querySelector('a');
        const { offsetX: x, offsetY: y } = e,
            { offsetWidth: width, offsetHeight: height } = this,

            move = 25,
            xMove = x / width * (move * 2) - move,
            yMove = y / height * (move * 2) - move;

        a.style.transform = `translate(${xMove}px, ${yMove}px)`;

        if (e.type === 'mouseleave') a.style.transform = '';
    };

    const editUserCursor = e => {
        const { clientX: x, clientY: y } = e;
        UserCursor.style.left = x + 'px';
        UserCursor.style.top = y + 'px';
    };

    link.forEach(b => b.addEventListener('mousemove', animateit));
    link.forEach(b => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editUserCursor);

})();