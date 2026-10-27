# 🚀 Netlify Deployment Guide for Patiala Palace

This guide provides simple, step-by-step instructions to deploy the Patiala Palace website to **Netlify** in under 3 minutes.

---

## ⚡ Method 1: Instant Drag & Drop (Zero Setup, 60 Seconds)

You do **NOT** need Git or command-line tools for this method.

1. Open your browser and navigate to:
   👉 **[https://app.netlify.com/drop](https://app.netlify.com/drop)**
   *(Log in or create a free Netlify account if prompted)*

2. Open the **`patiyala palace 5.0 mk`** folder on your Desktop.

3. Locate the **`dist`** folder.

4. **Drag and drop the `dist` folder** directly into the upload area on the Netlify Drop webpage.

5. Netlify will upload and deploy the website instantly. Once complete, you will receive a public URL (e.g., `https://relaxed-royalty-123456.netlify.app`).

6. *(Optional)* Click **"Site configuration"** > **"Change site name"** to set a custom subdomain like `patiala-palace.netlify.app`, or link a custom domain (e.g. `www.patialapalace.com`).

---

## 🔄 Method 2: Git Repository (Continuous Deployment)

Use this method to automatically redeploy whenever code changes are pushed to GitHub.

### Step 1: Push Code to GitHub
Run the following in PowerShell / Terminal inside `patiyala palace 5.0 mk`:
```bash
git init
git add .
git commit -m "feat: Patiala Palace 5.0 MK release"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

### Step 2: Connect to Netlify
1. Go to **[https://app.netlify.com](https://app.netlify.com)**.
2. Click **"Add new site"** > **"Import an existing project"**.
3. Select **GitHub** and choose your repository.
4. The deployment settings will automatically populate from `netlify.toml`:
   - **Base directory**: *(leave empty / root)*
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **"Deploy site"**.

---

## 🛠️ Verification Checklist
- [x] **SPA Routing**: Handled via `public/_redirects` and `netlify.toml` (prevents 404 on page reload).
- [x] **Video & 3D Assets**: Bundled in `public/assets` and `public/models` (properly served with correct MIME types).
- [x] **Age Verification**: Handled client-side via `localStorage`. Can be bypassed for testing with `?verified=true`.
