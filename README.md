<p align="center">
  <a href="https://www.adammihajlovic.ca">
    <img alt="logo" src="https://res.cloudinary.com/dv6wo6oro/image/upload/v1672251619/personal_logo_be5cebd1b6.png" width="60" />
  </a>
</p>
<h1 align="center">
  Personal Website of Adam Mihajlovic
</h1>

Personal Website made to show my work resume in a more beautiful format. It uses the **Gatsby** framework for the frontend which is based on react but with the use of styled-components. For the backend, it's using **Strapi** to manage the content used in this website along with **Cloudinary** to manage media and **Postgres** for the database.

The frontend of the website is currently hosted on [vercel](https://vercel.com/docs) and the backend is hosted on a home server that can be reached via HTTPS protocol. To take a look at this magnificent website, go to [adammihajlovic.ca](adammihajlovic.ca).

The **Strapi** backend is hosted from home on [home.adammihajlovic.ca/admin](home.adammihajlovic.ca/admin) in order to make changes wherever I am.\
(Needs a password for access by the way :wink:)

For more information please feel free to contact me with my contact information provided on the website: [adammihajlovic.ca](adammihajlovic.ca)

## 🚀 Quick start (To run this locally)

### Prerequisites

Install both Gatsby's and Strapi's CLI to run the servers.

```shell
# installation
npm install -g gatsby-cli
npm install -g strapi

# verify installation
gatsby-cli -v
strapi -v
```

### Environment variables

Navigate to the `/server` folder and make sure you have a `.env` file containing the following:

```shell
APP_KEYS=
HOST=127.0.0.1
PORT=1338
JWT_SECRET=
ADMIN_JWT_SECRET=
API_TOKEN_SALT=
TRANSFER_TOKEN_SALT=
RESEND_API_KEY=

CLOUDINARY_NAME=
CLOUDINARY_KEY=
CLOUDINARY_SECRET=

DATABASE_HOST=
DATABASE_PORT=
DATABASE_NAME=
DATABASE_USERNAME=
DATABASE_PASSWORD=
```

When this is done, navigate back to the source folder and go to `/client` and make sure you `.env` file contains the following:

```shell
STRAPI_TOKEN=
GATSBY_STRAPI_TOKEN= # Should be the same as STRAPI_TOKEN
GATSBY_CONTACT_INFO_RECEIVE_EMAIL=
GATSBY_STRAPI_URL=
```

### Installing dependencies and building project
  
Start by making sure everything is up-to-date.
Both in the `/server` and the `/client` folder, run

```shell
# install dependencies
npm install

# build application
npm run build
```

### Running the back-end

Start by running the back-end (Strapi) by running the following command in the `/server` folder:

```shell
# start in production mode 
npm run start

# OR
# start in development mode (with schema modifications enabled)
npm run develop
```
Your Strapi content-manager should now be running at http://localhost:1338!

### Running the front-end

Then to run the front-end (Gatsby), run the following command in the `/client` folder:

```shell
# start in production mode 
npm run start

# OR
# start in development mode (with auto-reload)
npm run develop
```

Your site is now running at http://localhost:8000!

_Note: You'll also see a second link: http://localhost:8000/\_\_\_graphql. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/part-4/#use-graphiql-to-explore-the-data-layer-and-write-graphql-queries)._

_Note: The way to actually work with graphql in this project is through strapi directly and should be available on the following link: http://localhost:1338/graphql_

## Updating Strapi

When you need to update Strapi to the latest version, you can run the following command to update the project.

```shell
npm run upgrade
```

It's important to note that you will still need to update other **non-Strapi** dependencies on your own in the `package.json` file.

## 🧐 What's inside the Gatsby client?

A quick look at the top-level files and directories you'll see in a Gatsby project (Front-end).

```shell
.
├── node_modules
├── src
├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-ssr.js
├── LICENSE
├── package-lock.json
└── package.json
```

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

4.  **`gatsby-config.js`**: This is the main configuration file for a **Gatsby** site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail).

5.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

6.  **`LICENSE`**: This Gatsby starter is licensed under the **0BSD** license. This means that you can see this file as a placeholder and replace it with your own license.

7.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

8. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how `npm` knows which packages to install for your project.

## 🎓 Useful information

Looking for more guidance? 
- Documentation for [Gatsby](https://www.gatsbyjs.com/docs).
- Documentation for [Strapi](https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html).
