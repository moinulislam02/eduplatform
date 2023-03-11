const pool = require('../../config/db.config')

module.exports = {
    create: (data, callback) => {
        pool.query(
            `insert into tags(name,count,status) values(?,?,?)`,
            [
                data.name,
                data.count,
                data.status
            ],
            (err, result)=>{
                if (err) {
                   return callback(err) 
                }
                return callback(null, result)
            }
        );
    },
    getTags: callback => {
        pool.query(`
            select id,name,count,createdAt,status from tags`,
            [],
            (err, result)=>{
                if (err) {
                    callback(err)
                }
                return callback(null, result)
            }
        );
    },
    getTagById: (id, callback) => {
        pool.query(`
            select id,name,count,createdAt,status from tags where id = ?`,
            [id],
            (err, result)=>{
                if (err) {
                    return callback(err)
                }
                return callback(null, result)
            }
        );
    },
    updateTag: (data, callback) => {
        pool.query(`
        update tags set name=?,count=?,status=? where id=?`,
            [
                data.name,
                data.count,
                data.status,
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
    deleteTag: (id, callback) => {
        pool.query(`delete from tags where id =?`,
        [id],
        (err, result)=>{
            if (err) {
                return callback(err)
            }
            return callback(null, result[0])
        })
    }
}