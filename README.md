# action-nexus-upload

This GitHub Action uploads artifacts (including Maven JARs, npm packages, PyPI
distributions, or raw files) to a Nexus repository.

## 🔗 Project Status

[![Build Status](https://img.shields.io/github/actions/workflow/status/SourceSpring/action-nexus-upload/main.yml)](https://github.com/SourceSpring/action-nexus-upload)
[![Version](https://img.shields.io/github/v/release/SourceSpring/action-nexus-upload)](https://github.com/SourceSpring/action-nexus-upload/releases)
[![Coverage](https://img.shields.io/badge/coverage-93%25-brightgreen)](https://github.com/SourceSpring/action-nexus-upload)
![Version Updater](https://img.shields.io/github/actions/workflow/status/SourceSpring/action-nexus-upload/main.yml?branch=main)
![GitHub last commit](https://img.shields.io/github/last-commit/SourceSpring/action-nexus-upload)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/SourceSpring/action-nexus-upload)
![GitHub issues](https://img.shields.io/github/issues/SourceSpring/action-nexus-upload)
![GitHub pull requests](https://img.shields.io/github/issues-pr/SourceSpring/action-nexus-upload)
![GitHub forks](https://img.shields.io/github/forks/SourceSpring/action-nexus-upload?style=social)
![GitHub stars](https://img.shields.io/github/stars/SourceSpring/action-nexus-upload?style=social)
![GitHub license](https://img.shields.io/github/license/SourceSpring/action-nexus-upload)
![Used By](https://img.shields.io/github/dependents-repo/SourceSpring/action-nexus-upload)

---

## ✅ Usage

To use this action, create a workflow file in your repository (e.g.,
`.github/workflows/upload.yml`) with the following content:

```yaml
name: Upload to Nexus

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  upload:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Upload artifact to Nexus
        uses: SourceSpring/action-nexus-upload@v0.1.10
        with:
          nexus-repo-url: ${{ secrets.NEXUS_URL }}
          nexus-username: ${{ secrets.NEXUS_USERNAME }}
          nexus-password: ${{ secrets.NEXUS_PASSWORD }}
          nexus-repository: "your-repository-name"
          artifact-path: "path/to/your/artifact.jar"
          artifact-format: "maven"
          artifact-group-id: "com.example"
          artifact-id: "your-artifact-id"
          artifact-version: "1.0.0"
```

---

## ✅ Inputs

| Name                | Required | Description                                                       |
| ------------------- | -------- | ----------------------------------------------------------------- |
| `nexus-repo-url`    | ✅       | The Nexus REST API Base URL (e.g., `https://nexus.example.com`)   |
| `nexus-username`    | ✅       | Nexus username for authentication                                 |
| `nexus-password`    | ✅       | Nexus password or token for authentication                        |
| `nexus-repository`  | ✅       | The repository name in Nexus (e.g., `maven-releases`, `raw-repo`) |
| `artifact-path`     | ✅       | Path to the artifact file to upload                               |
| `artifact-format`   | ✅       | Artifact type: `maven2`, `npm`, `pypi`, or `raw`                  |
| `artifact-group-id` | ❌       | Required for Maven: the group ID (e.g., `com.example`)            |
| `artifact-id`       | ❌       | Required for Maven: the artifact ID (e.g., `my-app`)              |
| `artifact-version`  | ❌       | Required for Maven: the artifact version (e.g., `1.0.0`)          |

---

## ✅ Example: Upload a Maven JAR

```yaml
name: Upload Maven JAR to Nexus

on:
  push:
    branches:
      - main

jobs:
  upload:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up JDK 11
        uses: actions/setup-java@v2
        with:
          java-version: "11"

      - name: Build with Maven
        run: mvn clean package

      - name: Upload Maven JAR to Nexus
        uses: SourceSpring/action-nexus-upload@v0.1.10
        with:
          nexus-repo-url: ${{ secrets.NEXUS_URL }} or "https://nexus.example.com"
          nexus-username: ${{ secrets.NEXUS_USERNAME }}
          nexus-password: ${{ secrets.NEXUS_PASSWORD }}
          nexus-repository: "maven-releases"
          artifact-path: "target/my-app-1.0.0.jar"
          artifact-format: "maven2"
          artifact-group-id: "com.example"
          artifact-id: "my-app"
          artifact-version: "1.0.0"
```

## ✅ Example: Upload a Python or NPM Artifacts

```yaml
name: Upload Python or NPM to Nexus

on:
  push:
    branches:
      - main

jobs:
  upload:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Upload Pypi/npm to Nexus
        uses: SourceSpring/action-nexus-upload@v0.1.10
        with:
          nexus-repo-url: ${{ secrets.NEXUS_URL }} or "https://nexus.example.com"
          nexus-username: ${{ secrets.NEXUS_USERNAME }}
          nexus-password: ${{ secrets.NEXUS_PASSWORD }}
          nexus-repository: "repo-name"
          artifact-path: "dist/my-app.tgz" or "path/my-app.tar.gz"
          artifact-format: "pypi" or "npm"
```

---

## ✅ Secrets to configure

Add these secrets in your GitHub repository settings:

| Secret Name      | Purpose                 |
| ---------------- | ----------------------- |
| `NEXUS_USERNAME` | Nexus username          |
| `NEXUS_PASSWORD` | Nexus password or token |
