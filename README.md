# Site Sexualité Authentique

Site vitrine Jekyll pour Coach en Relation Amoureuse & Sexualité Authentique.

## 🌐 Site en ligne

**URL :** sexualite-authentique.fr (à configurer)

## 📚 Documentation

Toute la documentation est dans le dossier `/docs/` :

- **[docs/DEPLOIEMENT.md](docs/DEPLOIEMENT.md)** - Guide complet de déploiement et configuration
- **[docs/GUIDE-IMAGES.md](docs/GUIDE-IMAGES.md)** - Guide des images à remplacer (emplacements détaillés)

## 📁 Structure du site

### Pages du site (à la racine)
Les fichiers `.md` à la racine sont les pages de votre site :
- `mon-approche.md`
- `parcours-12-semaines.md`
- `qui-suis-je.md`
- `seance-diagnostic.md`
- `temoignages.md`
- `ressources.md`
- `videos.md`
- `faq.md`
- `contact.md`

### Pages HTML
- `index.html` - Page d'accueil
- `quiz-amant-sensible.html` - Quiz interactif
- `blog/index.html` - Index du blog

### Articles de blog
Les articles sont dans `_posts/` au format `YYYY-MM-DD-titre.md`

## 🚀 Démarrage rapide

### Installation locale

```bash
bundle install
bundle exec jekyll serve
```

Puis ouvrez : http://localhost:4000

### Déploiement sur GitHub Pages

Voir le guide complet : **[docs/DEPLOIEMENT.md](docs/DEPLOIEMENT.md)**

## ✏️ À compléter

### 1. Informations de contact
Éditez `_data/config.yml` :
```yaml
contact:
  email: "votre-email@..."
  phone: "+33 6 XX XX XX XX"
  tidycal: "https://tidycal.com/votre-lien"
```

### 2. Photos
Ajoutez vos photos dans `/assets/images/`

Guide détaillé : **[docs/GUIDE-IMAGES.md](docs/GUIDE-IMAGES.md)**

### 3. Vidéos
Ajoutez vos URLs vidéos dans `_data/videos.yml`

## 🎨 Identité visuelle

- **Palette :** Terracotta (#C67B5C), Bordeaux (#8B3A3A), Olive (#6B7C59)
- **Typographie :** Montserrat
- **Ambiance :** Chaleureux, Profond, Épuré

## 📊 Contenu

- **12 pages** principales
- **5 articles** de blog
- **1 quiz** interactif (20 questions + 4 profils)
- **4 témoignages** complets
- **FAQ** complète

## 🛠️ Technologies

- **Jekyll 4.3** - Générateur de site statique
- **GitHub Pages** - Hébergement gratuit
- **Markdown** - Format de contenu
- **Liquid** - Templates

## 📧 Contact

Pour toute question sur le code du site, consultez la documentation dans `/docs/`.

---

**Version 1.0** - Créé en janvier 2025
