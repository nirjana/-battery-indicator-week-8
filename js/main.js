
var elem = document.getElementById("section1");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

initBattery()

function initBattery(){
    const batteryLiquid = document.querySelector('.battery__liquid'),
          batteryStatus = document.querySelector('.battery__status'),
          batteryPercentage = document.querySelector('.battery__percentage') 
          emoji= document.querySelector('.emoji') 
    
    navigator.getBattery().then((batt) => {
        updateBattery = () => {
            let level =Math.floor(batt.level * 100) // Update battery number level
            batteryPercentage.innerHTML=level+'%'
            
            batteryLiquid.style.height =`${parseInt(batt.level*100)}%`  //update background level of the battery

            // Validate battery level and charging(full battery,low if charging or not )
        
            if(level ==100){
                //if the battery is full
                batteryStatus.innerHTML =
                'Fully Charged <i class="ri-battery-2-fill green-color"></i>'  
                 batteryLiquid.style.height= '103%'  // Greater than 100 to hide ellipse
        
                }
                else if (level <=20 &!batt.charging){
                    batteryStatus.innerHTML ='Low battery   <i class="ri-plug-line animated-red "></i> 😟'//Worried Face
                    emoji.innerHTML= '😟'
                } 
                else if(batt.charging){
                    batteryStatus.innerHTML= 'Charging..   <i class="ri-flashlight-line animated-green"></i> '
                    emoji.innerHTML= '😃'
                }

                else {
                    emoji.innerHTML= '😊'
                    batteryStatus.innerHTML = ''
                }

                if(level <= 20 ){
                    batteryLiquid.classList.add('gradient-color-red')
                    batteryLiquid.classList.remove('gradient-color-orange','gradient-color-yellow','gradient-color-green')
                }
                else if(level <=40) {
                    batteryLiquid.classList.add('gradient-color-orange')
                    batteryLiquid.classList.remove('gradient-color-red','gradient-color-yellow','gradient-color-green')
            
                }
                else if (level<= 94){
                    batteryLiquid.classList.add('gradient-color-yellow')
                    batteryLiquid.classList.remove('gradient-color-red','gradient-color-orange','gradient-color-green')
               
                }
                else{
                    batteryLiquid.classList.add('gradient-color-green')
                    batteryLiquid.classList.remove('gradient-color-red','gradient-color-orange','gradient-color-yellow')
               
                }
                }
        updateBattery()
    })
}