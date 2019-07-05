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
=======
                type: DataTypes.DATE
            },
            data: {
                type: DataTypes.BLOB
            }


>>>>>>> 36201787d8937c9970b5ed315cc2b869ca013111
        }


    )

    return Sessions;
}