

const kaverit = [];



function lisaa_nimi(event) {
    event.preventDefault();

    const nimi = document.getElementById("tekstikentta").value;
    kaverit.push(nimi);


}



function poista_nimi(event) {
    event.preventDefault();


    const nimi = document.getElementById("tekstikentta").value;
    for (let i=0; i < kaverit.length; i++)

        kaverit.indexOf(nimi);

    console.log(kaverit);
    
}



document.querySelector("form").addEventListener("submit", lisaa_nimi);

document.querySelector("form").addEventListener("submit", poista_nimi);