let getId = function(id) {
   return document.getElementById(id)
}

let inputs = {
   result: getId('result'),
   prev: getId('prev'),
   current: getId('current'),
   calculate: getId('calcuBtn'),
   p: getId('p'),
   name: [
      {
         fn: getId('Firstname'),
         ln: getId('Lastname')
      }
   ],
   fResult: getId('FinalResult')
}

let firstname = getId('Firstname'), lastname = getId('Lastname')


inputs.calculate.addEventListener('click', calculate)
function validate(main, count) {
   return main.fn.value != '' && main.ln.value != '' && count.prev.value != '' && count.current.value != '' && count.prev.value < count.current.value
}
let minimum = 30
function calculate() {
   inputs.name.map((index)=>{
      if(validate(index, inputs)){
         
         inputs.p.textContent = inputs.prev.value - inputs.current.value
         
         let result = inputs.result.value = Math.abs((inputs.prev.value - inputs.current.value) * 5)
         
         if(result <= minimum) {
            inputs.result.value = minimum
            inputs.p.textContent = 'minimum'
            inputs.p.className = 'text-danger'
            inputs.fResult.textContent = minimum
            inputs.fResult.className = 'text-danger'
            
         }else {
            inputs.fResult.textContent = result
            inputs.fResult.className = 'text-success'
         }
         
         
      }else{
         if(index.fn.value == '') alert('Firstname is required!')
         else if(index.ln.value == '') alert('Lastname is required!')
         else if(inputs.prev.value == '') alert('Previous reading is required!')
         else if(inputs.current.value == '') alert('Current reading is required!')
         else if(inputs.prev.value > inputs.current.value ) {
            alert('Invalid Calculation reading is required!')
            alert('Current must be greater than Previous')
            inputs.fResult.textContent = ''
            inputs.result.value = ''
            inputs.p.textContent = ''
         }
         else{
            console.log('default')
         }
      }
   })
      
      
   
   
}