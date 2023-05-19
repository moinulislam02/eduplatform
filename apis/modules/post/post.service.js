const pool = require('../../config/db.config')

module.exports = {
    create: (data, callback) => {
        pool.query(
            `insert into posts(description,photo,likeCount,commentCount,shareCount,status,userId) values(?,?,?,?,?,?,?)`,
            [
                data.description,
                data.photo,
                data.likeCount,
                data.commentCount,
                data.shareCount,
                data.status,
                data.userId,
            ],
            (err, result)=>{
                if (err) {
                   return callback(err) 
                }
                return callback(null, result)
            }
        );
    },
    getAllPost: callback => {
        pool.query(`
        select posts.id, posts.description,posts.photo, posts.likeCount, posts.shareCount,posts.commentCount,posts.status,posts.userId,posts.createdAt , user.id, user.status, user.firstName, user.LastName, user.phoneNumber, user.emailAddress, user.gender, user.dob, user.username, user.shortBio
        from posts join user ON posts.userId = user.id where posts.status = "0" ORDER BY posts.createdAt DESC`,
            [],
            (err, result)=>{
                if (err) {
                    callback(err)
                }
                return callback(null, result)
            }
        );
    },
    getPostById: (id, callback) => {
        pool.query(`
            select * from posts where id = ?`,
            [id],
            (err, result)=>{
                if (err) {
                    return callback(err)
                }
                return callback(null, result)
            }
        );
    },
    getPostByUserId: (uid, callback) => {
        pool.query(`
            select * from posts where userId = ?`,
            [uid],
            (err, result)=>{
                if (err) {
                    return callback(err)
                }
                return callback(null, result)
            }
        );
    },
    updatePostById: (data, callback) => {
        pool.query(`
        update posts set description=?,photo=?,spam_Count=?,likeCount=?,commentCount=?,shareCount=?,status=? where id=?`,
            [
                data.description,
                data.photo,
                data.spam_Count,
                data.likeCount,
                data.commentCount,
                data.shareCount,
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
    deletePost: (id, callback) => {
        pool.query(`delete from posts where id =?`,
        [id],
        (err, result)=>{
            if (err) {
                return callback(err)
            }
            return callback(null, result[0])
        })
    }
}