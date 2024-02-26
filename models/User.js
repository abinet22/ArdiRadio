module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("User", {
      user_id: {
        type: DataTypes.STRING,
     
      },
  full_name: {
    type: DataTypes.STRING,
 
  },
  email: {
    type: DataTypes.STRING,
   
  },

  phone_number: {
    type: DataTypes.STRING,
  
   },
  user_name: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
 
  is_active: {
    type: DataTypes.STRING
  }
  
})
    return User;
};


