# 📸 Guide Complet des Images - sexualite-authentique.fr

Ce document liste **toutes les images** utilisées dans le site, leur emplacement exact, et ce que vous devez mettre.

---

## 🎯 Images par page

### **PAGE 1 : Accueil (index.html)**

#### Image 1 : Hero - Photo de danse en mouvement
- **Fichier :** `index.html`
- **Ligne :** ~60
- **Code actuel :**
  ```html
  <img src="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=600&h=700&fit=crop&auto=format&q=80"
       alt="Danse libre - Liberté d'être"
       loading="lazy">
  ```
- **À remplacer par :** Votre photo de danse libre / Contact Impro en mouvement
- **Style :** COULEUR
- **Dimensions recommandées :** 600x700px minimum
- **Ambiance :** Énergie, mouvement, liberté d'être
- **Placement futur :** `/assets/images/hero-danse-mouvement.jpg`
- **Code à mettre :**
  ```html
  <img src="/assets/images/hero-danse-mouvement.jpg"
       alt="Danse libre - Liberté d'être"
       loading="lazy">
  ```

---

### **PAGE 2 : Accueil - Section Qui Suis-Je (index.html)**

#### Image 2 : Portrait professionnel N&B
- **Fichier :** `index.html`
- **Ligne :** ~200
- **Code actuel :**
  ```html
  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&auto=format&q=80&sat=-100"
       alt="Duy Dang - Coach en Sexualité Authentique"
       loading="lazy">
  ```
- **À remplacer par :** Votre portrait professionnel
- **Style :** NOIR & BLANC
- **Dimensions recommandées :** 300x400px minimum
- **Ambiance :** Sobre, profond, regard direct
- **Placement futur :** `/assets/images/portrait-duy-nb.jpg`
- **Code à mettre :**
  ```html
  <img src="/assets/images/portrait-duy-nb.jpg"
       alt="Duy Dang - Coach en Sexualité Authentique"
       loading="lazy">
  ```

---

### **PAGE 3 : Qui Suis-Je (qui-suis-je.md)**

**Actuellement, cette page n'a PAS d'image.**

#### Image 3 (à ajouter) : Portrait ou photo de danse
- **Fichier :** `qui-suis-je.md`
- **Emplacement suggéré :** Après le titre, avant le premier paragraphe
- **À ajouter :** Votre portrait en couleur OU une photo de vous en danse
- **Style :** COULEUR ou N&B selon préférence
- **Dimensions recommandées :** 400x500px
- **Code à ajouter :**
  ```markdown
  ![Portrait Duy Dang](/assets/images/portrait-duy-couleur.jpg)
  ```

---

## 📁 Structure des dossiers images recommandée

Créez cette structure dans votre repo :

```
/assets/images/
├── portraits/
│   ├── duy-portrait-nb.jpg          # Portrait N&B principal
│   ├── duy-portrait-couleur.jpg     # Portrait couleur
│   └── duy-portrait-sepia.jpg       # Portrait sépia (optionnel)
│
├── danse/
│   ├── hero-danse-mouvement.jpg     # Photo hero page d'accueil
│   ├── danse-contact-impro-1.jpg    # Contact Impro
│   ├── danse-contact-impro-2.jpg    # Autre photo danse
│   └── danse-libre-scene.jpg        # Danse en groupe (optionnel)
│
├── ambiance/
│   ├── nature-lumiere.jpg           # Nature, lumière douce
│   ├── eau-vapeur.jpg               # Pour métaphore 99°/100°
│   ├── mains-connexion.jpg          # Connexion humaine
│   └── foret-profondeur.jpg         # Profondeur, cheminement
│
└── blog/
    ├── blog-header-1.jpg            # Header articles
    ├── blog-header-2.jpg
    └── blog-header-3.jpg
```

---

## 🎨 Spécifications techniques par type d'image

