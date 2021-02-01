/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  
    var total = 1;
    
    for (i = 0; i < n; i++){
        total = total * (n - i);
    }
    
    return(total);
 
}
