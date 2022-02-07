import Signup from '../pages/signupPage'
import SignupFactory from '../factories/SignupFactory'
import signupPage from '../pages/signupPage'

describe('Signup', () => {

     //beforeEach(function () {
       // cy.fixture('deliver').then((d) => {
           // this.deliver = d
        //})
    //})

    it('user should be deliver', function () {
       var deliver = SignupFactory.deliver()
    
        Signup.go()
        Signup.fillForm(deliver)
        Signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        Signup.modalContentShouldBe(expectedMessage)

    })

    it('Incorrret Document', function () {
        var deliver = SignupFactory.deliver()
        
        deliver.cpf = '000000141aa'

        Signup.go()
        Signup.fillForm(deliver)
        Signup.submit()
        Signup.alertMessageShouldbe('Oops! CPF inválido')

    })

    it('Incorrret email', function() {
        var deliver = SignupFactory.deliver()

        deliver.email = 'user.com.br'

        Signup.go()
        Signup.fillForm(deliver)
        Signup.submit()
        Signup.alertMessageShouldbe('Oops! Email com formato inválido')
    })
    
    context('User Should Receive Requireds Fields Alert',function(){

        const messages = [
            {field: 'name', output: 'É necessário informar o nome'},
            {field: 'cpf', output: 'É necessário informar o CPF'},
            {field: 'email', output: 'É necessário informar o email'},
            {field: 'postalcode', output: 'É necessário informar o CEP'},
            {field: 'number', output: 'É necessário informar o número do endereço'},
            {field: 'delivery_method', output: 'Selecione o método de entrega'},
            {field: 'cnh', output: 'Adicione uma foto da sua CNH'}
        ]  

        before(function(){
            signupPage.go()
            signupPage.submit()
  
        })
        
        messages.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                signupPage.alertMessageShouldbe(msg.output)
            })
        })
    })

}) 