/// <reference types="cypress" />
let payloadcarrinho = require('../payload/add-carrinho.payload.json')


function criarCarrinho (auth) {
    
    payloadcarrinho.produtos[0].idProduto = Cypress.env('ProductIdOne')
    payloadcarrinho.produtos[1].idProduto = Cypress.env('ProductIdTwo')
    
    return cy.request({
        method: "POST",
        url: "carrinhos",
        headers: { 
            accept: "application/json",
            authorization: auth
        },
        failOnStatusCode: false,
        body: payloadcarrinho
    })
    
}

export {criarCarrinho}