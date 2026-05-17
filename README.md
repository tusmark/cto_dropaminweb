# Dropamin Shuffle Academy - Project Monorepo

This repository contains the full web presence for **Dropamin Shuffle Academy**, including the landing page for the **Tour 2026**.

## Project Overview

Dropamin is a premium Shuffle Dance Academy that embodies energy, club culture, and professional dance education. This project implements a high-converting, mobile-first landing page with a dark, aggressive aesthetic featuring Amethyst Purple and Lime Green accents.

## Repository Structure

- `frontend/`: Next.js 16 (App Router) project using Tailwind CSS v4 and TypeScript.
  - Implements the landing page sections: Hero, About, Levels, Why Shuffle, Community, Tour Dates, Pricing, and Registration.
  - Dynamic content driven by JSON and integrated with the backend API.
- `backend/`: Node.js Express server.
  - Provides REST API for workshop data and registration/reservation submissions.
  - Integrated with SQLite database.
- `README.md`: Project documentation.

## Core Technologies

- **Frontend**: [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [TypeScript](https://www.typescriptlang.org/), [Lucide React](https://lucide.dev/).
- **Backend**: [Node.js](https://nodejs.org/), [Express](https://expressjs.com/), [SQLite](https://www.sqlite.org/).
- **Design Tokens**: Amethyst Purple (#6300E2), Lime Green (#CCFF00), Pure Black (#000000).

## Setup & Installation

### 1. Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### 2. Backend Setup

```bash
cd backend
npm install
node index.js
```
The server will start on `http://localhost:5000`.

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```
Open `http://localhost:3000` in your browser.

## Features

- **Dynamic Data**: All academy info, stats, and testimonials are managed via a structured data layer.
- **Real-time Availability**: The registration form fetches real-time workshop availability from the backend.
- **Mobile-First Design**: Optimized for the best experience on mobile devices.
- **Premium UI**: Custom cursor, glassmorphism effects, and signature gradients.

---

*Developed by Team Website Builder.*
