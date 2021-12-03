let accessTime = new Date();

alertBox.addEventListener('click', function alertBox(){
    window.alert("Atenção!!!");
})

confirmBox.addEventListener('click', function confirmBox(){
    window.confirm("Você realmente deseja realizar esta ação?"); 
})

askName.addEventListener('click', function askName(){
    let name = prompt("Qual o seu nome?", "Jerry");
    window.alert("O seu nome é: " + name);

})

askData.addEventListener('click', function askData(){
    let name = prompt("Qual o seu nome?");
    let age = prompt("Qual a sua idade?");
    let likeSport = confirm("Voce gosta de esportes?");
    
    console.log(name, age, likeSport)
})

askAllName.addEventListener('click', function askAllName(){
    let lName = window.prompt("Qual o seu sobrenome?");
    let fName = window.prompt("Qual o seu nome?");
    
    window.alert(fName + " " + lName);
})

askNumLetters.addEventListener('click', function askNumLetters(){
    let lName = window.prompt("Qual o seu último sobrenome?");    
    numLetras = lName.length;

    window.alert("Olá, " + (lName.toUpperCase()) + ". Seu sobrenome contém " + numLetras + " letras");
})

askAge.addEventListener('click', function askAge(){
    let bYear = window.prompt("Qual o ano do seu nascimento?");
    let cYear = window.prompt("Qual o ano atual?");
    
    let ageBeforeB = cYear - bYear - 1;
    let ageAfterB = cYear - bYear;

    window.alert("Sua idade é " + ageBeforeB + " ou " + ageAfterB);
})

calculator.addEventListener('click', function calculator(){
    let MatType = window.prompt("qual o tipo de cálculo ele deseja fazer (“+”, “-”, “*” ou “/”)");
    let value1 = window.prompt("Qual o primeiro valor?");
    let value2 = window.prompt("Qual o segundo valor?");
    value1 = parseInt(value1);
    value2 = parseInt(value2);

    let result
    if (MatType == '+'){
        result = value1 + value2;
    }
    else if (MatType == '-'){
        result = value1 - value2;
    }
    else if (MatType == '*'){
        result = value1 * value2;
    }
    else if (MatType == '/'){
        result = value1 / value2;
    }

    if(typeof result == 'number'){
        window.alert("O resultado do seu cálculo é: " + result);
    }
    else{
        window.alert("valor invalido");
    }
})

displayTime.addEventListener('click', function displayTime(){
    let hour = accessTime.getHours();
    let minute = accessTime.getMinutes();

    window.alert(hour + ":" + minute);
})

calculatorArray.addEventListener('click', function calculatorArray(){
    let initValue = window.prompt("Qual o valor inicial?");
    let squareValue = window.prompt("Qual o valor da raíz?");
    initValue = parseInt(initValue);
    squareValue = parseInt(squareValue);

    if(typeof result == 'number'){
        let arrayValues = [initValue];
        for(let i = 1; 10 > i; i++){
            initValue += squareValue;
            arrayValues.push(initValue);
        }
        window.alert(arrayValues);
    }
    else{
        window.alert("valor invalido");
    }
    
})