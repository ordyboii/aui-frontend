# Contribution guide for Adviser UI frontend

TODO

# Contributing guide for Adviser UI frontend

Thank you for your consideration to contribute to Adviser UI frontend! Follow the guidelines below to ensure a smooth contribution process.

## How to Contribute

1. **Fork the Repository**
   Click the "Fork" button at the top right of the repository page to create your own copy of the project.

2. **Clone Your Fork**

   ```bash
   git clone https://github.com/ordyboii/aui-frontend.git
   cd aui-frontend
   ```

3. **Create a Branch**
   Always create a new branch for your feature, bug fix, documentation or refactor.

   ```bash
   git checkout -b your-feature-branch
   ```

4. **Make Your Changes**
   Implement your feature or fix the bug. Ensure your code adheres to the project's coding standards.

5. **Commit Your Changes**
   Use Conventional Commits to format your commit messages. Here are some examples:
   - **feat:** A new feature (this will publish a new)
   - **fix:** A bug fix
   - **BREAKING CHANGE:** A change will require users to refactor their code
   - **docs:** Documentation only changes
   - **style:** Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)
   - **refactor:** A code change that neither fixes a bug nor adds a feature
   - **perf:** A code change that improves performance
   - **test:** Adding missing tests or correcting existing tests
   - **chore:** Changes to the build process or auxiliary tools and libraries such as documentation generation

If you use **feat:**, **fix:** or **BREAKING CHANGE:** in any commit, this will create a new version of the package that will be released to npm and will create a Github release.

Here is what will happen:

- **fix:** will increment the patch version. For example, 1.0.1 to 1.0.2
- **feat:** will increment the minor version. For example, 1.0.0 to 1.1.0
- **fix:** will increment the major version. For example, 1.0.0 to 2.0.0

- Example commit message:
  ```
  feat: add user authentication feature
  ```

6. **Push Your Changes**

   ```bash
   git push origin your-feature-branch
   ```

7. **Create a Pull Request**
   - Go to the original repository and click on "New Pull Request." Select your branch and submit the pull request.

## Code of Conduct

Adhere to our Code of Conduct in all interactions within the project.

## Questions?

If you have any questions, feel free to reach out by opening an issue or contacting the maintainers.
