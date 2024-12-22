class Projet extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode:'open'})
    }
    connectedCallback() {
        fetch('../../web-components/projet.html')
            .then(response => response.text())
            .then(html => {
                this.shadowRoot.innerHTML = html
                this.updateContent()
            })
            .catch(error => {
                console.error('Error loading card HTML:', error)
            });
    }
    updateContent() {
        const nameAtt = this.getAttribute('name')
        const imageAtt = this.getAttribute('image')
        const textAtt = this.getAttribute('text');
        const tryAtt = this.getAttribute('try');
        const sourceAtt = this.getAttribute('source');
        const technologyAtt = this.getAttribute('technology');

        const name = this.shadowRoot.querySelector('.name');
        const image = this.shadowRoot.querySelector('.image');
        const text = this.shadowRoot.querySelector('.text');
        const Try = this.shadowRoot.querySelector('.try');
        const source = this.shadowRoot.querySelector('.source');
        const technology = this.shadowRoot.querySelector('.technology');


        name.innerHTML = nameAtt
        image.style.backgroundImage = `url(${imageAtt})`;

        text.innerHTML = textAtt

        if(tryAtt !==''){
            Try.setAttribute('href',tryAtt)
        } else {
            Try.style.display = "none"
        }
        if(sourceAtt !==''){
            source.setAttribute('href',sourceAtt)
        } else {
            source.style.display = "none"
        }
        
        
        let technologyAttsplited = technologyAtt.split(',')

        technologyAttsplited.forEach(techno =>{
            let p = document.createElement('p')
            p.className = techno
            p.innerHTML = techno
            technology.appendChild(p)
        })


    }

}
customElements.define('wc-projet', Projet);