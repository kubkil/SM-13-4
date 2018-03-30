const OSinfo = require('../modules/OSinfo');
console.log('Type: ' + '\n' + '- /exit to quit,' + '\n' + '- /versionNode to show Node version,' + '\n' + '- /sysLang to show system language,' + '\n' + '- /getOSinfo to show system info.')
process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function () {
  const input = process.stdin.read();
  if (input !== null) {
    const instruction = input.toString().trim();
    switch (instruction) {
      case '/exit':
        process.stdout.write('Quitting app!\n');
        break;
      case '/versionNode':
        console.log('Node.js version is ' + process.versions.node + '\n');
        break;
      case '/sysLang':
        process.stdout.write('System language is ' + process.env.LANG + '\n');
        break;
      case '/versionNodeAndSysLang':
        process.stdout.write('System language is ' + process.env.LANG, '\n' + 'Node.js version is' + process.versions.node + '\n');
        break;
      case '/getOSinfo':
        OSinfo.print();
        break;
      default:
        process.stderr.write('Wrong instruction!\n');
    }
  }
});