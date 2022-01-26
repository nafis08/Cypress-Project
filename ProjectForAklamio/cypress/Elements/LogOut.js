const SettingsButton = ':nth-child(3) > .nav-link'
const ScrollToLogOutButton = '.btn-outline-danger'
const LogOutButton = '.btn-outline-danger'
const AssertLogOut = '#main > div > nav > div > ul > li:nth-child(3) > a'
export class LogOut {
    ClickOnSettingsButton() {
        cy.get(SettingsButton).click() //Click on Settings button
    }

    ScrollToLogOutButton() {
        cy.get(ScrollToLogOutButton).scrollIntoView() //Scroll down to Logout button
    }

    ClickOnLogOut() {
        cy.get(LogOutButton).click() //Click Logout button
    }

    AssertionCheckOfLogOut() {
        cy.get(AssertLogOut).should('have.text', 'Sign up')
    }
    
}

export const toLogOut = new LogOut()