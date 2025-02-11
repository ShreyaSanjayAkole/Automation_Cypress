Feature: User Signup

  Scenario: Successful signup with valid details
    Given I open the signup page
    When I enter a valid firstname "john"
    And I enter a valid lastname "smit"
    And I enter a valid email "john@gmail.com"
    And I enter a valid password "John@123"
    And I click on the signup button
    Then I should be redirected to the home page