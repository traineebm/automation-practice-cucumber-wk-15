$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("createAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Create Account Test",
  "description": "As user I want to create an account on automation practice website",
  "id": "create-account-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5306746500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify That User Should Create Account Successfully",
  "description": "",
  "id": "create-account-test;verify-that-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity"
    },
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on signIn link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter email for create account \"Samantha007@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on create account button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter all my personal details \"Mrs\",\"Samantha\",\"Ray\",\"Asdfg909\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter  all my address details \"Samantha\",\"Ray\",\"10 Newark Street\",\"New York\",\"New York\",\"10101\",\"1234567890\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select country \"United States\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter Alias \"Sam101@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I can register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 67031200,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1284217200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samantha007@gmail.com",
      "offset": 34
    }
  ],
  "location": "CreateAccountPageSteps.iEnterEmailForCreateAccount(String)"
});
formatter.result({
  "duration": 92391200,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountPageSteps.iClickOnCreateAccountButton()"
});
formatter.result({
  "duration": 64488100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mrs",
      "offset": 33
    },
    {
      "val": "Samantha",
      "offset": 39
    },
    {
      "val": "Ray",
      "offset": 50
    },
    {
      "val": "Asdfg909",
      "offset": 56
    }
  ],
  "location": "CreateAccountPageSteps.iEnterAllMyPersonalDetails(String,String,String,String)"
});
formatter.result({
  "duration": 1555811400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samantha",
      "offset": 33
    },
    {
      "val": "Ray",
      "offset": 44
    },
    {
      "val": "10 Newark Street",
      "offset": 50
    },
    {
      "val": "New York",
      "offset": 69
    },
    {
      "val": "New York",
      "offset": 80
    },
    {
      "val": "10101",
      "offset": 91
    },
    {
      "val": "1234567890",
      "offset": 99
    }
  ],
  "location": "CreateAccountPageSteps.iEnterAllMyAddressDetails(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 688421500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 18
    }
  ],
  "location": "CreateAccountPageSteps.iSelectCountry(String)"
});
formatter.result({
  "duration": 58048200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sam101@gmail.com",
      "offset": 15
    }
  ],
  "location": "CreateAccountPageSteps.iEnterAlias(String)"
});
formatter.result({
  "duration": 79357600,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountPageSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 2478840800,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountPageSteps.iCanRegisterSuccessfully()"
});
formatter.result({
  "duration": 38020500,
  "status": "passed"
});
formatter.after({
  "duration": 683833200,
  "status": "passed"
});
formatter.uri("signIn.feature");
formatter.feature({
  "line": 1,
  "name": "SignIn Test",
  "description": "As user I want to sign in into automation practice website",
  "id": "signin-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4866774300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to signIn page successfully",
  "description": "",
  "id": "signin-test;user-should-navigate-to-signin-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity"
    },
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on signIn link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to signIn page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 28700,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1192757300,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageSteps.iShouldNavigateToSignInPageSuccessfully()"
});
formatter.result({
  "duration": 34615100,
  "status": "passed"
});
formatter.after({
  "duration": 663520900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Verify The Error Message With InValid Credentials",
  "description": "",
  "id": "signin-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on signIn link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter invalid username \"\u003cuserName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter invalid password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on SignIn Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should get the error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "signin-test;verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "errorMessage"
      ],
      "line": 19,
      "id": "signin-test;verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "",
        "123456",
        "An email address required."
      ],
      "line": 20,
      "id": "signin-test;verify-the-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "",
        "Password is required."
      ],
      "line": 21,
      "id": "signin-test;verify-the-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfdfgfg",
        "123456",
        "Invalid email address."
      ],
      "line": 22,
      "id": "signin-test;verify-the-error-message-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "123456",
        "Authentication failed."
      ],
      "line": 23,
      "id": "signin-test;verify-the-error-message-with-invalid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3905700400,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify The Error Message With InValid Credentials",
  "description": "",
  "id": "signin-test;verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on signIn link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter invalid username \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter invalid password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on SignIn Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should get the error message \"An email address required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 24400,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1726266500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "SignInPageSteps.iEnterInvalidUsername(String)"
});
formatter.result({
  "duration": 53674100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 26
    }
  ],
  "location": "SignInPageSteps.iEnterInvalidPassword(String)"
});
formatter.result({
  "duration": 73175600,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1467942600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An email address required.",
      "offset": 32
    }
  ],
  "location": "SignInPageSteps.iShouldGetTheErrorMessage(String)"
});
formatter.result({
  "duration": 37480900,
  "status": "passed"
});
formatter.after({
  "duration": 667609200,
  "status": "passed"
});
formatter.before({
  "duration": 3758793500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify The Error Message With InValid Credentials",
  "description": "",
  "id": "signin-test;verify-the-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on signIn link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter invalid username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter invalid password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on SignIn Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should get the error message \"Password is required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 27700,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 2223890500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 26
    }
  ],
  "location": "SignInPageSteps.iEnterInvalidUsername(String)"
});
formatter.result({
  "duration": 67452800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "SignInPageSteps.iEnterInvalidPassword(String)"
});
formatter.result({
  "duration": 57927000,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1487525900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 32
    }
  ],
  "location": "SignInPageSteps.iShouldGetTheErrorMessage(String)"
});
formatter.result({
  "duration": 36824000,
  "status": "passed"
});
formatter.after({
  "duration": 657532000,
  "status": "passed"
});
formatter.before({
  "duration": 5404528900,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify The Error Message With InValid Credentials",
  "description": "",
  "id": "signin-test;verify-the-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on signIn link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter invalid username \"adfdfgfg\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter invalid password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on SignIn Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should get the error message \"Invalid email address.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 158700,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 7270268400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfdfgfg",
      "offset": 26
    }
  ],
  "location": "SignInPageSteps.iEnterInvalidUsername(String)"
});
formatter.result({
  "duration": 63716100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 26
    }
  ],
  "location": "SignInPageSteps.iEnterInvalidPassword(String)"
});
formatter.result({
  "duration": 68551500,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 3368303200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email address.",
      "offset": 32
    }
  ],
  "location": "SignInPageSteps.iShouldGetTheErrorMessage(String)"
});
formatter.result({
  "duration": 37761700,
  "status": "passed"
});
formatter.after({
  "duration": 664876700,
  "status": "passed"
});
formatter.before({
  "duration": 6134482300,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify The Error Message With InValid Credentials",
  "description": "",
  "id": "signin-test;verify-the-error-message-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on signIn link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter invalid username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter invalid password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on SignIn Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should get the error message \"Authentication failed.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 27100,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 3896414500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 26
    }
  ],
  "location": "SignInPageSteps.iEnterInvalidUsername(String)"
});
formatter.result({
  "duration": 64383400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 26
    }
  ],
  "location": "SignInPageSteps.iEnterInvalidPassword(String)"
});
formatter.result({
  "duration": 64929100,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1525477800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication failed.",
      "offset": 32
    }
  ],
  "location": "SignInPageSteps.iShouldGetTheErrorMessage(String)"
});
formatter.result({
  "duration": 37148200,
  "status": "passed"
});
formatter.after({
  "duration": 636699100,
  "status": "passed"
});
formatter.before({
  "duration": 9444127200,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Verify That User Should LogIn SuccessFully With Valid Credentials",
  "description": "",
  "id": "signin-test;verify-that-user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I click on signIn link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter valid email \"Samantha007@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter valid password \"Asdfg909\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on SignIn Button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I can successfully signIn",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 24100,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 4118621900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samantha007@gmail.com",
      "offset": 21
    }
  ],
  "location": "SignInPageSteps.iEnterValidEmail(String)"
});
formatter.result({
  "duration": 75127300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Asdfg909",
      "offset": 24
    }
  ],
  "location": "SignInPageSteps.iEnterValidPassword(String)"
});
formatter.result({
  "duration": 67856100,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 5318062300,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageSteps.iCanSuccessfullySignIn()"
});
formatter.result({
  "duration": 46105300,
  "status": "passed"
});
formatter.after({
  "duration": 664174900,
  "status": "passed"
});
formatter.before({
  "duration": 6488016200,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Verify That User Should LogOut SuccessFully",
  "description": "",
  "id": "signin-test;verify-that-user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I click on signIn link",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I enter valid email \"Samantha007@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter valid password \"Asdfg909\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on SignIn Button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on Sign out Link",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I can successfully sign out",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 38600,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1834351000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samantha007@gmail.com",
      "offset": 21
    }
  ],
  "location": "SignInPageSteps.iEnterValidEmail(String)"
});
formatter.result({
  "duration": 75796200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Asdfg909",
      "offset": 24
    }
  ],
  "location": "SignInPageSteps.iEnterValidPassword(String)"
});
formatter.result({
  "duration": 67585500,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 8009884500,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageSteps.iClickOnSignOutLink()"
});
formatter.result({
  "duration": 11226773400,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageSteps.iCanSuccessfullySignOut()"
});
formatter.result({
  "duration": 46170300,
  "status": "passed"
});
formatter.after({
  "duration": 689457700,
  "status": "passed"
});
formatter.uri("womenCategory.feature");
formatter.feature({
  "line": 1,
  "name": "Women Category Page Test",
  "description": "As user I want to navigate to Women category page \u0026 add product to the cart",
  "id": "women-category-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8810108300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify User Should Navigate To Women Category Page Successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-navigate-to-women-category-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity"
    },
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I select tab \"Women\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I can navigate to Women Category Page Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 39700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Women",
      "offset": 14
    }
  ],
  "location": "WomenCategoryPageSteps.iSelectTab(String)"
});
formatter.result({
  "duration": 7636932200,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.iCanNavigateToWomenCategoryPageSuccessfully()"
});
formatter.result({
  "duration": 34141100,
  "status": "passed"
});
formatter.after({
  "duration": 652047900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Verify User Should Add Product To The Cart Successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I select tab \"Women\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select product \"\u003cproduct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I add quantity \"\u003cqty\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select size \"\u003csize\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select colour \"\u003ccolour\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I can add products to the cart successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;",
  "rows": [
    {
      "cells": [
        "product",
        "qty",
        "size",
        "colour"
      ],
      "line": 21,
      "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;1"
    },
    {
      "cells": [
        "Blouse",
        "2",
        "M",
        "White"
      ],
      "line": 22,
      "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;2"
    },
    {
      "cells": [
        "Printed Dress",
        "3",
        "L",
        "Orange"
      ],
      "line": 23,
      "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;3"
    },
    {
      "cells": [
        "Printed Chiffon Dress",
        "4",
        "S",
        "Green"
      ],
      "line": 24,
      "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;4"
    },
    {
      "cells": [
        "Printed Summer Dress",
        "2",
        "M",
        "Blue"
      ],
      "line": 25,
      "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5976887600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify User Should Add Product To The Cart Successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I select tab \"Women\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select product \"Blouse\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I add quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select colour \"White\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I can add products to the cart successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 23400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Women",
      "offset": 14
    }
  ],
  "location": "WomenCategoryPageSteps.iSelectTab(String)"
});
formatter.result({
  "duration": 7372247800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse",
      "offset": 18
    }
  ],
  "location": "WomenCategoryPageSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 4157729800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "WomenCategoryPageSteps.iAddQuantity(String)"
});
formatter.result({
  "duration": 115485100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 15
    }
  ],
  "location": "WomenCategoryPageSteps.iSelectSize(String)"
});
formatter.result({
  "duration": 72247700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "White",
      "offset": 17
    }
  ],
  "location": "WomenCategoryPageSteps.iSelectColour(String)"
});
formatter.result({
  "duration": 66051400,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 56244000,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.iCanAddProductsToTheCartSuccessfully()"
});
formatter.result({
  "duration": 1386177800,
  "status": "passed"
});
formatter.after({
  "duration": 637850800,
  "status": "passed"
});
formatter.before({
  "duration": 4091299600,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify User Should Add Product To The Cart Successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I select tab \"Women\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select product \"Printed Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I add quantity \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select size \"L\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select colour \"Orange\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I can add products to the cart successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 25600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Women",
      "offset": 14
    }
  ],
  "location": "WomenCategoryPageSteps.iSelectTab(String)"
});
formatter.result({
  "duration": 4088883200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Dress",
      "offset": 18
    }
  ],
  "location": "WomenCategoryPageSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 3924791300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "WomenCategoryPageSteps.iAddQuantity(String)"
});
formatter.result({
  "duration": 114474500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 15
    }
  ],
  "location": "WomenCategoryPageSteps.iSelectSize(String)"
});
formatter.result({
  "duration": 71537300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 17
    }
  ],
  "location": "WomenCategoryPageSteps.iSelectColour(String)"
});
formatter.result({
  "duration": 54911700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 50679300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.iCanAddProductsToTheCartSuccessfully()"
});
formatter.result({
  "duration": 3401144400,
  "status": "passed"
});
formatter.after({
  "duration": 640535400,
  "status": "passed"
});
formatter.before({
  "duration": 8326141500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify User Should Add Product To The Cart Successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I select tab \"Women\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select product \"Printed Chiffon Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I add quantity \"4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select size \"S\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select colour \"Green\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I can add products to the cart successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 28400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Women",
      "offset": 14
    }
  ],
  "location": "WomenCategoryPageSteps.iSelectTab(String)"
});
formatter.result({
  "duration": 9118325000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Chiffon Dress",
      "offset": 18
    }
  ],
  "location": "WomenCategoryPageSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 5139535300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "WomenCategoryPageSteps.iAddQuantity(String)"
});
formatter.result({
  "duration": 120230600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 15
    }
  ],
  "location": "WomenCategoryPageSteps.iSelectSize(String)"
});
formatter.result({
  "duration": 38028400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Green",
      "offset": 17
    }
  ],
  "location": "WomenCategoryPageSteps.iSelectColour(String)"
});
formatter.result({
  "duration": 55453100,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 53047500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.iCanAddProductsToTheCartSuccessfully()"
});
formatter.result({
  "duration": 5326520100,
  "status": "passed"
});
formatter.after({
  "duration": 648287800,
  "status": "passed"
});
formatter.before({
  "duration": 12864835500,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify User Should Add Product To The Cart Successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I select tab \"Women\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select product \"Printed Summer Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I add quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select colour \"Blue\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I can add products to the cart successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 32600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Women",
      "offset": 14
    }
  ],
  "location": "WomenCategoryPageSteps.iSelectTab(String)"
});
formatter.result({
  "duration": 4658901400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Summer Dress",
      "offset": 18
    }
  ],
  "location": "WomenCategoryPageSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 5519145900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "WomenCategoryPageSteps.iAddQuantity(String)"
});
formatter.result({
  "duration": 110996400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 15
    }
  ],
  "location": "WomenCategoryPageSteps.iSelectSize(String)"
});
formatter.result({
  "duration": 72501300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 17
    }
  ],
  "location": "WomenCategoryPageSteps.iSelectColour(String)"
});
formatter.result({
  "duration": 59541200,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 49638600,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.iCanAddProductsToTheCartSuccessfully()"
});
formatter.result({
  "duration": 3279706800,
  "status": "passed"
});
formatter.after({
  "duration": 671461600,
  "status": "passed"
});
});