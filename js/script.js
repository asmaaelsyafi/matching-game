let colors=["pink","orange","red","green","aqua","blue"]
let pickedcolors=[...colors ,...colors];
console.log(pickedcolors)
let listlength=pickedcolors.length;
let cards = document.querySelector('.cards')
let activeCard =null;

let countAppearingCard=0;



function buildCards(color){
    let parent = document.createElement('div');
    parent.classList.add('col-md-3');
    let child = document.createElement('div');
    child.classList.add('card')
    child.setAttribute('data-color',color)
    parent.appendChild(child)
    parent.addEventListener('click',function(){
        child.style.backgroundColor = color;
        if(activeCard===null){
            activeCard=child;
            return;
        }
        
        let activeColor =activeCard.getAttribute('data-color')
        let childColor =child.getAttribute('data-color')
        if(activeColor===childColor){
            activeCard=null;
            countAppearingCard+=2;
            if(countAppearingCard===cards){
                alert("well done")

            }
            return;
        }

        // alert(color)
        setTimeout(function(){
            activeCard.style.backgroundColor = null ;
            child.style.backgroundColor = null ;
            activeCard = null;
            return;
        },1000)
    })
    return parent;
}




for(let i=0;i<listlength;i++){
    let randomColor =Math.floor(Math.random()*listlength)
    let color = pickedcolors[randomColor]
    pickedcolors.splice(randomColor,1)
    let card = buildCards(color)
    cards.appendChild(card)
    
    console.log(randomColor)
}

// console.log(buildCards('red'))