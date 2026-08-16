# Adhikar (अधिकार) 🇮🇳
### Indian Citizen's Guide to Police Rights (Next.js Version)

**Adhikar** is a modern, minimalist Next.js App Router application designed to help citizens understand their legal rights and what to do during interactions with the police in India under the new criminal reform laws (**BNSS, 2023** and **BNS, 2023**).

This project has been redesigned with a high-end, zinc-monochrome editorial layout with zero dependency bloat, smooth transitions, and bilingual support (English & हिन्दी).

---

## 🚀 Deployment to Vercel
This project is structured as a standard Next.js application, making it fully ready to deploy to Vercel with zero configuration:
1. Push this folder to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and click **Add New** -> **Project**.
3. Select your repository and click **Deploy**. Vercel will automatically build and deploy it!

---

## 🛠️ Tech Stack & Design System
* **Framework:** Next.js (App Router, Client-Side React)
* **Styling:** Vanilla CSS (`app/globals.css`) using CSS variables for a strict, premium light/dark zinc color palette.
* **Icons:** Inline React SVG components (ensures zero package mismatch or render delays).
* **Transitions:** Smooth CSS cubic-bezier transitions on page load, theme toggle, active situation changes, and modal states.

---

## 📖 Key Features
1. **Bilingual Support (English & हिन्दी):** Completely localized guidelines.
2. **Emergency SOS Panel:** Instant checklist containing the 4 golden rules of detention and arrest.
3. **FIR Draft Generator:** Interactive form that drafts a formal complaint letter to the SP under Section 173(4) of BNSS (2023) based on user inputs. The drafted text is downloadable as a `.txt` file.
4. **New Law Citations:** Focuses on the new BNS 2023 and BNSS 2023 sections alongside historic CrPC/IPC references.

---

## 💻 Local Execution

1. Navigate to the project directory:
   ```bash
   cd know_your_rights
   ```
2. Install the Next.js dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Access the application locally at `http://localhost:3000`.
