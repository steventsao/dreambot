export default {
  port: process.env.PORT || 1337,
  isDev: process.env.NODE_ENV !== 'production',

  // RethinkDb
  rethinkHost: process.env.RETHINK_HOST || 'localhost',
  rethinkPort: process.env.RETHINK_PORT || 28015,
  rethinkDb: process.env.RETHINK_DB || 'test',

  // Auth
  secret: process.env.SECRET || 'KEYBOARDLKJR;B34BQP3O4BGAKCATCATCAT434490',
  allowedOrg: process.env.ALLOWED_ORG || 'hrr13-thedreamteam'
};
