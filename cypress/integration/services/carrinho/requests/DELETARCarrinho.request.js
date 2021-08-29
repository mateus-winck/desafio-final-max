///<reference types="cypress" />

function DELETARCarrinho(auth) {
    return cy.request({
        method: "DELETE",
        url: "carrinhos/cancelar-compra",
        headers: { 
            accept: "application/json",
            authorization: auth
        },
        failOnStatusCode: false,
        
    })
    
}

export{DELETARCarrinho}