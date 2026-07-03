# Piano Editoriale Long-Tail — Runners Hub

**Obiettivo:** posizionare il sito in top 10 su 20 keyword a bassa difficoltà (KD < 25) dove un sito con AS 0-20 può realisticamente competere in 2–4 mesi.

**Fonte dati:** Semrush database `it` (mercato italiano), luglio 2026.

**Regola di scelta:** ho scartato le keyword head con volume alto (`corsa` 12.100/mo, `mezza maratona` 6.600/mo) perché dominate da Runner's World, Decathlon, Gazzetta — impossibili con AS 0. Ho selezionato **long-tail informational** dove i top 10 sono blog piccoli o forum.

---

## Le 20 keyword selezionate

### Cluster 1 — Integratori & Nutrizione (5 guide)

| # | Keyword primaria | Vol/mese | KD | Titolo guida proposto |
|---|---|---|---|---|
| 1 | integratori per chi corre | 320 | 13 | Integratori per Chi Corre: Guida Scientifica 2026 |
| 2 | gel energetici corsa | 170 | 10 | Gel Energetici per la Corsa: Quando Prenderli e Quali Scegliere |
| 3 | gel carboidrati | 260 | ~15 | Gel di Carboidrati: Dosaggi, Timing e Marche Migliori |
| 4 | corsa e integratori | 320 | 13 | Corsa e Integratori: Cosa Serve Davvero (e Cosa No) |
| 5 | cosa integrare dopo una corsa | long-tail | 0 | Cosa Mangiare Dopo la Corsa: Recupero Nutrizionale in 30 Minuti |

### Cluster 2 — Infortuni & Recupero (4 guide)

| # | Keyword primaria | Vol/mese | KD | Titolo guida proposto |
|---|---|---|---|---|
| 6 | ginocchio del corridore | 480 | ~15 | Ginocchio del Corridore: Sintomi, Cause e Rimedi Efficaci |
| 7 | dolore ginocchio dopo corsa | 320 | ~10 | Dolore al Ginocchio Dopo la Corsa: Diagnosi e Recupero |
| 8 | dolore ginocchio corsa | 170 | 8 | Dolore al Ginocchio Durante la Corsa: 7 Cause e Soluzioni |
| 9 | recupero muscolare corsa | 20 | 0 | Recupero Muscolare Dopo la Corsa: Metodo Completo |

### Cluster 3 — Principianti & Progressione (6 guide)

| # | Keyword primaria | Vol/mese | KD | Titolo guida proposto |
|---|---|---|---|---|
| 10 | corsa principianti tabella | 390 | ~15 | Tabella Corsa Principianti: 8 Settimane da Zero a 5K |
| 11 | programma corsa principianti | 390 | ~15 | Programma di Corsa per Principianti: 12 Settimane |
| 12 | come iniziare a correre a 40 anni | 10 | 0 | Iniziare a Correre a 40 Anni: Guida Sicura e Progressiva |
| 13 | come iniziare a correre a 50 anni | 40 | 0 | Iniziare a Correre a 50 Anni: Programma Adatto all'Età |
| 14 | come iniziare a correre dopo tanto tempo | 20 | 0 | Riprendere a Correre Dopo Anni di Pausa: Piano in 6 Settimane |
| 15 | come iniziare a correre per dimagrire | 20 | 0 | Correre per Dimagrire: Programma Realistico per Principianti |

### Cluster 4 — Mezza Maratona (3 guide)

| # | Keyword primaria | Vol/mese | KD | Titolo guida proposto |
|---|---|---|---|---|
| 16 | come preparare una mezza maratona in due mesi | 20 | 0 | Mezza Maratona in 2 Mesi: È Possibile? Tabella Reale |
| 17 | come preparare una mezza maratona in un mese | 20 | 0 | Mezza Maratona in 1 Mese: Guida di Emergenza (Con Cautela) |
| 18 | quanti km a settimana per preparare una mezza maratona | 20 | 0 | Quanti Km alla Settimana per la Mezza Maratona? |

### Cluster 5 — Attrezzatura Tecnica (2 guide)

| # | Keyword primaria | Vol/mese | KD | Titolo guida proposto |
|---|---|---|---|---|
| 19 | scarpe running pronazione | 30 | 0 | Scarpe da Running per Pronazione: Guida alla Scelta |
| 20 | scarpe running supinazione | ~30 | 0 | Scarpe da Running per Supinazione: Modelli e Consigli |

---

## Struttura standard di ogni guida (per E-E-A-T + AEO)

Ogni guida deve avere:

1. **H1** = keyword primaria (o variante naturale)
2. **Intro 80-120 parole** che risponde subito alla query (per Featured Snippet / AI Overview)
3. **Key Takeaways** in cima (3-5 bullet)
4. **6-8 sezioni H2** che coprono le domande correlate (usa `Question Keywords` da Semrush)
5. **Almeno 1 tabella comparativa** o box scientifico (aumenta dwell time)
6. **FAQ finale** (3-5 domande) — implementare con `faq` prop di `<SEO>` per FAQPage schema
7. **Prodotti affiliate contestuali** (2-3 max, con `<RecommendedProducts>`)
8. **Link interni** a 2-3 altre guide del cluster
9. **Lunghezza:** 1.200-1.800 parole (sweet spot per KD < 20)

## Metadata target

- `seoTitle`: 50-58 caratteri, include keyword primaria + brand
- `seoDescription`: 140-155 caratteri, include keyword + benefit + CTA implicita
- `schema`: Article + FAQPage combinati
- Immagine di apertura in `/src/assets/` (WebP, 1200x630 per og:image)

## Priorità di pubblicazione

**Settimana 1-2:** guide 1, 2, 6, 10, 19 → keyword più promettenti
**Settimana 3-4:** guide 3, 4, 7, 11, 20
**Settimana 5-6:** guide 5, 8, 12, 13, 16
**Settimana 7-8:** guide 9, 14, 15, 17, 18

## KPI di successo (a 90 giorni)

- 12/20 guide posizionate in top 20
- 5/20 guide in top 10
- +200% impressioni GSC vs baseline
- +50 click organici/mese (baseline: ~10)
