# Deployment

This is a Vite React portfolio. The production build command is:

```bash
npm run build
```

The production output folder is:

```bash
dist
```

## Vercel

Recommended for this project.

1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Use these settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy.

The included `vercel.json` keeps refresh/deep-link routing pointed to `index.html`.

### Contact Form Email Backend

The contact form posts to `/api/contact`, a Vercel serverless function that sends email through Gmail SMTP.

Add these environment variables in Vercel:

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=pillasrikar12@gmail.com
SMTP_PASS=your_gmail_app_password
CONTACT_TO=pillasrikar12@gmail.com
```

Use a Gmail App Password for `SMTP_PASS`, not your normal Gmail password. After adding the variables, redeploy the project.

## Render

1. Push this folder to a GitHub repository.
2. Create a new Static Site on Render.
3. Use these settings:
   - Build Command: `npm install && npm run build`
   - Publish Directory: `dist`
4. Deploy.

The included `render.yaml` can also be used as a Blueprint.

## Hugging Face Spaces

Use Hugging Face Spaces only if you specifically want it hosted there. For a static Vite site, build locally with `npm run build` and upload the generated `dist` contents to a Static Space, or connect a repo that publishes the built static files.
