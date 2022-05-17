package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CreateAccountPage extends Utility {
    private static final Logger log = LogManager.getLogger(CreateAccountPage.class.getName());

    public CreateAccountPage() {
        PageFactory.initElements(driver,this);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@id='id_gender2']" )
    WebElement radioButton;

    @CacheLookup
    @FindBy(xpath = "//input[@id='customer_firstname']")
    WebElement firstName;

    @CacheLookup
    @FindBy(xpath = "//input[@id='customer_lastname']")
    WebElement lastName;

    @CacheLookup
    @FindBy(xpath = "//input[@id='passwd']")
    WebElement password;

    @CacheLookup
    @FindBy(id = "firstname")
    WebElement addressFirstName;

    @CacheLookup
    @FindBy(id = "lastname")
    WebElement addressLastName;

    @CacheLookup
    @FindBy(xpath = "//input[@id='address1']")
    WebElement address;

    @CacheLookup
    @FindBy(xpath = "//input[@id='city']")
    WebElement city;

    @CacheLookup
    @FindBy(xpath = "//select[@id='id_state']")
    WebElement state;

    @CacheLookup
    @FindBy(xpath = "//input[@id='postcode']")
    WebElement postCode;

    @CacheLookup
    @FindBy(xpath = "//select[@id='id_country']")
    WebElement country;

    @CacheLookup
    @FindBy(xpath = "//input[@id='phone_mobile']")
    WebElement mobileNumber;

    @CacheLookup
    @FindBy(xpath = "//input[@id='alias']")
    WebElement alias;

    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Register']")
    WebElement registerButton;

    @CacheLookup
    @FindBy(xpath = "//h1[@class='page-heading']")
    WebElement myAccountText;


    public void enterAllPersonalDetails(String title, String fname, String lastname, String passwrd){
        log.info("Clicking on female radio button: " + radioButton.toString());
        clickOnElement(radioButton);
        log.info("Entering First Name: " + firstName.toString());
        sendTextToElement(firstName,fname);
        log.info("Entering Last Name: " + lastName.toString());
        sendTextToElement(lastName,lastname);
        log.info("Entering Password: " + password.toString());
        sendTextToElement(password,passwrd);
    }

    public void enterAddressDetails(String fName, String lstName,String add, String cityName, String stateName, String postcode, String mobile){
        log.info("Entering firstname in address details field: " + addressFirstName.toString());
        sendTextToElement(addressFirstName, fName);
        log.info("Entering lastname in address details field: " + addressLastName.toString());
        sendTextToElement(addressLastName, lstName);
        log.info("Entering Address: " + address.toString());
        sendTextToElement(address,add);
        log.info("Entering city: " + city.toString());
        sendTextToElement(city,cityName);
        log.info("Selecting State: " + state.toString());
        selectByVisibleTextFromDropDown(state,stateName);
        log.info("Entering PostCode: " + postCode.toString());
        sendTextToElement(postCode,postcode);
        log.info("Entering Mobile Number: " + mobileNumber.toString());
        sendTextToElement(mobileNumber,mobile);
    }

    public void selectCountryName(){
        log.info("Selecting Country: " + "United States");
        selectByVisibleTextFromDropDown(country,"United States");
    }

    public void enterAlias(String name){
        log.info("Entering Alias: "+alias.toString());
        sendTextToElement(alias,name);
    }
    public void clickOnRegisterButton(){
        log.info("Clicking on register button: " + registerButton.toString());
        clickOnElement(registerButton);
    }
    public String getMyAccountText(){
        log.info("Getting successful registration text: " + myAccountText.getText());
        return getTextFromElement(myAccountText);
    }

}
