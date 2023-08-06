import App from '@/App';
import { mount } from '@cypress/react18';

describe('App', () => {
  it('renders learn react link', () => {
    mount(<App />);
    cy.contains('Home');
  });
});
