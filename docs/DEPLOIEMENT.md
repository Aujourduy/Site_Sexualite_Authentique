# Guide de Déploiement - sexualite-authentique.fr

## 📋 Ce qui a été créé

### Structure complète du site Jekyll

✅ **Configuration de base**
- `_config.yml` - Configuration Jekyll
- `Gemfile` - Dépendances Ruby
- Structure de dossiers complète

✅ **Fichiers de données (_data/)**
- `config.yml` - Configuration centralisée du site
- `faq.yml` - Questions fréquentes complètes
- `videos.yml` - Bibliothèque vidéos (à compléter avec vos URLs)
- `photos.yml` - Plan photos (placeholders à remplacer)
- `quiz.yml` - Quiz "Amant Sensible" (20 questions + 4 profils)
- `testimonials.yml` - Témoignages clients

✅ **Layouts HTML (_layouts/)**
- `default.html` - Layout de base
- `home.html` - Layout page d'accueil
- `page.html` - Layout pages standard
- `post.html` - Layout articles de blog

✅ **Composants (_includes/)**
- `header.html` - Header avec navigation
- `footer.html` - Footer complet

✅ **CSS (assets/css/)**
- `main.css` - Styles principaux (Terracotta, Bordeaux, Olive, Montserrat)
- `home.css` - Styles page d'accueil
- `quiz.css` - Styles quiz interactif

✅ **JavaScript (assets/js/)**
- `main.js` - Scripts globaux
- `quiz.js` - Quiz interactif complet

✅ **12 Pages principales**
1. `index.html` - Accueil (8 sections)
2. `mon-approche.md` - Mon Approche Unique
3. `parcours-12-semaines.md` - Le Parcours détaillé
4. `qui-suis-je.md` - Qui Suis-Je
5. `seance-diagnostic.md` - Séance Diagnostic Offerte
6. `temoignages.md` - Témoignages
7. `ressources.md` - Ressources gratuites
8. `videos.md` - Bibliothèque vidéos
9. `faq.md` - FAQ
10. `contact.md` - Contact
11. `blog/index.html` - Index du blog
12. `quiz-amant-sensible.html` - Quiz interactif

✅ **5 Articles de blog (_posts/)**
1. L'eau à 99° vs 100°
2. Le Tigre et le Masque
3. EPE → RCS
4. Séduction vs Sélection
5. 95% c'est enlever la peur

---

## 🚀 Déploiement sur GitHub Pages

### Étape 1 : Installation locale (optionnel)

```bash
bundle install
bundle exec jekyll serve
```

Puis ouvrez : `http://localhost:4000`

### Étape 2 : Configuration GitHub Pages

1. Allez dans **Settings** → **Pages**
2. Source : **Deploy from a branch**
3. Branch : `claude/review-website-discussion` / `root`
4. Cliquez sur **Save**

Le site sera disponible à : `https://[votre-username].github.io/Site_Sexualite_Authentique/`

### Étape 3 : Configuration du domaine personnalisé

#### A. Modifier _config.yml

**IMPORTANT :** Avant de configurer le domaine sur GitHub, modifiez `_config.yml` :

```yaml
# Changez ces lignes :
url: "https://aujourduy.github.io"              # Ancien
baseurl: "/Site_Sexualite_Authentique"         # Ancien

# En :
url: "https://sexualite-authentique.fr"         # Nouveau
baseurl: ""                                     # Vide car le site sera à la racine
```

Puis commit et push :
```bash
git add _config.yml
git commit -m "Configuration domaine personnalisé"
git push
```

#### B. Configurer GitHub Pages

1. Dans **Settings** → **Pages** → **Custom domain**
2. Entrez : `sexualite-authentique.fr`
3. Cochez **Enforce HTTPS** (après propagation DNS)
4. Cliquez sur **Save**

#### C. Configurer DNS chez votre registrar

Chez votre registrar de domaine (OVH, Gandi, etc.), configurez :

```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153

Type: CNAME
Name: www
Value: aujourduy.github.io
```

**Délai de propagation :** 1h à 24h

#### D. Vérifier

Une fois la propagation terminée, votre site sera accessible sur :
- `https://sexualite-authentique.fr`
- `https://www.sexualite-authentique.fr`

---

## ✏️ À compléter par vous

### 1. Informations de contact (_data/config.yml)

```yaml
contact:
  email: "contact@sexualite-authentique.fr"  # Votre vrai email
  phone: "+33 6 XX XX XX XX"  # Votre téléphone
  tidycal: "https://tidycal.com/..."  # Votre lien TidyCal
```

### 2. Réseaux sociaux (_data/config.yml)

```yaml
social:
  facebook: "https://www.facebook.com/..."  # Votre page Facebook
  youtube: ""  # Votre chaîne YouTube (si vous en avez)
  instagram: ""  # Votre Instagram (si vous en avez)
```

### 3. Photos

Remplacez les placeholders par vos vraies photos dans `/assets/images/` :

- **Portraits** : Photos professionnelles de vous (N&B + Couleur)
- **Danse** : Photos de danse libre / Contact Impro
- **Ambiance** : Photos d'ambiance (via Unsplash/Pexels ou vos propres photos)

Puis mettez à jour les chemins dans les pages HTML/Markdown.

### 4. Vidéos (_data/videos.yml)

Ajoutez les URLs de vos vidéos YouTube/Vimeo :

```yaml
- titre: "L'eau à 99° vs 100°"
  url: "https://www.youtube.com/watch?v=..."  # Votre vidéo
  duree: "5:30"
```

### 5. Ressources gratuites

Configurez vos lead magnets (PDF + Formation vidéo) avec Systeme.io :

- Créez vos pages de capture dans Systeme.io
- Mettez à jour les liens dans `ressources.md`

### 6. Analytics (optionnel)

Dans `_config.yml`, ajoutez votre ID Google Analytics :

```yaml
google_analytics: UA-XXXXXXXXX-X
```

---

## 📝 Ajouter de nouveaux articles de blog

Créez un fichier dans `_posts/` avec ce format :

**Nom du fichier :** `YYYY-MM-DD-titre-article.md`

**Contenu :**
```markdown
---
layout: post
title: "Titre de l'article"
subtitle: "Sous-titre optionnel"
date: 2025-01-20
categories: [Authenticité, Sexualité]
reading_time: 5
---

Contenu de l'article en Markdown...
```

---

## 🎨 Modifier les couleurs/styles

Éditez `/assets/css/main.css` :

```css
:root {
  --terracotta: #C67B5C;  /* Modifiez ces valeurs */
  --bordeaux: #8B3A3A;
  --olive: #6B7C59;
  /* etc. */
}
```

---

## ❓ Support

Si vous avez des questions ou des erreurs :

1. Vérifiez que tous les fichiers ont bien été créés
2. Testez localement avec `bundle exec jekyll serve`
3. Consultez les logs d'erreur dans l'onglet "Actions" de GitHub

---

## 🎯 Prochaines étapes recommandées

1. **Remplacer les placeholders** (photos, vidéos, liens)
2. **Configurer TidyCal** pour les réservations
3. **Créer vos lead magnets** (PDF + Formation vidéo)
4. **Ajouter plus d'articles de blog** (10-15 pour commencer)
5. **Tester le parcours utilisateur** complet
6. **Configurer Google Analytics**
7. **Créer des pages légales** (Mentions légales, Politique de confidentialité, CGV)

---

**Site créé avec votre vision + expertise technique**
**Version 1.0 - Prêt pour déploiement**
