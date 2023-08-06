describe('API Test', () => {
  it('Should GET 200 status', () => {
    cy.request({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/todos/1',
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('title');
      expect(response.body).to.have.property('completed');
    });
  });
});
