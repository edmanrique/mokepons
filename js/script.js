function startGame(){
    let btPet = document.getElementById('bt-pet');
    btPet.addEventListener('click', selectPet);
}

function randomPet(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function selectPet(){
    let pet = document.getElementById('pet');
    let selected = pet.options[pet.selectedIndex].text;

    let player = document.getElementById('my-pet')
    player.innerHTML = selected;

    let playerHealth = document.getElementById('my-pet-health');
    playerHealth.innerHTML = '❤️❤️❤️';

    selectEnemyPet(selected);
}

function selectEnemyPet(player){
    let rPet = randomPet(1, 8);
    let enemyPet = ''

    switch(rPet){
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

    if(enemyPet == player){
        return selectEnemyPet(player);
    }

    let npc = document.getElementById('enemy-pet');
    npc.innerHTML = enemyPet;

    let npcHealth = document.getElementById('enemy-pet-health');
    npcHealth.innerHTML = '❤️❤️❤️';
}

window.addEventListener('load', startGame);
