
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  if (matrix==undefined){return []};
  for (let r=0; r<matrix.length; r ++) {
    for (let c=0; c<matrix[r].length; c++) {
      if (r%2==0){
      arr.push(matrix[r][c]);
    }
    else {
      arr.push(matrix[r][matrix[r].length-c-1]);
    }
}
  }
  return arr;
}
