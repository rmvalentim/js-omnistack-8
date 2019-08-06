# Mongo Db config file:

## Filename: mongoSbConfig.js:
```
const username = 'username';
const password = 'password';
const databaseName = 'database';

module.exports =  
`mongodb+srv://${username}:${password}@cluster0-rrrjc.mongodb.net/${databaseName}?retryWrites=true&w=majority`
```
