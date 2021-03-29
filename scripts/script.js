// JavaScript Document


/************************************/
/* Code voor de variabeles*/
/* Variabele check bestaat zodat er pas iets gedaan kan worden wanneer het monstertje is terugveranderd in de original state*/
/************************************/

var button_voeren = document.querySelector("button:first-of-type");
var button_aaien = document.querySelector("button.b2");
var button_vechten = document.querySelector("button.b3");
var happythoughts = ["<3", "(:", "(^_^)"];
var popup_text = document.querySelector("p:first-of-type");
var monster = document.querySelector("img:first-of-type");
var healthbar = document.querySelector("div.bar");

/************************************/
/* Code voor de geluiden die worden afgespeeld bij functies*/
/************************************/

var audio_eat = new Audio('audio/eat.mp3');
var audio_pet = new Audio('audio/happy.wav');
var audio_fight = new Audio('audio/fire.mp3');
var audio_error = new Audio('audio/denied.wav');

/************************************/
/* Code voor een check zodat er gewacht wordt tot de animatie klaar is voor er een nieuwe actie gedaan kan worden*/
/************************************/

var state_check = "yes";

/************************************/
/* Code voor de gezondheidswaarde*/
/************************************/

var health = 40;

/************************************/
/* Code om de knoppen te linken aan functies*/
/************************************/

button_voeren.addEventListener("click", voeren);
button_aaien.addEventListener("click", aaien);
button_vechten.addEventListener("click", vechten);

/************************************/
/* Code voor de voeren-functie*/
/* Laat voor een paar seconden de "voeren-gif" zien, en verander dan terug*/
/* Laat de gezondheidswaarde stijgen met "10" en update de waarde op het scherm*/
/* Zorg ervoor dat er niet gevoerd kan worden met een gezondheidswaarde van 100 of hoger, laat in plaats daarvan een waarschuwing zien*/
/************************************/

function voeren() {
  if (state_check == "yes") {
    if (health < 100) {
      state_check = "no";
      monster.src = "images/monster_eat.gif";
      setTimeout(changeback, 2500);
      health = health + 10;
      healthbar.style.width = health + '%';
      audio_eat.play();
    } else {
      state_check = "no";
      popup_text.textContent = "het monster heeft al teveel gegeten!";
      setTimeout(changeback, 1500);
      audio_error.play();
    }
  }
}

/************************************/
/* Code voor de aaien functie*/
/* Laat voor een paar seconden de "happy-gif" zien, en verander dan terug*/
/* Geef een willekeurig bericht weer boven het monster, zolang de "happy-gif" aanstaat (zie variabele happythoughts)*/
/************************************/

function aaien() {
  if (state_check == "yes") {
    state_check = "no";
    monster.src = "images/monster_happy.gif";
    var randomNummer = Math.random() * 3;
    randomNummer = Math.floor(randomNummer);
    popup_text.textContent = happythoughts[randomNummer];
    setTimeout(changeback, 2000);
    audio_pet.play();
  }
}

/************************************/
/* Code voor de vechten-functie*/
/* Laat voor een paar seconden de "vechten-gif" zien, en verander dan terug*/
/* Laat de gezondheidswaarde stijgen met "10" en update de waarde op het scherm*/
/* Zorg ervoor dat er niet gevochten kan worden met een gezondheidswaarde lager dan 30, laat in plaats daarvan een waarschuwing zien*/
/************************************/

function vechten() {
  if (state_check == "yes") {
    if (health > 30) {
      state_check = "no";
      monster.src = "images/monster_fight.gif";
      setTimeout(changeback, 3000);
      health = health - 20;
      healthbar.style.width = health + '%';
      audio_fight.play(3);
    } else if ((health <= 30)) {
      state_check = "no";
      popup_text.textContent = "niet gezond genoeg om te vechten!";
      setTimeout(changeback, 1500);
      audio_error.play();
    }
  }
}

/************************************/
/* Code voor de terugverander-functie*/
/* Hiermee kan het plaatje van het monster bij een gif terugveranderd worden naar de original state*/
/************************************/

function changeback() {

  monster.src = "images/monster.png";
  state_check = "yes";
  popup_text.textContent = " ";
}
