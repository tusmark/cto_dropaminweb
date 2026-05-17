-- Dropamin Academy Full Schema

-- Academy Levels Table
CREATE TABLE IF NOT EXISTS levels (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    benefits TEXT, -- Key benefits or features of this level
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Academy Registrations Table
CREATE TABLE IF NOT EXISTS registrations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_name TEXT NOT NULL,
    user_email TEXT NOT NULL,
    level_id INTEGER NOT NULL,
    city TEXT NOT NULL,
    status TEXT CHECK(status IN ('pending', 'confirmed', 'cancelled')) DEFAULT 'pending',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (level_id) REFERENCES levels(id)
);

-- Academy Stats Table (for Landing Page metrics)
CREATE TABLE IF NOT EXISTS academy_stats (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    stat_key TEXT NOT NULL UNIQUE,
    stat_value TEXT NOT NULL,
    stat_label TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Testimonials Table
CREATE TABLE IF NOT EXISTS testimonials (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    author TEXT NOT NULL,
    content TEXT NOT NULL,
    rating DECIMAL(3, 2),
    source TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Pricing Table
CREATE TABLE IF NOT EXISTS pricing (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    plan_name TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    currency TEXT DEFAULT 'EUR',
    features_json TEXT, -- JSON array of features
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Seed Data

-- 1. Academy Levels
INSERT INTO levels (name, description, benefits) VALUES
('Začiatočníci', 'Základy shuffle dance od nuly. Naučíš sa Running Man, T-Step a jednoduché kombinácie.', 'Vhodné pre úplných nováčikov, spaľovanie 500+ kcal, nová komunita.'),
('Mierne pokročilí', 'Zlepšovanie techniky základných krokov a pridávanie nových variácií. Zameranie na plynulosť.', 'Zlepšenie flowu, pokročilé variácie, kardio benefit.'),
('Pokročilí', 'Práca na vlastnom štýle, muzikalite a náročnejších choreografiách. Zameranie na dynamiku.', 'Vlastný štýl, freestyle techniky, vysoká intenzita.'),
('Fanatici', 'Príprava na súťaže a battle. Extrémna intenzita, pokročilé koncepty a medzinárodná úroveň.', 'Profi úroveň, príprava na battle, reprezentácia crew.');

-- 2. Mock Registrations
INSERT INTO registrations (user_name, user_email, level_id, city, status) VALUES
('Alice Smith', 'alice@example.com', 1, 'Žilina', 'confirmed'),
('Bob Johnson', 'bob@example.com', 2, 'Bratislava', 'pending'),
('Charlie Brown', 'charlie@example.com', 1, 'Praha', 'pending');

-- 3. Academy Stats
INSERT INTO academy_stats (stat_key, stat_value, stat_label) VALUES
('avg_rating', '9.47', 'Priemerné hodnotenie'),
('total_reviews', '26', 'Google recenzií (5/5 ⭐)'),
('kcal_burn', '500-850', 'kcal na tréning'),
('retention', '76-85%', 'Opakovaná registrácia');

-- 4. Testimonials
INSERT INTO testimonials (author, content, rating, source) VALUES
('Anonym', 'Odporúčam všetkými desiatimi! Spoznáš nových ľudí, oddýchneš si, vypneš, zabavíš sa.', 5.0, 'Google'),
('Matúš', 'Tréner Matúš je topka, trpezlivý, ochotný vysvetliť aj sto krát.', 5.0, 'Google'),
('Jana', 'Konečne pohyb, ktorý ma skutočne baví! Za tréning spálim neskutočne veľa kalórií.', 5.0, 'Instagram');

-- 5. Pricing
INSERT INTO pricing (plan_name, price, currency, features_json) VALUES
('Jednorazový vstup', 8.00, 'EUR', '["60 minút tréningu", "Individuálny feedback"]'),
('Mesačná permanentka', 30.00, 'EUR', '["4-5 tréningov mesačne", "Zvýhodnená cena"]'),
('Full Academy Pass', 55.00, 'EUR', '["Neobmedzené tréningy", "Individuálny progres plán"]');
