<h1 align="center">Welcome to ticket-search 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/willwin_w" target="_blank">
    <img alt="Twitter: willwin_w" src="https://img.shields.io/twitter/follow/willwin_w.svg?style=social" />
  </a>
</p>

> CLI for searching tickets, organizations and users

## Preface

### Assumption and constraints

- User id is unique and ordered (Performance optimised using binary search)
- Organization id is unique and ordered (Performance optimised using binary search)
- User without verified set is assumed to be false

### Known problems (can be fixed at a later date)

- Ticket may not have an oganizationId, currently if ticket does not have organizationId, you can't find that.


## Setup

```sh
npm install
```

## Build and Install

```sh
npm run build

npm i -g
```

## Run program

Display what commands are available:

```sh
ticket-search --help
```

Searching for tickets:

```sh
ticket-search ticket --help
```

Searching for organizations:

```sh
ticket-search organization --help
```

Searching for users:

```sh
ticket-search user --help
```

## Dev

```sh
npm run dev
```

## Run tests

```sh
npm test
```

## Run tests with watch

```sh
npm run test:watch
```

## Author

👤 **Willwin Wang**

* Website: https://willwinwang.com
* Twitter: [@willwin\_w](https://twitter.com/willwin_w)
* Github: [@wsquared](https://github.com/wsquared)
* LinkedIn: [@willwinwang](https://linkedin.com/in/willwinwang)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
