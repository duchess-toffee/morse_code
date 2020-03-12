/* Problem #1
            Given an array, remove all duplicate elements in the array. Ensure that your solution 
            works on the empty array as well. Ex: Given array `['hi', 3, 2, 3, 'hi']`, the result 
            after duplication removal should be `['hi', 3, 2]`.
            - Write a variant of your function that removes all elements that are duplicated. 
              The returned value given the above example would be `[2]`.
            - Write a variant of the function that performs the operation _in place_, 
              meaning that no additional storage should be used.
        */
       const array = [`hi`, 3, 2, 3, `hi`];
        
       function rmDuplicate(arr){
           return arr.filter((item, index) => arr.indexOf(item) === index)
       }

       console.log(rmDuplicate(array));

       /* Problem #2 
           Given a string, determine if it is "palindromic." That is, determine if it reads the 
           same forwards and backwards ("racecar" is a palindrome, but not "racer").
           - Modify your algorithm so that capitalization and punctuation are ignored.
       */
       let string = "Racecar racecar.";

       function palindromic(str){
           let start = str
           .toLowerCase()
           .split("")
           .filter(nonChar) //filter out non-character elements.
           
           for(let i=0; i<start.length/2; i++){
               if (start[i] !== start[start.length-1-i]){
                   return false;
               }
           } //check if first element === last element
           return true;
       } 

       function nonChar(char){
           switch (char){
               case " ":
               case ",":
               case ".":
                   return false;
               default:
                   return true;
           }
       }

       console.log(palindromic(string));

       /* Problem #3
           Given a sentence, reverse all the words in the sentence. For example, the sentence 
           "Never give up." should be reversed as "Up give never." Note that the formatting is 
           preserved between the two sentences.
           - Solve this problem without the use of regular expressions
       */

       let sentence = `Never, gonna, give. you: up.`;

       function reverseStr(str){
           let reversed = str
           .toLowerCase()
           .split(" ")
           .reverse()
           .map(item => item.split("").filter(punct).join(""))
           .join(" ")

           // check for initial casing
           if (str[0] <= `Z`){
                const tempArr = reversed.split("");
                const newLetter = tempArr.shift().toUpperCase();
                tempArr.unshift(newLetter);
                const reversedStrWithCasing = tempArr.join("");
                //return reversedStrWithCasing;

           // check for punctuation, part 1: put index/punct into an array of objs
           const strArr = str.split(" ")
           const punctIndex = [];
           for(let i=0; i<strArr.length; i++){
               if(!punct(strArr[i][strArr[i].length-1])){ 
                    punctIndex.push({
                        index: i,
                        punct: strArr[i][strArr[i].length-1]
                    });
               }
           }

           // check for punctuation, part 2: add punctation to sentence
           if(punctIndex.length !== 0){
               const tempArr = reversedStrWithCasing.split(" ");
               const finalSentence = [];
               let j = 0;
               for (let i=0; i<tempArr.length; i++){
                     if(j < punctIndex.length && punctIndex[j].index === finalSentence.length){
                         const tempWord = tempArr[i].split("");
                         tempWord.push(punctIndex[j].punct);
                         finalSentence.push(tempWord.join(""));
                         ++j;
                      }
                      else{
                          finalSentence.push(tempArr[i]);
                      }
              }
               return finalSentence.join(" ");
           }
           return reversedStrWithCasing;
        }
       }

       function punct(char){
           switch(char){
                case ".":
                case ",":
                case ";":
                case "?":
                case "!":
                case ":":
                    return false;
                default:
                    return true;
           }
       }

       console.log(reverseStr(sentence));

       module.exports = {
           rmDuplicate,
           palindromic,
           reverseStr
       }