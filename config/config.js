require('dotnev').config();
module.exports=
{
  "development": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql",
    "storage": "./session.mysql",
    "password": "PASSWORD"


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
    "storage": "./session.mysql",
    "password": "PASSWORD"
  }
};
