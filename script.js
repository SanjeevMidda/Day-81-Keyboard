let keyButton = document.querySelectorAll('.key');
let output = document.querySelector('.text');

for (add of keyButton) {
    add.addEventListener('keypress', boxShadow);
}

function boxShadow(e) {

    switch (e.key) {
        case 'q':
            keyButton[0].classList.toggle('boxShadow');
        
            break;

        case 'w':
            keyButton[1].classList.toggle('boxShadow');
            break;

        case 'e':
            keyButton[2].classList.toggle('boxShadow');
            break;

        case 'r':
            keyButton[3].classList.toggle('boxShadow');
            break;

        case 't':
            keyButton[4].classList.toggle('boxShadow');
            break;

        case 'y':
            keyButton[5].classList.toggle('boxShadow');
            break;

        case 'u':
            keyButton[6].classList.toggle('boxShadow');
            break;

        case 'i':
            keyButton[7].classList.toggle('boxShadow');
            break;

        case 'o':
            keyButton[8].classList.toggle('boxShadow');
            break;

        case 'p':
            keyButton[9].classList.toggle('boxShadow');
            break;

        case 'a':
            keyButton[10].classList.toggle('boxShadow');
            break;

        case 's':
            keyButton[11].classList.toggle('boxShadow');
            break;

        case 'd':
            keyButton[12].classList.toggle('boxShadow');
            break;

        case 'f':
            keyButton[13].classList.toggle('boxShadow');
            break;

        case 'g':
            keyButton[14].classList.toggle('boxShadow');
            break;

        case 'h':
            keyButton[15].classList.toggle('boxShadow');
            break;

        case 'j':
            keyButton[16].classList.toggle('boxShadow');
            break;

        case 'k':
            keyButton[17].classList.toggle('boxShadow');
            break;

        case 'l':
            keyButton[18].classList.toggle('boxShadow');
            break;

        case 'z':
            keyButton[19].classList.toggle('boxShadow');
            break;

        case 'x':
            keyButton[20].classList.toggle('boxShadow');
            break;

        case 'c':
            keyButton[21].classList.toggle('boxShadow');
            break;

        case 'v':
            keyButton[22].classList.toggle('boxShadow');
            break;

        case 'b':
            keyButton[23].classList.toggle('boxShadow');
            break;

        case 'n':
            keyButton[24].classList.toggle('boxShadow');
            break;

        case 'm':
            keyButton[25].classList.toggle('boxShadow');
            break;


    }
}

let body = document.body.addEventListener('keypress', boxShadow);