let payloadlogin = {
  email: "Stella22@yahoo.com",
  password: "6ifKZI29fUmfLxY",
};

function entrar() {
  return cy.request({
    method: "POST",
    url: "login",
    headers: {
      accept: "application/json",
    },
    failOnStatusCode: false,
    body: payloadlogin,
  });
}

export { entrar };
