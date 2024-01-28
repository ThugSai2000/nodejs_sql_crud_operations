const db = require('../db')

module.exports.getallemployees = async () =>{
    const [records] = await db.query('SELECT * from employeetable')
return records
}
module.exports.getemployeebyid = async (id) =>{
    const [[record]] = await db.query('SELECT * from employeetable WHERE id = ?',[id])
    return record
}

module.exports.deleteEmployeeById = async (id)=>{
    const [{affectedRows}] =await db.query('DELETE from employeetable WHERE id = ?',[id])
    return affectedRows
}

module.exports.addOrEditEmployee = async(obj, id=0) => {
    const [[[{affectedRows}]]] = await db.query('CALL usp_employee_add_or_edit(?,?,?,?)',[id,obj.name,obj.employecode,obj.salary])
    return affectedRows
}