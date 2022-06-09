var res = document.getElementById('res');
var operand1 = '';
var operator = '';
var operand2 = '';

window.onload = ()=>{

    document.getElementById('principal').addEventListener('click',(e)=>{
        
        console.log(e.target.id);
        
        switch (e.target.id){
            case 'btn0':
                operator === "" ? operand1 += '0' : operand2 += '0';
                updateRes();
                break;
                
                case 'btn1':
                operator === "" ? operand1 += '1' : operand2 += '1';
                updateRes();
                break;
                
                case 'btnClr':
                res.innerText = ''
                operand1 = '';
                operator = '';
                operand2 = '';
                break;
                
                case 'btnEql':
                operation()
                break;
                
                case 'btnSum':
                operator = '+';
                updateRes();
                break;
                
                case 'btnSub':
                operator = '-';
                updateRes();
                break;
                
                case 'btnMul':
                operator = '*';
                updateRes();
                break;
                
                case 'btnDiv':
                operator = '/';
                updateRes();
                break;
                
        }
     })
}

function updateRes(){
    res.innerText = `${operand1} ${operator} ${operand2} `;
}

function operation(){
      switch (operator){
          case '+':
              operand1 = ( parseInt(operand1) + parseInt(operand2) ).toString(2);
              break;    
          case '-':
              operand1 = ( parseInt(operand1) - parseInt(operand2) ).toString(2);
              break;
          case '*':
              operand1 = ( parseInt(operand1) * parseInt(operand2) ).toString(2);
              break;
          case '/':
              operand1 = ( parseInt(operand1) / parseInt(operand2) ).toString(2);
              break;
    
    }
    operand2 = '';
    operator = '';
    updateRes();
}
