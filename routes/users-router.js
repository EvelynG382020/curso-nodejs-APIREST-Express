const express = require('express')
// const UsersService = require('../services/user-service')

// const faker = require('faker')
const router = express.Router()

// const servicio = new UsersService

router.get('/', (req,res)=>{
  const { limit, offset } = req.query
  if(limit && offset){
    res.json({
      limit,
      offset
    })
  }else{
    res.send('No hay parametros')
  }
})

module.exports = router
