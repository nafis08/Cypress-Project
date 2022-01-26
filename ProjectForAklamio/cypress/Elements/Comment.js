const CommentSection = '.form-control'
const CommentButton = '.card-footer > .btn'
const ViewNewComment = ':nth-child(2) > .card > .card-block'
//const AssertChkCmnt = '#main > div > div > div.container.page > div:nth-child(4) > div > div:nth-child(2) > div > div.card-footer > a:nth-child(1) > img'

export class Comment {

    WriteComment() {
        cy.get(CommentSection).type('Nice Post') //Write Comment
    }

    PostComment() {
        cy.get(CommentButton).click() //Post Comment
    }

    WaitForComment() {
        cy.wait(7000) // Wait for 7 sec to load the comment
    }
    
    ViewComment() {
        cy.get(ViewNewComment).scrollIntoView() // Make the new comment visible
    }

    /*AssertionCheckForComments(){
        cy.get(AssertChkCmnt).should('have.', '&nbsp;')
    }*/
    
}

export const toComment = new Comment()

