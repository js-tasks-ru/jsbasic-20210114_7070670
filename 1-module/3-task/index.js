/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str){
  if (+str!=0){
    return(str[0].toUpperCase()+str.slice(1))
  } else return str
  };