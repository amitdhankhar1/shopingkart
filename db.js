const sequelize =require('sequelize')
const db= new sequelize('shopdb','shopper','shoppass',
host :'localhost',
dialect:'mysql',
pool{
    min:0,max:5,
}
})
const user=db.define('users',{

id:{
    type:sequelize.INTEGER,
    primaryKey:true,
    autoIncreament:true
},
name:{
    type:sequelize.STRING,
    allowNull:false
},
manufacturer:sequelize.STRING,
price:{
    type:sequelize.FLOAT,
    allowNull:false,
    defaultValue:0.0

}
})
exports=module.exports={
    user,product
}







