## Technologies
This app use [React.js](https://reactjs.org) and [TypeScript](https://www.typescriptlang.org) by [CRA](https://create-react-app.dev) template.

## Steps to build and run the app

### Cloning app
To init this tutorial, you need to have this repository on your machine and for it, you can run the command:

```bash
git clone git@github.com:SouzaDaniel/authorify-test.git
```
or
```bash
git clone https://github.com/SouzaDaniel/authorify-test.git
```

### Installing dependencies
We also need external packages that are hosted and made available by NPM. To install them, already inside your project directory, run:

```bash
npm install
```
or
```bash
yarn install
```

To find out which dependencies we have, you can access the `package.json` file.

### Environment variables
In our application, we use external services, for the database (MongoDB) and for the static file storage (Firebase) and because of this, we need to define environment variables to make it possible to read these values and make connections when building and running the application.

Copy and paste the `.env.example` file and rename it to `.env.local`, following this command:

```bash
cp .env.example .env.local
```

After that, fill the fields with the correct values.

### Build and run (local)
You can build and run your application directly from your setup, by running the following command:

```bash
npm run start
```
or
```bash
yarn start
```

If you want to deploy this app, you can use the [CRA doc](https://create-react-app.dev/docs/deployment).
