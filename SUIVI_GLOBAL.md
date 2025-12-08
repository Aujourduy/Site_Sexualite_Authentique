# SUIVI GLOBAL - Sexualité Authentique

Journal de bord des sessions de travail sur le projet.

---

## Session #7 - 2025-12-08
**Durée :** ~10 min
**Statut :** ✅ Terminée

**Ce qui a été fait :**
- Amélioration du script `claudess` pour envoi de screenshots
- Script centralisé sur le serveur pour maintenance unifiée
- Renommage intelligent des fichiers (suppression accents, espaces → underscores)
- Changement dossier destination : /home/dang/Aujourduy/screenshots → /home/dang/transfert
- Création alias `claudess` sur serveur pour afficher les instructions d'installation

**Fichiers créés/modifiés :**
- /home/dang/bin/send-screenshots-server.sh (script principal centralisé)
- /home/dang/transfert/claudess-wrapper.sh (wrapper pour PC clients)
- /home/dang/bin/claudess-info.sh (affichage instructions)
- ~/.bashrc (ajout alias claudess)

**Amélioration par rapport à l'ancienne version :**
- Noms de fichiers conservés et nettoyés au lieu de "screenshot-1", "screenshot-2"
- Une seule version à maintenir sur le serveur
- Détection automatique serveur vs client

---

## Session #6 - 2025-11-26
**Durée :** ~2h
**Statut :** ✅ Terminée avec succès

**Ce qui a été fait :**

1. **Création système de suivi structuré**
   - Création SUIVI_GLOBAL.md (journal de bord)
   - Création SUIVI_ENCOURS.md (tâches actives)
   - Création SUIVI_APPRIS.md (base de connaissances)
   - Suppression ancien docs/SUIVI.md
   - Mise à jour .claude/CLAUDE.md pour pointer vers les 3 nouveaux fichiers

2. **Configuration infrastructure de test Playwright**
   - Exposition port Playwright (127.0.0.1:3000:3000) dans docker-compose.yml
   - Configuration extra_hosts (host.docker.internal) pour accès à l'hôte
   - Configuration UFW : autorisation Docker (172.18.0.0/16) → port 4000 (Jekyll)
   - Modifications Playwright : viewport configurable, URLs complètes, endpoint /ui-evaluate

3. **Tests menu burger sur smartphone**
   - Test avec viewport 375x667 (iPhone SE)
   - Vérification JavaScript (classes active, aria-expanded)
   - Capture screenshot
   - ✅ Résultat : Menu fonctionne parfaitement, aucune correction nécessaire

**Problèmes rencontrés :**
- Firewall UFW bloquait l'accès Docker → Jekyll (port 4000)
- Endpoint /ui-test codé en dur pour Rails

**Solutions appliquées :**
- Règle UFW : `sudo ufw allow from 172.18.0.0/16 to any port 4000`
- Modification code Playwright pour accepter URLs complètes et viewport configurable

**Difficultés et observations :**
- Importance de comprendre l'isolation réseau Docker vs hôte
- UFW plus simple que iptables brut (règles persistantes au reboot)

**Fichiers modifiés :**
- /home/dang/Aujourduy/docker-compose.yml (config Playwright)
- /home/dang/Aujourduy/playwright/index.js (viewport, URLs, /ui-evaluate)
- /home/dang/SexualiteAuthentique/SUIVI_*.md (création des 3 fichiers)
- /home/dang/SexualiteAuthentique/.claude/CLAUDE.md (mise à jour références)

---

## Session #5 - 2025-11-26
**Durée :** ~5 min
**Statut :** ✅ Terminée

**Ce qui a été fait :**
- Retrait de l'entrée "Ressources" du menu de navigation (_data/config.yml)
- Ajout tâche "Construire la page Ressources" dans SUIVI_ENCOURS

**Commits :**
- 8f6a45e : Retrait menu Ressources et mise à jour SUIVI

**Observations :**
- Page Ressources retirée du menu car pas encore construite

---

## Session #4 - 2025-11-22
**Durée :** ~2h
**Statut :** ✅ Terminée avec succès

