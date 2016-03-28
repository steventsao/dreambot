import { r, RP } from 'rethinkdb-websocket-server';
import jwt from 'jwt-simple';
import connect from '../utils/connect';
import env from '../utils/envDefaults';

const runQuery = (query) => connect().then((conn) => query.run(conn));

export const sessionCreator = (urlQueryParams) => {
  try {
    const { iss: userId } = jwt.decode(urlQueryParams.token, env.secret);
    const userQuery = r.table('authorized_users').get(userId);
    return runQuery(userQuery)
      .then((user) => {
        if (user.login !== 'Thr1ve') {
          return Promise.reject('Invalid auth token');
        }
        return user;
      });
  } catch (e) {
    console.log(e);
    return Promise.reject('Invalid auth token');
  }
};


export const queryWhitelist = [
  // r.table('messages').changes().opt('db', r.db('test'))
  r.table('messages')
    .changes()
    .opt('db', r.db('test')),

  // r.table('messages').opt('db', r.db('test'))
  r.table('messages')
    .opt('db', r.db('test'))
    .validate((refs, session) => {
      console.log('REFS: ', refs);
      console.log('SESSION: ', session);
      return true;
    }),

  // r.table('messages').getField('tokens').concatMap(function(var_0) { return var_0; }).opt('db', r.db('test'))
  r.table('messages')
    .getField('tokens')
    .concatMap((var0) => var0)
    .opt('db', r.db('test')),

  // r.table('messages').filter(r.row('ts').date().eq(r.time(2016, 3, 27, 'Z'))).group(r.row('ts').hours()).count().opt('db', r.db('test'))
  r.table('messages')
    .filter(r.row('ts').date().eq(r.time(2016, 3, 27, 'Z')))
    .group(r.row('ts').hours())
    .count()
    .opt('db', r.db('test')),

  // r.table('messages').hasFields('name').group('name').count().opt('db', r.db('test'))
  r.table('messages')
    .hasFields('name')
    .group('name')
    .count()
    .opt('db', r.db('test')),
];

export const findAuthorizedUser = (filter) => connect()
  .then(conn => r.table('authorized_users').filter(filter).run(conn)
    .then(cursor => cursor.toArray()));

export const createAuthorizedUser = (user) => connect()
  .then(conn => r.table('authorized_users').insert(user, { returnChanges: true }).run(conn));
