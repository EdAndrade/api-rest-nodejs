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
    }
}