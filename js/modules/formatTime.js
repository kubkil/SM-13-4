const os = require('os');

function calcTime(time) {
  time = os.uptime();
  let hours = Math.floor(time / 3600);
  time = time - hours * 3600;
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);
  time = hours + 'h ' + minutes + 'min ' + seconds + 'sec';
  console.log('Uptime is: ' + time);
}

exports.print = calcTime;