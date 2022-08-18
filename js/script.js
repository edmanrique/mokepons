function startGame(){
    let btPet = document.getElementById('bt-pet');
    btPet.addEventListener('click', selectPet);
}

function selectPet(){
    pet = document.getElementById('pet')
    selected = pet.options[pet.selectedIndex].text;
    alert(selected)
}

window.addEventListener('load', startGame)
