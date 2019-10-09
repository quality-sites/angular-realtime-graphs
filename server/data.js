let dataPositions = [{ data : [65, 59, 80, 81, 56, 55, 40]}];

function updateData() {
  dataPositions[0].data = dataPositions[0].data.map(function(item, index){ 
    return item[index] = Math.floor(Math.random() * 100);
  });
}

module.exports = {
  dataPositions,
  updateData
};
