Feature: Create Account Test
  As user I want to create an account on automation practice website

  @Sanity @Smoke @Regression
  Scenario: Verify That User Should Create Account Successfully
    When    I am on homepage
    And     I click on signIn link
    And     I enter email for create account "Samantha007@gmail.com"
    And     I click on create account button
    And     I enter all my personal details "Mrs","Samantha","Ray","Asdfg909"
    And     I enter  all my address details "Samantha","Ray","10 Newark Street","New York","New York","10101","1234567890"
    And     I select country "United States"
    And     I enter Alias "Sam101@gmail.com"
    And     I click on register button
    Then    I can register successfully



