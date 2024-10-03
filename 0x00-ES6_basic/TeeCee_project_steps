To install Jest, Babel, and ESLint in your project directory and add the appropriate configuration files, follow these steps:

### Step 1: Prepare Your Project Directory

Navigate to your project directory in the terminal:

```sh
cd path/to/your/project
```

### Step 2: Install Jest, Babel, and ESLint

To install Jest, Babel, and ESLint, you'll need a `package.json` file. If you already have one, move on to running `npm install`. If not, you can create it by running:

````sh
npm init -y ```
(Although I did this, but the content for package.json, babel.config.js, and .eslintrc.js was given. So I just needed to add those content to the files and run npm install) and running npm init -y created a directory "node_modules". I will observe this and might delete this directory and run npm install again to see if it creates the same directory again or if an issue arises.

Next, install Jest, Babel, and ESLint:

```sh
npm install jest babel-jest @babel/core @babel/preset-env eslint --save-dev
````

This command installs:

- **Jest** for testing.
- **Babel** tools to transpile modern JavaScript.
- **ESLint** for linting JavaScript code.

### Step 3: Add the Configuration Files

Add the following files to your project directory:

#### 1. `package.json`

If you already have a `package.json`, you just need to update it. Below is an example content to add to the `package.json` to configure Jest:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

#### 2. `babel.config.js`

Create a new file called `babel.config.js` and add the following content:

```javascript
module.exports = {
  presets: ["@babel/preset-env"],
};
```

This tells Babel to use the `@babel/preset-env` to transpile modern JavaScript into code that is compatible with older JavaScript environments.

#### 3. `.eslintrc.js`

Create a new file called `.eslintrc.js` and add the following content:

```javascript
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    // Customize your rules here
  },
};
```

This file tells ESLint about the environment, the ECMAScript version, and any rules you want to enforce or modify.

### Step 4: Install Dependencies

Once you have the `package.json` file, run:

```sh
npm install
```

This will install all the dependencies specified in the `package.json` file.

### Summary of Steps

1. **Navigate** to your project directory.
2. **Initialize** the project with `npm init -y` (if you don't already have a `package.json`).
3. **Install** Jest, Babel, and ESLint by running `npm install jest babel-jest @babel/core @babel/preset-env eslint --save-dev`.
4. **Add** the configuration files: `package.json`, `babel.config.js`, and `.eslintrc.js`.
5. **Run** `npm install` to install all necessary dependencies.

I had also used `npm audit` to check for vulnerabilities and `npm audit fix` to fix the vulnerabilities. I had to run `npm audit fix` multiple times to fix all the vulnerabilities. I also ran `npm audit` again to check if all the vulnerabilities were fixed. Some were left so i forced with npm audit fix --force. I will check if this is the right way to do it or if there is a better way to fix vulnerabilities.

`npm update` to update the packages to the latest version.
`npm outdated` to check which packages are outdated.

`npm install --save (or -S) package-name` to install a package and save it to the dependencies list in package.json.

`npm install --save-dev (or -D) package-name` to install a package and save it to the devDependencies list in package.json.