**Ce qui a été fait :**
1. **Mise à jour des liens de contact**
   - Formulaire de contact via Tally (https://tally.so/r/w4Md2k)
   - Lien TidyCal mis à jour (seance-de-clarification-femme)
   - Suppression de l'email contact@sexualite-authentique.fr du site

2. **Mise à jour page Qui suis-je**
   - Ajout Julien Musy (Méthode De Martini) dans les influences
   - Séparation "Les danses libres" et "La danse Contact Impro"
   - Suppression "90% de satisfaction" de la page d'accueil

3. **Création des pages légales**
   - Mentions légales (mentions-legales.md)
   - Politique de confidentialité (politique-confidentialite.md)
   - CGV (cgv.md)

4. **Réorganisation du blog par impact**
   - Analyse et classement des 209 articles selon : Simple, Surprenant, Puissant
   - Renommage des fichiers pour réordonner (top 10 : Le tigre et le masque, Gratitude vs colère, L'aphrodisiaque...)
   - Fix conflit URL "Les 4 dimensions de l'être"

**Commits :**
- dd12d77 : Mise à jour contact et ajout pages légales
- 454b4f5 : Réorganisation blog par ordre d'impact
- cf8885a : Fix conflit URL article doublon

**Problèmes rencontrés :**
- Conflit URL avec deux articles "Les 4 dimensions de l'être"

**Solutions appliquées :**
- Renommé un des articles en "Les 4 dimensions de l'être - introduction"

---

## Session #3 - 2025-11-19 (PC)
**Durée :** ~30 min
**Statut :** ✅ Terminée avec succès

**Ce qui a été fait :**
1. **Installation environnement de développement local**
   - Installation Ruby 3.2.3 avec `sudo apt install ruby-full build-essential zlib1g-dev`
   - Installation Bundler 2.7.2 avec `sudo gem install bundler`
   - Installation des dépendances Jekyll avec `sudo bundle install`

2. **Lancement du serveur Jekyll local**
   - Serveur Jekyll lancé avec `bundle exec jekyll serve --host 0.0.0.0`
   - Site accessible via Tailscale sur http://100.95.124.70:4000
   - Tests de toutes les pages principales : HTTP 200 OK
   - Vérification des assets (CSS, images, favicon) : tous chargent correctement

3. **Configuration réseau**
   - Jekyll configuré pour écouter sur 0.0.0.0:4000
   - Identification de l'IP Tailscale du serveur (100.95.124.70)

**Problèmes rencontrés :**
- Problèmes de permissions lors de l'installation des gems

**Solutions appliquées :**
- Utilisation de `sudo` pour l'installation des gems

**Difficultés et observations :**
- Nécessité d'installer avec sudo (pas idéal mais fonctionnel)
- Serveur reste en mode background pour développement continu

---

## Session #2 - 2025-11-19 (Téléphone)
**Durée :** ~1h
**Statut :** ⏸️ Session interrompue - À reprendre sur PC

**Ce qui a été fait :**
1. **Configuration Git et branches**
   - Création alias `cdss` dans ~/.bashrc pour accès rapide au dossier
   - Mise à jour de la branche `main` locale (git pull)
   - Fusion de la branche `claude/claude-code-le-site-vitrine-017GSZ9K3Tyypd4RUokWf7SU` avec `main`
   - Push des changements vers GitHub

2. **Création documentation projet**
   - Création du cahier de suivi (docs/SUIVI.md)
   - Création du guide de comportements Claude (docs/COMPORTEMENTS-CLAUDE.md)
   - Création fichier instructions Claude (.claude/instructions.md)

3. **Règles de comportement définies**
   - Règle absolue : JAMAIS de commit sans autorisation explicite avec le mot "commit"
   - Demande de commit = question unique, dédiée, séparée
   - Règle : Challenger & Questionner
   - Claude doit lire COMPORTEMENTS-CLAUDE.md + SUIVI.md au début de chaque session

4. **Préparation lancement local (EN COURS)**
   - Détection : Ruby non installé sur l'hôte
   - Choix : Installation Ruby local (Option 2) plutôt que Docker
   - ⏸️ **ARRÊT ICI** : Besoin d'installer Ruby avec sudo (nécessite mot de passe)

**Changements fusionnés (branche claude-code-site-vitrine) :**
- Ajout CNAME
- Mise à jour _config.yml, layouts, includes
- Ajout styles CSS supplémentaires
- Ajout favicon (site.webmanifest)
- Amélioration documentation (DEPLOIEMENT.md, GUIDE-IMAGES.md)

**Difficultés et observations :**
- Session sur téléphone limitée pour tâches nécessitant mot de passe

---

## Session #1 - Date inconnue
**Statut :** ✅ Terminée - Site initial créé

**Ce qui a été fait :**
- Configuration Jekyll complète
- Déploiement GitHub Pages
- Configuration DNS (CNAME)
- Création des layouts (default, home, page, post)
- Création des includes (header, footer)
- 12 pages principales créées
- 5 articles de blog publiés
- Fichiers yml configurés (faq, videos, photos, quiz, testimonials, config)
- Quiz "Amant Sensible" intégré
- Palette de couleurs appliquée (terracotta, bordeaux, olive)
- CSS responsive
- Typographie Montserrat
- Documentation (DEPLOIEMENT.md, GUIDE-IMAGES.md)

---

**Dernière mise à jour :** Session #5 - 2025-11-26
