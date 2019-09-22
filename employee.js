const data = require('./data')

function listAllEmployees(req, res) {
    return res.status(200).json(data)

    /*const connection = req.app.locals.connection
    connection.query('SELECT e.id, e.name, e.email, e.salary, d.name as "Department", d.location')
        (error, results) => {
            if (error) {
                return res.status(500).json(error)
            }
            return res.status(200).json(results)
        }
    */
}