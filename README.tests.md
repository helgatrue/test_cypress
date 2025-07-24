# Cypress tests for Counter App

This project contains end-to-end tests for a simple counter app using [Cypress](https://www.cypress.io/). The app allows incrementing and decrementing a counter, but ensures the value never goes below 0.

---

## What’s covered

### Positive Cases
1. Increment from 0 to 1
2. Decrement from 1 to 0
3. Counter must not go below 0

### Edge Cases
4. Counter value must remain unchanged
5. Rapid clicks should increment correctly
6. Counter should always show only non-negative integers

---

## 🧰 Tech stack

- 🧪 Cypress v14+
- 📦 Node.js v18
- 📜 HTML + Vanilla JS Counter App
- 🧾 MochaAwesome HTML reporter
- 🚀 GitHub Actions CI/CD

---

## 🚀 Running tests locally

### 1. Install dependencies
```bash
npm install
```
### 2. Start the static server
```bash
npx http-server -p 3000
```

### 3. Run Cypress tests
```bash
npx cypress run
```

### 4. Open Cypress GUI (optional)
```bash
npx cypress open
```

## 🤖 CI/CD with GitHub Actions
Tests are automatically executed:

- On every push and pull request to the main branch 
- Using GitHub-hosted Ubuntu runners 
- Headless mode + HTML reporting

## ✅ HTML report as artifact
After each CI run:

1. Navigate to the Actions tab on GitHub 
2. Open the latest workflow run 
3. Download the artifact named:
   ``cypress-html-report``
4. Unzip and open the file via browser

It includes a full MochaAwesome HTML report (``mochawesome.html``) showing test results.

## 🔗 Related files
``counter-test-plan.md`` — covers manual test scenarios

``ci.yml`` — GitHub Actions workflow