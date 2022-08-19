function startGame() {
    let btPet = document.getElementById('bt-pet');
    btPet.addEventListener('click', selectPet);
}

function randomPet(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function selectPet() {
    let pet = document.getElementById('pet');
    let selected = pet.options[pet.selectedIndex].text;

    let player = document.getElementById('my-pet')
    player.innerHTML = selected;

    let playerHealth = document.getElementById('my-pet-health');
    playerHealth.innerHTML = '❤️❤️❤️';

    selectEnemyPet(selected);
}

function selectEnemyPet(player) {
    let rPet = randomPet(1, 8);
    let enemyPet = ''

    switch (rPet) {
        case 1:
            enemyPet = 'Hipodoge 💧';
            break;
        case 2:
            enemyPet = 'Suggles 💧';
            break;
        case 3:
            enemyPet = 'Capipepo 🌱';
            break;
        case 4:
            enemyPet = 'Todd 🌱';
            break;
        case 5:
            enemyPet = 'Ratigueya 🔥';
            break;
        case 6:
            enemyPet = 'Kailamor 🔥';
            break;
        case 7:
            enemyPet = 'Tucapalma 💧🌱';
            break;
        case 8:
            enemyPet = 'Pydos 🌱🔥';
            break;
    }

    if (enemyPet == player) {
        return selectEnemyPet(player);
    }

    let npc = document.getElementById('enemy-pet');
    npc.innerHTML = enemyPet;

    let npcHealth = document.getElementById('enemy-pet-health');
    npcHealth.innerHTML = '❤️❤️❤️';

    selectMovement(player);
}

function selectMovement(player) {
    let firstElement = player.substr(player.length - 1, 1);
    let secondElement = player.charAt(player.length - 3, 1);
    let hybrid = false;

    if (secondElement == '\uDD25' || secondElement == '\uDCA7' || secondElement == '\uDF31') {
        console.log('Hybrid')
        hybrid = true;
    }

    if (hybrid) {
        if (firstElement == '\uDD25') {
            setMovements('Forest fire', 'Flaming rock', 'Chrysalis');
        } else if (firstElement == '\uDCA7') {
            setMovements('Earthly rain', 'Aquake', 'Mud Bath');
        }
    } else {

        if (firstElement == '\uDD25') {
            setMovements('Burning flames', 'Wallfire', 'Pyrohealth')
        } else if (firstElement == '\uDCA7') {
            setMovements('Tsunami', 'Frosty', 'Relax waves')
        } else {
            setMovements('Earthquake', 'Eternal mountains', 'Magic herbs')
        }
    }
}

function setMovements(attack, defense, healing) {
    let btMovement1 = document.getElementById('bt-movement1');
    let btMovement2 = document.getElementById('bt-movement2');
    let btMovement3 = document.getElementById('bt-movement3');

    btMovement1.innerHTML = attack;
    btMovement2.innerHTML = defense;
    btMovement3.innerHTML = healing;

    figth(btMovement1, btMovement2, btMovement3);
}

function figth(btnAttack, btnDefense, btnHealing) {
    btnAttack.addEventListener('click', attack);
    btnDefense.addEventListener('click', defense);
    btnHealing.addEventListener('click', healing);
}

function attack() {
    playerName()
    document.getElementById('movement-player').innerHTML = document.getElementById('bt-movement1').innerHTML;
}

function defense() {
    playerName()
    document.getElementById('movement-player').innerHTML = document.getElementById('bt-movement2').innerHTML;
}

function healing() {
    playerName()
    document.getElementById('movement-player').innerHTML = document.getElementById('bt-movement3').innerHTML;
}

function playerName(){
    document.getElementById('my-pet-movement').innerHTML = document.getElementById('my-pet').innerHTML
}

window.addEventListener('load', startGame);
