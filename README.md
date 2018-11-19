
# Mitderm Project: Decision Maker


## By [Tristan Deering](https://github.com/Noonmoon), [Ashton Hauser](https://github.com/ashtonhauser), and [Ying Dong](https://github.com/dongyingname)

## Description:

This is a web app that allows groups of friends to vote on a preferred choice.

* Create simple polls quickly and easily. 
* No registration required!
* The creater of the poll will be by email when the poll is created and when a new ranking takes place.
* Users who have the link to the website can view the poll's result.

## Dependencies
- body-parser,
- chart.js
- dotenv
- ejs
- express,
- knex,
- knex-logger
- morgan
- nodesassmiddleware
- nodemailer
- pg
- sortablejs

## Getting Started
- to install all the dependencies.
```
$npm install 
```
- To run the web server run the following command in terminal:
```
$npm run local 
```
- To view the Decision Maker page go to http://localhost:8080/.

- On poll creation page check the 'Require Names?' if you want the users/friends to show their names in the poll

- On submission page rank the decisions by drag-and-drop. Click 'submit' to submit your own ranking. A new link will pop up, which directs you to the poll result.

- On administration page/poll result page the ranking is rendered into a pie-chart. All the users' names, if are required by the creator, are displayed in the bottom left corner.

## Screenshots

![Welcome Page](./screenshots/welcome_page.png)
![Poll Creation Page](./screenshots/create_page.png)
![Link Page](./screenshots/link_page.png)
![Rank Submission Page](./screenshots/sub_page.png)
![Poll Result Page](./screenshots/admin_page.png)

## Author
- [Tristan Deering](https://github.com/Noonmoon)
- [Ashton Hauser](https://github.com/ashtonhauser)
- [Ying Dong](https://github.com/dongyingname)

## License
Free.