### **Portraits**
- **Format :** JPG
- **Ratio :** 3:4 (portrait) ou 1:1 (carré)
- **Résolution :** 72-150 DPI
- **Poids max :** 300 KB
- **Style :**
  - Portrait principal : N&B, fond neutre, regard direct
  - Portrait secondaire : Couleur naturelle, environnement chaleureux

### **Photos de danse**
- **Format :** JPG
- **Ratio :** 4:5 ou 3:4
- **Résolution :** 72-150 DPI
- **Poids max :** 500 KB
- **Style :**
  - En mouvement, énergie
  - Lumière naturelle ou d'ambiance
  - Couleur saturée mais naturelle

### **Photos d'ambiance**
- **Format :** JPG
- **Ratio :** 16:9 ou 4:3
- **Résolution :** 72-150 DPI
- **Poids max :** 400 KB
- **Sources possibles :**
  - Vos propres photos
  - Unsplash.com (gratuit, haute qualité)
  - Pexels.com (gratuit)

---

## 📝 Liste de remplacement complète

### **Fichier : index.html**

| Ligne | Image actuelle | À remplacer par | Nouveau chemin |
|-------|----------------|-----------------|----------------|
| ~60 | Unsplash photo-1518834107812 | Photo danse mouvement | /assets/images/danse/hero-danse-mouvement.jpg |
| ~200 | Unsplash photo-1507003211169 | Portrait N&B | /assets/images/portraits/duy-portrait-nb.jpg |

---

## 🔍 Comment trouver les images dans le code

### Méthode 1 : Recherche globale

Ouvrez votre éditeur et cherchez :
- `images.unsplash.com` → Ce sont les placeholders à remplacer
- `<img src=` → Pour trouver toutes les balises images
- `![` → Pour trouver les images Markdown

### Méthode 2 : Liste des fichiers contenant des images

1. **index.html** → 2 images (Hero + Portrait)
2. **qui-suis-je.md** → Aucune image actuellement (à ajouter si vous voulez)
3. **Articles de blog** → Aucune image actuellement (vous pouvez en ajouter)

---

## ✅ Checklist de remplacement

- [ ] **Créer le dossier** `/assets/images/`
- [ ] **Créer les sous-dossiers** : portraits/, danse/, ambiance/, blog/
- [ ] **Photo 1** : Hero danse mouvement (COULEUR, 600x700px) → `/assets/images/danse/hero-danse-mouvement.jpg`
- [ ] **Photo 2** : Portrait N&B (300x400px) → `/assets/images/portraits/duy-portrait-nb.jpg`
- [ ] **Remplacer dans index.html ligne ~60** l'URL Unsplash par le chemin local
- [ ] **Remplacer dans index.html ligne ~200** l'URL Unsplash par le chemin local
- [ ] **(Optionnel)** Ajouter des images dans les articles de blog
- [ ] **(Optionnel)** Ajouter une image dans qui-suis-je.md

---

## 💡 Conseils

### **Photos de vous :**
- Demandez à un photographe professionnel pour le portrait principal
- Pour les photos de danse, demandez aux photographes présents pendant les stages
- Le portrait N&B doit être sobre, profond, authentique (pas de sourire forcé)

### **Optimisation des images :**

Avant de les mettre sur le site, optimisez-les avec :
- **TinyPNG.com** (compression sans perte de qualité)
- **Squoosh.app** (Google, très performant)

Cela accélèrera le chargement du site.

### **Photos d'ambiance :**

Si vous n'avez pas de photos personnelles, utilisez :
- **Unsplash.com** → Recherchez : "intimate light", "nature warmth", "connection"
- **Pexels.com** → Recherches similaires
- **Filtres :** Privilégiez les tons chauds (terracotta, beige, olive)

---

## 🚀 Après remplacement

Une fois les images en place :

1. **Testez localement** :
   ```bash
   bundle exec jekyll serve
   ```
   Vérifiez que toutes les images s'affichent

