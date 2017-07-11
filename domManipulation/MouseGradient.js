function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', moveOn);
    gradient.addEventListener('mouseout', moveOut);

    function moveOn(event) {
        let move = event.offsetX / (event.target.clientWidth -1);
        move = Math.trunc(move * 100);
        document.getElementById('result').textContent = move + "%";
    }
    function moveOut(event) {
        document.getElementById('result').textContent = '';
    }
}


