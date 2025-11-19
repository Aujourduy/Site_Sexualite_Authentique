# Installation Analytics - Sexualité Authentique

## Choix de la solution Analytics

Deux options RGPD-friendly recommandées :

### Option 1 : Plausible Analytics (RECOMMANDÉ)
**Avantages :**
- ✅ 100% RGPD-compliant (pas besoin de bannière cookies)
- ✅ Hébergé en EU
- ✅ Interface simple et rapide
- ✅ Léger (< 1KB vs 45KB Google Analytics)
- ✅ Pas de tracking cross-site
- ✅ Open source

**Prix :** 9€/mois (jusqu'à 10K visiteurs/mois)

**Installation Plausible :**

1. **S'inscrire sur Plausible.io**
   - Aller sur https://plausible.io
   - Créer un compte (essai gratuit 30 jours)
   - Ajouter le domaine : `sexualite-authentique.fr`

2. **Récupérer le script Plausible**
   Plausible vous donnera un script comme :
   ```html
   <script defer data-domain="sexualite-authentique.fr" src="https://plausible.io/js/script.js"></script>
   ```

3. **Ajouter dans `_includes/head.html`**
   ```html
   {% if jekyll.environment == 'production' %}
   <script defer data-domain="sexualite-authentique.fr" src="https://plausible.io/js/script.js"></script>
   {% endif %}
   ```

4. **Configurer les objectifs de conversion**
   Dans Plausible dashboard → Settings → Goals :
   - `Clic CTA Séance Diagnostic`
   - `Clic CTA Parcours 12 Semaines`
   - `Visite page /seance-diagnostic/`
   - `Visite page /parcours-12-semaines/`
   - `Scroll 75%`

---

### Option 2 : Google Analytics 4
**Avantages :**
- ✅ Gratuit
- ✅ Très complet
- ✅ Intégration avec Google Ads

**Inconvénients :**
- ❌ Nécessite bannière cookies RGPD
- ❌ Plus lourd (45KB)
- ❌ Plus complexe

**Installation Google Analytics 4 :**

1. **Créer un compte GA4**
   - Aller sur https://analytics.google.com
   - Créer une propriété "Sexualité Authentique"
   - Récupérer l'ID de mesure (format : G-XXXXXXXXXX)

2. **Ajouter le script GA4**
   Dans `_includes/head.html` :
   ```html
   {% if jekyll.environment == 'production' %}
   <!-- Google Analytics 4 -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX', {
       'anonymize_ip': true,
       'cookie_flags': 'SameSite=None;Secure'
     });
   </script>
   {% endif %}
   ```

3. **Ajouter bannière cookies RGPD**
   Utiliser Axeptio, Tarteaucitron, ou Cookiebot

4. **Configurer les événements de conversion**
   Dans GA4 → Configure → Events :
   - `clic_cta_diagnostic`
   - `clic_cta_parcours`
   - `page_view_diagnostic`
   - `page_view_parcours`

---

## Google Search Console (OBLIGATOIRE pour SEO)

**Installation :**

1. **S'inscrire sur Google Search Console**
   - Aller sur https://search.google.com/search-console
   - Ajouter une propriété : `sexualite-authentique.fr`

2. **Vérifier la propriété**
   Méthode recommandée : Balise HTML

   Ajouter dans `_includes/head.html` :
   ```html
   <meta name="google-site-verification" content="VOTRE_CODE_VERIFICATION" />
   ```

3. **Soumettre le sitemap**
   Dans Search Console → Sitemaps :
   - Ajouter : `https://sexualite-authentique.fr/sitemap.xml`

4. **Surveiller les métriques SEO**
   - Requêtes de recherche
   - Pages les plus visitées
   - Erreurs d'indexation
   - Backlinks

---

## Hotjar ou Microsoft Clarity (OPTIONNEL - Heatmaps)

**Microsoft Clarity (GRATUIT - Recommandé)**

1. **S'inscrire sur clarity.microsoft.com**
2. **Créer un projet "Sexualité Authentique"**
3. **Récupérer le code de tracking**
4. **Ajouter dans `_includes/head.html`** :
   ```html
   {% if jekyll.environment == 'production' %}
   <script type="text/javascript">
     (function(c,l,a,r,i,t,y){
       c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
       t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
       y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
     })(window, document, "clarity", "script", "VOTRE_CLARITY_ID");
   </script>
   {% endif %}
   ```

**Fonctionnalités Clarity :**
- Heatmaps (zones les plus cliquées)
- Session recordings (replay des visites)
- Insights comportementaux
- 100% gratuit, illimité
- RGPD-friendly

---

## Configuration actuelle recommandée

Pour **Sexualité Authentique**, je recommande :

```
✅ Plausible Analytics (9€/mois) - Analytics principal
✅ Google Search Console (gratuit) - SEO
✅ Microsoft Clarity (gratuit) - Heatmaps/Recordings
```

**Budget total : 9€/mois**

**Pas besoin de :**
- ❌ Google Analytics 4 (remplacé par Plausible)
- ❌ Pixel Facebook (pas de pub Facebook pour l'instant)
- ❌ Hotjar (remplacé par Clarity gratuit)

---

## Checklist d'installation

### Étape 1 : Plausible Analytics
- [ ] S'inscrire sur plausible.io
- [ ] Ajouter domaine sexualite-authentique.fr
- [ ] Copier le script de tracking
- [ ] Ajouter dans `_includes/head.html`
- [ ] Configurer 5 objectifs de conversion
- [ ] Tester que ça fonctionne

### Étape 2 : Google Search Console
- [ ] S'inscrire sur search.google.com/search-console
- [ ] Vérifier propriété avec balise HTML
- [ ] Soumettre sitemap.xml
- [ ] Vérifier indexation des pages

### Étape 3 : Microsoft Clarity (optionnel mais recommandé)
- [ ] S'inscrire sur clarity.microsoft.com
- [ ] Créer projet
- [ ] Ajouter script dans `_includes/head.html`
- [ ] Attendre 24h pour premières données

---

## Fichier `_includes/analytics.html` à créer

```html
{% if jekyll.environment == 'production' %}

<!-- Plausible Analytics - RGPD-friendly -->
<script defer data-domain="sexualite-authentique.fr" src="https://plausible.io/js/script.js"></script>

<!-- Microsoft Clarity (optionnel) -->
<script type="text/javascript">
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "VOTRE_CLARITY_ID");
</script>

{% endif %}
```

Puis inclure dans `_layouts/default.html` dans le `<head>` :
```html
{% include analytics.html %}
```

---

## Objectifs de conversion à tracker

### Plausible Goals :
1. **Clic CTA Principal** : `Outbound Link: Click`
   - URL contient `/seance-diagnostic`

2. **Page Séance Diagnostic** : `Pageview`
   - URL exacte : `/seance-diagnostic/`

3. **Page Parcours** : `Pageview`
   - URL exacte : `/parcours-12-semaines/`

4. **Scroll profond** : `Custom Event: scroll_75`
   - À implémenter avec JS

5. **Clic Email** : `Outbound Link: Click`
   - URL contient `mailto:`

---

## Vérification post-installation

**Test Plausible :**
1. Aller sur votre site
2. Attendre 1-2 minutes
3. Vérifier dans Plausible dashboard → Real-time

**Test Search Console :**
1. Soumettre sitemap
2. Attendre 24-48h
3. Vérifier couverture des pages

**Test Clarity :**
1. Naviguer sur le site 2-3 minutes
2. Attendre 1h
3. Vérifier enregistrements dans Clarity dashboard

---

## Notes RGPD

**Avec Plausible + Clarity :**
- ✅ Pas besoin de bannière cookies
- ✅ Pas de données personnelles collectées
- ✅ Anonymisation IP automatique
- ✅ Pas de tracking cross-site
- ✅ Conformité RGPD native

**Mentions à ajouter dans /politique-confidentialite/ :**

```markdown
## Outils d'analyse

Nous utilisons :
- **Plausible Analytics** : Analytics respectueux de la vie privée, hébergé en UE, conforme RGPD
- **Microsoft Clarity** : Enregistrements de session anonymisés pour améliorer l'expérience utilisateur
- **Google Search Console** : Analyse du référencement naturel

Ces outils ne collectent aucune donnée personnelle et n'utilisent pas de cookies de tracking.
```

---

## Contact support

- **Plausible** : support@plausible.io
- **Search Console** : Forum d'aide Google
- **Clarity** : clarity-support@microsoft.com
