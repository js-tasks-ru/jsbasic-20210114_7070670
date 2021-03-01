let calculator = {
  read (a,b){
    //let a = prompt (a);
    //let b = prompt (b);
    calculator.a = Number(a);
    calculator.b = Number (b);  
   },
  
   sum(){
    return(this.a+this.b);
   },
   mul(){
    return(this.a*this.b);
   }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
