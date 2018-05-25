it('robinson-golf testing', () => {
    cy.visit('http://spencermrobinson.com:7272/#/')
    cy.get(".header_user_profile")
    .click()
})