# Payload CMS Static Site Example

This project demonstrates how to use [Payload CMS](https://payloadcms.com/) for static site generation (SSG) while retaining an admin interface automatically provided by Payload. The admin interface is not part of the static site though and needs to be run locally.

This project leverages Next.js's "pageExtensions" setting to selectively include only specific files during a "static build" based on their file extensions. This means that files which will form part of the static site need to have `.static.tsx` as their extension instead of the regular `.tsx`. This is needed to avoid dynamic Payload pages being pulled into the static build and causing errors.

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
