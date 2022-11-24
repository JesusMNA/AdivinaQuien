let character = {
    gender: "",
    side: "",
    cape: false,
    animal: false,
    body: false,

}

let answers = {
    answer1: false,
    answer2: false,
    answer3: false,
    answer4: false,
    answer5: false,
    answer6: false,
}

buttonBeggin.addEventListener("click", () => {
    sectionBeggin.classList.add("hide");
    sectionQuestions.classList.remove("hide");

    narrativeParagraphs.innerHTML = "¿Su personaje es hombre o mujer?";
    opcion1.innerHTML = "Hombre";
    opcion1.addEventListener("click", answer1.bind(this, "male"));
    opcion2.innerHTML = "Mujer";
    opcion2.addEventListener("click", answer1.bind(this, "female"));
    textOptions.appendChild(opcion1);
    textOptions.appendChild(opcion2);
});

function answer1(gender) {
    if(answers.answer1) {
        return;
    }
    textOptions.removeChild(opcion1);
    textOptions.removeChild(opcion2);
    character.gender = gender;
    narrativeParagraphs.innerHTML = "¿Su personaje es un heroe o un villano?";
    opcion1.innerHTML = "Heroe";
    opcion1.addEventListener("click", answer2.bind(this, "heroe"), {once: true});
    opcion2.innerHTML = "Villano";
    opcion2.addEventListener("click", answer2.bind(this, "villain"), {once: true});
    textOptions.appendChild(opcion1);
    textOptions.appendChild(opcion2);
    answers.answer1 = true;
}

function answer2(side) {
    if (answers.answer2) {
        return;
    }
    textOptions.removeChild(opcion1);
    textOptions.removeChild(opcion2);
    character.side = side;
    let starSaphire = character.gender === "female" && character.side == "villain";
    if (starSaphire) {
        adivinador("Star Saphire");
    }
    narrativeParagraphs.innerHTML = "¿Su personaje usa capa o alas?";
    opcion1.innerHTML = "Verdadero";
    opcion1.addEventListener("click", answer3.bind(this, true), {once: true});
    opcion2.innerHTML = "Falso";
    opcion2.addEventListener("click", answer3.bind(this, false), {once: true});
    textOptions.appendChild(opcion1);
    textOptions.appendChild(opcion2);
    answers.answer2 = true;
}

function answer3(cape) {
    if(answers.answer3) {
        return;
    }
    textOptions.removeChild(opcion1);
    textOptions.removeChild(opcion2);
    character.cape = cape;
    let flash = character.gender === "male" && character.side === "heroe" && character.cape === false;
    if (flash) {
        adivinador("Flash");
    }
    let wonderWoman = character.gender === "female" && character.side === "heroe" && character.cape === false;
    if (wonderWoman) {
        adivinador("Wonder Woman");
    }
    let chicaAlcon = character.gender === "female" && character.side === "heroe" && character.cape === true;
    if (chicaAlcon) {
        adivinador("Chica Alcon");
    }
    narrativeParagraphs.innerHTML = "¿Su personaje esta relacionado con un animal?";
    opcion1.innerHTML = "Verdadero";
    opcion1.addEventListener("click", answer4.bind(this, true), {once: true});
    opcion2.innerHTML = "Falso";
    opcion2.addEventListener("click", answer4.bind(this, false), {once: true});
    textOptions.appendChild(opcion1);
    textOptions.appendChild(opcion2);
    answers.answer3 = true;
}

function answer4(animal) {
    if(answers.answer4) {
        return
    }
    textOptions.removeChild(opcion1);
    textOptions.removeChild(opcion2);
    character.animal = animal;
    let batman = character.gender === "male" && character.side === "heroe" && character.animal === true;
    if (batman) {
        adivinador("Batman");
    }
    let sombra = character.gender === "male" && character.side === "villain" && character.animal === false;
    if (sombra) {
        adivinador("La Sombra");
    }
    if(character.side === "heroe") {
        narrativeParagraphs.innerHTML = "¿Su personaje puede alterar la forma de su cuerpo?";
        opcion1.innerHTML = "Verdadero";
        opcion1.addEventListener("click", answer5.bind(this, true));
        opcion2.innerHTML = "Falso";
        opcion2.addEventListener("click", answer5.bind(this, false));
        textOptions.appendChild(opcion1);
        textOptions.appendChild(opcion2);
    }
    else {
        narrativeParagraphs.innerHTML = "¿Su personaje puede cambiar de cuerpo?";
        opcion1.innerHTML = "Verdadero";
        opcion1.addEventListener("click", answer5.bind(this, true));
        opcion2.innerHTML = "Falso";
        opcion2.addEventListener("click", answer5.bind(this, false));
        textOptions.appendChild(opcion1);
        textOptions.appendChild(opcion2);
    }
}

function answer5(body) {
    if(answers.answer5) {
        return;
    }
    textOptions.removeChild(opcion1);
    textOptions.removeChild(opcion2);
    character.body = body;
    let superman = character.side === "heroe" && character.body === false;
    if (superman) {
        adivinador("Superman");
    }
    let detective = character.side === "heroe" && character.body === true;
    if (detective) {
        adivinador("Detective Marciano");
    }
    let cobra = character.side === "villain" && character.body === false;
    if (cobra) {
        adivinador("Cabeza de Cobra");
    }
    let ultra = character.side === "villain" && character.body === true;
    if (ultra) {
        adivinador("Ultra Humano");
    }
}

function adivinador(personaje) {
    sectionQuestions.classList.add("hide");
    sectionCharacter.classList.remove("hide");
    characterParagraph.innerHTML = `Su personaje es ${personaje}`;
    imageCharacter.setAttribute("src", `./characters/${personaje}.JPG`);
}

buttonReload.addEventListener("click", () => {
    location.reload();
})