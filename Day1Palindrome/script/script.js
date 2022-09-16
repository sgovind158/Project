 // input button  box display planidrome he ki nhi
 let { log } = console;
 let showResult = document.querySelector("#show-result")
 let checkPalindromeFun = () => {
   let q = document.querySelector("#query").value;
   q = q.toLowerCase();

   let n = q.length;
   n = Math.floor(n / 2);
   str1 = q.toLowerCase();
 

   let bool = true;
   for (let i = 0; i < n; i++) {
     if (str1[i] != str1[str1.length - i - 1]) {
       bool = false;
       break;
     }
   }

   if (bool) {
    showResult.innerHTML = ` Yes this is &#129321; palindrome `
   } else {
       showResult.innerHTML = ` No this is not &#128542; palindrome `
   }

 };