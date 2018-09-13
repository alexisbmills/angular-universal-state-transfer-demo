# Angular Universal State Transfer
A demo of server to browser state transfer (hydration), using Angular 6.

```
$ yarn install
$ yarn build:ssr
$ yarn serve:ssr
```

Navigate to `http://localhost:4000`.

A mock API is implemented for the display of users' details.

State Transfer is implemented for the following:
1. API loaded data, users list/detail views (`src/app/module/users/services/user-repository.service.ts`)
2. Configuration
    1. Browser (`src/app/module/core/service/browser-config.service.ts`)
    2. Server (`src/app/module/core/service/server-config.service.ts`)

This repository also contains some concepts outside of state transfer I  required for a personal proof of concept, including:
- Lazy-loaded modules
- Dynamic content resolution

Reference: https://blog.angularindepth.com/using-transferstate-api-in-an-angular-5-universal-app-130f3ada9e5b