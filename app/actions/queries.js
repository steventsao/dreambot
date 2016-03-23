import { connection, r } from '../utils/rethink';
import moment from 'moment';

export function getMessages() {
  return connection
    .then(conn =>
      r.table('messages')
        .run(conn)
        .then(cursor => cursor.toArray())
    );
}

export function getSearchResults(word) {
  return connection
    .then(conn =>
      r.table('messages')
        .filter(message =>
          message('name').eq(word).or(message('tokens').contains(word))
        )
        .run(conn)
        .then(cursor => cursor.toArray())
    );
}

// TODO: add number of messages for each hour?
export function getAvgMessagesByHour({ year, month, day }) {
  return connection
    .then(conn =>
      r.table('messages')
        .filter(
          r.row('ts').date().eq(r.time(year, month, day, 'Z'))
        )
        .group(r.row('ts').hours())
        .avg('score')
        .run(conn)
        .then(cursor => cursor.toArray())
    );
}

export function getAvgMessagesByDayOfWeek() {
  return connection
    .then(conn =>
      r.table('messages')
        .group(r.row('ts').dayOfWeek())
        .avg('score')
        .run(conn)
        .then(cursor => cursor.toArray())
    );
}

export function getAllUniqueWords() {
  return connection
    .then(conn =>
      r.table('messages')
      .getField('tokens')
      .concatMap(doc => doc)
      .run(conn)
      .then(cursor => cursor.toArray())
      )
}
