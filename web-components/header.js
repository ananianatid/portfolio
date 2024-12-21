class Header extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode:'open'})
    }
    connectedCallback() {
        fetch('/web-components/header.html')
            .then(response => response.text())
            .then(html => {
                this.shadowRoot.innerHTML = html
                this.updateContent()
            })
            .catch(error => {
                console.error('Error loading card HTML:', error)
            });
    }


}
customElements.define('wc-header', Header);