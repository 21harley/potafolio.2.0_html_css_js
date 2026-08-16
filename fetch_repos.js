const https = require('https');
const fs = require('fs');

const options = {
  hostname: 'api.github.com',
  path: '/users/21harley/repos?per_page=100&sort=updated',
  method: 'GET',
  headers: {
    'User-Agent': 'node.js'
  }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const repos = JSON.parse(data);
    const result = repos.map(r => ({
      name: r.name,
      description: r.description,
      language: r.language,
      size: r.size,
      topics: r.topics
    }));
    fs.writeFileSync('repos.json', JSON.stringify(result, null, 2));
    console.log('Done!');
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.end();
