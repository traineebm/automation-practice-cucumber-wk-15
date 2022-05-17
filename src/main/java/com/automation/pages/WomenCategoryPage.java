package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class WomenCategoryPage extends Utility {
    private static final Logger log = LogManager.getLogger(WomenCategoryPage.class.getName());

    public WomenCategoryPage() {
        PageFactory.initElements(driver,this);
    }

    @CacheLookup
    @FindBy(xpath = "//h2[normalize-space()='Women']")
    WebElement womenTxt;

    public void verifyWomenTxt(String text) {
        log.info("Verifying Women text: " + womenTxt.toString());
        verifyThatTextIsDisplayed(womenTxt, text);
    }

    public void selectMenu(String menu) {
        log.info("Clicking on product: " + menu);
        List<WebElement> topMenuNames = driver.findElements(By.xpath("//div[@id='block_top_menu']//li"));
        for (WebElement names : topMenuNames) {
            if (names.getText().equalsIgnoreCase(menu)) {
                names.click();
                break;
            }
        }
    }
}
