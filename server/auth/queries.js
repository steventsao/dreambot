import { r, RP } from 'rethinkdb-websocket-server';

export const queryWhitelist = [
  // r.table("messages").changes().opt("db", r.db("test"))
  r.table("messages").changes().opt("db", r.db("test")),

  // r.table("messages").opt("db", r.db("test"))
  r.table("messages").opt("db", r.db("test"))
    .validate((refs, session) => {
      console.log('REFS: ', refs);
      console.log('SESSION: ', session);
      return true;
    }),

  // r.table("messages").getField("tokens").concatMap(function(var_0) { return var_0; }).opt("db", r.db("test"))
  r.table("messages").getField("tokens").concatMap(function(var_0) { return var_0; }).opt("db", r.db("test")),

  // r.table("messages").filter(r.row("ts").date().eq(r.time(2016, 3, 27, "Z"))).group(r.row("ts").hours()).count().opt("db", r.db("test"))
  r.table("messages").filter(r.row("ts").date().eq(r.time(2016, 3, 27, "Z"))).group(r.row("ts").hours()).count().opt("db", r.db("test")),

  // r.table("messages").hasFields("name").group("name").count().opt("db", r.db("test"))
  r.table("messages").hasFields("name").group("name").count().opt("db", r.db("test")),
]
