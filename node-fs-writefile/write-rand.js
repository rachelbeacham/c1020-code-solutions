const fs = require('fs');
const data = function () {
  let randomNum = Math.random() * Math.floor(20);
  randomNum = Math.floor(randomNum);
  return randomNum;
};

fs.writeFile('random.txt', data(), 'utf8', err => {
  if (err) throw err;
});