2. **Committez** :
   ```bash
   git add assets/images/
   git commit -m "Ajout des photos réelles"
   git push
   ```

3. **Le site se mettra à jour automatiquement** sur GitHub Pages

---

## 🎨 Favicon (icône du site)

Le favicon est la petite icône qui apparaît dans l'onglet du navigateur et dans les favoris.

### Configuration actuelle

Le favicon est **configuré et activé** dans `_config.yml` :
```yaml
favicon:
  enable: true
  path: "/assets/images/favicon"
```

### Fichiers à créer

Pour que le favicon fonctionne, vous devez créer les fichiers suivants dans `/assets/images/favicon/` :

1. **favicon-16x16.png** - 16x16px (icône onglet petit)
2. **favicon-32x32.png** - 32x32px (icône onglet normal)
3. **apple-touch-icon.png** - 180x180px (icône iPhone/iPad)
4. **android-chrome-192x192.png** - 192x192px (icône Android petit)
5. **android-chrome-512x512.png** - 512x512px (icône Android grand)
6. **site.webmanifest** - Déjà créé ✅

### Comment créer vos favicons ?

**Option 1 : Utiliser un générateur en ligne (recommandé)**
1. Allez sur **https://realfavicongenerator.net/**
2. Uploadez votre logo/symbole (idéalement 512x512px minimum)
3. Personnalisez les couleurs si nécessaire :
   - Theme color : `#8B3A3A` (bordeaux)
   - Background color : `#FAF8F5` (blanc cassé)
4. Téléchargez le pack complet
5. Placez tous les fichiers dans `/assets/images/favicon/`

**Option 2 : Créer manuellement avec un éditeur**
1. Créez une image carrée de votre logo (512x512px)
2. Utilisez Photoshop/GIMP/Figma pour redimensionner aux différentes tailles
3. Exportez en PNG avec transparence

### Design recommandé pour votre favicon

Pour votre marque "Sexualité Authentique", voici quelques idées :

**Option A : Initiales stylisées**
- Les lettres "S" et "A" entrelacées
- Couleur : bordeaux (#8B3A3A) sur fond beige (#F5EBE0)

**Option B : Symbole abstrait**
- Une forme organique rappelant la connexion/l'union
- Couleurs terracotta et bordeaux

**Option C : Simple et épuré**
- Un point/cercle bordeaux symbolisant le 100%
- Sur fond transparent ou beige

### Checklist

- [ ] Créer ou commander un design de favicon
- [ ] Générer tous les formats avec realfavicongenerator.net
- [ ] Placer les fichiers dans `/assets/images/favicon/`
- [ ] Tester sur différents navigateurs (Chrome, Firefox, Safari)
- [ ] Vérifier que l'icône apparaît bien dans l'onglet du navigateur

### Note importante

Le fichier `site.webmanifest` est déjà configuré avec :
- Nom : "Sexualité Authentique"
- Couleur thème : bordeaux (#8B3A3A)
- Fond : blanc cassé (#FAF8F5)

Vous n'avez **pas besoin** de modifier ce fichier.

---

## ❓ Questions fréquentes

**Q : Puis-je utiliser d'autres formats que JPG ?**
R : Oui, PNG fonctionne aussi. WebP est idéal (plus léger) mais moins compatible.

**Q : Mes photos sont trop lourdes (2-3 MB), que faire ?**
R : Utilisez TinyPNG.com ou Squoosh.app pour les compresser à ~300 KB max.

**Q : Je n'ai pas de photo professionnelle, que faire ?**
R : Demandez à un ami photographe ou utilisez un smartphone avec bon éclairage naturel. L'important est l'authenticité, pas la perfection technique.

**Q : Dois-je mettre des images dans tous les articles de blog ?**
R : Non, ce n'est pas obligatoire. Vous pouvez commencer sans images dans les articles.

---

**Besoin d'aide ?** Contactez-moi ou consultez le fichier `_data/photos.yml` qui contient aussi le plan détaillé des photos.
