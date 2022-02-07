var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

  deliver: function() {

  var firstName = faker.name.firstName()
  var lastName = faker.name.lastName()

  var data = {
    name: `${firstName} ${lastName}`,
    cpf: cpf.generate(),
    email: faker.internet.email(firstName),
    whatsapp: '11988888888',
    address: {
        postalcode: '05037030',
        street: 'Rua Capitão Francisco Teixeira Nogueira',
        number: '30',
        details: 'bloco 05 Ap 54',
        disctrict: 'Água Branca',
        city_state: 'São Paulo/SP'
    },
    delivery_method: 'Moto',
    cnh: 'cnh-digital.jpg'

    }
    return data

   }

}