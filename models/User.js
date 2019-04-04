module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        accountId: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        }
    }, {});

    User.associate = (models) => {
        User.hasMany(models.favorite);
    }

    return User;
}