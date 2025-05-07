console.log('hi script.js')

const nameField = document.querySelector("#firstname");
const skillField = document.querySelector("#skills");
let skillInput = document.querySelector("#add");

function getAndSetName () {
    let nameLocalStorage = localStorage.getItem("name");
    if(nameLocalStorage) {
        nameField.innerText = nameLocalStorage
    } else {
        let nameInput = prompt("Bitte gib deinen Namen ein.");
        nameField.innerText = nameInput;
        localStorage.setItem("name", nameInput);
}
}

function getSkills () {
    skillInput.addEventListener("change", function () {
        skill.push(skillInput.value);
        skillInput.value = "";
        setSkills();
    })
}

function setSkills() {
    skillField.innerHTML = "";
    skills.forEach(skill => {
        let span = document.createElement ('span');
        span.innerText = skill;
        skillField.append(span);
    });
}

getAndSetName ();
getSkills ();