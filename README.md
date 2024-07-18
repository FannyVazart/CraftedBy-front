# CraftedByFrontV1

Front project for CraftedBy api
## Create Vue Project
### 1 - Need to have nodeJS & npm installed
```
node --version 
npm --version
```
### 2 - Create Vue project
```
npm create vue@latest
```
```
Project name: … CraftedByFrontV1
Add TypeScript? … No
Add JSX Support? … No
Add Vue Router for Single Page Application development? … Yes
Add Pinia for state management? … Yes
Add Vitest for Unit testing? … Yes
Add an End-to-End Testing Solution? … No
Add ESLint for code quality? … Yes
Add Prettier for code formatting? … Yes
```
```
npm install
npm run lint
npm run dev
```
### 3 - useFetch
useFetch est un hook personnalisé généralement utilisé dans les applications React pour simplifier le processus de récupération de données à partir d'une API. Cependant, dans le contexte de Vue.js, useFetch peut être utilisé avec la bibliothèque Vue Composable pour obtenir un comportement similaire.

Exemple:
```
import { useFetch } from '@vueuse/core'

export default {
  setup() {
    const { data, error, isFetching } = useFetch('https://api.example.com/data')

    return { data, error, isFetching }
  }
}
```
### 4 - Install Tailwind
https://tailwindcss.com/docs/guides/vite#vue

Dans assets/main.css plutot que style.css :
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```





## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
