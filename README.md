# Google extension task

This is a Google Chrome extension that renders a table that authorizes user and stores user secret in encrypted in the storage:

## Main Details

- Extension window should pop up on installation

- Add intro page to start and generate new secret (Initialize after start)

- If started, and close app, then open it again, it will ask them to login.

- If extension was NOT initialized before, it should generate and present to a user a new secret (secret - just a random string of a static length)

- When user logged in, it will able to see it's secret key and the cypher key as well.

- They can regenerate the secret, then the cipher key will be updated.

- Logout button, also has button when logout to clear the status as new application

- On a subsequent browser opening, extension should not open a pop-up window.

## Technologies Used

- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Zustand](https://github.com/pmndrs/zustand) (persistence version)
- [MVP] architecture(<https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93presenter#:~:text=by%20Derek%20Greer.->,Overview,upon%20in%20the%20user%20interface.)
