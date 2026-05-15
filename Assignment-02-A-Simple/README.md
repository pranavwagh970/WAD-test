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

## Conclusion

Git is used for version control and GitHub is used to store code online. In this assignment, a local Git repository is created and project files are pushed to GitHub using Git commands.
