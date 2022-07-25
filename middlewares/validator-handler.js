const boom = require('@hapi/boom')

function validatorHandler(schema, property) {
  return (req,res,next) => {
    const data = req[property]
    const  { error  } = schema.validate(data, { abortEarly: false })
    if(error){
      next(boom.badRequest(error))
    }
    next()
  }
}

module.exports = validatorHandler
//configurar un middleware q sea dinámico, recibir el schema q se va a validad y la propiedad, se va a evaluar en cada request esa info y aplicar un schema, aquí se usará un closures
