const NewPostButton = '.container > .nav > :nth-child(2) > .nav-link'
const TitleBox = ':nth-child(1) > .form-control'
const PostDescription = ':nth-child(2) > .form-control'
const PostBody = ':nth-child(3) > .form-control'
const PostTags = ':nth-child(4) > .form-control'
const PostButton = '.btn'
const AssertBeforeChkNP = '#main > div > div > div > div > div > form > fieldset > button'
const AssertAfterChkNP = '#main > div > div > div.banner > div > div > span > a'

export class NewPost {
    ClickOnNewPostButton(){
        cy.get(NewPostButton).click() //New post
    }
    
    TypeNewPostTitle(){
        cy.get(TitleBox).type('This is a Test Post for 2022') //Post Title
    }

    TypePostDescription(){
        cy.get(PostDescription).type('This post is about Test') //Description
    }
    
    TypePostBody(){
        cy.get(PostBody).type('Hello!!! How was the Test Post????') //Article
    }
    
    TypeTagsOfPost(){
        cy.get(PostTags).type('#Test #Post #New') //Tags
    }
    
    PostArticle(){
        cy.get(PostButton).click() //Post Article
    }

    WaitForArticleToPost(){
        cy.wait(6000) // Wait for 6 sec to post the article
    }

    AssertionCheckBeforeNewPost(){
        cy.get(AssertBeforeChkNP).should('have.text', 'Publish Article')
    }

    AssertionCheckAfterNewPost(){
        cy.get(AssertAfterChkNP).should('have.text', ' Edit Article')
    }
    
}

export const toNewPost = new NewPost()


