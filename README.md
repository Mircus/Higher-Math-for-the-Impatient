<p align="center"><img src="assets/higher-math-logo.jpg" width="750" alt="Higher Math for the Impatient"></p>

# Higher Math for the Impatient

**The library and reading room** for an expanding series of short, substantial mathematical books.

> Short books. Serious ideas. No ceremonial boredom.

**Planned public library URL, after GitHub Pages is enabled:**  
`https://mircus.github.io/Higher-Math-for-the-Impatient/`

This repository is a **book shelf, not a replacement for the individual project repositories**. Readers can browse eight booklets, read PDF editions in the browser, download them, and discover their companion code. Contributors can correct problems and propose better examples.

## Read the books

Open the GitHub Pages site, or click a PDF file in [`books/`](books/) to read it in GitHub's interface. Every PDF is stored directly in this repository to make download and offline reading straightforward.

| Volume | Edition | Pages | Companion |
|---|---|---:|---|
| [Where Special Functions Live](books/special-functions.pdf) | Oct 2026 | 31 | — |
| [Hecke Algebras](books/hecke-algebras.pdf) | Revised Oct 2026 | 20 | [Hecke-lab](https://github.com/Mircus/Hecke-lab) |
| [Arithmetic Without Addition](books/arithmetic-without-addition.pdf) | Draft Oct 2026 | 38 | [AWA-Lab](https://github.com/Mircus/AWA-Lab) |
| [Linear Algebra: One Language, Many Dialects](books/linear-algebra.pdf) | Prepublication 1.1 | 88 | [LA-SENSEI](https://github.com/Mircus/LA-SENSEI) |
| [Information Geometry](books/information-geometry.pdf) | Working 0.2 | 37 | [IG-Lab](https://github.com/Mircus/IG-Lab) |
| [Higher Categories as Data Structures](books/higher-categories.pdf) | Working 0.4 | 61 | [HyperCat](https://github.com/Mircus/HyperCat) |
| [Buildings, Polytopes, and Finite Geometry](books/buildings-and-polytopes.pdf) | Nov 2026 | 49 | — |
| [The AI-Native Data Scientist](books/ai-native-data-scientist.pdf) | Applied companion · Oct 2026 | 37 | [OpenInference-Lab](https://github.com/Mircus/OpenInference-Lab) |

## Philosophy

The aim is not to compress entire graduate courses into slogans. Each book begins with decisive examples, develops the central structure honestly, and offers exercises or executable experiments. A reader should emerge knowing what the object is, why it is interesting, where the important theorem enters, and what to learn next.

## Contribute

Please read [CONTRIBUTING.md](CONTRIBUTING.md). Errors, clear explanations, checked exercises, diagrams, and laboratory code are all welcome. Individual code projects have their own repositories; the website's issues and pull requests are for catalogue, reading-room and library improvements.

**Copyright note:** Book rights belong to the stated authors and coauthors. No new Creative Commons, MIT, or other book license is granted by this aggregation. Contact the respective authors before redistributing or modifying the PDF texts.

## Publish on GitHub Pages

The website is *static HTML/CSS/JavaScript*, with no dependencies, build system, database, login, analytics, or third-party fonts. It will work with the free GitHub Pages service for a public repository.

1. Create the public repository named **`Higher-Math-for-the-Impatient`** under **`Mircus`**. Prefer an empty repo (no automatically generated README).
2. Upload/commit the **contents of this folder** to the repository root, not a nested subfolder.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**, then choose **`main`** and **`/(root)`**, and save.
5. Visit `https://mircus.github.io/Higher-Math-for-the-Impatient/` after GitHub reports publication.

For exact Windows steps, see [PUBLISH_WINDOWS_POWERSHELL.md](PUBLISH_WINDOWS_POWERSHELL.md).

## How the static site works

- `index.html` — the public catalogue, search, filters, book cards.
- `reader.html?book=information-geometry` — the in-browser PDF reader with download and code links.
- `contribute.html` — the public contribution guide.
- `assets/js/books.js` — the catalogue manifest. Add or change a book here.
- `assets/covers/` — actual first-page previews extracted from the PDFs.
- `books/` — versioned PDF snapshots in the catalogue.
- `.nojekyll` — instructs GitHub Pages to serve the static files directly.

The embedded PDF reader relies on the browser's built-in PDF viewer; the direct PDF link and download button remain available for browsers that do not support embedded PDF viewing.

### Adding a new book

Copy the approved PDF into `books/`, create a preview of its first page in `assets/covers/`, and add its entry to `window.BOOKS` in `assets/js/books.js`. Verify the authors, title, edition, and page count; link to an existing companion repo only after checking it. Update the table above and check the browser reader. Do not silently replace an edition without updating metadata.

### Local preview

From the repository directory:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/` in a browser. The site requires no installation or build step.

## Editorial status

This is a reading library of existing PDF *editions*, not a declaration that the working editions are final or peer reviewed. Readers should pay attention to each booklet's printed edition.

**Series editor:** Mirco A. Mannucci · HoloMathics LLC.

