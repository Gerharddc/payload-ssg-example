# Payload CMS Static Site Example

This project demonstrates how to use [Payload CMS](https://payloadcms.com/) for static site generation (SSG) while retaining an admin interface automatically provided by Payload. The admin interface is not part of the static site though and needs to be run locally.

Currently this project uses a hack for static site generation that involves temporarily renaming the payload source folder so that it does not get included in the static build. Ideally a better solution should be possible and the feature requested at https://github.com/vercel/next.js/discussions/81242 could help with that.

## Usage

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   - Create a `.env` file with at least:
     ```env
     PAYLOAD_SECRET=your-secret
     DATABASE_URI=file:./payload-test.db
     ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   - Main page: [http://localhost:3000](http://localhost:3000)
   - Admin portal: [http://localhost:3000/admin](http://localhost:3000/admin)

4. **Build and preview static site:**
   ```bash
   npm run build:static
   npm run preview
   ```

## Scripts

- `dev` — Run full app including admin portal in development mode
- `build` — Build full app including admin portal for production
- `build:static` — Build static site without admin portal
- `preview` — Locally host the static site to preview it
