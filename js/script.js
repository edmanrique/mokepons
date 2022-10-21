let myHearts = 3;
let enemyHearts = 3;

let playerDefense = false;
let enemyDefense = false;

let playerElement;
let enemyElement;

let sectionElements = document.getElementById('elements');
let sectionChoosing = document.getElementById('choosing');
let sectionMovements = document.getElementById('movements');
let sectionMessages = document.getElementById('messages');
let sectionResult = document.getElementById('result');

startGame()

function startGame() {

    sectionChoosing.style.display = 'none';
    sectionMovements.style.display = 'none';
    sectionMessages.style.display = 'none';
    sectionResult.style.display = 'none';

    let btnAttack = document.getElementById('movements__bt-attack');
    let btnDefense = document.getElementById('movements__bt-defense');
    let btnHealing = document.getElementById('movements__bt-healing');
    let btRestart = document.getElementById('result__bt-restart');
    let btFire = document.getElementById('btFire');
    let btWater = document.getElementById('btWater');
    let btEarth = document.getElementById('btEarth');
    let btPet1 = document.getElementById('btPet1');
    let btPet2 = document.getElementById('btPet2');

    btnHealing.disabled = true;

    btnAttack.addEventListener('click', attack);
    btnDefense.addEventListener('click', defense);
    btnHealing.addEventListener('click', healing);
    btRestart.addEventListener('click', restartGame);
    btFire.addEventListener('click', setFire);
    btWater.addEventListener('click', setWater);
    btEarth.addEventListener('click', setEarth);
    btPet1.addEventListener('click', selectPlayerPet1);
    btPet2.addEventListener('click', selectPlayerPet2);
}

/*
The logic in the next function could be confuse. So, let's explain it.
First, we define that we will round a number to the floor, so, 4.1 is 4 and 4.9 is 4 too.
Then, we call Math.random() function, that returns a number between 0 and 0.9.
We multiply the result of Math.random by the subtraction of the max limit minus the min limit plus 1.
Finally, we add it to the min limit.

For example; '0.25 * (10 - 5 + 1) + 5'

So, why we need to add 1 to the subtraction between the parenthesis? The key is thinking in the max limit.
If we make the calculations, if we skip that addition, we'll never get the max number, because
the function doesn't return 1 never.
*/

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getInterval(n1, n2) {
    if (Math.random() < 0.5) {
        return n1;
    } else {
        return n2;
    }
}

function setFire() {
    let pet1 = document.getElementById('choosing__pet__name1');
    let pet2 = document.getElementById('choosing__pet__name2');

    pet1.innerHTML = 'Kailamor';
    pet2.innerHTML = 'Ratigueya';

    sectionElements.style.display = 'none';
    sectionChoosing.style.display = 'flex';

    let btPet1 = document.getElementById('btPet1');
    btPet1.innerHTML = '<img src="./images/Kailamor.png" alt="">';

    let btPet2 = document.getElementById('btPet2');
    btPet2.innerHTML = '<img src="./images/Ratigueya.png" alt="">';

    player_element = 'Fire';
}

function setWater() {
    let pet1 = document.getElementById('choosing__pet__name1');
    let pet2 = document.getElementById('choosing__pet__name2');

    pet1.innerHTML = 'Hipodoge';
    pet2.innerHTML = 'Suggles';

    sectionElements.style.display = 'none';
    sectionChoosing.style.display = 'flex';

    let btPet1 = document.getElementById('btPet1');
    btPet1.innerHTML = '<img src="./images/Hipodoge.jpg" alt="">';

    let btPet2 = document.getElementById('btPet2');
    btPet2.innerHTML = '<img src="./images/Suggles.jpg" alt="">';

    btPet1.style.backgroundImage = 'linear-gradient(to top, #6ae6ff 0%, #0877ff 100%)';
    btPet2.style.backgroundImage = 'linear-gradient(to top, #6ae6ff 0%, #0877ff 100%)';

    player_element = 'Water';
}

function setEarth() {
    let pet1 = document.getElementById('choosing__pet__name1');
    let pet2 = document.getElementById('choosing__pet__name2');

    pet1.innerHTML = 'Capipepo';
    pet2.innerHTML = 'Todd';

    sectionElements.style.display = 'none';
    sectionChoosing.style.display = 'flex';

    let btPet1 = document.getElementById('btPet1');
    btPet1.innerHTML = '<img src="./images/Capipepo.png"  alt="">';

    let btPet2 = document.getElementById('btPet2');
    btPet2.innerHTML = '<img src="./images/Todd.png"  alt="">';

    btPet1.style.backgroundImage = 'linear-gradient(to top, #b7ff8a 0%, #008409 100%)';
    btPet2.style.backgroundImage = 'linear-gradient(to top, #b7ff8a 0%, #008409 100%)';

    player_element = 'Earth';
}

