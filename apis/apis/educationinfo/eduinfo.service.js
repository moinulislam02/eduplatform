const pool = require('../../config/db.config')

module.exports = {
    create: (data, callback) => {
        pool.query(
            `insert into eduinfo(degree,department,institute,status,userId) values(?,?,?,?,?)`,
            [
                data.degree,
                data.department,
                data.institute,
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
    getAllEduInfo: callback => {
        pool.query(`
            select id,degree,department,institute,status,userId,createdAt from eduinfo`,
            [],
            (err, result)=>{
                if (err) {
                    callback(err)
                }
                return callback(null, result)
            }
        );
    },
    getEduInfoById: (id, callback) => {
        pool.query(`
            select id,degree,department,institute,status,userId,createdAt from eduinfo where id = ?`,
            [id],
            (err, result)=>{
                if (err) {
                    return callback(err)
                }
                return callback(null, result)
            }
        );
    },
    getEduInfoByUserId: (uid, callback) => {
        pool.query(`
            select id,degree,department,institute,status,userId,createdAt from eduinfo where userId = ?`,
            [uid],
            (err, result)=>{
                if (err) {
                    return callback(err)
                }
                return callback(null, result)
            }
        );
    },
    updateEduInfoByUserId: (data, callback) => {
        pool.query(`
        update eduinfo set degree=?,department=?,institute=?,status=? where userId=?`,
            [
                data.degree,
                data.department,
                data.institute,
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
    deleteEduInfo: (id, callback) => {
        pool.query(`delete from eduinfo where id =?`,
        [id],
        (err, result)=>{
            if (err) {
                return callback(err)
            }
            return callback(null, result[0])
        })
    }
}