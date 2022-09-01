let myHearts = 3;
let enemyHearts = 3;

let playerDefense = false;
let enemyDefense = false;

let sectionChoosing = document.getElementById('choosing');
let sectionMovements = document.getElementById('movements');
let sectionMessages = document.getElementById('messages');
let sectionResult = document.getElementById('result');

startGame()

function startGame() {

    sectionMovements.style.display = 'none'
    sectionMessages.style.display = 'none'
    sectionResult.style.display = 'none'

    let btSelectPet = document.getElementById('choosing__button');
    let btnAttack = document.getElementById('movements__bt-attack');
    let btnDefense = document.getElementById('movements__bt-defense');
    let btnHealing = document.getElementById('movements__bt-healing');
    let btRestart = document.getElementById('result__bt-restart');

    btnHealing.disabled = true;

    btSelectPet.addEventListener('click', selectPlayerPet);
    btnAttack.addEventListener('click', attack);
    btnDefense.addEventListener('click', defense);
    btnHealing.addEventListener('click', healing);
    btRestart.addEventListener('click', restartGame);
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function getInterval(n1, n2) {
    if(Math.random() < 0.5){
        return n1;
    } else {
        return n2;
    }
}

function selectPlayerPet() {
    sectionChoosing.hidden = true;
    sectionMovements.style.display = 'block'
    sectionMessages.style.display = 'block'

    let pet = document.getElementById('choosing__select');
    let selectedPet = pet.options[pet.selectedIndex].text;

    let petName = document.getElementById('movements__my-pet--name')
    petName.innerHTML = selectedPet;

    let petHealth = document.getElementById('movements__my-pet--health');
    petHealth.innerHTML = ''
    for(let x = 0; x < myHearts; x++){
        petHealth.innerHTML += '❤️';
    }

    selectEnemyPet(selectedPet);
}

function selectEnemyPet(playerPet) {
    let n = getRandom(1, 8);
    let pet = ''

    switch (n) {
        case 1:
            pet = 'Hipodoge 💧';
            break;
        case 2:
            pet = 'Suggles 💧';
            break;
        case 3:
            pet = 'Capipepo 🌱';
            break;
        case 4:
            pet = 'Todd 🌱';
            break;
        case 5:
            pet = 'Ratigueya 🔥';
            break;
        case 6:
            pet = 'Kailamor 🔥';
            break;
        case 7:
            pet = 'Tucapalma 💧🌱';
            break;
        case 8:
            pet = 'Pydos 🌱🔥';
            break;
    }

    if (pet == playerPet) {
        return selectEnemyPet(playerPet);
    }

    let petName = document.getElementById('movements__enemy-pet--name');
    petName.innerHTML = pet;

    let petHealth = document.getElementById('movements__enemy-pet--health');
    petHealth.innerHTML = '';

    for(let x = 0; x < enemyHearts; x++){
        petHealth.innerHTML += '❤️';
    }

    selectMovement(playerPet, 1);
}

function selectMovement(player, type) {
    let firstElement = player.substr(player.length - 1, 1);
    let secondElement = player.charAt(player.length - 3, 1);
    let hybrid = false;

    if (secondElement == '\uDD25' || secondElement == '\uDCA7' || secondElement == '\uDF31') {
        console.log('Hybrid')
        hybrid = true;
    }

    if (type == 1) {
        if (hybrid) {
            if (firstElement == '\uDD25') {
                setPlayerMovement('Forest fire', 'Flaming rock', 'Chrysalis');
            } else if (firstElement == '\uDCA7') {
                setPlayerMovement('Earthly rain', 'Aquake', 'Mud Bath');
            }
        } else {

            if (firstElement == '\uDD25') {
                setPlayerMovement('Burning flames', 'Wallfire', 'Pyrohealth')
            } else if (firstElement == '\uDCA7') {
                setPlayerMovement('Tsunami', 'Frosty', 'Relax waves')
            } else {
                setPlayerMovement('Earthquake', 'Eternal mountains', 'Magic herbs')
            }
        }
    } else {
        defineEnemyMovement(firstElement, hybrid)
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

function defineEnemyMovement(firstElement, hybrid) {
    if(enemyHearts < 3 && !enemyDefense){
        movement = getRandom(1, 3);
        console.log(1)
    } else if(enemyHearts == 3 && enemyDefense) {
        movement = 1;
        console.log(2)
    } else if(enemyHearts == 3 && !enemyDefense){
        movement = getRandom(1, 2);
        console.log(3)
    } else if(enemyHearts < 3 && enemyDefense){
        movement = getInterval(1, 3);
        console.log(4)
    } else {
        movement = getRandom(1, 3);
        console.log(0)
    }

    if (hybrid) {
        if (firstElement == '\uDD25') {
            setEnemyMovement(movement, 'Forest fire', 'Flaming rock', 'Chrysalis')
        } else if (firstElement == '\uDCA7') {
            setEnemyMovement(movement, 'Earthly rain', 'Aquake', 'Mud Bath')
        }
    } else {
        if (firstElement == '\uDD25') {
            setEnemyMovement(movement, 'Burning flames', 'Wallfire', 'Pyrohealth')
        } else if (firstElement == '\uDCA7') {
            setEnemyMovement(movement, 'Tsunami', 'Frosty', 'Relax waves')
        } else {
            setEnemyMovement(movement, 'Earthquake', 'Eternal mountains', 'Magic herbs')
        }
    }
}

function setEnemyMovement(movement, attack, defense, healing){
    switch (movement) {
        case 1:
            console.log(enemyDefense)
            if(!playerDefense){
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
    if(!enemyDefense){
        enemyHearts--;
    }
    enemyDefense = false;
    updatePetHearts();
    if(!checkWinner()){
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

function AddMovement(movement, type){
    let btDefense = document.getElementById('movements__bt-defense');
    let btHealing = document.getElementById('movements__bt-healing');

    if(playerDefense){
        btDefense.disabled = true;
    } else {
        btDefense.disabled = false;
    }

    if(myHearts == 3){
        btHealing.disabled = true;
    } else {
        btHealing.disabled = false;
    }

    let section = document.getElementById('messages')
    let paragraph = document.createElement('p')

    if(type == 1){
        paragraph.innerHTML = getPetName(1) + ' uses ' + movement;
    } else if(type == 2) {
        paragraph.innerHTML = getPetName(2) + ' uses ' + movement;
    }

    section.appendChild(paragraph)
}

function updatePetHearts(){
    myPet = document.getElementById('movements__my-pet--health');
    enemyPet = document.getElementById('movements__enemy-pet--health');

    myPet.innerHTML = ''
    enemyPet.innerHTML = ''

    if(playerDefense || enemyDefense){

        for(let x = 0; x < myHearts; x++){
            myPet.innerHTML += '❤️';
        }

        if(playerDefense){
            myPet.innerHTML += '💛';
        }

        for(let x = 0; x < enemyHearts; x++){
            enemyPet.innerHTML += '❤️';
        }

        if(enemyDefense){
            enemyPet.innerHTML += '💛';
        }
    } else {
        for(let x = 0; x < myHearts; x++){
            myPet.innerHTML += '❤️';
        }

        for(let x = 0; x < enemyHearts; x++){
            enemyPet.innerHTML += '❤️';
        }
    }
}

function checkWinner(){
    let section = document.getElementById('messages')
    let paragraph = document.createElement('p')
    let rMessage = document.getElementById('result__message')

    let btnAttack = document.getElementById('movements__bt-attack');
    let btnDefense = document.getElementById('movements__bt-defense');
    let btnHealing = document.getElementById('movements__bt-healing');

    if(myHearts == 0){
        sectionMovements.style.display = 'none'
        sectionResult.style.display = 'block'

        rMessage.innerHTML = 'Sorry! You lose'

        paragraph.innerHTML = getPetName(2) + ' wins.';
        section.appendChild(paragraph)

        btnAttack.disabled = true;
        btnDefense.disabled = true;
        btnHealing.disabled = true;

        return true;
    } else if(enemyHearts == 0){
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

function getPetName(type){
    if (type == 1) {
        return document.getElementById('movements__my-pet--name').innerHTML
    } else {
        return document.getElementById('movements__enemy-pet--name').innerHTML
    }
}

function restartGame(){
    location.reload()
}

// window.addEventListener('load', startGame);