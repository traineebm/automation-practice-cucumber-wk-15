package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class ProductPage extends Utility {
    private static final Logger log = LogManager.getLogger(ProductPage.class.getName());

    public ProductPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[@id='color_8']")
    WebElement colorWhite;

    @CacheLookup
    @FindBy(xpath = "//a[@id='color_13']")
    WebElement colorOrange;

    @CacheLookup
    @FindBy(xpath = "//a[@id='color_14']")
    WebElement colorBlue;

    @CacheLookup
    @FindBy(xpath = "//a[@id='color_15']")
    WebElement colorGreen;

    @CacheLookup
    @FindBy(xpath = "//select[@id='group_1']")
    WebElement selectSize;

    @CacheLookup
    @FindBy(xpath = "//input[@id='quantity_wanted']")
    WebElement addQty;

    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Add to cart']")
    WebElement addToCart;

    @CacheLookup
    @FindBy(xpath = "//h2[normalize-space()='Product successfully added to your shopping cart']")
    WebElement verifyAddText;

    @CacheLookup
    @FindBy(xpath = "//span[@title='Close window']")
    WebElement closeButton;

    @FindBy(xpath = "//a[@class='product-name']")
    List<WebElement> productList;

    public void clickOnProductList(String text)  {
        for(WebElement list : productList){
            if(list.getText().equalsIgnoreCase(text)){
                log.info(("Selecting Product: "+ text));
                clickOnElement(list);
                break;
            }
        }
    }

    public void selectColour(String color) {
        if (color.equalsIgnoreCase("White")) {
            log.info("Clicking on White Colour: " + colorWhite.toString());
            clickOnElement(colorWhite);

        } else if (color.equalsIgnoreCase("Orange")) {
            log.info("Clicking on Orange Colour: " + colorOrange.toString());
            clickOnElement(colorOrange);

        } else if (color.equalsIgnoreCase("Green")) {
            log.info("Clicking on Green Colour: " + colorGreen.toString());
            clickOnElement(colorGreen);

        } else if (color.equalsIgnoreCase("Blue")) {
            log.info("Clicking on Blue Colour: " + colorBlue.toString());
            clickOnElement(colorBlue);
        }
    }

    public void enterQuantity(String qty) {
        clickOnElement(addQty);
        log.info("Clearing the quantity: " + addQty.toString());
        addQty.clear();

        log.info("Adding the quantity: " + addQty.toString());
        sendTextToElement(addQty, qty);
    }

    public void selectSize(String size) {
        log.info("Selecting the size: " + selectSize.toString());
        selectByVisibleTextFromDropDown(selectSize, size);
    }

    public void clickOnAddCartButton() {
        log.info("Clicking on Add to Cart Button: " + addToCart.toString());
        clickOnElement(addToCart);
    }

    public String getAddToCartMessage() {
        log.info("Verifying Add to cart message: " + verifyAddText.toString());
        return getTextFromElement(verifyAddText);
    }

    public void clickOnCloseButton() {
        log.info("Closing pop up window: " + closeButton.toString());
        clickOnElement(closeButton);
    }

}
