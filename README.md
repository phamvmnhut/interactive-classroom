# Interactive-classroom

This repository contains source code of Interactive-classroom application in MVP version.

## Notes
- Firebase authentication works only on localhost:5000 and fails on other Firebase servers


## Our Website

https://interactive-classroom-594c6.web.app/

## Quick start

To run website locally, you'll need to:

1. Clone the demo project from GitHub:

```
git clone https://github.com/phamvmnhut/interactive-classroom.git
```

2. Install packages required for work:

```bash
cd ./functions
npm install
cd ../
```

If you meet an error, run this code

```
npm audit fix
```

Install Firebase CLI

```
npm install -g firebase-tools
```

3. Run demo site: at localhost:5000

```bash
firebase serve
```
## Folder Structure
- functions/
  - routes/
  - views/
  - index.js
  - serviceAccountKey.json
 - public/
 - README.md
 
## Libraries

-   [Bootstrap v4](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
-   [jQuery v3.5.1](https://jquery.com/)
-   [jQuery UI v1.12.1](https://jqueryui.com/)
-   [SpiffForm](https://github.com/knipknap/SpiffForm)
-   [Font Awesome v5.10.0](https://fontawesome.com/)

## Techniques

-   Firebase Authentication
-   Firebase Admin
-   Firebase Hosting
-   Firebase Functions
-   NodeJS v12.0.1
-   Express v4.17.1

## License

Use of this source code is restricted under MindX Hackathon 2020
