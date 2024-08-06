
const input = require("readline-sync");
let n = input.questionInt("enter the length of the number: ");
let arr = [];


for (let i = 0; i < n; i++) 
{
  arr[i] = input.questionInt("enter the element no.");
}

for (let i = 0; i < n; i++) 
{
  let co = 1;


  for (let j = i + 1; j < n; j++)
   {
    if (arr[i] == arr[j]) 
    {
      co++;
    

      for (let k = j; k < n; k++)  
      {
        arr[k] = arr[k + 1];
      }
         n =n-1;

    }

  }
    if(co>1)
    {
      console.log(arr[i]);
    }

}
