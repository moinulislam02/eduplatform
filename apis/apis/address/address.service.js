const pool = require('../../config/db.config')

module.exports = {
    create: (data, callback) => {
        pool.query(
            `insert into address(address,city,district,division,country,status,userId) values(?,?,?,?,?,?,?)`,
            [
                data.address,
                data.city,
                data.district,
                data.division,
                data.country,
                data.status,
                data.userId
            ],
            (err, result)=>{
                if (err) {
                   return callback(err) 
                }
                return callback(null, result)
            }
        );
    },
    getAllAddress: callback => {
        pool.query(`
            select id,address,city,district,division,country,status,userId,createdAt from address`,
            [],
            (err, result)=>{
                if (err) {
                    callback(err)
                }
                return callback(null, result)
            }
        );
    },
    getAddressById: (id, callback) => {
        pool.query(`
            select id,address,city,district,division,country,status,userId,createdAt from address where id = ?`,
            [id],
            (err, result)=>{
                if (err) {
                    return callback(err)
                }
                return callback(null, result)
            }
        );
    },
    getAddressByUserId: (uid, callback) => {
        pool.query(`
            select id,address,city,district,division,country,status,userId,createdAt from address where userId = ?`,
            [uid],
            (err, result)=>{
                if (err) {
                    return callback(err)
                }
                return callback(null, result)
            }
        );
    },
    updateAddressByUserId: (data, callback) => {
        pool.query(`
        update address set address=?,city=?,district=?,division=?,country=?,status=? where userId=?`,
            [
                data.address,
                data.city,
                data.district,
                data.division,
                data.country,
                data.status,
                data.userId
            ],
            (err, result)=>{
                if (err) {
                    return callback(err)
                }
                return callback(null, result[0])
            }
        );
    },
    deleteAddress: (id, callback) => {
        pool.query(`delete from address where id =?`,
        [id],
        (err, result)=>{
            if (err) {
                return callback(err)
            }
            return callback(null, result[0])
        })
    }
}