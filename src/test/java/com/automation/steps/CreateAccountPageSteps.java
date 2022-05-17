package com.automation.steps;

import com.automation.pages.CreateAccountPage;
import com.automation.pages.SignInPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class CreateAccountPageSteps {
    @And("^I enter email for create account \"([^\"]*)\"$")
    public void iEnterEmailForCreateAccount(String email1) {
        new SignInPage().enterEmailForCreateAccount(email1);
    }

    @And("^I click on create account button$")
    public void iClickOnCreateAccountButton() {
        new SignInPage().clickOnCreateAnAccountButton();
    }


    @And("^I enter all my personal details \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
    public void iEnterAllMyPersonalDetails(String title, String fname, String lastname, String passwrd) {
       new CreateAccountPage().enterAllPersonalDetails(title,fname,lastname,passwrd);
    }

    @And("^I enter  all my address details \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
    public void iEnterAllMyAddressDetails(String fName, String lstName, String add, String cityName, String stateName, String postcode, String mobile) {
       new CreateAccountPage().enterAddressDetails(fName, lstName, add, cityName, stateName, postcode, mobile);
    }

    @And("^I select country \"([^\"]*)\"$")
    public void iSelectCountry(String country) {
       new CreateAccountPage().selectCountryName();
    }

    @And("^I enter Alias \"([^\"]*)\"$")
    public void iEnterAlias(String name){
        new CreateAccountPage().enterAlias(name);
    }

    @And("^I click on register button$")
    public void iClickOnRegisterButton() {
        new CreateAccountPage().clickOnRegisterButton();
    }

    @Then("^I can register successfully$")
    public void iCanRegisterSuccessfully() {
        Assert.assertEquals("My Account text is not displayed","MY ACCOUNT",new CreateAccountPage().getMyAccountText());
    }

}
