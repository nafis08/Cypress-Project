const DeleteButton = '.btn-outline-danger'

export class DeletePost {
    
    DeletePost() {
        cy.get(DeleteButton).click() //Click Delete Button
    }
    
    WaitForDashBoard() {
        cy.wait(5000) // Wait for 5 sec to load the dashboard
    }
}

export const toDeletePost = new DeletePost()