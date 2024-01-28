const express = require('express')

const router = express.Router()
const service = require('../services/services.employee')
// http:localhost:3000/api/employees/
router.get('/', async (req,res)=>{
   const employees = await service.getallemployees()
    res.send(employees)
})

router.get('/:id', async(req,res)=>{
    const employee = await service.getemployeebyid(req.params.id)
    if (employee === undefined) {
        res.status(404).json("record not fount with id : "+req.params.id)
    } else  res.send(employee)
})

router.delete('/:id', async(req, res)=>{
    const affectedRows = await service.deleteEmployeeById(req.params.id)
    if (affectedRows == 0) {
        res.status(404).json("record not found with id : "+req.params.id)
    } else res.send("deleted sucessfully")
    
})

router.post('/',async(req, res)=>{
    await service.addOrEditEmployee(req.body)
    res.status(201).send("created sucessfullly")
})

router.put('/:id', async(req, res)=>{
const affectedRows = await service.addOrEditEmployee(req.body,req.params.id)
res.status(201).send("updated sucessfully")
})

module.exports = router