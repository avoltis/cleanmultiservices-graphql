# cleanmultiservices-graphql 

DEMO : 
graphQL layer on top of rest server api 
restAPI: https://clean-multiservices-restapi.herokuapp.com/
git rest API: https://github.com/avoltis/clean-multiservices-restAPI
## Start App
Make sure you run:
`npm install`
`npm start`

graphQL: http://localhost:4000/

## graphQL query example 

`{
  cleanMultiservices {
    headerText {
      title
      smallTitle
    }
    mainPageText {
      header
      mainSection {
        title
        smallTitle
        description
        contact
      }
      mainPageFooterSection {
        title
        smallTitle
        description
      }
    }
    aboutPageText {
      header
      title
      smallTitle
      descriptionPart1
      boldTextPart1
      boldTextPart1Description
      boldTextPart2
      boldTextPart2Description
      descriptionPart2
    }
    productsPageText {
      header
      mainSection {
        title
        smallTitle
        boldTextPart1
        boldTextPart1Description
        boldTextPart2
        boldTextPart2Description
      }
      middleSection {
        title
        smallTitle
        boldTextPart1
        boldTextPart2
      }
      footerSection {
        title
        smallTitle
        boldTextPart1
        boldTextPart2
        boldTextPart3
        description
      }
    }
    storePageText {
      header
      mainSection {
        title
        smallTitle
        open {
          openingHoursMondayToFriday
          openingHoursSaturday
          openingHoursSunday
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
      }
      middleSection {
        title
        smallTitle
        descriptionPart1
        descriptionPart2
      }
    }
    contactPageText {
      header
    }
    contact {
      text
      phone
      email
    }
    address {
      street
      city
    }
    footerText
  }
}`

## Publish to heroku

Prerequisites: Install Git and the Heroku CLI

- `heroku login`

- `heroku create graphQL-multiservices`

- `git push heroku master` 

need to add Config Vars 
NODE_ENV to production

- `heroku open` 