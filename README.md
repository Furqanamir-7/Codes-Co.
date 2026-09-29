# CODE & CO.

Marketing site for CODE & CO., Furqan Amir’s web studio. Tagline: Websites • Ideas • Beyond.

## Run locally

```bash
npm install
npm run dev
```

The development server for this project is meant to run on port **38471**:

```bash
npx next dev --hostname 0.0.0.0 --port 38471
```

Open [http://127.0.0.1:38471](http://127.0.0.1:38471).

## Contact

The contact form works without an email API key. It opens the visitor’s email app with the note addressed to the studio. To send from the server instead, set:

```bash
RESEND_API_KEY=
RESEND_FROM=
CONTACT_TO_EMAIL=
```

See `.env.example`.

## Stack

Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui, Framer Motion.
