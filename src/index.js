
module.exports = function towelSort (matrix) {
  let a = [];
  if(matrix === undefined || matrix.length < 1) return [];
  matrix.forEach((item, index) => {
    index%2 === 0 ? a.push(item) : a.push(item.reverse())
  });
  return a.flat();
}