function selectPlayerPet1() {
    sectionChoosing.style.display = 'none';

    sectionMovements.style.display = 'flex';
    sectionMessages.style.display = 'flex';

    let img = document.getElementById('player__image');

    let btPet1 = document.getElementById('btPet1');

    let selectedPet;

    switch (btPet1.innerHTML) {
        case '<img src="./images/Kailamor.png" alt="">':
            selectedPet = 'Kailamor';
            playerElement = 'Fire';
            img.setAttribute('src', './images/Kailamor.png');
            break;
        case '<img src="./images/Hipodoge.jpg" alt="">':
            selectedPet = 'Hipodoge';
            playerElement = 'Water';
            img.setAttribute('src', './images/Hipodoge.jpg');
            break;
        case '<img src="./images/Capipepo.png" alt="">':
            selectedPet = 'Capipepo';
            playerElement = 'Earth';
            img.setAttribute('src', './images/Capipepo.png');
            break;
    }

    let petName = document.getElementById('movements__my-pet--name');
    petName.innerHTML = selectedPet;

    let petHealth = document.getElementById('movements__my-pet--health');
    petHealth.innerHTML = '';
    for (let x = 0; x < myHearts; x++) {
        petHealth.innerHTML += '❤️';
    }
    selectEnemyPet(selectedPet);
}

function selectPlayerPet2() {
    sectionChoosing.style.display = 'none';

    sectionMovements.style.display = 'flex';
    sectionMessages.style.display = 'flex';

    let img = document.getElementById('player__image');

    let btPet2 = document.getElementById('btPet2');

    let selectedPet;

    switch (btPet2.innerHTML) {
        case '<img src="./images/Ratigueya.png" alt="">':
            selectedPet = 'Ratigueya';
            playerElement = 'Fire'
            img.setAttribute('src', './images/Ratigueya.png')
            break;
        case '<img src="./images/Suggles.jpg" alt="">':
            selectedPet = 'Suggles'
            playerElement = 'Water'
            img.setAttribute('src', './images/Suggles.jpg')
            break;
        case '<img src="./images/Todd.png" alt="">':
            selectedPet = 'Todd'
            playerElement = 'Earth'
            img.setAttribute('src', './images/Todd.png')
            break;
    }

    let petName = document.getElementById('movements__my-pet--name')
    petName.innerHTML = selectedPet;

    let petHealth = document.getElementById('movements__my-pet--health');
    petHealth.innerHTML = ''
    for (let x = 0; x < myHearts; x++) {
        petHealth.innerHTML += '❤️';
    }
    selectEnemyPet(selectedPet);
}

function selectEnemyPet(playerPet) {
    let n = getRandom(1, 6);
    let pet = '';

    let img = document.getElementById('enemy__image');

    switch (n) {
        case 1:
            pet = 'Hipodoge';
            enemyElement = 'Water'
            img.setAttribute('src', './images/Hipodoge.jpg')
            break;
        case 2:
            pet = 'Suggles';
            enemyElement = 'Water'
            img.setAttribute('src', './images/Suggles.jpg')
            break;
        case 3:
            pet = 'Capipepo';
            enemyElement = 'Earth'
            img.setAttribute('src', './images/Capipepo.png')
            break;
        case 4:
            pet = 'Todd';
            enemyElement = 'Earth'
            img.setAttribute('src', './images/Todd.png')
            break;
        case 5:
            pet = 'Ratigueya';
            enemyElement = 'Fire'
            img.setAttribute('src', './images/Ratigueya.png')
            break;
        case 6:
            pet = 'Kailamor';
            enemyElement = 'Fire'
            img.setAttribute('src', './images/Kailamor.png')
            break;
    }

    if (pet == playerPet) {
        return selectEnemyPet(playerPet);
    }

    let petName = document.getElementById('movements__enemy-pet--name');
    petName.innerHTML = pet;

    let petHealth = document.getElementById('movements__enemy-pet--health');
    petHealth.innerHTML = '';

    for (let x = 0; x < enemyHearts; x++) {
        petHealth.innerHTML += '❤️';
    }

    selectMovement(1);
}

function selectMovement(type) {
    if (type == 1) {
        if (playerElement == 'Fire') {
            setPlayerMovement('Burning flames', 'Wallfire', 'Pyrohealth');
        } else if (playerElement == 'Water') {
            setPlayerMovement('Tsunami', 'Frosty', 'Relax waves');
        } else if (playerElement == 'Earth') {
            setPlayerMovement('Earthquake', 'Eternal mountains', 'Magic herbs');
        }
    } else {
        defineEnemyMovement();
    }
}

function setPlayerMovement(attack, defense, healing) {
    let btMovement1 = document.getElementById('movements__bt-attack');
    let btMovement2 = document.getElementById('movements__bt-defense');
    let btMovement3 = document.getElementById('movements__bt-healing');

    btMovement1.innerHTML = attack;
    btMovement2.innerHTML = defense;
    btMovement3.innerHTML = healing;
}

