Feature: Jobs page

  Scenario: Navigation bar renders
    Given I go to the jobs page
    Then I should see the navigation bar

    Scenario: Keywords search box renders
    //Given I go to the jobs page
    Then I shoud see the keywords search box

     Scenario: Locatoin search box renders
    //Given I go to the jobs page
    Then I shoud see the location search box

    Scenario: Sector List exists
    //Given I go to the jobs page
    Then I shoud see the sector list

    Scenario: Jobs Blogg exists
    //Given I go to the jobs page
    Then I shoud see the jobs articles

        Scenario: Featured Jobs exists
    //Given I go to the jobs page
    Then I shoud see the featured jobs

         Scenario: Footer exists
    //Given I go to the jobs page
    Then I shoud footer

          Scenario: Sign in navigates to correct page
    //Given I go to the jobs page
    Then Sign in URL is correct

    Scenario: Create Account
    Given I go back to the jobs page
    When The page loads
    Then I am taken to the correct URL