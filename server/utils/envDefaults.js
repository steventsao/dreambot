export const port = process.env.PORT || 1337;
export const isDev = process.env.NODE_ENV !== 'production';

// RethinkDb
export const rethinkHost = process.env.RETHINK_HOST || 'localhost';
export const rethinkPort = process.env.RETHINK_PORT || 28015;
export const rethinkDb = process.env.RETHINK_DB || 'test';

// Auth
export const jwtSecret = process.env.SECRET || 'KEYBOARDLKJR;B34BQP3O4BGAKCATCATCAT434490';

// Github Auth
export const allowedOrg = process.env.ALLOWED_ORG || 'hrr13-thedreamteam';
export const githubClientSecret = process.env.GITHUB_CLIENT_ID;
export const githubClientId = process.env.GITHUB_CLIENT_SECRET;
export const ghCallback = process.env.GITHUB_AUTH_CALLBACK;

// Slack
export const slackToken = process.env.token;

if (!ghCallback) {
  console.log('Error: You must specify a Github Authentication Callback URL');
  process.exit(1);
}

if (!isDev && !process.env.SECRET) {
  console.log('Error: You must specify a JWT Secret in production');
  process.exit(1);
}

if (!githubClientId || !githubClientSecret) {
  console.log('Error: Please specify a valid Github Client ID and Secret in environment');
  process.exit(1);
}

if (!slackToken) {
  console.log('Error: Specify slack token in environment');
  process.exit(1);
}
