<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">B3k3n Service for SejutaCita</h3>
  <img src="https://sejutacita.id/static/media/logo-bg-new.14982478.png" alt="logo" width="200">
  <p align="center">
    Web Adaptation from Booku feature in SejutaCita App

  </p>
</div>

<!-- ABOUT THE PROJECT -->

# About The Project

So the project is quite simple, I was assigned to develop Booku feature from SejutaCita app which is still only available in mobile app then migrate the data from API provided to be a complete desktop website.
![Preview][preview]

<p align="right">(<a href="#top">back to top</a>)</p>

## Built With

The following lists show my development stack:

### Frontend Stack

- [React](https://reactjs.org/)
- [Sass](https://sass-lang.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Axios](https://axios-http.com/docs/intro)

### Backend Stack

- API Provided

### Development Tools:

- [Ubuntu 20.04](https://ubuntu.com/)
- [Git](https://git-scm.com/)
- [Neovim](https://neovim.io/)

<p align="right">(<a href="#top">back to top</a>)</p>

## What I've learnt?

- **Consuming API with CORS and its limitation**: the API provided by task requester is not as nice as I thought, I could spent my whole night thinking about the solution of API endpoint with CORS restriction. I found the solution when I checked my older project and I forgot about I need to set proxy in `package.json`. Then I use `axios` for enhance my experience in retrieving data.
- **Building Context API with 4 Reducers**: for a small project like this, I managed to handle Global State through Context API built in the React library. Combine it with useEffect and the newest optional channing by modern javascript, always makes me smile :)
- **Other fun features**: mandatory requirements made me rethink about my initial design, for example, when I look into pagination feature and search feature, there're a lot of things going on there. Since we have to worry about how we manage page after querying the data. All feature must be connected and sure, lots of bugs need to be fixed.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

# Getting Started

## The Feature

- Responsive UI, sass helped me a lot here
- Support pagination, simple pagination attached with next, prev, and 3 numbers
- Bookmark feature that save bookmark books to the local storage
- Search books data in each category

## Prerequisites

If you want to edit the code, you need to have `nodejs` and `NPM`.

- Install all dependencies by this command if you already get node and npm installed in your system.

```sh
npm install
```

<p align="right">(<a href="#top">back to top</a>)</p>

# Usage

- You need to install node js to install and start the react server.
  ```sh
  npm start
  ```
- Development mode will be up and running in `localhost:3000` in your browser

<p align="right">(<a href="#top">back to top</a>)</p>

# Space for Improvement in Backend

- API data needs to be served in JSON format, I found that the Categories API is still using `text/plain` format
- It would be better if there's a search API or data length API so we can get the queried books directly from API, for this application, the search feature is still querying books from all data that has been retrieved in the initial fetch. This make the application slow.
- For the Book API, the page and size query parameter seems redundant since we can make page functionality in frontend side. Size is enough in my opinion.
- There's should be an error message returned from the API if we haven't set the query parameters. At least 404 code type of response. This will enhance error handling from both back and front end.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Sedana Yoga - [Linked In](www.linkedin.com/in/sedanayoga)
Sedana Yoga - [Twitter](https://twitter.com/Cok_Yoga)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[preview]: docs/preview.gif
