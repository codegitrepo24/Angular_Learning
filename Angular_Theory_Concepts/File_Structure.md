# 📁 Angular Project File Structure Guide

This document explains the default file structure of an Angular project created using `ng new my-app`.

---

## 📦 Top-Level Structure

```
my-app/
├── e2e/                   --> End-to-end testing
├── node_modules/          --> All installed npm packages
├── src/                   --> Source code (your app lives here)
│   ├── app/               --> Main application folder (components, modules, services)
│   ├── assets/            --> Static files like images, icons, etc.
│   ├── environments/      --> Config for different environments (dev, prod)
│   ├── index.html         --> Main HTML file
│   ├── main.ts            --> App entry point
│   ├── styles.css         --> Global styles
│   └── ...
├── angular.json           --> Angular CLI configuration
├── package.json           --> Project dependencies & scripts
├── package-lock.json      --> Locked versions of packages
├── README.md              --> Project documentation
├── tsconfig.json          --> TypeScript configuration
├── tsconfig.app.json      --> TS config for the app code
├── tsconfig.spec.json     --> TS config for test files
└── ...
```

---

## 📁 Explanation of Key Folders and Files

| Item | Purpose |
|------|---------|
| `e2e/` | End-to-end testing folder (Protractor or Cypress) |
| `node_modules/` | Installed libraries & dependencies |
| `src/` | Main source code folder |
| `app/` | Angular components, services, modules |
| `assets/` | Images, fonts, or static files |
| `environments/` | Environment-specific configs |
| `main.ts` | Entry point that bootstraps the Angular app |
| `index.html` | Main HTML page loaded in the browser |
| `styles.css` | Global styles for the application |
| `angular.json` | Configuration for Angular CLI (build, serve, test) |
| `package.json` | Lists dependencies and npm scripts |
| `package-lock.json` | Locks the exact versions of installed packages |
| `tsconfig.json` | TypeScript base config shared by others |
| `tsconfig.app.json` | TypeScript config for application source files |
| `tsconfig.spec.json` | TypeScript config for test files |
| `README.md` | Project documentation or overview |

---

## 📊 Visual Diagram

```
📦 my-app
├── 📁 e2e/                  - End-to-end test files
├── 📁 node_modules/        - Installed packages (auto-generated)
├── 📁 src/                 - Project source files
│   ├── 📁 app/             - Your app components, modules, services
│   │   └── app.component.ts
│   ├── 📁 assets/          - Images, icons, static files
│   ├── 📁 environments/    - Configs for dev/prod
│   ├── 📄 index.html       - Main HTML file
│   ├── 📄 main.ts          - App entry point (bootstraps Angular)
│   ├── 📄 styles.css       - Global styles
│   └── 📄 polyfills.ts     - Legacy browser support
├── 📄 angular.json         - Angular CLI settings
├── 📄 package.json         - Project dependencies & scripts
├── 📄 package-lock.json    - Exact version lock of packages
├── 📄 README.md            - Project guide/documentation
├── 📄 tsconfig.json        - Base TypeScript configuration
├── 📄 tsconfig.app.json    - App-specific TypeScript settings
└── 📄 tsconfig.spec.json   - Test-specific TypeScript settings
```

---

## ✅ Summary

- `src/` is where your actual app lives.
- `angular.json` controls the CLI behavior.
- `package.json` manages dependencies.
- `tsconfig.*.json` controls TypeScript behavior for different purposes.
- `README.md` helps new developers understand the project.


***TO-DO***

Learn about Interpolation
