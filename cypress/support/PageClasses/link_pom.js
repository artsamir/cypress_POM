class link_pom{

clickonlink(link){  // the link we have to pass it from our test script as a parameter

    cy.contains(link).click();
}

}

export default link_pom;