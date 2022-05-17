package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.Random;

public class SignInPage extends Utility {
    private static final Logger log = LogManager.getLogger(SignInPage.class.getName());

    public SignInPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@id='email']")
    WebElement emailAddress;

    @CacheLookup
    @FindBy(xpath = "//input[@id='passwd']")
    WebElement password;

    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Sign in']")
    WebElement signInButton;

    @CacheLookup
    @FindBy(xpath = "//input[@id='email_create']")
    WebElement createEmail;

    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Create an account']")
    WebElement createAnAccountButton;

    @CacheLookup
    @FindBy(xpath = "//h1[@class='page-heading']")
    WebElement authenticationText;

    @CacheLookup
    @FindBy(xpath = "//a[@title='Log me out']")
    WebElement signOutLink;

    @CacheLookup
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[1]/div[1]")
    WebElement invalidSignInErrorMessage;


    public void enterEmailAddress(String username) {
        log.info("Entering Email Address: " + emailAddress.toString());
        sendTextToElement(emailAddress, username);
    }

    public void enterPassword(String password1) {
        log.info("Entering Passoword: " + password.toString());
        sendTextToElement(password, password1);
    }

    public void clickOnSignInButton() {
        log.info("Clicking on sign in button: " + signInButton.toString());
        clickOnElement(signInButton);
    }

    public void enterEmailForCreateAccount(String email1) {
        Random randomGenerator=new Random();
        int randomInt=randomGenerator.nextInt(1000);
        log.info("Entering email address: " + randomInt + createEmail.toString());
        sendTextToElement(createEmail, randomInt+email1);
    }

    public void clickOnCreateAnAccountButton() {
        log.info("Clicking on create Account button: " + createAnAccountButton.toString());
        clickOnElement(createAnAccountButton);
    }

    public String getAuthenticationText() {
        log.info("Getting 'Authentication' text: " + authenticationText.getText());
        return getTextFromElement(authenticationText);
    }

    public String checkSignOutLinkIsDisplayed() {
        log.info("Checking signout link is displayed: " + signOutLink.isDisplayed());
        return getTextFromElement(signOutLink);
    }

    public void clickOnSignOutLink() {
        log.info("Clicking on sign out link: " + signOutLink.toString());
        clickOnElement(signOutLink);
    }

    public String getErrorAtInvalidSignIn() {
        log.info("Getting error message for invalid credentials: " + invalidSignInErrorMessage.getText());
        return getTextFromElement(invalidSignInErrorMessage);
    }

    public void verifyThatSignInLinkIsDisplayed() {
        log.info("Verifying that 'Sign in' link is displayed: " + signInButton.getText());
        verifyThatElementIsDisplayed(signInButton);
    }

}
