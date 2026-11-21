# Publish the Higher Math for the Impatient library on GitHub (Windows / PowerShell)

This guide assumes the ZIP file is in your **Downloads** folder and you use Git for Windows (or GitHub Desktop's command line). It does **not** modify any of your existing book/laboratory repositories.

## Step 1 — Create the empty repository on GitHub

In a browser, sign into your GitHub account **Mircus**, then open:

https://github.com/new

Set **Repository name** to exactly `Higher-Math-for-the-Impatient`. Choose **Public**. Do **not** check "Add a README", `.gitignore`, or license (these are already handled or deliberately deferred). Click **Create repository**.

If you use a different repository name, you must also change URLs in the website and the `sitemap.xml` / `robots.txt` files.

## Step 2 — Unzip the provided package

Open **PowerShell**:

```powershell
$zip = "$HOME\Downloads\Higher-Math-for-the-Impatient-GitHub-Pages.zip"
$site = "$HOME\Desktop\Higher-Math-for-the-Impatient"
New-Item -ItemType Directory -Force -Path $site | Out-Null
Expand-Archive -LiteralPath $zip -DestinationPath $site -Force
Set-Location $site
Get-ChildItem
```

You should see `index.html`, `reader.html`, `contribute.html`, `assets`, `books`, and `README.md` directly in this directory. **Do not** upload just the ZIP or an extra wrapper folder.

## Step 3 — Create the first Git commit and push

```powershell
git --version
git init
git branch -M main
git add .
git commit -m "Launch Higher Math for the Impatient library"
git remote add origin https://github.com/Mircus/Higher-Math-for-the-Impatient.git
git push -u origin main
```

If `git commit` asks for your name/email, set them using your preferred Git identity:

```powershell
git config --global user.name "YOUR_GITHUB_NAME"
git config --global user.email "YOUR_GITHUB_EMAIL"
```

Then repeat the commit and push. If Git asks you to authenticate, complete the browser or credential manager sign-in. Never paste a GitHub password into chat.

## Step 4 — Turn on GitHub Pages

1. Open https://github.com/Mircus/Higher-Math-for-the-Impatient/settings/pages
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Set branch to **main** and folder to **/(root)**.
4. Click **Save**.
5. When the deployment finishes, your public library should be at:

   **https://mircus.github.io/Higher-Math-for-the-Impatient/**

This is a proposed URL until you actually create the repository and enable Pages. It is **not live merely because this package exists**.

## Step 5 — Verify the site

Open the published URL and check:

- All eight cover images display.
- Search and subject filters work.
- Clicking **Read online** opens the PDF reading page.
- **Download PDF** serves the complete manuscript.
- **Code** links point to the intended existing project repositories.
- **Contribute** opens the guidelines.

## Later updates

From the folder you cloned or uploaded:

```powershell
git add .
git commit -m "Update the library"
git push
```

Avoid copying development builds into the root without inspecting the differences. Review manuscript ownership and coauthor credits before publishing revisions.

## Optional local preview

```powershell
py -m http.server 8000
```

Then open http://localhost:8000/ and stop the server with `Ctrl+C`.
