import { Selectors } from './Selectors';

export class CounterPage {
    getCounter() {
        return cy.get(Selectors.Counter);
    }

    getIncrementBtn() {
        return cy.get(Selectors.IncrementBtn);
    }

    getDecrementBtn() {
        return cy.get(Selectors.DecrementBtn);
    }

    clickIncrement(times = 1) {
        for (let i = 0; i < times; i++) {
            this.getIncrementBtn().click();
        }
    }

    clickDecrement(times = 1) {
        for (let i = 0; i < times; i++) {
            this.getDecrementBtn().click();
        }
    }
}