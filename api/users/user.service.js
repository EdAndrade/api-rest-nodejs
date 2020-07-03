const pool = require("../../config/database")

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO registration(firstName, lastName, gender, email, password, number)
                VALUES (?,?,?,?,?,?)`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error)
                }
                return callBack(null, results)
            }
        )
    },

    getUsers: callBack => {
        pool.query(`
                SELECT id, firstName, lastName, gender, email, number from resgistration`,
                [],
                (error, results, fields) => {
                    if(error){
                        callBack(error)
                    }
                    return callBack(null, results)
                }
            )
    },

    getUsersById: (id, callBack) => {
        pool.query(`
                SELECT id, firstName, lastName, gender, email, number from resgistration WHERE id = ?`,
                [id],
                (error, results, fields) => {
                    if(error){
                        callBack(error)
                    }
                    return callBack(null, results[0])
                }
            )
    },

    updateUser: (data, callBack) => {
        pool.query(
            `UPDATE registration set firstName=?, lastName=?, gender=?, email=?, password=?, number=? WHERE id = ?)`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number,
                data.id
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error)
                }
                return callBack(null, results[0])
            }
        )
    },

    deleteUser: (data, callBack) => {
        pool.query(
            `DELETE from registration WHERE id = ?`,
            [data.id],
            (error, results, fields) => {
                if(error){
                    return callBack(error)
                }
                return callBack(null, results[0])
            }
        )
    }
}