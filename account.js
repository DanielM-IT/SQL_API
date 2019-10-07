const data = require('./data')

function listAllAccounts(req, res) {
    return res.status(200).json(data)

    /*const connection = req.app.locals.connection
    connection.query('SELECT e.id, e.name, e.email, d.name as "Department", d.location')
        (error, results) => {
            if (error) {
                return res.status(500).json(error)
            }
            return res.status(200).json(results)
        }
    */
}