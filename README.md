[![Netlify Status](https://api.netlify.com/api/v1/badges/3ddcb01a-3642-49d3-8888-232be23f2be7/deploy-status)](https://app.netlify.com/sites/brilliant-cocada-34996f/deploys)

https://brilliant-cocada-34996f.netlify.app/

# Front-end APP created for Alkemy Challenge

## Intro

    This APP was created to fullfil the objetives of the challenge. The APP can handle different users, and register money
    movements for each one.
    The APP can filter the movements and handle specific search querys. Each user is able to create/modify/delete the items.
    Items are listed in descending date order.
    The APP was created using React.js and MUI, done fully responsive.

## Resoures

- **Basic languages:** HTML/CSS/JavaScript

    Based both Front-end and Back-end in MERN stack.

- **Frameworks:** React.js

    Chosed because of experience using it.

- **Libraries:** 
    1. MUI: UI based in Material UI framework.
    2. Sweet Alert2: It's a nice library to feedback the user.

## Architecture

    The APP is divided into:

    ```mermaid
    graph LR
    A[root] --> B[src] --> D[components]
    A --> C[public] --> G[assets
    B --> E[container]
    B --> F[controllers]
    ```

- **root:** Contains package data and this readme.
- **src:** Contains index.js and App.js to handle APP loading.
- **public:** Contains main page.
- **assets:** Contains used images.
- **components:** Contains every react functional component that doesn't have a child, from buttons, forms, dropdowns, etc.
- **container:** Contains every parent of a functional component, and whose handle page navigation.
- **controllers:** Contains JS functions to handle communication with the server.
- **modules:** Contains JS scripts, like search.

## How to run it

    Simply create a new folder and do run console:
    > npm start

## Deploy

    APP is deployed in Netlify, doesn't need to do a production build.