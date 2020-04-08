const db = require('../models')
const UserProfile = db.UserProfile;
const Op = db.Sequelize.Op;

module.exports = {
    create: (name, lastname, publickey) => {
        return UserProfile.create({
            name: name,
            lastname: lastname,
            publickey: publickey
        })
    },


    findAll: () => {
        return UserProfile.findAll()
    },

    findAllByLastName: (lastname) => {
        // let condition = lastname ? { lastname: { [Op.like]: `%${lastname}%` } } : null;
        let condition = lastname ? { lastname: { [Op.like]: `${lastname}` } } : null;
        
        return UserProfile.findAll({ where: condition })        
    },

    findOne: (id) => {
        return UserProfile.findByPk(id)
    },

    
    update: (id, body) => {
        return UserProfile.update(body, {
            where: { id: id }
        }).then(num => {
                if (num == 1) {
                    return {
                        message: `UserProfile was updated successfully.`
                    };
                }
                if (num != 1) {
                    return{
                        message: `Cannot update UserProfile with id=${id}. Maybe UserProfile was not found or req.body is empty!`
                    };
                }
            })
            .catch(error => {
                return {
                    message: `Error updating UserProfile with id=${id}.`
                };
            });

    },

    delete: (id) => {
        return UserProfile.destroy({
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    return({
                        message: "UserProfile was deleted successfully!"
                    });
                } else {
                    return({
                        message: `Cannot delete UserProfile with id=${id}. Maybe UserProfile was not found!`
                    });
                }
            })
            .catch(error => {
                return({
                    message: "Could not delete UserProfile with id=" + id
                });
            });
    },

    deleteAll: () => {
        return UserProfile.destroy({
            where: {},
            truncate: false
        })
            .then(nums => {
                return({ message: `${nums} UserProfiles were deleted successfully!` });
            })
            .catch(error => {
                return({
                    message:
                        err.message || "Some error occurred while removing all UserProfiles."
                });
            });
    }

}




