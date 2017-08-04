console.log('Loaded!');

var img=document.getElementById('rcorner1');
function moveRight(){
    marginLeft+=10;
    img.style.marginLeft= parginLeft + 'px';
}

img.onclick=function(){
    var interval= setInterval(moveRight,100);
    
};