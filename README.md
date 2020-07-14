## Project Description
A food ordering experience for a single restaurant. Hungry clients of this fictitious restaurant can visit its website, select one or more dishes and place an order for pick-up. They will receive a notification when their order is ready.
When an order is placed the restaurant receives the order via SMS. The restaurant can then specify how long it will take to fulfill it. Once they provide this information, the website updates for the client and also notifies them via SMS.

## Final Product
### Customer Experience
![](https://media.githubusercontent.com/media/sophdubs/restaurant-takeout-app/master/documentation/client.gif)

### Restaurant Owner Experience
![](https://media.githubusercontent.com/media/sophdubs/restaurant-takeout-app/master/documentation/owner.gif)

## Dependencies
- express
- bodyParser
- sass
- cookieSession
- node-postgresql
- twilio

## Project Stack
- Front-End: HTML, SASS, jQuery
- Back-End: Nodejs, Express, EJS, PSQL

## Database Design
!['Entity Relation Diagram'](https://raw.githubusercontent.com/aaron3993/midterm-project/master/documentation/Database%20ERD.png)
Entity-Relationship Diagram used to design our PSQL database tables

## User Stories
!['User Stories](https://github.com/sophdubs/restaurant-takeout-app/blob/master/documentation/user-stories.png?raw=true)
User Stories used to implement features 

## Known Issues
- Currently using a "free-trial" version of Twilio so all SMS texts must be sent to pre-registered phone numbers

## Authors
- [Sophie Dubois](https://github.com/sophdubs)
- [Aaron Sham](https://github.com/aaron3993)
- [Sandeep Chopra](https://github.com/letsandeepio)
