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
        console.log('Node.js version is', process.versions.node, '\n');
        break;
      case '/sysLang':
        process.stdout.write('System language is', process.env.LANG, '\n');
        break;
      case '/versionNodeAndSysLang':
        process.stdout.write('System language is', process.env.LANG, '\n' + 'Node.js version is', process.versions.node, '\n');
        break;
      case '/getOSinfo':
        getOSinfo();
        break;
      default:
        process.stderr.write('Wrong instruction!\n');
    }
  }
});