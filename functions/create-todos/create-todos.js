const faunadb = require("faunadb")
const q = faunadb.query
const client = new faunadb.Client({secret: "fnAD6jHmppACA2JtJYYd9Kt3d-3KVEAJZWllX084"})  

client.query(
  q.CreateDatabase({ name: 'my_app' })
)
.then((ret) => console.log(ret))