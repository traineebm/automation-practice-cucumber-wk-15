package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver,this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[@title='Women']")
    WebElement womenLink;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Sign in')]")
    WebElement signInLink;

    public void clickOnWomenLink() {
        log.info("Clicking on Women Tab: " + womenLink.toString());
        clickOnElement(womenLink);
    }
    public void clickSignInLink() {
        log.info("Clicking on Sign in Link " + signInLink.toString());
        clickOnElement(signInLink);
    }

}
