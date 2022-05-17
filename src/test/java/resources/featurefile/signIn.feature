Feature: SignIn Test
  As user I want to sign in into automation practice website

  @Sanity @Smoke @Regression
  Scenario: User should navigate to signIn page successfully
    Given I am on homepage
    When  I click on signIn link
    Then  I should navigate to signIn page successfully

  @Smoke @Regression
  Scenario Outline: Verify The Error Message With InValid Credentials
    Given I am on homepage
    When  I click on signIn link
    And   I enter invalid username "<userName>"
    And   I enter invalid password "<password>"
    And   I click on SignIn Button
    Then  I should get the error message "<errorMessage>"
    Examples:
      | userName       | password | errorMessage               |
      |                | 123456   | An email address required. |
      | abcd@gmail.com |          | Password is required.      |
      | adfdfgfg       | 123456   | Invalid email address.     |
      | abcd@gmail.com | 123456   | Authentication failed.     |

  @Regression
  Scenario: Verify That User Should LogIn SuccessFully With Valid Credentials
    Given I am on homepage
    When  I click on signIn link
    And   I enter valid email "Samantha007@gmail.com"
    And   I enter valid password "Asdfg909"
    And   I click on SignIn Button
    Then  I can successfully signIn


  @Regression
  Scenario: Verify That User Should LogOut SuccessFully
    Given I am on homepage
    When  I click on signIn link
    And   I enter valid email "Samantha007@gmail.com"
    And   I enter valid password "Asdfg909"
    And   I click on SignIn Button
    And   I click on Sign out Link
    Then  I can successfully sign out