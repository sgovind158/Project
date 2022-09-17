 // input button  box display planidrome he ki nhi
 let { log } = console;
 let showResult = document.querySelector("#show-result")
 let checkPalindromeFun = () => {
   let s = document.querySelector("#query").value;
  
   let n = s.length;
 let stack = []; // extra space 
 log(n)
 if(n % 2==1 || n == 0){
 return showResult.innerHTML = ` No this is not &#128542; balanced `
 }
 
 for(let i = 0; i<n;i++){ // iterate n time 
     
     if(s[i]=="("||s[i]=="{"||s[i]=="["){
         stack.push(s[i])
     }else{
         let value = pair(s[i])
         
         if(value == stack[stack.length - 1]){
             stack.pop()
         }else{
       return   showResult.innerHTML = ` No this is not &#128542; balanced `
         }
     }
     
    
 }
 
  if(stack.length == 0){
         
         showResult.innerHTML = ` Yes this is &#129321; balanced `
     }else{
      showResult.innerHTML = ` No this is not &#128542; balanced `
        
     }



 };



 

 function pair(value){
  if(value == ")"){
      return "("
  }
  
   if(value == "}"){
      return "{"
  }
  
   if(value == "]"){
      return "["
  }
}