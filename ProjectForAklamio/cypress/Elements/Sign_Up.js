const SignUpButton = ':nth-child(3) > .nav-link'
const UserNameField = ':nth-child(1) > .form-control'
const MailAddressField = ':nth-child(2) > .form-control'
const PassWordField = ':nth-child(3) > .form-control'
const AssertCheck = '#main > div > div > div > div > div.col-md-9 > div.feed-toggle > ul > li:nth-child(1) > a'


export class SignUp {

    ClickOnSignUpButton() {
        cy.get(SignUpButton).click() //click signup
    }

    TypeNameforSignUp() {
        cy.get(UserNameField).type(userID_Alpha_Numeric()) // Typing Name
    }

    TypeMailAddressForSignUp() {
        cy.get(MailAddressField).type(userID_Alpha_Numeric()+'@gmail.com') // Typing mail address
    }

    TypePassWordForSignUp() {
        cy.get(PassWordField).type('N@fis2022').type('{enter}') // Typing Password and press enter
    }

    WaitForDashBoardToLoad() {
        cy.wait(7000) // Wait for 7 sec to load dashboard
    }

    AssertionCheck() {
        cy.get(AssertCheck).should('have.text', 'Your Feed')
    }
    
}

export const ToSignUp = new SignUp()

function userID_Alpha_Numeric() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
