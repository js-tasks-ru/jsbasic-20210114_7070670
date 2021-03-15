function showSalary(users, age) {
  
  let a =users.filter((user) => (user.age <= age));
  let b= a.map((user, index)=> {
    if (index!== a.length-1) {
    return (`${user.name}, ${user.balance}\n`);
    }else{
      return (`${user.name}, ${user.balance}`);
    }})
  .join("");
  return b;
}
