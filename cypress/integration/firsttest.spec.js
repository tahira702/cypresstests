///<reference types = "cypress"/>
describe ("Our First suit", ()=> {
    
    it("First Test", ()=> {

cy.visit('/')
cy.contains('Forms').click()
cy.contains('Form Layouts').click()


        cy.get('input')  // tag name
        cy.get('#inputEmail') // id
        cy.get('.input-full-width') // class name
        cy.get('[placeholder]') //attribute name
        cy.get('[placeholder="Email"]') //attribute name
        cy.get(['class="input-full-width size-medium shape-rectangle"']) //class value
        cy.get('input[placeholder="Email"]') // tag name and attribute
        cy.get('[placeholder]') // two attributes
    })
})
