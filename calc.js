const teclasNum = [...document.querySelectorAll('.num')];
const teclasOp = [...document.querySelectorAll('.op')];
const res =  document.querySelector('.res');
const display_view = document.querySelector('#display-view');
const ton = document.getElementById('ton');
const tlimpar = document.getElementById('tlimpar');

let sinal = false
let decimal = false

teclasNum.forEach((el)=>{
    el.addEventListener('click', (evt)=>{
        sinal = false
        if(evt.target.innerHTML == ','){
            if(!decimal){
                 decimal = true
                 if(display_view.innerHTML == '0'){
                      display_view.innerHTML += ','
                 }else{
                    display_view.innerHTML += evt.target.innerHTML
                 }
          
            }
           
        }else{
            if(display_view.innerHTML === '0'){
                display_view.innerText = ''
            }
            display_view.innerHTML += evt.target.innerHTML
        }
        
    })

})

teclasOp.forEach((el) => {
    el.addEventListener('click', (evt) => {
        if(!sinal){
            sinal = true
                display_view.innerHTML += evt.target.innerHTML
            
           
        }
    })
})

tlimpar.addEventListener('click', (evt)=>{
    display_view.innerHTML = "0"
    sinal = false
    decimal = false
})
