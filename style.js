let name = prompt("What is your name?")

document.getElementById("welcome-message").innerHTML = "Welcome " + name + "!"

const waterDrank = document.getElementById('water-drank')

const waterdrops = document.querySelectorAll(".water-drop") 

let remainingWater = document.getElementById("remaining-water")

waterdrops.forEach((drop, i) => {
 drop.addEventListener('click', () => fillDrops(i));
 drop.addEventListener('mouseenter', () => changeDropletBorderColor(i));
 drop.addEventListener('mouseleave', () => changeDropletBorderColorBack(i));
})

function changeDropletBorderColor(i) {
  waterdrops[i].style.borderColor = 'blue';
}

function changeDropletBorderColorBack(i) {
  waterdrops[i].style.borderColor = 'DodgerBlue';
}
  
// waterdrops.forEach((drop, i) => {
//   drop.addEventListener('click', () => fillDrops(i))
// })

let fullCupCount = 8;


function fillDrops(i) {
  waterdrops[i].style.backgroundColor = 'DodgerBlue';
  fullCupCount --;
  let remainingWaterVolume
  switch(fullCupCount) {
  case 1:
    remainingWaterVolume =  2 - (1*0.25)
    remainingWater.innerHTML = "Remaining Water: " + remainingWaterVolume + "L"
    break;
  case 2:
    remainingWaterVolume = 2 - (2*0.25)
    remainingWater.innerHTML = "Remaining Water: " + remainingWaterVolume + "L"
    break;
  case 3:
    remainingWaterVolume = 2 - (3*0.25) 
    remainingWater.innerHTML = "Remaining Water: " + remainingWaterVolume + "L"
    break;
  case 4:
    remainingWaterVolume = 2 - (4*0.25)
    remainingWater.innerHTML = "Remaining Water: " + remainingWaterVolume + "L"
    break;
  case 5:
    remainingWaterVolume = 2 - (5*0.25)
    remainingWater.innerHTML = "Remaining Water: " + remainingWaterVolume + "L"
    break;
  case 6:
    remainingWaterVolume = 2 - (6*0.25)
    remainingWater.innerHTML = "Remaining Water: " + remainingWaterVolume + "L"
    break;
  case 7:
    remainingWaterVolume = 2 - (7*0.25)
    remainingWater.innerHTML = "Remaining Water: " + remainingWaterVolume + "L"
    break;
  case 8:
    remainingWaterVolume = 2 - (8*0.25)

    remainingWater.innerHTML = "Remaining Water: " + remainingWaterVolume + "L"
    break;
   default:
    remainingWaterVolume = 0
    remainingWater.innerHTML = "Remaining Water: " + remainingWaterVolume + "L"
}
  if (remainingWaterVolume === 0) {
    document.getElementById("drinking-status").innerHTML = "Water Goal Achieved!🥳"
  }
  fillTotalWaterCup()
}

function fillTotalWaterCup() {
  const totalCups = 8
   if (0 > fullCupCount <= 8){
     waterDrank.style.visibility = 'visible'
     waterDrank.style.height = `${fullCupCount / totalCups * 350}px`;
    }
};
