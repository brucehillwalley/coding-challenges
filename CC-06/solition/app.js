function generatePassword(){
    const passwordLength = 10;
    const lowerCaseLetters="abcdefghijklmnopqrstuvwxyz"
    const upperCaseLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const number="0123456789"
    const symbols="!@#$%&^()_+"

    const allCharacters=lowerCaseLetters+upperCaseLetters

    let password=""
    for(let i=0;i<passwordLength;i++){
if(i<3){
    password+=number.charAt(Math.floor(Math.random()*number.length))
}

else if(i>2 && i<5){
    password+=symbols.charAt(Math.floor(Math.random()*symbols.length))

}

else if(i==5){
    password+=upperCaseLetters.charAt(Math.floor(Math.random()*upperCaseLetters.length))

}
else if(i==6){
    password+=lowerCaseLetters.charAt(Math.floor(Math.random()*lowerCaseLetters.length))

}
else{
    password+=allCharacters.charAt(Math.floor(Math.random()*allCharacters.length))

}
// let karekter=Math.floor(Math.random()*allCharacters.length)
// password+=allCharacters.charAt(karekter)
    }    

    let arrayPassword=password.split("")
    arrayPassword.sort(()=>Math.random()-0.5)
    //? random bir sıralama yapmış olduk
    password=arrayPassword.join("")
    console.log(arrayPassword);

    document.querySelector("#password-display").textContent=`${password}`
}

