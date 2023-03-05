const pool = require('../../config/db.config')

module.exports = {
    create: (data, callback) => {
        pool.query(
            `insert into user(status,firstName,LastName,emailAddress,password,gender,username,role) values(?,?,?,?,?,?,?,?)`,
            [
                data.status,
                data.firstName,
                data.LastName,
                data.emailAddress,
                data.password,
                data.gender,
                data.username,
                data.role
            ],
            (err, result)=>{
                if (err) {
                   return callback(err) 
                }
                return callback(null, result)
            }
        );
    },
    getUsers: callback => {
        pool.query(`
            select id,status,firstName,LastName,phoneNumber,emailAddress,gender,dob,username,shortBio,role,photo,lastLogin,createdAt from user`,
            [],
            (err, result)=>{
                if (err) {
                    callback(err)
                }
                return callback(null, result)
            }
        );
    },
    getUsersById: (id, callback) => {
        pool.query(`
            select id,status,firstName,LastName,phoneNumber,emailAddress,gender,dob,username,shortBio,role,photo,lastLogin,createdAt from user where id = ?`,
            [id],
            (err, result)=>{
                if (err) {
                    return callback(err)
                }
                return callback(null, result)
            }
        );
    },
    updateUser: (data, callback) => {
        pool.query(`
        update user set status=?,firstName=?,LastName=?,phoneNumber=?,emailAddress=?,gender=?,dob=?,username=?,shortBio=?,photo=? where id=?`,
            [
                data.status,
                data.firstName,
                data.LastName,
                data.phoneNumber,
                data.emailAddress,
                data.gender,
                data.dob,
                data.username,
                data.shortBio,
                data.photo,
                data.id
            ],
            (err, result)=>{
                if (err) {
                    return callback(err)
                }
                return callback(null, result[0])
            }
        );
    },
    deleteUser: (id, callback) => {
        pool.query(`delete from user where id =?`,
        [id],
        (err, result)=>{
            if (err) {
                return callback(err)
            }
            return callback(null, result[0])
        })
    },
    getUserByEmail: (email, callback) => {
        pool.query(`select * from user where emailAddress =?`,
        [email],
        (err, result)=>{
            if (err) {
                return callback(err)
            }
            return callback(null, result[0])
        })
    }
}