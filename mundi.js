const bomboA = [
    {
        "seleccion":"Qatar",
        "confederacion":"AFC"
    },
    {
        "seleccion":"Bélgica",
        "confederacion":"UEFA"
    },
    {
        "seleccion":"Brasil",
        "confederacion":"Conmebol"
    },
    {
        "seleccion":"Francia",
        "confederacion":"UEFA"
    },
    {
        "seleccion":"Argentina",
        "confederacion":"Conmebol"
    },
    {
        "seleccion":"Inglaterra",
        "confederacion":"UEFA"
    },
    {
        "seleccion":"España",
        "confederacion":"UEFA"
    },
    {
        "seleccion":"Portugal",
        "confederacion":"UEFA"
    },
]

const bomboB = [
    {
        "seleccion":"Dinamarca",
        "confederacion":"UEFA"
    },
    {
        "seleccion":"Países Bajos",
        "confederacion":"UEFA"
    },
    {
        "seleccion":"Alemania",
        "confederacion":"UEFA"
    },
    {
        "seleccion":"Suiza",
        "confederacion":"UEFA"
    },
    {
        "seleccion":"Croacia",
        "confederacion":"UEFA"
    },
    {
        "seleccion":"Uruguay",
        "confederacion":"Conmebol"
    },
    {
        "seleccion":"Mexico",
        "confederacion":"Concacaf"
    },
    {
        "seleccion":"Estados Unidos",
        "confederacion":"Concacaf"
    },

]

const bomboC = [
    {
        "seleccion":"Iran",
        "confederacion":"AFC"
    },
    {
        "seleccion":"Japón",
        "confederacion":"AFC"
    },
    {
        "seleccion":"Serbia",
        "confederacion":"UEFA"
    },
    {
        "seleccion":"Corea Del Sur",
        "confederacion":"AFC"
    },
    {
        "seleccion":"Canadá",
        "confederacion":"Concacaf"
    },
    {
        "seleccion":"Polonia",
        "confederacion":"UEFA"
    },
    {
        "seleccion":"Marruecos",
        "confederacion":"CAF"
    },
    {
        "seleccion":"Senegal",
        "confederacion":"CAF"
    },

]

const bomboD = [
    {
        "seleccion":"Arabia Saudita",
        "confederacion":"AFC"
    },
    {
        "seleccion":"Ecuador",
        "confederacion":"Conmebol"
    },
    {
        "seleccion":"Ghana",
        "confederacion":"CAF"
    },
    {
        "seleccion":"Tunez",
        "confederacion":"CAF"
    },
    {
        "seleccion":"Camerún",
        "confederacion":"CAF"
    },
    {
        "seleccion":"Repechaje Perú/Australia-EAU",
        "confederacion":"Conmebol/AFC",
    },
    {
        "seleccion":"Repechaje Nueva Zelanda/Concacaf",
        "confederacion":"Oceanía/Concacaf"
    },
    {
        "seleccion":"Escocia-Ucrania/Gales",
        "confederacion":"UEFA"
    },
]

let grupoA=[]
let grupoB=[]
let grupoC=[]
let grupoD=[]
let grupoE=[]
let grupoF=[]
let grupoG=[]
let grupoH=[]


///Comienzo 
console.log('Sorteo mundial');


function randomizador(bombo){
    return bombo.splice(Math.floor(Math.random()*bombo.length),1)
}



function creaGrupo(grupo){
    grupo.push(randomizador(bomboA));
    grupo.push(randomizador(bomboB));
    grupo.push(randomizador(bomboC));
    grupo.push(randomizador(bomboD));
    return grupo;
};

console.log(creaGrupo(grupoA))
console.log(creaGrupo(grupoB))
console.log(creaGrupo(grupoC))
console.log(creaGrupo(grupoD))
console.log(creaGrupo(grupoE))
console.log(creaGrupo(grupoF))
console.log(creaGrupo(grupoG))
console.log(creaGrupo(grupoH))
