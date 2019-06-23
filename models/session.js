module.exports = function (sequelize, DataTypes){



var Sessions = sequelize.define("sessions",{


            sid :{
                type: DataTypes.STRING,
                primaryKey:true
            },

            expires: {
                type:DataTypes.DATE},
                data: {
                    type:DataTypes.STRING(50000)}
        
        
        }


)

return Sessions;
}