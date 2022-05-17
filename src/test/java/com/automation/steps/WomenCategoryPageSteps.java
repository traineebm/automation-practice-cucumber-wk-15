package com.automation.steps;

import com.automation.pages.HomePage;
import com.automation.pages.ProductPage;
import com.automation.pages.WomenCategoryPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class WomenCategoryPageSteps {
    @And("^I select tab \"([^\"]*)\"$")
    public void iSelectTab(String menu) {
        new HomePage().clickOnWomenLink();
    }

    @Then("^I can navigate to Women Category Page Successfully$")
    public void iCanNavigateToWomenCategoryPageSuccessfully() {
        new WomenCategoryPage().verifyWomenTxt("Women");
    }

    @And("^I select product \"([^\"]*)\"$")
    public void iSelectProduct(String product) {
       new ProductPage().clickOnProductList(product);
    }

    @And("^I add quantity \"([^\"]*)\"$")
    public void iAddQuantity(String qty) {
        new ProductPage().enterQuantity(qty);
    }

    @And("^I select size \"([^\"]*)\"$")
    public void iSelectSize(String size) {
        new ProductPage().selectSize(size);
    }


    @And("^I select colour \"([^\"]*)\"$")
    public void iSelectColour(String colour) {
        new ProductPage().selectColour(colour);
    }

    @And("^I click on add to cart button$")
    public void iClickOnAddToCartButton() {
        new ProductPage().clickOnAddCartButton();
    }


    @Then("^I can add products to the cart successfully$")
    public void iCanAddProductsToTheCartSuccessfully() {
        new ProductPage().getAddToCartMessage();
        new ProductPage().clickOnCloseButton();
    }
}
