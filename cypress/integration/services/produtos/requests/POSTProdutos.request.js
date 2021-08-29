/// <reference types="cypress" />

let PayloadAddProduto = require('../payloads/add-produto.payload.json');

let faker = require('faker');

function adicionar(auth) {
    PayloadAddProduto.nome = faker.company.companyName()

    return cy.request({
        method: "POST",
        url: "produtos",
        headers: {
            accept: "application/json",
            authorization: auth
        },
        failOnStatusCode: false,
        body: PayloadAddProduto
    })
}

export {adicionar}