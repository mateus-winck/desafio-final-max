import * as POSTProdutos from "../requests/POSTProdutos.request";
import * as POSTLogin from "../../login/requests/POSTLogin.request";

describe('POST Produtos', () => {
    it('adicionar um novo produto', () => {
        POSTLogin.entrar().should((resEntrar) => {
            expect(resEntrar.status).be.eq(200);
            POSTProdutos.adicionar(resEntrar.body.authorization).should((resProdutos) => {
                expect(resProdutos.status).be.eq(201);
                expect(resProdutos.body.message).to.eq("Cadastro realizado com sucesso")
            })
        });
    });
});