/// <reference types = "cypress" />
import { toComment } from "../Elements/Comment"
import { toDeletePost } from "../Elements/DeletePost"
import { toLogOut } from "../Elements/LogOut"
import { toNewPost } from "../Elements/NewPost"
import {SignUp, ToSignUp} from "../Elements/Sign_Up"
//const cypress = require("cypress")

//const website 

describe('My Cypress Test Project', function(){
    it( 'This Test is for Loading Website', function(){
        const AssertCheckWebPage = '#main > div > nav > div > a'
        cy.visit('/').wait(7000)
        cy.get(AssertCheckWebPage).should('have.text', 'conduit') //visit site    
    })

    it('This Test is for Signing Up by providing any Username, email and Password', function(){
        ToSignUp.ClickOnSignUpButton()
        ToSignUp.TypeNameforSignUp()
        ToSignUp.TypeMailAddressForSignUp()
        ToSignUp.TypePassWordForSignUp()
        ToSignUp.WaitForDashBoardToLoad()
        ToSignUp.AssertionCheck()
    })

    it('This Test is for creating New Post', function() {
        toNewPost.ClickOnNewPostButton()
        toNewPost.AssertionCheckBeforeNewPost()
        toNewPost.TypeNewPostTitle()
        toNewPost.TypePostDescription()
        toNewPost.TypePostBody()
        toNewPost.TypeTagsOfPost()
        toNewPost.PostArticle()
        toNewPost.WaitForArticleToPost()
        toNewPost.AssertionCheckAfterNewPost()
    })

    it('This test is to Post Comment', function() {
        toComment.WriteComment()
        toComment.PostComment()
        toComment.WaitForComment()
        toComment.ViewComment()
    })

    it('This test is for Deleting Post', function() {
        toDeletePost.DeletePost()
        toDeletePost.WaitForDashBoard()
        ToSignUp.AssertionCheck()
    })

    it('This test is for Logging Out', function(){
        toLogOut.ClickOnSettingsButton()
        toLogOut.ScrollToLogOutButton()
        toLogOut.ClickOnLogOut()
        toLogOut.AssertionCheckOfLogOut()
    })
})

/*it( 'This Test is for Loading Website', function() {
    cy.visit('/').wait(7000)
    cy.get(AssertCheckWebPage).should('have.text', 'conduit') //visit site    
    //assert.equal(cy.get('.navbar-brand'))
})*/

//const Sign_Up = new SignUp()

/*it('This Test is for Signing Up by providing any Username, email and Password', function(){
    ToSignUp.ClickOnSignUpButton()
    ToSignUp.TypeNameforSignUp()
    ToSignUp.TypeMailAddressForSignUp()
    ToSignUp.TypePassWordForSignUp()
    ToSignUp.WaitForDashBoardToLoad()
    ToSignUp.AssertionCheck()
})

it('This Test is for creating New Post', function() {
    toNewPost.ClickOnNewPostButton()
    toNewPost.AssertionCheckBeforeNewPost()
    toNewPost.TypeNewPostTitle()
    toNewPost.TypePostDescription()
    toNewPost.TypePostBody()
    toNewPost.TypeTagsOfPost()
    toNewPost.PostArticle()
    toNewPost.WaitForArticleToPost()
    toNewPost.AssertionCheckAfterNewPost()
})

it('This test is to Post Comment', function() {
    toComment.WriteComment()
    toComment.PostComment()
    toComment.WaitForComment()
    toComment.ViewComment()
})

it('This test is for Deleting Post', function() {
    toDeletePost.DeletePost()
    toDeletePost.WaitForDashBoard()
    ToSignUp.AssertionCheck()
})

it('This test is for Logging Out', function(){
    toLogOut.ClickOnSettingsButton()
    toLogOut.ScrollToLogOutButton()
    toLogOut.ClickOnLogOut()
    toLogOut.AssertionCheckOfLogOut()
})

*/



