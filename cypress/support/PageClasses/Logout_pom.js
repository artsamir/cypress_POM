class Logout_pom{

logout(){
    
    cy.get('.oxd-userdropdown-name').click()


    cy.get('a[href="/web/index.php/auth/logout"]').click()

} // if the UI is having the same text more than 1, then this will not work

}

export default Logout_pom;