describe('First Test', () => {
  it('Visits landing page', () => {
    cy.viewport("samsung-note9")
    cy.visit('https://automation-tests.d26kyr5y0lighs.amplifyapp.com/?site_domain=timgames.appsclub.com.br')
    cy.wait(10000)
  })
})
