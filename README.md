# MYJ-Cypress-Automation-Live

MYJ-Cypress-Automation-Live

---

# Create a fresh test project:

- mkdir Cypress-Temp-Test
- cd Cypress-Temp-Test
- npm init -y

# 📦 Step 2: Install Cypress & Reporter

- npm install --save-dev cypress
- npm install --save-dev cypress-mochawesome-reporter
- npm install -D cypress-xpath
- npm install --save-dev @4tw/cypress-drag-drop

# ✅ Now test: check out

- ls node_modules/cypress-mochawesome-reporter

- npx cypress cache clear
- or
- npm install --save-dev cypress-mochawesome-reporter

# git commands all

- git add .
- git commit -m"message "
- git push

- git stash - old retrive code
  git stash # Save changes
  git stash list # See all stashes
  git stash apply # Reapply last stash
  git stash pop # Apply and remove last stash
  git stash drop # Delete a stash

# note :-my office code branch name is madhu-office

- git checkout main # Switch to main branch
- git pull origin main # Update with remote changes
- git merge madhu-office # Merge changes from madhu-office into main
- git push origin main # Push merged main branch to GitHub

- git log --oneline #check out code

- git checkout office-mac # switch to my branch

- git branch # current branch check

---

📌 Cypress vs Selenium: Core Difference

-> Selenium: Uses XPath, CSS, IDs, etc. for element location.
-> Cypress: Only supports CSS selectors by default. XPath is not built-in, but you can add it via the plugin

📌-> npm install -D cypress-xpath

📌In cypress/support/e2e.js (or commands.js):
-> require('cypress-xpath')

📌 Full Cypress Cheat Sheet (Comparable to Selenium Commands)
| Selenium (By) | Cypress Equivalent |
| --------------------------------- | ------------------------------------------ |
| `By.id("username")` | `cy.get('#username')` |
| `By.name("email")` | `cy.get('[name="email"]')` |
| `By.className("btn")` | `cy.get('.btn')` |
| `By.tagName("input")` | `cy.get('input')` |
| `By.cssSelector("div p")` | `cy.get('div p')` |
| `By.xpath("//input[@id='user']")` | `cy.xpath("//input[@id='user']")` (plugin) |

🖱️ Actions
| Selenium | Cypress |
| ------------------------------- | ------------------------------------------- |
| `click()` | `cy.get('selector').click()` |
| `sendKeys("text")` | `cy.get('selector').type('text')` |
| `clear()` | `cy.get('selector').clear()` |
| `submit()` | `cy.get('form').submit()` |
| `getText()` | `cy.get('selector').invoke('text')` |
| `getAttribute("value")` | `cy.get('selector').invoke('attr','value')` |
| `isDisplayed()` | `cy.get('selector').should('be.visible')` |
| `isEnabled()` | `cy.get('selector').should('be.enabled')` |
| `isSelected()` | `cy.get('selector').should('be.checked')` |
| `selectByVisibleText("Option")` | `cy.get('select').select('Option')` |
| `moveToElement()` (hover) | `cy.get('selector').trigger('mouseover')` |
| `dragAndDrop(src,dst)` | `cy.get('src').drag('dst')` (with plugin) |

🌐 Navigation

| Selenium                      | Cypress            |
| ----------------------------- | ------------------ |
| `driver.get("url")`           | `cy.visit("url")`  |
| `driver.navigate().back()`    | `cy.go('back')`    |
| `driver.navigate().forward()` | `cy.go('forward')` |
| `driver.navigate().refresh()` | `cy.reload()`      |
| `driver.getCurrentUrl()`      | `cy.url()`         |
| `driver.getTitle()`           | `cy.title()`       |

📝 Assertions

| Selenium (JUnit/TestNG)             | Cypress                                           |
| ----------------------------------- | ------------------------------------------------- |
| `assertEquals(a,b)`                 | `expect(a).to.eq(b)`                              |
| `assertTrue(condition)`             | `expect(condition).to.be.true`                    |
| `assertFalse(condition)`            | `expect(condition).to.be.false`                   |
| `assertNotNull(obj)`                | `expect(obj).to.not.be.null`                      |
| `element.isDisplayed()`             | `cy.get('selector').should('be.visible')`         |
| `element.isEnabled()`               | `cy.get('selector').should('be.enabled')`         |
| `element.getText().equals("Hello")` | `cy.get('selector').should('have.text', 'Hello')` |

📡 Network & API

| Selenium                       | Cypress                                                        |
| ------------------------------ | -------------------------------------------------------------- |
| Needs REST-assured, not native | `cy.request('GET', '/api/endpoint')`                           |
| N/A                            | `cy.intercept('/api/*').as('apiCall')` + `cy.wait('@apiCall')` |

🍪 Cookies / Storage

| Selenium                             | Cypress                                                    |
| ------------------------------------ | ---------------------------------------------------------- |
| `driver.manage().getCookies()`       | `cy.getCookies()`                                          |
| `driver.manage().addCookie()`        | `cy.setCookie(name, value)`                                |
| `driver.manage().deleteAllCookies()` | `cy.clearCookies()`                                        |
| `localStorage.getItem("key")`        | `cy.window().then(win => win.localStorage.getItem('key'))` |

