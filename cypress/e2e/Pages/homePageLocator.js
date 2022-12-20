class homePage{
    homePageLocator(){
        let clickAuthor = "//*[@id=\"menu-main-menu-1\"]/li[5]/a"
       // let selectBookWritter = ":nth-child(2) > .author_name > h3"  // (eita o kaj kore)
        let selectBookWritter="//*[@id=\"main_content\"]/div/div/ul/li[1]/a[2]"
        let ViewBookDetails = "//a[contains(text(),'Medi English (For Medical And Admission Test)')]"
        let readMore = "//*[@id=\"product-202348\"]/div[2]/form/div[2]/button[3]"
        let readMorescroll = "//body/div[@id='myModal']/div[1]/ul[1]/li[3]/img[1]"
        let readMoreCross = "//body/div[@id='myModal']/a[1]/i[1]"
        let OrderNow = "//*[@id=\"product-202348\"]/div[2]/form/div[2]/button[2]"
        let popUpCross = "//body/div[@id='extra-add-product-popup']/div[1]/div[1]/div[1]/button[1]/span[1]"
        let clickCardIcon = "/html/body/div[2]/a"
        let orderNowDetails = "/html/body/div[2]/div/div/p[2]/a[2]"

        //......................

        let billing_first_name ="//input[@id='billing_first_name']"
        let billing_phone = "//input[@id='billing_phone']"
        let billing_email = "//input[@id='billing_email']"
       // let clickDropdown = "//body/div[1]/div[3]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/form[1]/div[1]/div[1]/div[1]/p[6]/span[1]/span[1]/span[1]/span[1]"
       
        let billing_area = "//select[@id='billing_area']" 
        let billing_area_select = "//*[@id=\"billing_area\"]/option[88]"
        let billing_address_1 = "//textarea[@id='billing_address_1']"
        let order_comments = "//textarea[@id='order_comments']"
        let shipping_method_check_box_xpath = "//input[@id='shipping_method_0_flat_rate2']"
        let check_box_bkash_Xpath = "//input[@id='payment_method_bkash']"
        let check_box_rocket_Xpath = "//input[@id='payment_method_rocket']"

       //check box  value
       let shipping_method_select_value = "flat_rate:2"
       let check_box_bkash_value = "bkash"
       let check_box_rocket_value = "rocket"
        
         





        cy.wait(4000)
        cy.reload()
        cy.wait(2000)
        cy.xpath(clickAuthor).click()
        //cy.get(selectBookWritter).click()
        cy.xpath(selectBookWritter).click()
        cy.wait(4000)
        cy.xpath(ViewBookDetails).click()
        cy.xpath(readMore).click()
        cy.wait(4000)
        //cy.get('.modal-image-list').type('hello hello')
        cy.xpath(readMorescroll).scrollIntoView()
        cy.wait(4000)
        cy.xpath(readMoreCross).click()
        cy.xpath(OrderNow).click()
        cy.wait(3000)
        cy.xpath(popUpCross).click()
        cy.wait(6000)
        cy.xpath(clickCardIcon).click()
        cy.xpath(orderNowDetails).click()
      
        //......................................

        cy.xpath(billing_first_name).type("sheikh eti")
        cy.xpath(billing_phone).type("01700112233")
        cy.xpath(billing_email).type("sheikheti@gmail.com")
        cy.wait(3000)
        cy.get('#billing_state').select('Bhola', { force: true }).should('have.value','BD-07')//eita kaj korche 
        cy.wait(4000)
        //cy.get('#billing_area').select('উত্তরা', { force: true }).should('have.value','499')
        cy.xpath(billing_area).select("259")
        cy.wait(4000)
        cy.xpath(billing_address_1).type("dhaka ,bangladesh")
        cy.xpath(order_comments).type("hello hiiiiiiiiiiiii")
        cy.wait(2000)
       // cy.get('#billing_area').select("উত্তরা").find('Option:selected').should('have.text','উত্তরা   ')
        
       // cy.get('#shipping_method_0_flat_rate8').check().should('be.enabled').and('have.value', 'flat_rate:8')
        cy.xpath(shipping_method_check_box_xpath).check().should('be.enabled').and('have.value', 'flat_rate:2')
        //cy.get('#shipping_method_0_flat_rate2').check().should('be.enabled')
       // cy.xpath(check_box_bkash_Xpath).check().should('be.enabled').and('have.value', 'bkash')//kajkore
       cy.wait(3000)
       cy.xpath(check_box_rocket_Xpath).check().should('be.enabled').and('have.value', 'rocket')//kaj kore
      // .............................................................................................
         // pore  dekbo
       //cy.get('#billing_area').select("499").find('Option:selected').should('have.text','উত্তরা   ')
        //cy.get('#billing_area').select('499', { force: true }).invoke('val').should('eq', '499')
        //cy.get('#billing_area').select('499')
       // cy.get('#billing_area').select('উত্তরা', { force: true }).should('have.value','499')
        //..................................................................................................
        cy.wait(5000)
        
    






    }
} export default homePage