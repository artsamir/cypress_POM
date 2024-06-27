import Login_pom from "../../support/PageClasses/Login_pom";
import Logout_pom from "../../support/PageClasses/Logout_pom";
import link_pom from "../../support/PageClasses/link_pom";


describe('', () => {

    // create Objects of all the 3 classes

    const login_po = new Login_pom();
    const logout_po = new Logout_pom();
    const lk = new link_pom();


    it('', () => {
        
        login_po.enterurl();
        login_po.login();
        lk.clickonlink('Admin');
        cy.wait(2000)
        lk.clickonlink('Leave')
        logout_po.logout();

    });
});