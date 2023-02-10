
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  if (matrix==undefined){return []};
  for (let r=0; r<matrix.lenght; r ++) {
    for (let c=0; c<matrix[r].lenght; c++) {
      arr.push(matrix[r][c]);
    }
  
  
  }
  return arr;
}
