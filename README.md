# Integration Engineer Test

We appreciate your interest in the Integration Engineer role at our company. This test helps us understand your skills in creating a Node.js backend API and a ReactJS frontend. You should finish the test within a few hours. Please read the instructions carefully.

## Task Overview:

Your task is to build a simple task management application. This template offers a basic setup for a React frontend using Vite, which connects to a Node/Express backend. Users should be able to view, create, update, and delete tasks.

There are different parts to this exercise:

1. Set up the backend and frontend, resolving any issues that may arise (some issues might not have been noticed by the original developer since 'it works locally').
2. Complete the endpoints for task creation and deletion.
3. Implement missing functions in the React frontend to interact with the new endpoints for task creation and deletion.
4. Develop a new endpoint in the Express app for updating tasks. Create a UI allowing users to update tasks and communicate with this new endpoint.
5. Update the CSS to improve the usability of the solution.

_Additional Information_

- Tasks should be stored temporarily in memory; permanent storage is not necessary.
- Prevent creating or updating tasks with empty titles or descriptions. Display an error if users attempt to submit an invalid task. (Your backend should handle this check and return an error.)
- No guidance is available from the previous developer on setting up the project on a new machine. You'll need to use the existing files to figure it out, considering possible mistakes.
- The backend is in JavaScript, while the frontend React code is in a .tsx file. Make sure your work is valid TypeScript.
- Enable CORS support in the API to permit cross-origin requests.
- The app's rudimentary styling by the previous developer can be improved for better user experience.
- BONUS: If you can optimize the React app's rendering for efficiency, feel free to make changes.

_Submission Guidelines_

- Fork this GitHub repository to your own GitHub account.
- Develop the backend and frontend using the provided directory structure.
- Edit this README below to explain how to run both the backend and frontend.
- Once done, share the link to your forked repository via email.

_Evaluation Criteria_

- Functionality: Does the app meet the requirements and work error-free?
- Code Quality: Is the code well-structured, modular, and easy to understand?
- API Design: Did you design the API in a RESTful way? Is error handling and validation effective?
- Frontend Design: Is the frontend user-friendly, responsive, and visually appealing?
- Git Usage: Are your commits meaningful and code changes well-tracked?
- Documentation: Are instructions provided for setting up the app on a new machine?

Use this opportunity to showcase your skills. If you see fit, add extra features or improvements.

Please note that this test aims to be completed in a few hours. However, quality work is more important than speed. If you have questions, feel free to email us.

Best wishes, and we're excited to review your submission!

Regards,
The Duda Solutions Engineering Team

## Add any instructions to get your submission running below this line.

# Duda Integration Project Documentation

## Introduction

Welcome to the installation and usage documentation for the **Duda Integration** project. This guide will provide you with all the necessary information to install, configure, and run the project effectively.

## System Requirements

Before proceeding, make sure your system meets the following requirements:

- Node.js: v18.13.0 - Click [here](https://nodejs.org/en/download/) to download.
- Yarn: v1.22.19 - Click [here](https://classic.yarnpkg.com/en/docs/install/#windows-stable) to download.

## Installation

Follow the steps below to install the **Duda Integration** project:

1. **Cloning the Repository:**

```bash
git clone https://github.com/lcsflrs/integration-engineer-take-home.git
cd integration-engineer-take-home
```

2. **Installing Dependencies:**

```bash
yarn install
```

## Testing and Running

To test the project, use the following command:

```bash
yarn test
```

To run the project, use the following command:

```bash
yarn dev
```

As this project is a monorepo, you can run the backend and frontend separately. To run the backend, use the following command:

```bash
yarn backend dev
```

To run the frontend, use the following command:

```bash
yarn frontend dev
```

## API Documentation

The API has the following endpoints:

- **GET /tasks** - Returns a list of all tasks.

- **POST /tasks** - Creates a new task.

- **PATCH /tasks/:id** - Updates a task.

- **DELETE /tasks/:id** - Deletes a task.

- **PATCH /tasks/done/:id** - Toggles the status of a task.

You can use the file **insomnia_collection.json** to import the API documentation to Insomnia.
