const liste = ["./img/tas.png", "./img/kağit.png", "./img/makas.png"];

let tas = document.getElementById("tas");//RadioButton
let kagit = document.getElementById("kagit");//RadioButton
let makas = document.getElementById("makas");//RadioButton
let tasİmage = document.getElementById("tasİmage");//İmage
let kagitİmage = document.getElementById("kagitİmage");//İmage
let makasİmage = document.getElementById("makasİmage");//İmage

let machineSecim = document.getElementById("machineSecim");//İmage

let skorM = document.getElementById("skorM");//Span
let skorP = document.getElementById("skor");//Span

let bilgi = document.getElementById("info");//h4

let round = document.getElementById("round");//h3

tas.onclick = secimYap;
kagit.onclick = secimYap;
makas.onclick = secimYap;





function secimYap() {
    let machine = RastgeleKagit();//Rastgele machineye seçim

    let roundSayi = parseInt(round.innerHTML);//Round her basıldığında 1 artıyor
    roundSayi += 1;
    round.innerHTML = roundSayi;

    let skorPlayer = parseInt(skorP.innerHTML);
    let skorMachine = parseInt(skorM.innerHTML);

    let secim = this.dataset.id;//Basılan nesnenin data id alıyoruz.

    if (secim == 0) {//Player taş ise 
        kagit.style.display = "none";
        makas.style.display = "none";
        kagitİmage.style.opacity = "0";
        makasİmage.style.opacity = "0";
        kagitİmage.style.cursor = "default";
        makasİmage.style.cursor = "default";

        setTimeout(function () {
            kagitİmage.style.opacity = "1";
            makasİmage.style.opacity = "1";
            kagitİmage.style.cursor = "pointer";
            makasİmage.style.cursor = "pointer";
        }, 2000)


        if (machine == 0) {//Player ve Machine taş ise
            bilgi.innerHTML = "BERABERE";

            setTimeout(function () {
                bilgi.innerHTML = "";
            }, 2000)
        }
        else if (machine == 1) {//Player taş Machine kağıt ise
            skorMachine += 1;
            skorM.innerHTML = skorMachine;
            skorPlayer -= 1;
            skorP.innerHTML = skorPlayer;
        }
        else if (machine == 2) {//Player taş Machine makas ise
            skorMachine -= 1;
            skorM.innerHTML = skorMachine;
            skorPlayer += 1;
            skorP.innerHTML = skorPlayer;
        }
    }



    else if (secim == 1) {//Player Kağıt ise 
        tas.style.display = "none";
        makas.style.display = "none";
        tasİmage.style.opacity = "0";
        makasİmage.style.opacity = "0";
        tasİmage.style.cursor = "default";
        makasİmage.style.cursor = "default";

        setTimeout(function () {
            tasİmage.style.opacity = "1";
            makasİmage.style.opacity = "1";
            tasİmage.style.cursor = "pointer";
            makasİmage.style.cursor = "pointer";
        }, 2000)


        if (machine == 0) {//Machine taş ise
            skorMachine -= 1;
            skorM.innerHTML = skorMachine;
            skorPlayer += 1;
            skorP.innerHTML = skorPlayer;
        }
        else if (machine == 1) {//Machine kağıt ise
            bilgi.innerHTML = "BERABERE";

            setTimeout(function () {
                bilgi.innerHTML = "";
            }, 2000)
        }
        else if (machine == 2)//Machine makas ise
        {
            skorMachine += 1;
            skorM.innerHTML = skorMachine;
            skorPlayer -= 1;
            skorP.innerHTML = skorPlayer;
        }
    }




    else if (secim == 2) {//Player Makas ise
        tas.style.display = "none";
        kagit.style.display = "none";
        tasİmage.style.opacity = "0";
        kagitİmage.style.opacity = "0";
        tasİmage.style.cursor = "default";
        kagitİmage.style.cursor = "default";

        setTimeout(function () {
            tasİmage.style.opacity = "1";
            kagitİmage.style.opacity = "1";
            tasİmage.style.cursor = "pointer";
            kagitİmage.style.cursor = "pointer";
        }, 2000)

        if (machine == 0) {//Machine taş ise
            skorMachine += 1;
            skorM.innerHTML = skorMachine;
            skorPlayer -= 1;
            skorP.innerHTML = skorPlayer;
        }
        else if (machine == 1) {//Machine kağıt ise
            skorMachine -= 1;
            skorM.innerHTML = skorMachine;
            skorPlayer += 1;
            skorP.innerHTML = skorPlayer;
        }
        else if (machine == 2)//Machine makas ise
        {
            bilgi.innerHTML = "BERABERE";

            setTimeout(function () {
                bilgi.innerHTML = "";
            }, 2000)
        }
    }
}




function RastgeleKagit() {
    let sayi = Math.round(Math.random() * 2);
    machineSecim.src = liste[sayi];
    return sayi;
}

function Restart() {
    round.innerHTML = 0;
    skorM.innerHTML = 0;
    skorP.innerHTML = 0;
    bilgi.innerHTML = "";

    tasİmage.style.opacity = "1";
    kagitİmage.style.opacity = "1";
    makasİmage.style.opacity = "1";

    tasİmage.style.cursor = "pointer";
    kagitİmage.style.cursor = "pointer";
    makasİmage.style.cursor = "pointer";
}
