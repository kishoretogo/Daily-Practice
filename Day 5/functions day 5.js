// Anonymous function

//1. Print odd numbers in an array
var oddNumber  = function (arr){
    var res = [];
    for( var i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0)
            res.push(arr[i]);
    }
    return res;
}
console.log(oddNumber([1,2,3,4,5]));


// 2.Convert all the strings to title caps in a string array

var strArr = ["Hey", "have", "joined", "Guvi"];
var title = function(arr){
    const uppercased = arr.map(word => 
        word[0].toUpperCase() + word.slice(1).toLowerCase() )
    
    return uppercased;
}
console.log("output is : ", title(strArr));


//3. Sum of all numbers in an array
    
    let arrNum = [1,2,3,4,5];
    var sum = function(arr){
    var sumArr  = 0 ;
        for (let index = 0; index < arr.length; index++) {
            sumArr += arr[index];
            console.log();
            
        }
        return sumArr
    }
    
    console.log("Sum of all numbers is : " , sum(arrNum ));





//4. Return all the prime numbers in an array
   
    let primeNumArr = [2,4,5,7,9];
    var primeNum = function(numArr){
        numArr = numArr.filter((num) =>{
               for (var i = 2; i <= Math.sqrt(num); i++) {
                    if (num % i === 0) return false;
                }
              return true;    
            });       
        return numArr;    
    }
console.log("Prime numbers are : " , primeNum(primeNumArr ));


//5. Return all the palindromes in an array


let palindromesArr =  ['car', 'BBB', 12345, 'did', 'can

'];
var isPalimdrome = function(palindromesArr){

   return palindromesArr.filter((element) =>
   {
    let str = String(element);
    const len = str.length;
        for (let i = 0; i < len / 2; i++) {
            if (str[i] !== str[len - 1 - i]) {
                return false;
            }
        }
    return true;
    }   
    );   
}

console.log("palindromes are : " + isPalimdrome(palindromesArr ));

//6. Return median of two sorted arrays of the same size
   
   
    let arr1 = [ 1,2,3,4];
    let arr2 = [5,6,7,8]
   var median = function (ar1, ar2){
    var n = ar2.length;
       var i = 0; /* Current index of i/p array ar1[] */
       var j = 0; /* Current index of i/p array ar2[] */
       var count;
       var m1 = -1, m2 = -1;
   
      
       for (count = 0; count <= n; count++)
       {
           if (i == n)
           {
               m1 = m2;
               m2 = ar2[0];
               break;
           }
          
           else if (j == n)
           {
               m1 = m2;
               m2 = ar1[0];
               break;
           }
         
           if (ar1[i] <= ar2[j])
           {
               m1 = m2; 
               m2 = ar1[i];
               i++;
           }
           else
           {
               m1 = m2; 
               m2 = ar2[j];
               j++;
           }
       }
   
       return (m1 + m2)/2;
      
    }
    console.log("median is : " + median(arr1,arr2));
  



//7. Remove duplicates from an array

    
   var arr = [1,2,3,5,2,3,6]    

    var removeDup = function (arr){  
    arr =  arr.filter(item =>{
        if(arr.lastIndexOf(item) !== arr.indexOf(item) )
        {
            return false
 
        }
        return true;
     }
     )
      return arr;
   }    
   console.log("After removing duplicates array is : " , removeDup (arr))

//8. Rotate an array by k times

    
   let arrRotate = [1,2,3,4,5,6]  

    var rotateByK = function (arr, k){
    
            let  temp ;
            let length = arr.length;
            for(let i = 0; i < k; i++){
            temp = arr[0];
            for(let j = 0; j < length; j++){
                arr[j] = arr[j+1];
            }
        arr[length -1] = temp;
    }
   return arr;   
   }   
   console.log("After rotating array is : " , rotateByK (arrRotate,2));   





// arrow function

   // 1. Print odd numbers in an array
   
   let arr1 = [2,3,4,5,6,8,9];
   let odd = arr1.filter(item => item % 2 !== 0
   )
   console.log('Odd Numbers are : ', odd );

// 2. Convert all the strings to title caps in a string array
   

   var strAr = ["Hey", "have", "You", "Guvi", "ZEN"];
   var title = strAr.map(word =>{
       let output = word[0].toUpperCase() + word.slice(1).toLowerCase();
       return output;
   })    
   console.log("Output is : " , title);


// 3. Sum of all numbers in an array


let arr2 = [10,20,30,40,50]
var sum = arr2.reduce((prevValue, curValue) => prevValue + curValue )
console.log("sum is : " , sum);

// 4. Return all the prime numbers in an array

let primeArr = [2,4,5,9,15,22,31,37];
let primeNum = primeArr.filter(num => {
   for(let i = 2; i <= Math.sqrt(num); i++){
       if (num % i == 0)
       { return false;
       }else{
           true;
       }   
   } 
   return primeArr;
} ) 
console.log("Prime Numbers in array : " , primeNum);


// 5. Return all the palindromes in an array


(function(arr){
   let res  = arr.filter( (item) =>{
       let temp = String(item);
       let len = temp.length;
       for(i = 0; i <= len; i++){
         if(temp[i] !== temp[ len - 1 - i] )
                 return false;       
       }   // end of for condition
         return true ;
   } );
   console.log(res)
 })( ['carecar', 'AAAA', 12321, 'did', 'cannot']);



// IIFE function

 //1. Print odd numbers in an array
(function(arr){
    var res = [];
    for( var i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0)
            res.push(arr[i]);
    }
    console.log('odd numbers in array are', res);
})([1,2,3,4,5]);


