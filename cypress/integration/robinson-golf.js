it('robinson-golf testing', () => {
    cy.visit('http://spencermrobinson.com:7272/#/')
    cy.get(".header_user_profile")
    .click()
    cy.get('div[className="auth0-lock-social-big-button"]')
    cy.should('contain', '.auth0-lock-social-big-button')
})