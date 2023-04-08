// variable assignment
let buttons = Array.from(document.querySelectorAll('.btn'))
let display = document.querySelector('#display')

// Iterate through each buttons and add an eventlistener
buttons.map(btn => {
    btn.addEventListener('click', e => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = 0
                break;
            case "←":
                if(display.innerText)
                    display.innerText = display.innerText.slice(0, -1)
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText)
                }catch{
                    display.innerText = "Error"
                }
                break;
            default:
                if (display.innerText == 0){
                    display.innerText = "";
                    display.innerText += e.target.innerText
                }else{
                    display.innerText += e.target.innerText
                }
        }
        

    })
})