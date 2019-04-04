module.exports = (sequelize, DataTypes) => {
    const Favorite = sequelize.define('favorite', {
        matchId: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {});

    Favorite.associate = (models) => {
        Favorite.belongsTo(models.user)
    }

    return Favorite;
}