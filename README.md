# Aafreen Khan Portfolio

A responsive, static-first personal portfolio built with Next.js, TypeScript and Tailwind CSS. All portfolio content lives in `src/data/portfolio.ts`; the project needs no database, API keys or environment variables.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Update content

Edit `src/data/portfolio.ts` to change the profile links, project details, experience or skill groups. Each project needs a unique `id`, a GitHub `repo` URL and a `visual` key used by the built-in illustrative diagrams. Project artwork is schematic illustration, not a screenshot of the application. No live demos are linked because no working deployment URLs were supplied.

## Add your CV

Place your real PDF at `public/Aafreen-Khan-CV.pdf`. The Download CV button checks for this file and becomes a download link when it exists. The PDF is intentionally not fabricated or included.

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel, select **Add New → Project**, import the GitHub repository, and keep the detected Next.js settings.
3. Select **Deploy**. No environment variables are required. Vercel will build the production deployment from the default branch and create preview deployments for pull requests.
4. To use a custom domain later, open the deployed project’s **Settings → Domains**, add the domain, then apply the DNS records Vercel displays at your domain registrar.

## Push to GitHub

Create an empty GitHub repository, then add it as the remote and push the prepared `main` branch:

```bash
git remote add origin https://github.com/Aafreen2203/REPOSITORY_NAME.git
git push -u origin main
```

Replace `REPOSITORY_NAME` with the repository you created. The project folder already contains the initial commit on `main`.
