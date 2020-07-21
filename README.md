## Project Description
A food ordering experience for a single restaurant. Hungry clients of this fictitious restaurant can visit its website, select one or more dishes and place an order for pick-up. They will receive a notification when their order is ready.
When an order is placed the restaurant receives the order via SMS. The restaurant can then specify how long it will take to fulfill it. Once they provide this information, the website updates for the client and also notifies them via SMS.

## Final Product
### Customer Experience
![customer-experience-gif](https://github.com/sophdubs/restaurant-takeout-app/blob/master/documentation/client-experience.gif?raw=true)

### Restaurant Owner Experience
![owner-experience-gif](https://github.com/sophdubs/restaurant-takeout-app/blob/master/documentation/owner-experience.gif?raw=true)


## Database Design
!['Entity Relation Diagram'](https://raw.githubusercontent.com/aaron3993/midterm-project/master/documentation/Database%20ERD.png)
Entity-Relationship Diagram used to design our PSQL database tables

## User Stories
!['User Stories](https://github.com/sophdubs/restaurant-takeout-app/blob/master/documentation/user-stories.png?raw=true)
User Stories used to implement features 

## Project Dependencies
- express
- bodyParser
- sass
- cookieSession
- node-postgresql
- twilio

## Project Stack
- Front-End: HTML, SASS, jQuery
- Back-End: Nodejs, Express, EJS, PSQL

## Project Features
- Users can see the list of available dishes (menu)
- Users can add a dishes to the cart
- Users can see the content of their cart and the details about the dishes, and the order total
- Users can modify the content of the cart
- Users can place their order
- Users will receive a notification about when their order will be ready
- Users should see the status of their order on the app (approx. time for pickup)
- Users will receive a notification that their order is ready
- Restaurant owner will receive an SMS notification that an order was made with the order details 
- Restaurant owner can specify how long the order will take to be fulfilled

## Known Issues
- Currently using a "free-trial" version of Twilio so all SMS texts must be sent to pre-registered phone numbers
- User details, including passwords, are currently stored in plain text. 
- User cookie is not encrypted. 

## Authors
- [Sophie Dubois](https://github.com/sophdubs)
- [Aaron Sham](https://github.com/aaron3993)
- [Sandeep Chopra](https://github.com/letsandeepio)
