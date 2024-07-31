# neembly-frontend

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).





Product Listing Web Application
Overview
This web application displays a list of products and allows users to perform CRUD operations (Create, Read, Update, Delete). The application is built using Vue.js and Vue Bootstrap for styling.

Features
Product Listing: Displays a list of products fetched from an external API.
Search / Filter: Allows users to search for products by title.
CRUD Operations: Users can create, edit, and delete products.
Create: Add a new product to the list.
Read: View the list of products.
Update: Edit existing product details.
Delete: Remove products from the list.
Technologies Used
Vue.js: JavaScript framework for building user interfaces.
Axios: Promise-based HTTP client for making requests.
Setup Instructions
Prerequisites
Node.js and npm are installed on your machine.
A code editor, such as Visual Studio Code.


git clone https://github.com/yourusername/your-repository.git
cd your-repository


Install dependencies
npm install

Run the application 
npm run dev

This command will start the development server. Open your browser and go to http://localhost:3000 to view the application.

Product viewing 
http://localhost:3000/products

Usage
Adding a Product: Click the "Add Product" button and fill out the form.
Editing a Product: Click the "Edit" button next to a product, make the necessary changes, and save.
Deleting a Product: Click the "Delete" button next to the product you want to remove.
Searching Products: Use the search bar at the top to filter products by title.
API Reference
This application uses the following fake API for product data:

Fake Store API




























