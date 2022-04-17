# Back-end APP created for Alkemy Challenge

https://alkemychallengebackend.herokuapp.com/

## Intro

    Back-end APP created for the Alkemy Challenge. This handles all the request done from
    the front-end APP with the addition of a few other end-points to manage the DB.
    The objetive of this challenge is to build a personal balance APP that will show In and Outs of money
    done by the user.
    The APP is designed to store each item separately in each user as a child to handle user based requests.

## Resources

- **Basic languages:** JavaScript

    Based both Front-end and Back-end in MERN stack.

- **Frameworks:** Express.js

    Chosed because of ease of use, and simplicity.

- **Database:** Cloud based MongoDB

    Quick to setup and use.

- **Libraries:** 
    1. Mongoose: Used to manage MongoDB.
    2. Morgan: Used to be able to read DB returns.
    3. Nodemon: Used to handle modifications in the server without having to restart.
    4. Jsonwebtoken: Used to generate a JWT for authentification.
    5. bcrypt: Installed but not implemented, was to handle passwords.

## Architecture

    The APP is divided into:

    ```mermaid
    graph LR
    A[root] --> B[src] --> D[controllers]
    A --> C[public] --> G[img]
    B --> E[libs]
    B --> F[messages]
    B --> F[middleware]
    B --> F[models]
    B --> F[routes]
    ```

- **root:** Contains package data, settings and this readme.
- **src:** Contains index.js and app.js to handle APP loading. Contains database connection script.
- **public:** Contains main page.
- **img:** Contains favicon.
- **controllers:** Contains folders for each category, with sepparated controller functions.
- **libs:** Contains pagination.
- **messages:** Contains message objects.
- **models:** Contains APP models.
- **routes:** Contains routing functions.

## Endpoints

    The APP can handle the following endpoints:
    > /api/users
    To create a new user ( POST ) and find a list of all users ( GET )
    > /api/users/:id
    To modify an existing user ( PUT ) and delete an user ( DELETE )
    > /api/login/user
    To log-in an user
    > /api/items
    To create an item ( POST )
    > /api/items?user_id=&item_id=
    To delete an item ( DELETE ) and modify an item ( PUT )
    > /api/items/:id
    To get all items from that user id ( GET )


## How to run it

    Create a new folder, and do run:
    > npm run dev
    To run it as a developer locally
    > npm run build
    To build it for production
    > npm start
    To start it in production

## Deploy

    APP is deployed in Heroku, doesn't need to do a production build.