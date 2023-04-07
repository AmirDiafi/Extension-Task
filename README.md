Sure, here's an explanation of the code readme:

## Main Details:

### Extension window should pop up on installation

This feature ensures that the extension window pops up automatically after the user installs the extension. It can be achieved by using the `chrome.runtime.onInstalled` event in the background script.

### Add intro page to start and generate new secret (Initialize after start)

An intro page is added to the extension to explain its purpose to the user and also to generate a new secret. The initialization can be triggered by the `useEffect` hook in the React component.

### If started, and close app, then open it again, it will ask them to login.

This feature ensures that the user is prompted to log in again if they close the extension and open it again. It can be implemented using persistent state management libraries like Zustand.

### If extension was NOT initialized before, it should generate and present to a user a new secret (secret - just a random string of a static length)

This feature ensures that if the extension has not been initialized before, it should generate and present to the user a new secret. The generation of a new secret can be achieved using a random string generator function.

### When user logged in, it will able to see it's secret key and the cypher key as well.

This feature enables the user to view their secret key and cipher key after logging in. The keys can be displayed in the React component using state management libraries like Zustand.

### They can regenerate the secret, then the cipher key will be updated.

This feature allows the user to regenerate the secret key and update the cipher key. It can be achieved using the `onClick` event in the React component and re-generating a new secret key.

### Logout button, also has button when logout to clear the status as new application

This feature enables the user to log out of the extension and clear the status as a new application. It can be implemented using the `onClick` event in the React component and clearing the state.

### On a subsequent browser opening, extension should not open a pop-up window.

This feature ensures that the extension does not open a pop-up window on subsequent browser openings. It can be achieved by checking the state of the extension in the background script.

## Technologies:

The extension is built using the following technologies:

### React

React is a JavaScript library for building user interfaces. It is used in this extension to create the user interface for the extension.

### TypeScript

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It is used in this extension to provide type safety and better code organization.

### Vite

Vite is a build tool that focuses on speed and efficiency. It is used in this extension to bundle the React components and TypeScript code.

### Zustand (persistent version)

Zustand is a state management library for React. It is used in this extension to manage the state of the extension and ensure persistence across browser sessions.

### CryptoJS

CryptoJS is a library of cryptographic algorithms that can be used in JavaScript. It is used in this extension to encrypt and decrypt the user's secret key.
