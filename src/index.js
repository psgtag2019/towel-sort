
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) return [];
    a = matrix.reduce((accum, m_item, i) => {
        m_item.sort((a, b) => (i % 2 == 0) ? a - b : b - a).map(e => accum.push(e));
        return accum;
    }, []);
  return a;
}