function defineEnemyMovement() {
    if (enemyHearts < 3 && !enemyDefense) {
        movement = getRandom(1, 3);
        console.log(1)
    } else if (enemyHearts == 3 && enemyDefense) {
        movement = 1;
        console.log(2)
    } else if (enemyHearts == 3 && !enemyDefense) {
        movement = getRandom(1, 2);
        console.log(3)
    } else if (enemyHearts < 3 && enemyDefense) {
        movement = getInterval(1, 3);
        console.log(4)
    } else {
        movement = getRandom(1, 3);
        console.log(0)
    }

    if (enemyElement == 'Fire') {
        setEnemyMovement(movement, 'Burning flames', 'Wallfire', 'Pyrohealth')
    } else if (enemyElement == 'Water') {
        setEnemyMovement(movement, 'Tsunami', 'Frosty', 'Relax waves')
    } else if (enemyElement == 'Earth') {
        setEnemyMovement(movement, 'Earthquake', 'Eternal mountains', 'Magic herbs')
    }

}

function setEnemyMovement(movement, attack, defense, healing) {
    switch (movement) {
        case 1:
            if (!playerDefense) {
                myHearts--;
            }
            playerDefense = false;
            updatePetHearts();
            AddMovement(attack, 2)
            checkWinner()
            break;
        case 2:
            enemyDefense = true;
            AddMovement(defense, 2)
            updatePetHearts()
            break;
        case 3:
            enemyHearts = 3;
            updatePetHearts()
            AddMovement(healing, 2)
    }
}

function attack() {
    AddMovement(document.getElementById('movements__bt-attack').innerHTML, 1)
    if (!enemyDefense) {
        enemyHearts--;
    }
    enemyDefense = false;
    updatePetHearts();
    if (!checkWinner()) {
        selectMovement(getPetName(2), 2)
    }
}

function defense() {
    let bt = document.getElementById('movements__bt-defense');
    bt.disabled = true;

    playerDefense = true;
    updatePetHearts()
    AddMovement(document.getElementById('movements__bt-defense').innerHTML, 1)
    selectMovement(getPetName(2), 2)
}

function healing() {
    let bt = document.getElementById('movements__bt-healing');
    bt.disabled = true;

    myHearts = 3;
    updatePetHearts()
    AddMovement(document.getElementById('movements__bt-healing').innerHTML, 1)
    selectMovement(getPetName(2), 2)
}

function AddMovement(movement, type) {
    let btDefense = document.getElementById('movements__bt-defense');
    let btHealing = document.getElementById('movements__bt-healing');

    if (playerDefense) {
        btDefense.disabled = true;
    } else {
        btDefense.disabled = false;
    }

    if (myHearts == 3) {
        btHealing.disabled = true;
    } else {
        btHealing.disabled = false;
    }

    let section = document.getElementById('messages')
    let paragraph = document.createElement('p')

    if (type == 1) {
        paragraph.innerHTML = getPetName(1) + ' uses ' + movement;
    } else if (type == 2) {
        paragraph.innerHTML = getPetName(2) + ' uses ' + movement;
    }

    section.appendChild(paragraph)
}

function updatePetHearts() {
    myPet = document.getElementById('movements__my-pet--health');
    enemyPet = document.getElementById('movements__enemy-pet--health');

    myPet.innerHTML = ''
    enemyPet.innerHTML = ''

    if (playerDefense || enemyDefense) {

        for (let x = 0; x < myHearts; x++) {
            myPet.innerHTML += '❤️';
        }

        if (playerDefense) {
            myPet.innerHTML += '💛';
        }

        for (let x = 0; x < enemyHearts; x++) {
            enemyPet.innerHTML += '❤️';
        }

        if (enemyDefense) {
            enemyPet.innerHTML += '💛';
        }
    } else {
        for (let x = 0; x < myHearts; x++) {
            myPet.innerHTML += '❤️';
        }

        for (let x = 0; x < enemyHearts; x++) {
            enemyPet.innerHTML += '❤️';
        }
    }
}

function checkWinner() {
    let section = document.getElementById('messages')
    let paragraph = document.createElement('p')
    let rMessage = document.getElementById('result__message')

    let btnAttack = document.getElementById('movements__bt-attack');
    let btnDefense = document.getElementById('movements__bt-defense');
    let btnHealing = document.getElementById('movements__bt-healing');

    if (myHearts == 0) {
        sectionMovements.style.display = 'none'
        sectionResult.style.display = 'block'

        rMessage.innerHTML = 'Sorry! You lose'

        paragraph.innerHTML = getPetName(2) + ' wins.';
        section.appendChild(paragraph)

        btnAttack.disabled = true;
        btnDefense.disabled = true;
        btnHealing.disabled = true;

        return true;
    } else if (enemyHearts == 0) {
        sectionMovements.style.display = 'none'
        sectionResult.style.display = 'block'

        rMessage.innerHTML = 'Congratulations! You win'

        paragraph.innerHTML = getPetName(1) + ' wins.';
        section.appendChild(paragraph)

        btnAttack.disabled = true;
        btnDefense.disabled = true;
        btnHealing.disabled = true;

        return true;
    }
}

function getPetName(type) {
    if (type == 1) {
        return document.getElementById('movements__my-pet--name').innerHTML
    } else {
        return document.getElementById('movements__enemy-pet--name').innerHTML
    }
}

function restartGame() {
    location.reload()
}

// window.addEventListener('load', startGame);