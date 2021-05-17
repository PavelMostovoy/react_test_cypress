describe('Smoke Test', () => {
  beforeEach(() => {
    cy.viewport("samsung-note9")
    cy.visit('https://automation-tests.d26kyr5y0lighs.amplifyapp.com/?site_domain=timgames.appsclub.com.br')
  })

  it('Landing page header', () => {
    cy.get("title").should('have.text', 'TIM Games')
  })
   it('Account page header', () => {
    cy.xpath('//*[@id=\"root\"]/div/header/div[2]/div[2]/a').click()
    cy.get(".c_account_top").should('have.text', '\n  Olá\n')
  })
 it('Categories page icons', () => {
    cy.get('.icon-table').click()
    cy.get(".categories").find('.opacity').find('.icon')
  })
    it('Search page', () => {
    cy.get('.icon-search').click()
    cy.get(".searchForm").type('Test_search',{ delay: 100 })
    cy.get("#root > div > main > section.searchForm > form > input[type=text]").should("have.value",'Test_search')
  })
 it('Main page carousel', () => {
    cy.get('.slick-list').children().should('have.class','slick-track')
    })

    it('Main page first media section', () => {
    cy.wait(2000)
    cy.get('#root > div > main > div:nth-child(1) > section:nth-child(3) > div > div').children().should('have.class','slick-list')
    })

    it('Main page first two banners', () => {
    cy.get("#root > div > main > div:nth-child(1) > section:nth-child(4) > div").children().should('have.class','two-col')
    })

    it('Main page leaderboard', () => {
    cy.get('#root > div > main > div:nth-child(1) > section.sType14 > div').children().should('have.class','ac_col_hdr row')
    })
})
