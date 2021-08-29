import * as POSTLogin from "../../login/requests/POSTLogin.request";
import * as POSTCriar from "../requests/POSTCarrinho.request"
import * as GETLista from "../../lista de produtos/requests/GETLista.request";
import * as DELETCarrinho from "../requests/DELETARCarrinho.request";


describe('POST Produtos', () => {
    it('adicionar um novo carrinho', () => {

        

        POSTLogin.entrar().should((resEntrar) => {
            
            expect(resEntrar.status).be.eq(200);
            cy.log(resEntrar.body.authorization);
            GETLista.listaUser().should((response) => {
                expect(response.status).to.be.eq(200);
                expect(response.body).to.be.not.null;
                cy.log(response.body.produtos[0]._id)
                cy.log(response.body.produtos[1]._id)
                Cypress.env("ProductIdOne", response.body.produtos[0]._id );
                Cypress.env("ProductIdTwo", response.body.produtos[1]._id );
            POSTCriar.criarCarrinho(resEntrar.body.authorization).should((resCriar) =>{
                    expect(resCriar.status).be.eq(201);
                    expect(resCriar.body.message).be.eq("Cadastro realizado com sucesso");
                    DELETCarrinho.DELETARCarrinho(resEntrar.body.authorization).should((resDelete) => {
                        expect(resDelete.status).be.eq(200)
                        expect(resDelete.body.message).be.eq("Registro excluído com sucesso. Estoque dos produtos reabastecido");

                    })
            });
            

            
        });
            
        });
        
            
           
    });
})

