function focus() {
    let tags = document.getElementsByTagName('input');
    Arrays.from(tags).forEach(element => {
        element.addEventListener('focus', (event) => {
            this.parentNode.className = 'focused';
        });
        element.addEventListener('blur', (event) => {
            this.parentNode.removeAttribute('class');
        });
    });
}
