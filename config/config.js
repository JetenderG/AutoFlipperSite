require('dotenv').config();
module.exports=
{
  "development": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql",
    "DATABASE_PASSWORD":process.env.PASSWORD,
    "Host":"bqmayq5x95g1sgr9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "Username":	"uz9b9jrkzrggpoeo"


  },
  "test": {
    "username": "root",
    "password": "root",
    "database": "autoflipper_db",
    "host": "localhost",
    "dialect": "mysql",
    "port": "3306",
    "logging": false,
    "storage": "./session.mysql"

  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql",
    "DATABASE_PASSWORD":process.env.PASSWORD,
    "Host":"bqmayq5x95g1sgr9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "Username":	"uz9b9jrkzrggpoeo"
  }
};
