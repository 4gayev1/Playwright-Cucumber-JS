Feature: Searching on DLP

        Scenario Outline: Searching Alma
            Given User is on "https://beta.dlp.gov.az/" page
             When User types "alma" in "searchInput"
            #   And User clicks "searchButton"
             Then "text" should have "alma" text


        Scenario Outline: Searching A
            Given User is on "https://beta.dlp.gov.az/" page
             When User types "alma" in "searchInput"
            #   And User clicks "searchButton"
             Then Should send get request "random"