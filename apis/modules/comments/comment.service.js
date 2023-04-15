const pool = require('../../config/db.config')

module.exports = {
    create: (data, callback) => {
        pool.query(
            `insert into comments(content,status,userId,postId) values(?,?,?,?)`,
            [
                data.content,
                data.status,
                data.userId,
                data.postId
            ],
            (err, result)=>{
                if (err) {
                   return callback(err) 
                }
                return callback(null, result)
            }
        );
    },
    getAllComments: callback => {
        pool.query(`
            select * from comments`,
            [],
            (err, result)=>{
                if (err) {
                    callback(err)
                }
                return callback(null, result)
            }
        );
    },
    getCommentById: (id, callback) => {
        pool.query(`
            select * from comments where id = ?`,
            [id],
            (err, result)=>{
                if (err) {
                    return callback(err)
                }
                return callback(null, result)
            }
        );
    },
    getCommentByUserId: (uid, callback) => {
        pool.query(`
            select id,content,status,userId,postId,createdAt from comments where userId = ?`,
            [uid],
            (err, result)=>{
                if (err) {
                    return callback(err)
                }
                return callback(null, result)
            }
        );
    },
    deleteComment: (id, callback) => {
        pool.query(`delete from comments where id =?`,
        [id],
        (err, result)=>{
            if (err) {
                return callback(err)
            }
            return callback(null, result[0])
        })
    }
}