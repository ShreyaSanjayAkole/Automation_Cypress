Feature: Home page

    Scenario: Validate home page
        Given I open the home page
        Then i should see the site logo

    Scenario: About page
        Given I open the home page
        When i click on about option
        Then i should redirect to about page and go back to home page

    Scenario: Ring page
        Given I open the home page
        When I click on rings option
        Then i should redirect to rings page