import { CounterPage } from '/cypress/support/page/CounterPage';

const page = new CounterPage();

describe('Counter App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('TEST-01 should increment from 0 to 1', () => {
    page.getCounter().should('have.text', '0');
    page.getIncrementBtn().click();
    page.getCounter().should('have.text', '1');
  });

  it('TEST-02 should decrement from 1 to 0', () => {
    page.getIncrementBtn().click();
    page.getCounter().should('have.text', '1');
    page.getDecrementBtn().click();
    page.getCounter().should('have.text', '0');
  });

  it('TEST-03 should not go below 0', () => {
    page.getCounter().should('have.text', '0');
    page.getDecrementBtn().click();
    page.getCounter().should('have.text', '0');
  });

  it('TEST-04 should handle rapid clicks correctly', () => {
    page.clickIncrement(5);
    page.getCounter().should('have.text', '5');
  });

  it('TEST-05 should never show negative numbers when decremented repeatedly', () => {
    page.clickDecrement(4);
    page.getCounter().should('have.text', '0');
  });

  it('TEST-06 should increment twice and decrement once', () => {
    page.getIncrementBtn().dblclick(); // 0 → 2
    page.getDecrementBtn().click();   // 2 → 1
    page.getCounter().should('have.text', '1');
  });
});