import listaSchema from "../contracts/lista.contracts";
import * as GETLista from "../requests/GETLista.request";

describe("get usuarios", () => {
  it("listar com sucesso", () => {
    GETLista.listaUser().should((response) => {
      expect(response.status).to.be.eq(200);
      expect(response.body).to.be.not.null;
    });
  });

  it("validar o contrato da lista de produtos", () => {
    GETLista.listaUser().should((response) => {
      return listaSchema.validateAsync(response.body);
    });
  });
});
