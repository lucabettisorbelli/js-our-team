// array di oggetti "membri"

const membri = [
    { nome:"Wayne Barnett",	ruolo: "Founder & CEO",	foto: "wayne-barnett-founder-ceo.jpg"},
    { nome:"Angela Caroll",	ruolo: "Chief Editor",	foto: "angela-caroll-chief-editor.jpg"},
    { nome:"Walter Gordon",	ruolo: "Office Manager",	foto: "walter-gordon-office-manager.jpg"},
    { nome:"Angela Lopez",	ruolo: "Social Media Manager",	foto: "angela-lopez-social-media-manager.jpg"},
    { nome:"Scott Estrada",	ruolo: "Developer",	foto: "scott-estrada-developer.jpg"},
    { nome:"Barbara Ramos",	ruolo: "Graphic Designer",	foto: "barbara-ramos-graphic-designer.jpg"}
]

// console.log(membri);



//console.log proprietà singole


const container = document.querySelector(".container");

for (let i = 0; i < membri.length; i++) {

    let membro = membri[i];
    
    console.log(`Nome: ${membro.nome}, Ruolo: ${membro.ruolo}, Foto: ${membro.foto}`);

    const membroDom = document.createElement("p");
    membroDom.innerText = `Nome: ${membro.nome}, Ruolo: ${membro.ruolo}, Foto: ${membro.foto}`;
    container.appendChild(membroDom);
    membroDom.style.textAlign = "center";
}
