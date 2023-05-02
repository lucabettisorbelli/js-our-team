// array di oggetti "membri"

const membri = [
    { nome:"Wayne Barnett",	ruolo: "Founder & CEO",	foto: "wayne-barnett-founder-ceo.jpg"},
    { nome:"Angela Caroll",	ruolo: "Chief Editor",	foto: "angela-caroll-chief-editor.jpg"},
    { nome:"Walter Gordon",	ruolo: "Office Manager",	foto: "walter-gordon-office-manager.jpg"},
    { nome:"Angela Lopez",	ruolo: "Social Media Manager",	foto: "angela-lopez-social-media-manager.jpg"},
    { nome:"Scott Estrada",	ruolo: "Developer",	foto: "scott-estrada-developer.jpg"},
    { nome:"Barbara Ramos",	ruolo: "Graphic Designer",	foto: "barbara-ramos-graphic-designer.jpg"}
]

//console.log proprietà singole

const container = document.querySelector(".container");

// for (let i = 0; i < membri.length; i++) {

//     let membro = membri[i];    

//     const membroDom = document.createElement("p");
//     membroDom.innerText = `Nome: ${membro.nome}, Ruolo: ${membro.ruolo}, Foto: ${membro.foto}`;
//     container.appendChild(membroDom);
//     membroDom.style.textAlign = "center";
// }




for (let i = 0; i < membri.length; i++) {
    
    
    let membro = membri[i];
    
    console.log(`Nome: ${membro.nome}, Ruolo: ${membro.ruolo}, Foto: ${membro.foto}`);

    // crea un div per ogni proprietà
    const membroDiv = document.createElement("div");

    const nomeMembro = document.createElement("p");
    nomeMembro.textContent = `Nome: ${membro.nome}`;
    membroDiv.appendChild(nomeMembro);

    const ruoloMembro = document.createElement("p");
    ruoloMembro.textContent = `Ruolo: ${membro.ruolo}`;
    membroDiv.appendChild(ruoloMembro);

    const fotoImg = document.createElement("img");
    fotoImg.src = `img/${membro.foto}`;
    membroDiv.appendChild(fotoImg);

    container.appendChild(membroDiv);
}