var x=0;
count=0;
elements = [];

function addpattern() {
    document.getElementById('btn1').disabled = true;
    document.getElementById('btn2').disabled = true;
    document.getElementById('btn3').disabled = true;
    document.getElementById('btn4').disabled = true;
    
    console.log(document.getElementById('btn1').disabled)
    elements.push(Math.floor(4*(+Math.random())+1));
    x++;
    document.getElementById("p1").innerHTML='Simon Game';

    count=0;
    console.log(elements);
    
    let index = 0;
    let interval = setInterval(() => {

      if (index < elements.length) {

        changeclass(elements[index]);
        index++;
      } else {
        clearInterval(interval);  
        document.getElementById('btn1').disabled = false;
        document.getElementById('btn2').disabled = false;
        document.getElementById('btn3').disabled = false;
        document.getElementById('btn4').disabled = false;
        console.log(document.getElementById('btn1').disabled)

      }
    }, 600); 


}

function changeclass(j){
        console.log(elements.at(j))
        document.getElementById('btn'+j).className= 'btnclick';
        setTimeout(() => {
            document.getElementById('btn'+j).className= 'btn'+j;

        }, 100);
}

function btnclick(btn){

    if(        document.getElementById('btn'+btn).disabled == false   )
    {

        if(x==0){
            addpattern();
            document.getElementById("html").style.backgroundColor='#4682B4'
            document.getElementById("body").style.backgroundColor='#4682B4'
        }

        else{
            if(elements.at(count)==btn){
                console.log('btn1');
                count++;
                if(count==x){
                    addpattern();
                }
            }
            else {
                x=0;
                count=0;
                document.getElementById("p1").innerHTML='GAME OVER';
                setTimeout(() => {
                    document.getElementById("p1").innerHTML='PRESS ANY KEY TO RESTART';

                }, 1000);

                document.getElementById("html").style.backgroundColor='#FF3131'

                document.getElementById("body").style.backgroundColor='#FF3131'
                elements=[];
            }

        }
    }
    else{
        
    }
}

