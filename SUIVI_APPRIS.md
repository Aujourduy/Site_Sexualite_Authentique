# SUIVI APPRIS - Sexualité Authentique

Base de connaissances : configurations, procédures, patterns et solutions du projet.

---

## 🤖 WORKFLOW CLAUDE

### Commandes Sudo
**Règle :** Toutes les commandes `sudo` sont TOUJOURS exécutées par Duy.
- Claude affiche la commande à exécuter
- Duy l'exécute manuellement
- **Jamais demander** "veux-tu que j'exécute"

---

## 🔧 TECHNOLOGIES & STACK

### Stack Technique
- **Générateur :** Jekyll 4.3.4
- **Hébergement :** GitHub Pages
- **Domaine :** sexualite-authentique.fr
- **DNS :** Configuré via CNAME
- **Ruby :** 3.2.3 (installé sur l'hôte)
- **Bundler :** 2.7.2

### Dépôt Git
- **URL :** github.com/Aujourduy/Site_Sexualite_Authentique
- **Branche principale :** main
- **Déploiement :** Automatique sur push vers main (délai ~2-5 minutes)

---

## 🛠️ CONFIGURATIONS SPÉCIFIQUES

### Jekyll - Environnement Local

**Installation initiale :**
```bash
# Installation Ruby et dépendances
sudo apt install ruby-full build-essential zlib1g-dev

# Installation Bundler
sudo gem install bundler

# Installation des gems du projet
sudo bundle install
```

**Lancement serveur local :**
```bash
# Pour accès local uniquement
bundle exec jekyll serve

# Pour accès réseau (Tailscale, LAN)
bundle exec jekyll serve --host 0.0.0.0

# URLs d'accès :
# - Localhost : http://localhost:4000
# - LAN : http://192.168.1.37:4000
# - Tailscale : http://100.95.124.70:4000
```

**⚠️ Note permissions :** Nécessité d'utiliser `sudo` pour l'installation des gems (pas idéal mais fonctionnel).

### Git - Workflow

**Alias utile :**
```bash
# Ajouté dans ~/.bashrc
alias cdss='cd /home/dang/SexualiteAuthentique'
```

**Commandes essentielles :**
```bash
# Toujours fetch avant de vérifier les branches
git fetch --all

# Mise à jour branche main
git pull origin main

# Voir toutes les branches (locales + distantes)
git branch -a

# Fusionner une branche
git merge origin/nom-de-branche

# Push vers GitHub
git push origin main
```

### Playwright - Tests E2E

**Configuration requise :**

**Firewall UFW - Autoriser Docker → Jekyll**
```bash
sudo ufw allow from 172.18.0.0/16 to any port 4000
```
**Pourquoi :** UFW bloque Docker par défaut. Cette règle permet à Playwright (Docker) d'accéder à Jekyll (hôte).

**Endpoints principaux :**
- **POST /ui-test** : Charger page avec viewport configurable
  - Paramètres : `path` (URL complète ou chemin), `viewport` {width, height}
  - URL Jekyll : `http://host.docker.internal:4000`
- **POST /ui-click** : Cliquer élément (par `selector` CSS ou `text`)
- **POST /ui-evaluate** : Exécuter JavaScript dans la page
- **POST /ui-close** : Fermer session de test

**Viewports utiles :**
```javascript
{"width": 375, "height": 667}   // iPhone SE (smartphone)
{"width": 768, "height": 1024}  // iPad (tablet)
{"width": 1920, "height": 1080} // Desktop (défaut)
```

**Exemple de test responsive :**
```bash
# 1. Charger avec viewport smartphone
curl -s -X POST http://localhost:3000/ui-test \
  -H "Content-Type: application/json" \
  -d '{"path": "http://host.docker.internal:4000", "action": "start", "viewport": {"width": 375, "height": 667}}'

# 2. Cliquer élément
curl -s -X POST http://localhost:3000/ui-click \
  -H "Content-Type: application/json" \
  -d '{"selector": "#menuToggle"}'

# 3. Vérifier état avec JavaScript
curl -s -X POST http://localhost:3000/ui-evaluate \
  -H "Content-Type: application/json" \
  -d '{"code": "document.getElementById(\"menuToggle\").classList.contains(\"active\")"}'

# 4. Récupérer screenshot
docker cp playwright:/app/outputs/ui-test-screenshot.png /tmp/test.png
```

**Doc complète :** `/home/dang/Aujourduy/playwright/README.md`

---

## 🎨 IDENTITÉ VISUELLE

### Couleurs Principales
- **Terracotta :** #D4816F (chaleur, connexion)
- **Bordeaux :** #8B3A3A (profondeur, intensité) → CTA principal
- **Olive :** #8B7355 (ancrage, naturel)
- **Beige :** #F5F1ED (fond, épuré)
- **Gris foncé :** #2C2C2C (texte principal)

### Typographie
- **Police principale :** Montserrat (web-safe, moderne, chaleureux)

### Style
- Épuré, chaleureux, profond
- Mix photos N&B + Couleur
- Espaces blancs généreux

---

## 📂 STRUCTURE DU PROJET

### Architecture des Fichiers
```
SexualiteAuthentique/
├── Cahier des charges/
│   ├── cahier des charges.md (6000+ lignes - SPEC COMPLÈTE)
│   └── publications modeles.md
├── docs/
│   ├── DEPLOIEMENT.md (guide déploiement)
│   ├── GUIDE-IMAGES.md (guide images)
│   └── SUIVI.md (ancien fichier de suivi)
├── _layouts/ (default, home, page, post)
├── _includes/ (header, footer)
├── _data/ (config, faq, photos, quiz, testimonials, videos)
├── _posts/ (209 articles blog)
├── assets/ (css, js, images)
├── Pages principales (12 pages .md/.html)
├── SUIVI_GLOBAL.md (journal de bord)
├── SUIVI_ENCOURS.md (tâches actives)
└── SUIVI_APPRIS.md (ce fichier - base de connaissances)
```

### Fichiers de Configuration Clés
- `_config.yml` : Configuration globale Jekyll
- `_data/config.yml` : Configuration du site (navigation, etc.)
- `Gemfile` : Dépendances Ruby/Jekyll
- `CNAME` : Configuration domaine personnalisé

---

## 🐛 BUGS RÉSOLUS & SOLUTIONS

### Problème : Branches Git non visibles localement
**Cause :** Branches distantes non récupérées localement
**Solution :** Toujours faire `git fetch --all` avant de vérifier les branches
**Apprises :** Session #2 - 2025-11-19

### Problème : Permissions lors de l'installation gems
**Cause :** Droits insuffisants pour installer gems globalement
**Solution :** Utilisation de `sudo bundle install` et `sudo gem install`
**Note :** Pas idéal mais fonctionnel pour ce projet
**Apprises :** Session #3 - 2025-11-19

### Problème : Conflit URL - Deux articles même titre
**Cause :** Deux articles nommés "Les 4 dimensions de l'être" généraient la même URL
**Solution :** Renommé un des articles en "Les 4 dimensions de l'être - introduction"
**Apprises :** Session #4 - 2025-11-22

---

## 📚 PROCÉDURES QUI MARCHENT

### Réorganisation du Blog par Impact
**Objectif :** Ordonner les articles selon leur impact potentiel sur la cible
**Méthode :**
1. Classement selon 3 critères : Simple, Surprenant, Puissant
2. Renommage des fichiers avec préfixe numérique (ordre souhaité)
3. Les articles les plus impactants en premier
4. Vérification des conflits d'URL après renommage

**Résultat :** 209 articles réordonnés avec succès
**Top 10 :** Le tigre et le masque, Gratitude vs colère, L'aphrodisiaque...
**Apprises :** Session #4 - 2025-11-22

### Création de Pages Légales
**Fichiers créés :**
- `mentions-legales.md`
- `politique-confidentialite.md`
- `cgv.md`

**Pattern utilisé :** Pages Jekyll standard avec layout `page`
**Apprises :** Session #4 - 2025-11-22

### Configuration Contact Externe
**Outil formulaire :** Tally (https://tally.so/r/w4Md2k)
**Outil réservation :** TidyCal (seance-de-clarification-femme)
**Décision :** Suppression email contact@sexualite-authentique.fr du site (utilisation formulaires externes)
**Apprises :** Session #4 - 2025-11-22

---

## 💡 PATTERNS & BONNES PRATIQUES

### Jekyll
- Tester localement avant de pusher (`bundle exec jekyll serve`)
- Vérifier les URLs générées lors de renommage d'articles
- Utiliser `--host 0.0.0.0` pour accès distant au serveur local

### Git
- Toujours `git fetch --all` avant de vérifier les branches
- Messages de commit clairs en français
- Ne jamais commit sans autorisation explicite du mot "commit"

### Contenu
- Préfixer les articles avec des numéros pour contrôler l'ordre d'affichage
- Vérifier les conflits d'URL lors de modifications de noms
- Séparer clairement les influences/formations dans "Qui suis-je"

---

## 🔗 INTÉGRATIONS EXTERNES

### TidyCal (Réservation)
- **URL :** seance-de-clarification-femme
- **Statut :** ✅ Configuré (Session #4)
- **Usage :** CTA principal "Réserver ma Séance Diagnostic Offerte"

### Tally (Formulaire Contact)
- **URL :** https://tally.so/r/w4Md2k
- **Statut :** ✅ Configuré (Session #4)
- **Usage :** Formulaire de contact

### Systeme.io (Lead Magnet + Emails)
- **Statut :** ⏳ À configurer
- **Usage prévu :** Lead magnets + séquence emails nurturing

### Analytics
- **Statut :** ⏳ À configurer
- **Options :** Google Analytics ou alternative

---

## 📖 RESSOURCES UTILES

### Documentation Officielle
- **Jekyll :** https://jekyllrb.com/docs/
- **GitHub Pages :** https://docs.github.com/pages
- **Markdown :** https://www.markdownguide.org/

### Fichiers de Référence Projet
- `Cahier des charges/cahier des charges.md` : Spec complète du projet (6000+ lignes)
- `docs/DEPLOIEMENT.md` : Guide de déploiement
- `docs/GUIDE-IMAGES.md` : Guide pour les images

---

## 🎯 DÉCISIONS ARCHITECTURALES

### Choix Stack
**Jekyll + GitHub Pages** plutôt que CMS dynamique
**Pourquoi :**
- Simplicité
- Gratuit
- Performant
- Fiable
- Pas de maintenance serveur

### Choix Ruby Local vs Docker
**Ruby installé sur l'hôte** plutôt que Docker
**Pourquoi :**
- Plus simple pour ce projet
- Pas besoin de l'isolation de Docker
- Performance directe

### Choix Outils Externes
**Tally + TidyCal** plutôt que formulaires/calendrier maison
**Pourquoi :**
- Intégration rapide
- Maintenance minimale
- Fonctionnalités complètes
- Focus sur le contenu

---

**Dernière mise à jour :** 2025-11-26
