const KalvianOne = "XXXX";
console.log(`The driver's name is ${KalvianOne}` )

const KalvianTwo = "YYY";
console.log(`The navigator's name is ${KalvianTwo}` )

const lengthOne = KalvianOne.length;
const lengthTwo = KalvianTwo.length;

function checkLongestLength(){
  if(lengthOne>lengthTwo){
    console.log(`The driver has the longest name, it has ${lengthOne} characters.`);
  }
  else if(lengthTwo>lengthOne){
    console.log(`It seems that the navigator has the longest name, it has ${lengthTwo} characters.`);
  }
  else{
    console.log(`Wow, you both have equally long names, X${lengthOne} characters!.`);
  }
  
}

function checkForVowels(givenString){
  const vowels = ["a","e","i","o","u"];
  let indexArray = [];
  let vowelsArray = [];
  for(let index=0; index<givenString.length;index++){
    // can use vowels.include -- but inbuilt functions are to be avoided
    for(let vowelIndex=0; vowelIndex<vowels.length; vowelIndex++){
      if(vowels[vowelIndex]==givenString[index]){
        vowelsArray.push(givenString[index]);
        indexArray.push(index);
      }

    }
  }
  if(vowelsArray.length>0){
    //Kalvian a i a 1 4 5
    console.log(`${givenString} ${[...vowelsArray]} ${[...indexArray]}`);
  }
  else{
    console.log("no vowels")
  }

}

function checkForUpperCase(givenString){
  // can be done without toUpperCase or toLowerCase -- by creating a list of all the letters in lowercase.
  // then looping over the givenString and the above list, and comparing whether they match or not.

  let uppercase=0;
  let lowercase=0;

  for(let index=0; index<givenString.length; index++){
    if(givenString[index]==givenString[index].toUpperCase()){
      uppercase++;
    }
    else{
      lowercase++;
    }
  }

  console.log(`Uppercase: ${uppercase}, Lowercase: ${lowercase}`)
}

function playWithChar(driver, navigator){
  let ans = "";
  for(let index=0; index<driver.length; index++){
    ans+= driver[index].toUpperCase()+ " "
  }
  console.log(ans)

  // reverse order:
  let reversedNav = "";
  for(let index=(navigator.length)-1; index>=0; index--){
    reversedNav+= navigator[index]
  }
  console.log(reversedNav);

  let mergedName = driver+" "+navigator;
  let reverseMerge = navigator+" "+driver;

  console.log(mergedName,reverseMerge);

  // lexicographic order:
  let lexicographicOrderList = [driver,navigator];
  lexicographicOrderList.sort();
  if(lexicographicOrderList[0]=="Driver"){
    console.log(`The driver's name goes first.`);
  }
  else if(lexicographicOrderList[0]=="Navigator"){
    console.log(`Yo, the navigator goes first definitely.`);
  }
  else{
    console.log(`What?! You both have the same name?`);
  }
}

function loremGenerator(){

  let textCounter = 0;

  let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra pretium
  dapibus. Fusce nulla dolor, ornare blandit purus sed, accumsan mattis sem. Quisques
  uscipit urna a vestibulum rutrum. In nec finibus nibh, viverra fringilla nunc. Aenean
  lobortis fermentum eros vel dictum. Praesent sit amet tellus sodales, vehicula justo id,
  euismod purus. Aliquam at tortor arcu. Suspendisse neque tortor, fermentum eu ullamcorper a,
  vehicula et leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus
  ullamcorper lobortis. Etiam lacus tortor, venenatis a hendrerit ac, venenatis a erat. Fusce
  velit nibh, fringilla eu scelerisque vitae, interdum et nibh.
  Phasellus vehicula purus libero, id dictum quam iaculis vitae. Maecenas quis metus bibendum, 
  commodo tortor eget, placerat urna. Sed facilisis tincidunt diam ac mollis. Donec suscipit 
  malesuada massa sit amet blandit. Phasellus in consequat nibh. Vivamus vestibulum dolor metus, 
  id molestie odio porttitor quis. Mauris tempus tempus gravida. Aenean consequat blandit odio, eu 
  eleifend dolor hendrerit nec. Aliquam volutpat tortor in eros porta, consequat facilisis ipsum 
  lacinia. Vestibulum facilisis tempus ligula id sodales. Donec at libero magna. Donec egestas lacus 
  tellus, vitae suscipit felis tristique eget. Praesent ex erat, imperdiet a molestie facilisis, 
  laoreet a ipsum. Vestibulum et metus a turpis fringilla egestas quis vitae leo. Maecenas tempus 
  eu nunc sed pellentesque. Suspendisse ultricies metus eget porta pharetra.
  Donec interdum dapibus dolor, vitae tempor magna maximus id. Nullam ut erat at odio accumsan 
  molestie non non dolor. Integer in vehicula ipsum, ornare efficitur nibh. Praesent in gravida velit. 
  Aliquam vitae nisi dictum justo sollicitudin suscipit quis condimentum arcu. Vivamus ac ex sollicitudin 
  tortor eleifend dignissim. Maecenas ultrices arcu augue, quis cursus nisi aliquam quis. Nunc egestas nibh 
  augue, id sollicitudin quam tincidunt in.
  `
  
  console.log(text.split(' ').filter(function(n) { return n != '' }).length);
  console.log(text.split(' ').filter(function(n) { return n != '' }).filter(function(m) { return m == 'et' })
  .length);
  
}

function palindromeCheck(givenString){
  let newString = givenString.toLowerCase();
  newString = newString.split(' ').filter(function(n) { return n != '' })
  let mainString = "";
  for(let index=0; index<givenString.length; index++){
    if(givenString[index]!==" " && givenString[index]!==","){
      mainString+=givenString[index]
    }
  }
  mainString = mainString.toLowerCase()

  const len = mainString.length;

  for (let i = 0; i < len / 2; i++) {

    if (mainString[i] !== mainString[len - 1 - i]) {
      return 'It is not a palindrome';
    }
  }
    return 'It is a palindrome';
}

checkForVowels("Kalvian");
checkForUpperCase("Kalvian");
playWithChar("Driver","Navigator");
loremGenerator()
console.log(palindromeCheck("A man, a plan, a canal, Panama"))
