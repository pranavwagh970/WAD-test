# Assignment-02-A Simple

## Problem Statement

Create a version control account on GitHub and use Git commands to create a repository and push your code to GitHub.

## Aim

To learn basic version control using Git and GitHub by creating a local repository, committing code and pushing it to a remote GitHub repository.

## Requirements

- Git installed on the system.
- GitHub account.
- Internet connection.
- A project folder containing code files.

## Steps

### 1. Create GitHub Account

Go to `https://github.com` and create a free GitHub account.

### 2. Create New Repository On GitHub

After login, click **New Repository**, enter a repository name and create the repository.

Example repository name:

```bash
wad-assignment-02-a
```

### 3. Open Project Folder In Terminal

Open terminal inside this folder:

```bash
cd Assignment-02-A-Simple
```

### 4. Configure Git

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

### 5. Initialize Git Repository

```bash
git init
```

This creates a hidden `.git` folder and starts version control.

### 6. Check Repository Status

```bash
git status
```

This command shows changed and untracked files.

### 7. Add Files To Staging Area

```bash
git add .
```

This adds all project files for commit.

### 8. Commit Files

```bash
git commit -m "Initial commit"
```

This creates a saved version of the project.

### 9. Rename Branch To Main

```bash
git branch -M main
```

### 10. Connect Local Repository To GitHub

Replace `USERNAME` and `REPOSITORY-NAME` with your GitHub username and repository name.

```bash
git remote add origin https://github.com/USERNAME/REPOSITORY-NAME.git
```

### 11. Push Code To GitHub

```bash
git push -u origin main
```

This uploads the local project code to GitHub.

## Important Git Commands

```bash
git init
git status
git add .
git commit -m "message"
git remote add origin repository-url
git push -u origin main
```

## How To Perform In VS Code

1. Open VS Code.
2. Open the project folder.
3. Open terminal using **Terminal > New Terminal**.
4. Run `git init`.
5. Run `git add .`.
6. Run `git commit -m "Initial commit"`.
7. Create a new repository on GitHub.
8. Add remote repository URL using `git remote add origin`.
9. Push code using `git push -u origin main`.

## Viva Questions

### 1. What is Git?

Git is a version control system used to track changes in project files.

### 2. What is GitHub?

GitHub is an online platform used to store Git repositories and share code.

### 3. What is a repository?

A repository is a project folder managed by Git. It contains project files and version history.

### 4. What is the use of `git init`?

`git init` creates a new local Git repository in the current folder.

### 5. What is the use of `git status`?

`git status` shows the current state of files, such as modified, staged or untracked files.

### 6. What is the use of `git add .`?

`git add .` adds all changed files to the staging area.

### 7. What is staging area?

The staging area is a temporary area where files are added before creating a commit.

### 8. What is a commit?

A commit is a saved snapshot of the project at a particular time.

### 9. What is the use of `git commit -m "Initial commit"`?

It saves the staged files with a message describing the change.

### 10. What is a remote repository?

A remote repository is an online repository stored on GitHub.

### 11. What is the use of `git remote add origin`?

It connects the local Git repository to the GitHub repository.

### 12. What is the use of `git push -u origin main`?

It uploads local commits to the GitHub repository on the `main` branch.

### 13. What is `.gitignore`?

`.gitignore` is used to ignore files or folders that should not be uploaded to GitHub, such as `node_modules`.

### 14. Why should `node_modules` not be pushed?

`node_modules` is large and can be recreated using `npm install`, so it should not be uploaded to GitHub.

## Conclusion

Git is used for version control and GitHub is used to store code online. In this assignment, a local Git repository is created and project files are pushed to GitHub using Git commands.
