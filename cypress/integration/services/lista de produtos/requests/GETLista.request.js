/// <reference types="cypress" />

function listaUser() {
  return cy.request({
    method: "GET",
    url: "produtos",
    header: {
      accept: "application/json",
    },
    failOnStatusCode: false,
  });
}

export { listaUser };
