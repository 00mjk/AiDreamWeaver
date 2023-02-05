const PlaygroundAI = require('../utils/playgroundai/playgroundai');

const main = async () => {
  const playgroundAI = new PlaygroundAI({
    sessionToken: '40000a5e-2333-470e-b170-2e996b138c26',
    csrfToken: 'a2bf7b112c7060e64284875fa2a97185e77d7b0e2d33719f72db1dfcb310c6f1%7C0130deeec567805eef4a86ae0446e4b748b71dd82bd9f0b823dd2c962ac49c29'
  });
  const info = await playgroundAI.create('tiger');
  console.log('INFO', info);
}

main();