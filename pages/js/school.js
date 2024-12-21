const circles = document.querySelectorAll('.circle')
const progressbar = document.querySelector('.indicator')
const buttons = document.querySelectorAll('.buttons button')
const display = document.querySelector('.display')

const diplomes = [
    {
        titre: "venue au monde",
        lieu: "Lomé, Togo",
        anneeDebut: "2005",
    },{
        titre: "CEPD (Certificat d'Étude du Premier Degré)",
        lieu: "Lomé, Togo",
        anneeDebut: "2008-2016",
        
    },
    {
        titre: "BEPC (Brevet d'Étude du Premier Cycle)",

        lieu: "Lomé, Togo",
        anneeDebut: "2016-2020",
        
    },
    {
        titre: "Certification OPEM A",
        description: "Conception d'un portail à ouverture automatique avec arduino",
        lieu: "Lomé, Togo",
        anneeDebut: "2021-2022",
        
        
    },
    {
        titre: "Baccalauréat série D (Certificat d'Étude du Premier Degré)",
        lieu: "Lomé, Togo",
        anneeDebut: "2020-2023",
    },
    {
        titre: "Certification OPEM B",
        description: "Conception d'une maison à éclairage contrôlé par Bluetooth avec arduino",
        lieu: "Lomé, Togo",
        anneeDebut: "2022-2023",
    }
];

//console.log(diplomes);


let currentStep = 1;
//console.log(buttons);
//console.log(buttons[0], buttons[1]);

//onsole.log(circles,progressbar,buttons)

const updateSteps = (e)=>{
    currentStep = e.target.id === "next" ? ++currentStep : --currentStep
    console.log(currentStep)
    circles.forEach((circle,index) =>{
        circle.classList[`${index < currentStep ? "add" : "remove" }`]("active")
    })
    display.innerHTML =''
    const currentDiplome = diplomes[currentStep - 1]; 
    for (let key in currentDiplome) {
        if (currentDiplome.hasOwnProperty(key)) { 
            
            const p = document.createElement('p');
            p.innerHTML = `${currentDiplome[key]}`;
            display.appendChild(p); 
        }
    }
    
    progressbar.style.width = `${((currentStep -1)/(circles.length-1))*100}%`

    if(currentStep === circles.length){
        buttons[1].disabled = true
    } else if (currentStep === 1){
        buttons[0].disabled = true
    } else {
        buttons.forEach((button)=> (button.disabled = false) )
    }
        
}

buttons.forEach(button=>{
    button.addEventListener("click", updateSteps)
})