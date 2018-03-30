function getOSinfo() {
  let type = os.type();
  if (type === "Darwin") {
    type = 'OSX';
  } else if (type === 'Windows_NT') {
    type = 'Windows';
  }

  const release = os.release();
  const cpu = os.cpus()[0].model;
  const uptime = Math.floor(os.uptime() / 60);
  const userInfo = os.userInfo();
  console.log('System:', type);
  console.log('Release', release);
  console.log('CPU model:', cpu);

  /* var uptime = os.uptime();
  console.log('Uptime: ~', (uptime / 60).toFixed(0), 'min'); */
  console.log('Uptime:', uptime, 'full minutes');
  console.log('User name:', userInfo.username);
  console.log('Home dir:', userInfo.homedir);
}