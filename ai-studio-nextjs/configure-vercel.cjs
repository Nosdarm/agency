const https = require('https');
const fs = require('fs');
const path = require('path');
const os = require('os');

// Get Vercel token from auth file
let token;
try {
  const authPath = path.join(os.homedir(), 'AppData', 'Roaming', 'com.vercel.cli', 'Data', 'auth.json');
  const authData = JSON.parse(fs.readFileSync(authPath, 'utf8'));
  token = authData.token;
} catch (e) {
  console.error('Failed to get Vercel token. Make sure you are logged in with `vercel login`');
  console.error(e.message);
  process.exit(1);
}

const projectId = 'prj_OsJpaH9nXtX1QDCOlw5Kzc5cSCI7';
const teamId = 'team_v8HmiGpo3uPoK8wZvtFK55oO';

// Update project settings to use 'prod' as production branch
const data = JSON.stringify({
  gitForkProtection: true,
  gitLFS: false,
  productionBranch: 'prod',
  autoExposeSystemEnvs: true
});

const options = {
  hostname: 'api.vercel.com',
  path: `/v9/projects/${projectId}?teamId=${teamId}`,
  method: 'PATCH',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = https.request(options, (res) => {
  let responseData = '';

  res.on('data', (chunk) => {
    responseData += chunk;
  });

  res.on('end', () => {
    if (res.statusCode === 200) {
      console.log('✓ Successfully configured Vercel project:');
      console.log('  - Production branch: prod');
      console.log('  - Dev branch: automatic preview deployments');
      const response = JSON.parse(responseData);
      console.log('\n✓ Current settings:', {
        productionBranch: response.productionBranch || response.link?.productionBranch,
        name: response.name
      });
    } else {
      console.error('Failed to update project:', res.statusCode);
      console.error(responseData);
    }
  });
});

req.on('error', (error) => {
  console.error('Error:', error);
});

req.write(data);
req.end();
