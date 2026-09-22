

const kaverit = [];



function lisaa_nimi(event) {
    event.preventDefault();

    const nimi = document.getElementById("tekstikentta").value;

    document.querySelector(".item-list").innerHTML += "<li>" + nimi + "</li>";

    kaverit.push(nimi);


}

function poista_nimi(event) {
    event.preventDefault();

    const nimi = document.getElementById("tekstikentta").value;

    const indeksi = kaverit.indexOf(nimi);

    if (indeksi !== -1) {
        kaverit.splice(indeksi, 1);

        document.querySelector(".item-list").innerHTML = "";

        for (let i = 0; i < kaverit.length; i++) {
            document.querySelector(".item-list").innerHTML += "<li>" + kaverit[i] + "</li>";
        }
    }
}


function jarjesta_nimi(event) {
    event.preventDefault();


    kaverit.sort();

    document.querySelector(".item-list").innerHTML = "";

    for (let i = 0; i < kaverit.length; i++) {
        document.querySelector(".item-list").innerHTML += "<li>" + kaverit[i] + "</li>";
    }


}

document.querySelector("#lisaa-kaveri").addEventListener("click", lisaa_nimi);
document.querySelector("#poista-kaveri").addEventListener("click", poista_nimi);
document.querySelector("#jarjesta-kaverit").addEventListener("click", jarjesta_nimi);