import usuariosSchema from "../contracts/usuarios.contracts";
import * as GETUsuarios from "../requests/GETUsuarios.requests";

describe("GETUsuarios", () => {
  it("listar usuarios com sucesso", () => {
    GETUsuarios.listar().should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.not.null;
    });
  });
  it("validar o contrato da lista de usuarios", () => {
    GETUsuarios.listar().should((response) => {
      return usuariosSchema.validateAsync(response.body);
    });
  });
});
