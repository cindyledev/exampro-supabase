# ExamPro Supabase

This is part of the [ExamPro](https://www.exampro.co/) Next.js course.

In this lab, we will be creating the Course portion of ExamPro using the following stack:

## Technology Stack

- Node.js (12.22.0 or later)
- Next.js (12.0.4)
- React (17.0.2)
- TailwindCSS (2.2.19)
- Supabase (1.28.4)

## Getting Started

You may choose to start a new repository or continue with the current `exampro-nextjs` project

If you're starting from scratch, proceed to Step 1.

### Setting Up Next.js

1. Create a new Next.js app called `exampro-supabase`

```bash
npx create-next-app@latest exampro-supabase
```

2. Change to the `exampro-supabase` directory

```bash
cd exampro-supabase
```

### Setting up TailwindCSS

1. Install TailwindCSS, its peer-dependencies, plugins, and other Tailwind Labs tools

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

```bash
npm install @headlessui/react @heroicons/react
```

2. Initialize your Tailwind configuration files

```bash
npx tailwindcss init -p
```

3. Include Tailwind in your CSS by replacing the original content with the following lines in your `./styles/globals.css` file

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. In `tailwind.config.js`, add `orange` to your colors by adding the following line at the top of the file

```javascript
const colors = require('tailwindcss/colors');
```

Extending the color palette by including `orange` then add the purge options to purge un-unsed TailwindCSS styles

```javascript
module.exports = {
  purge: ['./**/*.html', './**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

### Setting Up [Prettier and Husky](https://prettier.io/docs/en/install.html) Hooks (optional)

1. Install Prettier, Husky, and lint-staged

```bash
npm install --save-dev --save-exact prettier
npm install --save-dev husky lint-staged
npx husky install
npm set-script prepare "husky install"
npx husky add .husky/pre-commit "npx lint-staged"
```

2. Create `.prettierrc.json` in the root directory

```json
{
  "arrowParens": "always",
  "bracketSpacing": true,
  "embeddedLanguageFormatting": "auto",
  "endOfLine": "lf",
  "htmlWhitespaceSensitivity": "css",
  "insertPragma": false,
  "bracketSameLine": false,
  "jsxSingleQuote": false,
  "proseWrap": "preserve",
  "quoteProps": "as-needed",
  "requirePragma": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "useTabs": false,
  "vueIndentScriptAndStyle": false,
  "printWidth": 100
}
```

3. Create `.prettierignore` in the root directory

```
package.json
package-lock.json
node_modules/
.cache
.next
```

4. In the `package.json`, add the following scripts and lint-staged:

```json
  "scripts": {
    ...
    "prettier": "prettier --write \"./**/*.{md,json,html,css,js,yml}\"",
    "prettier-check": "prettier --check \"./**/*.{md,json,html,css,js,yml}\"",
    ...
  },
  ...
    "lint-staged": {
    "**/*": "prettier --write --ignore-unknown"
  }
```

### Setting up [`jsconfig.json`](https://code.visualstudio.com/docs/languages/jsconfig)

This specifies path mapping to be computed relative to baseUrl option.

1. Create `jsconfig.json` file

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6",
    "baseUrl": ".",
    "paths": {
      "@/components/*": ["components/*"],
      "@/styles/*": ["styles/*"]
    }
  }
}
```

### Removing unnecessary file and code

1. Delete the `styles/Home.module.css` file
2. Remove everything inside the parent `<div>` element in `./pages/index.js` and the `import` lines

```javascript
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
```

### Using provided components and stylesheets

1. Copy the following components and stylesheet into your project. These are React components that have been styled using TailwindCSS. `Markdown.module.css` is used to style the Markdown content

- Footer from `./components/Footer.js`
- Header from `./components/Header.js`
- Layout from `./components/Layout.js`
- Main from `./components/Main.js`

2. Update the `./pages/index.js` file to include the Layout and Main components

```javascript
import Main from '@/components/Main';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <Main />
    </Layout>
  );
}
```

3. Run `npm run dev` to start the server, you should see
   ![](https://exampro-support.s3.amazonaws.com/Nextjs/starting_app.png)

### Install Supabase

```
npm install @supabase/supabase-js
```
