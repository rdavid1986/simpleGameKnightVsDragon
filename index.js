//inicializamos jugador
let player= {
    name: "Player",
    atk: 15,
    hp: 100,
    mp: 80,
    healing: 35
}

//inicializamos Dragon
let enemy = {
    name: "Dragon",
    atk: 25,
    hp: 100
}
    //declaramos habilidades
    const habilities =[
        {
            name: "burningSword",
            atk: 25,
            mpCost: 20
        },
        {
            name: "ascendentSword",
            atk: 30,
            mpCost: 25
        },
        {
            name: "vampirySword",
            atk: 20,
            drainblood: 20,
            mpCost: 40
        },
        {
            name: "swordCircle",
            atk: 30,
            mpCost: 25
        }
    ];
//Funciones de habilidades
/* function burningSwordButton(){
    enemy.hp -= habilities[0].atk;
    player.mp -= habilities[0].mpCost;
    if(player.mp <= 19){
        if(enemy.hp <= 0){
            enemy.hp = 0;
            updateBars();
                setTimeout( function(){
                    location.reload();
                    alert("Victory");
                },200);
        }else{
            console.log("No tiene suficiente MP");
        }
    } else if(enemy.hp <= 0){
        enemy.hp = 0;
        console.log("Enemy defeat");
        console.log("Enemy defeat");
            updateBars();
            setTimeout( function(){
                location.reload();
                alert("Victory");
            },200);
    }else {
        player.hp -= enemy.atk;
        if(player.hp <= 0) {
            player.hp = 0;
            console.log("Perdiste");
            alert("Defeat");
            location.reload();
        }else{
            console.log("generaste un daño total de " + habilities[0].atk )
            console.log("Enemy hp = " + enemy.hp)
        }
    }
    updateBars();
} */
function useHability(habilityIndex) {
    const hability = habilities[habilityIndex];
    if (player.mp >= hability.mpCost) {
            enemy.hp -= hability.atk;
            player.mp -= hability.mpCost;
            player.hp -= enemy.atk;
            updateBars();
            setTimeout(function(){
                if(enemy.hp <= 0 && player.hp <= 0 || enemy.hp <= 0){
                    alert("Ambos murieron");
                    location.reload();
                }
            }, 100);
            console.log(`Usaste ${hability.name} y consumiste ${hability.mpCost} de mp`);
            console.log(`Hiciste ${hability.atk} de daño al Dragon`);
            if(enemy.hp <= 0){
                updateBars()
                setTimeout( (function(){
                    alert("Victory");
                }, 300)
                )
            }
            if (hability.drainblood) {
                player.hp += hability.drainblood;
                console.log(`Te curaste ${hability.drainblood}`);
            }
            
        }else {
            console.log(`No tienes mp suficiente para usar ${hability.name}`);
        }
    
  }


//funcion que actualiza las barras
function updateBars(){
    document.getElementById("player__hp").style.width = player.hp + "%";
    document.getElementById("enemy__hp").style.width = enemy.hp + "%";
    document.getElementById("player__mp").style.width = player.mp + "%";
}
//funcion de ataque basico
function basicAtk() {
    enemy.hp -= player.atk;
    player.mp += 15;
    player.mp > 80 ? player.mp = 80 : null;

    if(enemy.hp <= 0){
        setTimeout(function(){
            updateBars();
            alert("EnemyDefeat");
            location.reload();
        }, 200);
    }
    if(player.hp <= 0) {
        updateBars();
        setTimeout(function() {
            alert("Fuiste derrotado");
            location.reload();
        }, 200)
    } else {
        console.log(`Hiciste un daño de ${player.atk}`);
    }
    player.hp-= enemy.atk;
    updateBars();
        //
}
//Funcion para curar
function healing(){
    
    if(player.mp <=29) {
        console.log("No tiene mp suficiente")
    } else if(player.hp >= 100){
        null;
        console.log("Tu hp esta full")
    }
    else {
        player.hp += player.healing;
        player.hp -= enemy.atk;
        player.mp -= 30;
        console.log("Usaste curar y consumiste 30 de mp")
        console.log("Te cuaraste " + player.healing);
    }
    updateBars();
}
//Funcion para atacar o curar segun el boton clickeado 
function atk(nombre) {
    if ( nombre == "player"){
        basicAtk();
    }else if(nombre == "player"){
        null
    }
    updateBars();
}
//Funcion de habilidades
const buttons = document.querySelectorAll("#hability");
console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", habilitiesAtk);
});


// Inicializar las barras de hp al cargar la página
window.onload = function() {
    updateBars();
};
