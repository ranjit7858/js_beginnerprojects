let inc = document.getElementById('counting');
let res = document.getElementById('reset');
let dec = document.getElementById('decrease');
let count = document.getElementById('count');
let count1 = 0;
inc.addEventListener('click',function (){
    count1++;
    count.innerHTML = count1 ;
    count.style.color = 'green'; 
    
});
res.addEventListener('click',function(){
    count1 = 0;
    count.style.color = 'black'; 
    count.innerHTML = count1;
});
dec.addEventListener('click',function(){
    count1--;
    count.style.color = 'red'; 
    count.innerText = count1;
});