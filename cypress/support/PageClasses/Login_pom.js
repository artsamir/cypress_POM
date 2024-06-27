class Login_pom{

enterurl(){

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
}

login(){

    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('.orangehrm-login-button').click()
}


}

export default Login_pom;