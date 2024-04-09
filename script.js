et Box=document.getElementById('inputBox')
let buttons=document.querySelectorAll('button')

let string=''

buttons.forEach(element =>{
    element.addEventListener('click',(b)=>{
        if(b.target.innerText=='='){
            try{
                string=String(eval(string))
                Box.value=string;
            }
            catch(error){
                Box.value='ERROR';
                string='';
            }
        }
        else if(b.target.innerText=='AC'){
            string=''
            Box.value=string;
        }
        else if(b.target.innerText=='DE'){
            string=string.substring(0,string.length-1)
            Box.value=string;
        }
        else if(b.target.id=='plusMinus'){
            string=String(-eval(string))
            Box.value=string;
        }
        else if(((b.target.innerText=='0')string=='0'||string=='00'){
            string=b.target.innerText
            Box.value=string;
        }
        else{
            if(string=='NaN'||string=='undefined'){
                string=''
            }
            string+=b.target.innerText
            Box.value=string;
        }
    })
})
