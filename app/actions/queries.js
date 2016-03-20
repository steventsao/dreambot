import { connection, r } from '../utils/rethink';

export function getMessages() {
  return connection
    .then(conn =>
      r.table('messages').run(conn)
        .then(cursor => cursor.toArray())
    );
}

export function getSearchResults(word) {
  return connection
    .then(conn =>
      r.table('messages').filter(message =>
        message('name').eq(word).or(message('tokens').contains(word)))
      .run(conn)
      .then(cursor => cursor.toArray())
    );
}
