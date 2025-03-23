# action-nexus-upload

This GitHub Action uploads artifacts (including Maven JARs, npm packages, PyPI
distributions, or raw files) to a Nexus repository.

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
    runs-on: ubuntu-lates

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Upload artifact to Nexus
        uses: <your-github-username>/action-nexus-upload@v1
        with:
          nexus-repo-url: ${{ secrets.NEXUS_URL }}
          nexus-upload-url: ${{ secrets.NEXUS_UPLOAD_URL }}
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
| `nexus-upload-url`  | ✅       | The Nexus upload endpoint URL (usually same as `nexus-repo-url`)  |
| `nexus-username`    | ✅       | Nexus username for authentication                                 |
| `nexus-password`    | ✅       | Nexus password or token for authentication                        |
| `nexus-repository`  | ✅       | The repository name in Nexus (e.g., `maven-releases`, `raw-repo`) |
| `artifact-path`     | ✅       | Path to the artifact file to upload                               |
| `artifact-format`   | ✅       | Artifact type: `maven`, `npm`, `pypi`, or `raw`                   |
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
        runs-on: ubuntu-lates

        steps:
            - name: Checkout code
                uses: actions/checkout@v2

            - name: Upload Maven JAR to Nexus
                uses: <your-github-username>/action-nexus-upload@v1
                with:
                    nexus-repo-url: ${{ secrets.NEXUS_URL }}
                    nexus-upload-url: ${{ secrets.NEXUS_UPLOAD_URL }}
                    nexus-username: ${{ secrets.NEXUS_USERNAME }}
                    nexus-password: ${{ secrets.NEXUS_PASSWORD }}
                    nexus-repository: "maven-releases"
                    artifact-path: "build/libs/my-app-1.0.0.jar"
                    artifact-format: "maven"
                    artifact-group-id: "com.example"
                    artifact-id: "my-app"
                    artifact-version: "1.0.0"
```

---

## ✅ Secrets to configure

Add these secrets in your GitHub repository settings:

| Secret Name        | Purpose                                                |
| ------------------ | ------------------------------------------------------ |
| `NEXUS_URL`        | Base URL of your Nexus instance                        |
| `NEXUS_UPLOAD_URL` | The REST upload endpoint (usually same as `NEXUS_URL`) |
| `NEXUS_USERNAME`   | Nexus username                                         |
| `NEXUS_PASSWORD`   | Nexus password or token                                |
