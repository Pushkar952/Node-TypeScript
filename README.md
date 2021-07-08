# Simbex Reload API

# Contents

* [Global Requisites](#global-requisites)
* [Install, Configure & Run](#install-configure--run)
* [Directory Structure](#directory-structure)

## Global Requisites
* node (>= 12.14.1)
* tsc (>= 3.9.9)

## Install, Configure & Run
Below mentioned are the steps to install, configure & run in your platform/distributions.

### Installing dependencies
To install Node modules, in the project root directory, run
```bash
$ yarn install
```
### Environment setup
To set up environment add `.env` file in project root directory and add the environment
variable <br>
**Notes -** For reference look into `.env.example` file in root directory

### Running project
To run project, in project directory run
#### To run development server
```bash
$ yarn run dev
```
#### To build
```bash
$ yarn run build
```
#### For linting
```bash
$ yarn run lint // for checking lint
$ yarn run lint:fix // for lint checking and fixing
```

## Directory Structure

```bash
    src
    |-- bin
    |   `-- www.ts
    |-- config
    |   |-- errors.ts
    |   |-- node.ts
    |   |-- queue.ts
    |   `-- swagger.ts
    |-- exception
    |   |-- handler.ts
    |   `-- nativeEvents.ts
    |-- helpers
    |   |-- healthCheck.ts
    |   |-- index.ts
    |   |-- logger.ts
    |   `-- swagger.ts
    |-- providers
    |   |-- app.ts
    |   |-- database.ts
    |   |-- express.ts
    |   |-- queue.ts
    |   `-- routes.ts
    |-- routes
    |   |-- index.ts
    |   `-- v0
    |       |-- healthCheck.ts
    |       `-- index.ts
    |-- swagger
    |   `-- error.ts
    |-- types
    |   `-- response.ts
    `-- utils
        `-- express.ts
```