// 2.Convert all the strings to title caps in a string array


(function(arr){
    let res =  arr.map((element =>
        {           
        return element[0].toUpperCase() + element.slice(1).toLowerCase();         
        }))
        console.log('Title Case array strings are : ' , res);
    })(["I", "have", "joined", "Guvi"]);


//3. Sum of all numbers in an array

(function(arr){
    let res =   arr.reduce((prevValue, curValue)=>
          {
            return  prevValue + curValue;
          }
          )
  
      console.log(" Sum of array is : ", res)
  })( [1,2,3,4,5]);

  //4. Return all the prime numbers in an array


  (function(numArr){
      numArr = numArr.filter((num) =>{
             for (var i = 2; i <= Math.sqrt(num); i++) {
                  if (num % i === 0) return false;
              }
            return true;    
          });       
          console.log("Prime numbers are : " , numArr);
  })([2,4,5,7,9]);



//5. Return all the palindromes in an array



(function(arr){
    let res  = arr.filter( (item) =>{
        let temp = String(item);
        let len = temp.length;
        for(i = 0; i <= len; i++){
          if(temp[i] !== temp[ len - 1 - i] )
                  return false;       
        }   // end of for condition
          return true ;
    } );
    console.log("palindromes in an array are - ", res)
  })( ['car', 'BBBB', 32423, 'did', 'can']);


//Return median of two sorted arrays of the same size


(function (ar1, ar2){
    let n = ar1.length; // we can take length of any array as length is same
       var i = 0; /* Current index of  array ar1[] */
       var j = 0; /* Current index of  array ar2[] */
       var count;
       var m1 = -1, m2 = -1; // initial values 
   
      
       for (count = 0; count <= n; count++)
       {
           if (i == n)
           {
               m1 = m2;
               m2 = ar2[0];
               break;
           }
          
           else if (j == n)
           {
               m1 = m2;
               m2 = ar1[0];
               break;
           }
         
           if (ar1[i] <= ar2[j])
           {
               m1 = m2; 
               m2 = ar1[i];
               i++;
           }
           else
           {
               m1 = m2; 
               m2 = ar2[j];
               j++;
           }
       }
        console.log('Median of equal sized sorted array is ', (m1 + m2)/2)
    })([ 1,2,3,4],[5,6,7,8]);

// 7. Remove duplicates from an array 


(function(arr){
    let res = arr.filter(item => 
         (arr.indexOf(item) == arr.lastIndexOf(item)   ) )
         console.log('Non Duplicate items in array are - ', res)
})([1,2,3,5,2,3,6,8,9,5])


//8. Rotate an array by k times using IIFE 
    
(function rotateByIFEE (arr,k) {
   
     let length = arr.length;
     let temp;
     for(let i = 0; i < k; i++){
       temp = arr[0];
       for(let j = 0; j < length -1; j++){
         arr[j] = arr[ j + 1 ];
       }
       arr[length - 1] = temp;
       
     }            
       console.log("After rotating array output is" , arr)
   }([1,2,3,4,5,6],2));