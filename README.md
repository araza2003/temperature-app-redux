
---

# CREATE AND DEPLOY YOUR FIRST REACT-REDUX APPLICATION

### Step #01: Install Node.js and npm

1. Visit: https://nodejs.org/en
2. Download the LTS version.
3. Run the installer.
4. Verify the installation:
   - Open Command Prompt and run: `node -v` (This will return the Node.js version).
   - Verify npm installation by running: `npm -v` (This will return the npm version).
5. Open Environment Variables (search for it in the Start menu).
6. Under System Variables, click on `Path`, then click `Edit`.
7. Ensure the path to your Node.js installation is listed. If not, add the path manually.

### Step #02: Create a New React Application

1. Create a new folder for your project.
2. Open the folder in your preferred IDE (e.g., VS Code).
3. Open a new terminal within the IDE.
4. Run the following command to create a new Vite project:
   ```
   npm create vite@latest
   ```
5. Name your project and package.
6. From the options, select React.
7. Choose either TypeScript or JavaScript based on your need.
8. To install the required node modules, run:
   ```
   npm install
   ```
9. Change the directory to your project folder:
   ```
   cd "your_project_name"
   ```
10. To install the node modules, run:
    ```
    npm install
    ```
11. The application is now created. The `src` folder contains the code for your application in the following files:
    - `App.css`: Styles specific to the App component, used to style the overall layout and appearance.
    - `App.jsx / App.tsx`: The main component that defines the structure and renders child components. Use `.jsx` for JavaScript or `.tsx` for TypeScript.
    - `index.css`: Contains global styles and resets for the entire application, applied before rendering the app.
    - `main.jsx / main.tsx`: The entry point where the app is rendered into the DOM, linking the React app to the root HTML element.

12. Add two additional files:
    - `store.js`: Configures the Redux store, combining reducers and middleware. This is where the app’s global state is managed.
    - `your_application_nameSlice.js`: Defines a Redux slice with state, actions, and reducers for a specific feature or domain of the app. This is part of the Redux Toolkit for managing state.

13. Modify and update the files as needed.
14. To run the application, use:
    ```
    npm run dev
    ```
15. A local server URL will appear; Ctrl + Click the link to open the application in your browser.

### Step #03: Install Git (Not GitHub)

1. Visit: https://git-scm.com/downloads
2. Download the appropriate version for your operating system (Windows/Mac/Linux).
3. Run the installer.
4. Verify the installation:
   - Open the terminal and run: `git -v` (This will return the Git version).
5. Open Environment Variables (search for it in the Start menu).
6. Under System Variables, click `Path`, then click `Edit`.
7. Ensure the path to where Git is installed is listed. If not, add it manually.

### Step #04: Push Your Application to GitHub

1. Visit: https://github.com/
2. Log in or sign up for GitHub.
3. Create a new repository (Do not initialize it with a README.md or .gitignore as your project already contains these files).
4. Open the terminal and navigate to your project directory using:
   ```
   cd "path_to_your_project_directory"
   ```
   Alternatively, right-click the folder in File Explorer and select "Open in Terminal."

5. Initialize the Git repository:
   ```
   git init
   ```

6. Add the remote repository (replace `<repository_url>` with your GitHub URL):
   ```
   git remote add origin <repository_url>
   ```

7. Stage all files for commit:
   ```
   git add .
   ```

8. Commit the changes with a message:
   ```
   git commit -m "Initial commit"
   ```

9. Push the changes to the GitHub repository on the `main` branch:
   ```
   git branch -M main
   git push -u origin main
   ```

### Step #05: Deploy to Vercel

1. Visit: https://vercel.com/
2. Log in or sign up for Vercel.
3. Click "Add New" -> "Project".
4. Link your GitHub account to Vercel.
5. Import the repository you want to deploy.
6. Click "Deploy".
7. After deployment, a window will open showing your deployed application in the browser.
8. Copy the provided URL, which is your deployment link.

Additionally, one advantage is that you don't need to manually redeploy on GitHub or Vercel every time you make changes to your project. To deploy the latest changes, follow these steps:
1. Open the terminal in VS Code.
2. Run the following commands:
   ```
   git add .
   git commit -m "Updated feature"
   git push origin main
   vercel --prod
   ```
   ---

---
