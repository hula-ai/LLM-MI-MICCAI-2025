# LLM-MI-MICCAI-2025

# How to pull the latest code from the repository for the first time:

```bash
git init

git remote add origin https://github.com/hula-ai/LLM-MI-MICCAI-2025.git

git pull origin main
```

# How to push the latest code to the repository and Github Pages:

- Make sure you have the latest code pulled from the repository.

```bash
git pull origin main
```

```bash
npm run build

git add .
git commit -m "Update"
git push origin main

npm run deploy
```
