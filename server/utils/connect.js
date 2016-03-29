import r from 'rethinkdb';
import { rethinkHost, rethinkPort, rethinkDb } from './envDefaults';

// TODO: pull connection info from env instead of hardcoding
const connect = () =>
  r.connect({
    host: rethinkHost,
    port: rethinkPort,
    db: rethinkDb
  });

export default connect;