⚡ Utilities

Waits

- Selenium: WebDriverWait, Thread.sleep()
- Cypress: cy.wait(1000), implicit retries built-in

Screenshots & Videos

- Selenium: TakesScreenshot API
- Cypress: cy.screenshot(), video recording is automatic

System Commands

- Selenium: Not direct
- Cypress: cy.exec("ls")

📌 Cypress Element Actions (Full Reference)

🔘 Clicking & Mouse Actions

| Action                            | Cypress                                   |
| --------------------------------- | ----------------------------------------- |
| Click                             | `cy.get('button').click()`                |
| Double Click                      | `cy.get('button').dblclick()`             |
| Right Click                       | `cy.get('button').rightclick()`           |
| Force Click (ignore invisibility) | `cy.get('button').click({ force: true })` |
| Hover (mouse over)                | `cy.get('element').trigger('mouseover')`  |
| Mouse Out                         | `cy.get('element').trigger('mouseout')`   |
| Mouse Down                        | `cy.get('element').trigger('mousedown')`  |
| Mouse Up                          | `cy.get('element').trigger('mouseup')`    |

⌨️ Keyboard Actions

| Action           | Cypress                                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------------------------------- |
| Type Text        | `cy.get('input').type('Hello')`                                                                             |
| Type with Delay  | `cy.get('input').type('Hello', { delay: 200 })`                                                             |
| Clear Input      | `cy.get('input').clear()`                                                                                   |
| Special Keys     | cy.get('input').type('{enter}')`<br>`cy.get('input').type('{esc}')`<br>`cy.get('input').type('{backspace}') |
| Combination Keys | `cy.get('input').type('{ctrl}a')` (Ctrl+A)                                                                  |

📑 Form Actions

| Action                     | Cypress                                        |
| -------------------------- | ---------------------------------------------- |
| Check Checkbox             | `cy.get('input[type="checkbox"]').check()`     |
| Uncheck Checkbox           | `cy.get('input[type="checkbox"]').uncheck()`   |
| Radio Button               | `cy.get('input[type="radio"]').check('value')` |
| Select Dropdown (by text)  | `cy.get('select').select('Option 1')`          |
| Select Dropdown (by value) | `cy.get('select').select('opt1')`              |
| Submit Form                | `cy.get('form').submit()`                      |

👁️ Visibility & Focus

| Action         | Cypress                                    |
| -------------- | ------------------------------------------ |
| Focus Element  | `cy.get('input').focus()`                  |
| Blur (unfocus) | `cy.get('input').blur()`                   |
| Ensure Visible | `cy.get('input').should('be.visible')`     |
| Ensure Hidden  | `cy.get('input').should('not.be.visible')` |

🎥 Example: Complete Interaction Flow

---

it('Element Actions Example', () => {
cy.visit('/form')

// Typing
cy.get('#username').type('john_doe')
cy.get('#password').type('Pass123!{enter}')

// Checkbox & Radio
cy.get('#terms').check()
cy.get('input[name="gender"]').check('male')

// Dropdown
cy.get('#country').select('India')

// Clicks
cy.get('#submitBtn').click()
cy.get('#moreOptions').rightclick()

// Hover
cy.get('#menu').trigger('mouseover')

// Drag & Drop
cy.get('#item1').drag('#basket')

// Scroll
cy.get('#footer').scrollIntoView()
})

---

---

# fixtures

In Cypress, the cypress/fixtures folder is mainly used for test data.
Think of it like a storage place for any static JSON, text, or mock data that your test cases can re-use.

📂 What you can put inside cypress/fixtures

User credentials (for test environments only ⚠️ not production secrets)

// cypress/fixtures/user.json
{
"username": "testuser",
"password": "Password123"
}

Mock API responses (useful for intercepting network calls with cy.intercept())

// cypress/fixtures/profile.json
{
"name": "Madhu",
"age": 29,
"status": "active"
}

Test data for forms

// cypress/fixtures/registration.json
{
"firstName": "Madhu",
"lastName": "Kumar",
"email": "madhu@example.com",
"phone": "9876543210"
}

CSV / text files for upload testing.
Example: sample.csv, resume.pdf.

📌 How to use fixtures in Cypress

You can load fixture data inside your tests:

// Example test using fixture
describe('Login Test', () => {
it('logs in with fixture data', () => {
cy.fixture('user.json').then((user) => {
cy.visit('/login')
cy.get('input[name="username"]').type(user.username)
cy.get('input[name="password"]').type(user.password)
cy.get('button[type="submit"]').click()
})
})
})

🚀 Best Practices

Keep test-only data in cypress/fixtures.

Don’t put real credentials here → use .env or cypress.env.json.

Organize by feature:

cypress/fixtures/
├── login/
│ └── user.json
├── profile/
│ └── profile.json
├── data/
│ └── registration.json

---
