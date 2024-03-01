# Generator Code Setup

To generate updated setup-code on every commit, follow these precommit setup steps for your local dev environment. Make sure to not commit changes without setting up pre-commit.

- Create a pre-commit file

```bash
touch .git/hooks/pre-commit
```

- Open the file using `code` to `vim`

```bash
# using vscode
code .git/hooks/pre-commit

# using vim
vim .git/hooks/pre-commit
```

- Paste these scripts in `.git/hooks/pre-commit`

```bash
# .git/hooks/pre-commit

# Prettier code formatting
echo "Formatting Code using Prettier"
yarn prettier:fix
echo "Checking for code formatting issues"
yarn prettier:check

# Generating setup code for package/registry
echo "Generator code for updating package/registry"
echo "Updating package/registry/setup-code.json and package/registry/component-examples.json"
yarn package:generate
```
