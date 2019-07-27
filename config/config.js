require('dotenv').config();
module.exports=
{
  "development": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql",
    "DATABASE_PASSWORD":process.env.PASSWORD,
    "host":"bqmayq5x95g1sgr9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "username":	"uz9b9jrkzrggpoeo"


  },
  "test": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql",
    "DATABASE_PASSWORD":process.env.PASSWORD,
    "Host":"bqmayq5x95g1sgr9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "username":	"uz9b9jrkzrggpoeo"

  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql",
    "DATABASE_PASSWORD":process.env.PASSWORD,
    "Host":"bqmayq5x95g1sgr9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "username":	"uz9b9jrkzrggpoeo"
  }
};
