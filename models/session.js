module.exports = function (sequelize, DataTypes) {



    var Sessions = sequelize.define("sessions", {


            sid: {
                type: DataTypes.STRING,
                primaryKey: true
            },

            expires: {
<<<<<<< HEAD
                type:DataTypes.DATE},
            data: {
                    type:DataTypes.BLOB
                
                },
        
            id:{
                type: DataTypes.INTEGER,

            }
        }
=======
                type: DataTypes.DATE
            },

            data: {
                type: DataTypes.BLOB

            },


            type: DataTypes.DATE
        },



>>>>>>> 2f97b1ae757f1a63045ec683c63765cd214fb4c2


    )

    return Sessions;
}