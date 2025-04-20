const igeversek=[
    {
        kulcsszo:"ellenség",
        ige:"Ha tehát éhezik a te ellenséged, adj ennie; ha szomjazik, adj innia; mert ha ezt cselekszed eleven szenet gyűjtesz a fejére."
    },
    {
        kulcsszo:"bánat",
        ige:"Boldogak a szomorkodók, mert ők megvigasztaltatnak"
    },
    {
        kulcsszo:"kísértés",
        ige:"Vigyázzatok és imádkozzatok, hogy kísértésbe ne essetek; ha a lélek kész is, de a test erőtelen"
    }
]

function igevers_keresés(){
    const input=document.getElementById("kérdés").value.toLowerCase().trim();
    let eredmény=null
    for(let i=0;i<igeversek.length;i++){
        if (input.includes(igeversek[i].kulcsszo)){
            eredmény=igeversek[i];
            break
        }
    }
    const válasz=document.getElementById("válasz")

    if(eredmény){
        válasz.textContent=eredmény.ige
    }else{
        válasz.textContent="Sajnos nem tudok válaszolni"
    }
}