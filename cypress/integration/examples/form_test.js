describe("testing for inputs", () =>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000/order")
    })
    it("passes tests", ()=>{
        cy.get("[data-cy=name]").type("Aaron").should("have.value", "Aaron")
        cy.get("[data-cy=type]").select("small").should("have.value", "small")
        cy.get("[data-cy=cheese]").check().should("be.checked")
        cy.get("[data-cy=instructions]").type("very long sprint").should("have.value", "very long sprint")  
        cy.get("[data-cy=submit]").click().should("have.prop", {isDisabled: false})     
        
        
        
        
    })
})

