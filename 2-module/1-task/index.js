/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */

function sumSalary(salaries)  {
  let sum=0;
  for (key in salaries ) {
    if  (isFinite(salaries[key]))
    sum =sum + salaries[key];
    };
  return sum;
}
