[![Netlify Status](https://api.netlify.com/api/v1/badges/b12a080d-0b36-440a-a6c5-2368a6ba02b3/deploy-status)](https://app.netlify.com/sites/dapper-stroopwafel-83fd3e/deploys)

This is the solution for the tess assignment I got from Nexus Auto Transport after i applied to the open position they have had for some time.

The content of the test assignment:

Hello, Борис Попић

Objective
Using Vue.js, create a dynamic dropdown selection interface for Year, Make, and Model based on data retrieved from a third-party API. This interface should allow users to first select a year, then a make (based on the selected year), and finally a model (based on the selected year and make).
API Endpoints

    Get Available Years:Endpoint: GET https://new.api.nexusautotransport.com/api/vehicles/years
    Description: Returns a list of all available vehicle years.


    Get Available Makes for a Given Year:Endpoint: GET https://new.api.nexusautotransport.com/api/vehicles/makes?year=2020
    Description: Returns a list of makes for the specified year. Replace {year} with the desired year.


    Get Available Models for a Given Year and Make:Endpoint: GET https://new.api.nexusautotransport.com/api/vehicles/models?year=2010&make=Audi
    Description: Returns a list of models based on the specified year and make. Replace {year} with the desired year and {make} with the desired make.


    Note: Set the HTTP request headers to:Accept: application/json
    Content-Type: application/json



Requirements


    Dynamic Dropdowns: Create dropdown menus for selecting Year, Make, and Model, where:Selecting a Year dynamically populates the Make dropdown.
    Selecting a Make dynamically populates the Model dropdown.

    Best Practices: Use modern Vue3.js features and best coding practices, including clean code structure, proper state management, and error handling.

    Deployment: Deploy your solution to a platform where it can be easily tested (e.g., Vercel, Netlify, GitHub Pages) and provide a link for review.


Deliverables


    The deployed link to your working solution.

    A link to your code repository.

Curls

    curl -X GET -H "Accept: application/json" "https://new.ai.nexusautotransport.com/api/vehicles/years"
    curl -X GET -H "Accept: application/json" "https://new.api.nexusautotransport.com/api/vehicles/makes?year=2020"
    curl -X GET -H "Accept: application/json" "https://new.api.nexusautotransport.com/api/vehicles/models?year=2008&make=Smart"
    curl -X GET -H "Accept: application/json" "https://new.api.nexusautotransport.com/api/vehicles/models?page=1"
