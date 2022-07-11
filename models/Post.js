const Sequelize = require("sequelize");
const sequelizeConnection = require("../config/sequelizeConnection");

const Post = sequelizeConnection.define(
  "post",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    content: {
      type: Sequelize.TEXT,
      allowNull: false
      },

    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      reference: {
        model: 'User',
        key: 'id'
      }
      }
    },
  {
    sequelize: sequelizeConnection,
    timestamps: false,
    freezeTableName: true,
    modelName: "posts",
    underscored: true,
  }
);


module.exports = Post;
