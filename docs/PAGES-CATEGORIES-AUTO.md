# Pages de Catégories Automatiques

## ✅ C'est déjà configuré !

Les pages de catégories sont **générées automatiquement** par Jekyll à chaque fois que tu lances le site.

## 🔧 Comment ça marche

### 1. Plugin Jekyll (`_plugins/category_page_generator.rb`)
Ce plugin scanne automatiquement toutes les catégories utilisées dans tes posts et crée une page pour chacune.

**Tu n'as rien à faire !** Le plugin fonctionne automatiquement à chaque build.

### 2. Template (`_layouts/category.html`)
Ce layout définit l'apparence de toutes les pages de catégories.

### 3. URLs générées automatiquement

Pour chaque catégorie dans tes posts, une page est créée :

| Catégorie | URL automatique |
|-----------|-----------------|
| `conscience` | `/blog-category-conscience/` |
| `relations` | `/blog-category-relations/` |
| `desir` | `/blog-category-desir/` |
| `sexualite` | `/blog-category-sexualite/` |
| etc. | etc. |

## 📝 Ajouter une nouvelle catégorie

**C'est automatique !** Il suffit d'ajouter une nouvelle catégorie dans le front matter d'un post :

```markdown
---
layout: post
title: "Mon article"
categories: [nouvelle-categorie, autre-categorie]
---
```

Dès que Jekyll se relance, la page `/blog-category-nouvelle-categorie/` sera créée automatiquement.

## ⚙️ Personnaliser l'apparence

Pour modifier l'apparence des pages de catégories :

1. Édite le fichier `_layouts/category.html`
2. Jekyll détectera le changement et régénérera toutes les pages

## 🔄 Quand les pages sont-elles créées ?

- **Automatiquement** à chaque démarrage de Jekyll
- **Automatiquement** quand tu modifies un post qui contient des catégories
- **Automatiquement** quand tu ajoutes un nouveau post

## 📊 Catégories actuelles

Voici les catégories actuellement actives sur ton site :

- amour
- communication
- conscience
- desir
- developpement
- developpement-personnel
- plaisir
- polarites
- pratiques
- relations
- rencontres
- sexualite
- spiritualite
- transformation

Chacune a sa propre page générée automatiquement !

## 🚀 Avantages

✅ **Zéro maintenance** - Les pages sont créées automatiquement
✅ **Toujours à jour** - Les nouvelles catégories sont détectées automatiquement
✅ **SEO friendly** - Chaque catégorie a sa propre URL
✅ **Performance** - Les pages sont statiques (générées à l'avance)

## ❓ Questions fréquentes

### Que se passe-t-il si je supprime une catégorie ?
La page correspondante ne sera plus générée au prochain build.

### Puis-je avoir des catégories avec des espaces ?
Oui, mais elles seront converties en tirets dans l'URL. Exemple : "développement personnel" → `/blog-category-développement-personnel/`

### Comment désactiver ce système ?
Supprime simplement le fichier `_plugins/category_page_generator.rb`

---

**Date de création** : 19 novembre 2025
**Status** : ✅ Actif et fonctionnel
