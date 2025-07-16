# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


```
CREWup
├─ .env
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.cjs
├─ public
│  ├─ event-images
│  │  ├─ aihealth.jpeg.jpeg
│  │  ├─ devclash.jpeg.jpeg
│  │  ├─ gamejam.jpeg.jpeg
│  │  ├─ greencode.jpeg.jpeg
│  │  ├─ hackfuture.jpeg.jpeg
│  │  ├─ startupweekend.jpeg.jpeg
│  │  ├─ uisprint.jpeg.jpeg
│  │  ├─ uxathon.jpeg.jpeg
│  │  ├─ voiceai.jpeg.jpeg
│  │  └─ web3warriors.jpeg.jpeg
│  ├─ favicon.svg
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ assets
│  │  └─ react.svg
│  ├─ components
│  │  ├─ Auth.jsx
│  │  ├─ CreateContest
│  │  │  ├─ ConfettiSuccess.jsx
│  │  │  ├─ ContestForm.jsx
│  │  │  ├─ CreateContest.jsx
│  │  │  ├─ EmojiHeader.jsx
│  │  │  ├─ GlowingInput.jsx
│  │  │  ├─ ImageUpload.jsx
│  │  │  ├─ PillOptions.jsx
│  │  │  ├─ SubmitButton.jsx
│  │  │  ├─ TagSelector.jsx
│  │  │  └─ TogglePills.jsx
│  │  ├─ EventCard.jsx
│  │  ├─ Hero.jsx
│  │  ├─ HowItWorks.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ Onboarding.jsx
│  │  ├─ ProfilePanel.jsx
│  │  ├─ ProtectedRoute.jsx
│  │  ├─ RequestsInbox.jsx
│  │  ├─ Sidebar.jsx
│  │  ├─ steps
│  │  │  ├─ Step1.jsx
│  │  │  ├─ Step2.jsx
│  │  │  ├─ Step3.jsx
│  │  │  ├─ Step4.jsx
│  │  │  ├─ Step5.jsx
│  │  │  └─ Step6.jsx
│  │  └─ Topbar.jsx
│  ├─ data
│  │  └─ dummyEvents.js
│  ├─ index.css
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ ContestsPage.jsx
│  │  ├─ CreateContestPage.jsx
│  │  ├─ Dashboard.jsx
│  │  └─ Home.jsx
│  ├─ styles
│  │  └─ global.css
│  ├─ supabase
│  │  └─ supabaseClient.js
│  └─ utils
│     └─ supabaseHelpers.js
├─ tailwind.config.js
├─ vercel.json
└─ vite.config.js

```