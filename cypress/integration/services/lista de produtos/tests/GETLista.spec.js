import listaSchema from "../contracts/lista.contracts";
import * as GETLista from "../requests/GETLista.request";

describe("get usuarios", () => {
  it("listar com sucesso", () => {
    GETLista.listaUser().should((response) => {
      expect(response.status).to.be.eq(200);
      expect(response.body).to.be.not.null;
      cy.log(response.body.produtos[0]._id);
      cy.log(response.body.produtos[1]._id);
    });
  });

  it("validar o contrato da lista de produtos", () => {
    GETLista.listaUser().should((response) => {
      return listaSchema.validateAsync(response.body);
    });
  });
});
