<h1 align="center">Cool Nodejs App</h1>
<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/alphaolomi/cms-nodejs#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/alphaolomi/cms-nodejs/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/alphaolomi/cms-nodejs/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/alphaolomi/cms-nodejs" />
  </a>
</p>

<!-- > cms -->

### 🏠 [Homepage](https://github.com/alphaolomi/cms-nodejs#readme)

Production-ready RESTful APIs using Node.js, Express, and Mongoose.

Built-in features, such as authentication using JWT, request validation, unit and integration tests, continuous integration, docker support, etc. For more details about the features, check the list below.

## Features

- **ES9**: latest ECMAScript features
- **NoSQL database**: [MongoDB](https://www.mongodb.com) object data modeling using [Mongoose](https://mongoosejs.com)
- **Authentication and authorization**: using [passport](http://www.passportjs.org)
- **Validation**: request data validation using [Joi](https://github.com/hapijs/joi)
- **Logging**: using [winston](https://github.com/winstonjs/winston) and [morgan](https://github.com/expressjs/morgan)
- **Testing**: unit and integration tests using [Jest](https://jestjs.io)
- **Error handling**: centralized error handling mechanism
- **Process management**: advanced production process management using [PM2](https://pm2.keymetrics.io)
- **Dependency management**: with [Yarn](https://yarnpkg.com)
- **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv) and [cross-env](https://github.com/kentcdodds/cross-env#readme)
- **Security**: set security HTTP headers using [helmet](https://helmetjs.github.io)
- **Santizing**: sanitize request data against xss and query injection
- **CORS**: Cross-Origin Resource-Sharing enabled using [cors](https://github.com/expressjs/cors)
- **Compression**: gzip compression with [compression](https://github.com/expressjs/compression)
- **CI**: continuous integration with [Travis CI](https://travis-ci.org)
- **Linting**: with [ESLint](https://eslint.org) and [Prettier](https://prettier.io)
- **Editor config**: consistent editor configuration using [EditorConfig](https://editorconfig.org)

## Development

### Installation

Clone the repo:

Install dependencies:

```sh
cd cms
```

```sh
yarn install
```

Environment variables:

```sh
using .env.example

update environment variables
```

### Commands

Running locally:

```sh
yarn dev
```

Running in production:

```sh
yarn start
```

Testing:

```sh
# run all tests
yarn test

# run all tests in watch mode
yarn test:watch

# run test coverage
yarn coverage
```

Docker:

```sh
# run docker container in development mode
yarn docker:dev

# run docker container in production mode
yarn docker:prod

# run all tests in a docker container
yarn docker:test
```

Linting:

```sh
# run ESLint
yarn lint

# fix ESLint errors
yarn lint:fix

# run prettier
yarn prettier

# fix prettier errors
yarn prettier:fix
```

## Author

👤 **Alpha Olomi <alphaolomi@gmail.com> (http://alphaolomi.me)**

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/alphaolomi/cms-nodejs/issues). You can also take a look at the [contributing guide](https://github.com/alphaolomi/cms-nodejs/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Alpha Olomi <alphaolomi@gmail.com> (http://alphaolomi.me)](https://github.com/alphaolomi).<br />
This project is [MIT](https://github.com/alphaolomi/cms-nodejs/blob/master/LICENSE) licensed.

---

<!-- _This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_ -->
