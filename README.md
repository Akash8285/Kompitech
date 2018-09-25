# React Movie Cards

A basic application that displays a list of movies as a list of cards. Each card provides movie detail such as title, subtitle, description, and image.


Futhermore, I have configured webpack to make use of the [copy-webpack-plugin](https://www.npmjs.com/package/copy-webpack-plugin) to copy images into the _public_ folder. I have also included the [json-loader](https://www.npmjs.com/package/json-loader) to load my movie collection from a json file called movies.json.

For styling, I have adopted bootstrap4 beta. I use SCSS for all custom written styles.

The application is composed of the following components:

* Header - A heading that displays application title

* Movies - The primary (root) component that manages state for Movies and all underlying components. It is also responsible for connecting to _MovieService_ to retrieve movie data

* MovieList - Groups a collection of movies

* MovieCard - Represents a single instance of a movie


The following services are used to obtain movie data:

* MovieService - A wrapper that retrieves data from a json file containing a list of movies


### Run

* Run start

  This will run the _'serve'_ npm task

  ```bash
  npm start
  ```

* Run webpack dev server

  ```bash
  npm run serve:dev
  ```

* Alternatively run live-server (simple development http server with live reload capability)

  ```bash
  npm run serve
  ```
