const pool = require('../../config/db.config')

module.exports = {
    create: (data, callback) => {
        pool.query(
            `insert into topic(title,topicSlug,description,status,count) values(?,?,?,?,?)`,
            [
                data.title,
                data.topicSlug,
                data.description,
                data.status,
                data.count
            ],
            (err, result)=>{
                if (err) {
                   return callback(err) 
                }
                return callback(null, result)
            }
        );
    },
    getTopics: callback => {
        pool.query(`
            select id,title,topicSlug,description,status,createdAt,count from topic`,
            [],
            (err, result)=>{
                if (err) {
                    callback(err)
                }
                return callback(null, result)
            }
        );
    },
    getTopicById: (id, callback) => {
        pool.query(`
            select id,title,topicSlug,description,status,createdAt,count from topic where id = ?`,
            [id],
            (err, result)=>{
                if (err) {
                    return callback(err)
                }
                return callback(null, result)
            }
        );
    },
    updateTopic: (data, callback) => {
        pool.query(`
        update topic set title=?,topicSlug=?,description=?,status=?,count=? where id=?`,
            [
                data.title,
                data.topicSlug,
                data.description,
                data.status,
                data.count,
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
    deleteTopic: (id, callback) => {
        pool.query(`delete from topic where id =?`,
        [id],
        (err, result)=>{
            if (err) {
                return callback(err)
            }
            return callback(null, result[0])
        })
    }
}