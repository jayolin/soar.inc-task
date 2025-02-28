# Soar.Inc Frontend Task

## 🚀 Project Overview
This is the frontend implementation for Soar.Inc's task, built with React and TypeScript. The project is designed to be fully responsive and efficiently handles mock data for rendering UI components.

## 📌 Live Demo
Check out the live version here: [Soar.Inc Task](https://soar-inc-task.vercel.app/)

## 📦 Cloning the Repository
To clone and set up the project locally, run:

```sh
git clone https://github.com/jayolin/soar.inc-task.git
cd soar.inc-task
yarn install
```

## 🚀 Running the Project
After installing dependencies, use the following scripts:

- **Start Development Server**
  ```sh
  yarn start
  ```
- **Build for Production**
  ```sh
  yarn build
  ```

## 🗂 Folder Structure

The project follows a structured approach for scalability and maintainability:

```
soar.inc-task/
│── src/
│   ├── api/        # Contains mock data for rendering UI results
│   ├── assets/     # Static assets (images, icons, etc.)
│   ├── components/ # Reusable UI components
│   ├── context/    # Global state management
│   ├── hooks/      # Custom React hooks
│   ├── pages/      # Application pages
│   ├── types/      # Type definitions for TypeScript
```

## 📡 Deployment
The project is configured for **automatic deployment** on Vercel. Simply commit and push changes to deploy:

```sh
git add .
git commit -m "Your commit message"
git push origin main
```

## 💡 Assumptions Made
- The API endpoints were mocked under `src/api` since no real backend was provided.
- The project follows a **component-based architecture** for reusability.
- **Vercel is used for hosting** and automatically deploys on push.
- **Flexbox and Tailwind CSS** are used for layout and styling.

## 🤝 Contribution
If you'd like to contribute, feel free to fork the repo, create a new branch, and submit a PR.

## 📝 License
This project is for Soar.Inc's frontend task and is not licensed for public use.

---

Enjoy coding! 🚀

