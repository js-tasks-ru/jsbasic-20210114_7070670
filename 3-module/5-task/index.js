function getMinMax(str) {
  let a = str.split(",").join(" ").split(" ").filter(item =>isFinite(+item)).map(item=>(+item));
  let result={
   min : Math.min(...a),
   max : Math.max(...a)
  };  
  return result;
    //return ( "min: " +mini+ ", max: " +maxi );
  }
