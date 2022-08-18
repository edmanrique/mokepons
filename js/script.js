function startGame(){
    let btPet = document.getElementById('bt-pet');
    btPet.addEventListener('click', selectPet);
}

function selectPet(){
    pet = document.getElementById('pet');
    selected = pet.options[pet.selectedIndex].text;

    player = document.getElementById('my-pet')
    player.innerHTML = selected;

    playerHealth = document.getElementById('my-pet-health');
    playerHealth.innerHTML = '❤️❤️❤️';
}

window.addEventListener('load', startGame);
