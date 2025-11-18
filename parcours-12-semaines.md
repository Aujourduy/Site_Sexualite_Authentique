---
layout: page
title: "Le Parcours de Libération"
subtitle: "12 semaines pour passer de 99% à 100% d'authenticité"
permalink: /parcours-12-semaines/
---

## L'eau à 99° ne bout pas

Vous pouvez avoir fait des années de thérapie, de stages, de développement personnel.
Vous pouvez être à 95%, 98%, 99% d'authenticité.

Mais **à 100°, tout change**. Ce n'est pas "un peu mieux". C'est une autre dimension.

Ce parcours est conçu pour vous accompagner dans ce dernier degré. Le plus difficile. Le plus transformateur.

---

## Les 4 Transformations (ce que vous vivrez)

{% for transformation in site.data.config.transformations %}
### {{ forloop.index }}. {{ transformation.titre }}

{{ transformation.description }}

{% endfor %}

---

## Les 4 Étapes du Parcours

{% for etape in site.data.config.etapes %}
### Étape {{ etape.numero }} : {{ etape.titre }}

{{ etape.description }}

**En pratique :** {{ etape.courte }}

{% endfor %}

---

## Comment ça se passe concrètement ?

### Format

- **Durée :** {{ site.data.config.offre.duree }}
- **Rythme :** Une séance par semaine (12 séances au total)
- **Durée des séances :** 90 minutes
- **Format :** {{ site.data.config.offre.format }}
- **Suivi :** {{ site.data.config.offre.suivi }}

### Structure de chaque séance

Chaque séance combine :

1. **Principes** : On pose les bases théoriques (pourquoi ça marche)
2. **Pratiques** : Exercices concrets à explorer entre les séances
3. **Coaching** : On travaille sur VOS blocages spécifiques, VOS peurs, VOTRE situation

Ce n'est pas un cours magistral. C'est un accompagnement personnalisé.

### Entre les séances

Vous n'êtes pas seul·e entre les séances. Vous pouvez me contacter par **email ou WhatsApp** pour :

- Partager vos découvertes
- Poser vos questions
- Travailler sur un blocage qui émerge
- Célébrer une victoire

C'est un **accompagnement vivant**, pas un programme rigide.

---

## Investissement

**Prix :** {{ site.data.config.offre.prix }}{{ site.data.config.offre.devise }}

**Paiement :** {{ site.data.config.offre.paiement_echelonne }}

### Pourquoi cet investissement ?

Ce parcours représente :

- 12 séances de 90 minutes (18 heures d'accompagnement)
- Suivi illimité entre les séances pendant 12 semaines
- 20 ans d'expérience (danse, communication, spiritualité)
- Une transformation qui changera le reste de votre vie

Si vous hésitez, posez-vous cette question :

**Combien vaut pour vous la capacité de vivre votre vie intime à 100% d'authenticité ?**

---

## Avant de vous engager : La Séance Diagnostic

Avant tout engagement, vous bénéficiez d'une **Séance Diagnostic de 60 minutes complètement offerte**.

### À quoi sert cette séance ?

On clarifie ensemble :

1. **Où vous en êtes** aujourd'hui dans votre chemin
2. **Ce qui vous retient** (vos peurs, vos blocages, vos croyances)
3. **Si le passage à 100%** est fait pour vous maintenant
4. **Si nous sommes alignés** pour travailler ensemble

Ce n'est **pas une séance de vente**. C'est un moment d'écoute et de clarté.

Si à l'issue de cette séance :

- Vous sentez que c'est le bon moment → On démarre le parcours
- Vous sentez que ce n'est pas encore le moment → Je vous oriente vers ce dont vous avez besoin maintenant
- Vous sentez qu'on n'est pas alignés → Aucun souci, on se quitte en bons termes

---

## Pour qui est fait ce parcours ?

### C'est fait pour vous si...

✅ Vous avez déjà fait plusieurs années de cheminement personnel
✅ Vous êtes prête à remettre en question vos croyances sur l'amour et la sexualité
✅ Vous cherchez une transformation profonde, pas juste des techniques
✅ Vous êtes capable de vous engager 12 semaines dans ce travail
✅ Vous sentez que vous êtes à 90-95% et que ce dernier saut vous fait peur

### Ce n'est PAS fait pour vous si...

❌ Vous débutez dans le développement personnel
❌ Vous cherchez des recettes toutes faites ou des "positions magiques"
❌ Vous voulez "sauver votre couple" à tout prix sans travailler sur vous
❌ Vous n'êtes pas prête à regarder vos peurs en face
❌ Vous cherchez une solution rapide sans engagement

---

## Témoignages

{% for temoignage in site.data.testimonials.temoignages limit:2 %}
### {{ temoignage.nom }}, {{ temoignage.age }} ans - {{ temoignage.profession }}

> "{{ temoignage.citation_courte }}"

{{ temoignage.temoignage_complet }}

**Résultats :**
{% for resultat in temoignage.resultats %}
- {{ resultat }}
{% endfor %}

---

{% endfor %}

[Voir tous les témoignages](/temoignages/){: .btn .btn-outline}

---

## FAQ

**Dois-je être en couple pour suivre ce parcours ?**

Non, absolument pas. La majorité de mes clientes sont célibataires après une rupture douloureuse. Le parcours se concentre sur VOUS d'abord. Une fois que vous êtes à 100% vous-même, vous attirez naturellement des relations authentiques.

**Et si je suis déjà en couple ?**

Le parcours fonctionne aussi pour les femmes en couple. Mais l'objectif reste le même : VOTRE libération, pas la survie du couple. Souvent, quand vous changez, le couple se transforme. Mais parfois, le couple ne suit pas. Et c'est OK.

**Combien de temps dure le parcours ?**

12 semaines précisément. Une séance par semaine. Certaines clientes choisissent ensuite un accompagnement ponctuel sur certains sujets, mais le cœur du travail se fait en 12 semaines.

**Je suis un homme, puis-je suivre ce parcours ?**

Oui. Même si la majorité de mes clientes sont des femmes, j'ai aussi accompagné des hommes. Les principes sont les mêmes. Contactez-moi pour en discuter.

[Voir toutes les questions fréquentes](/faq/){: .btn .btn-outline}

---

## Prêt·e à faire le saut ?

Le passage de 99% à 100% est le plus difficile.
C'est aussi le plus libérateur.

Commencez par réserver votre Séance Diagnostic offerte.
On verra ensemble si c'est le bon moment pour vous.

[Réserver ma Séance Diagnostic Offerte](/seance-diagnostic/){: .btn .btn-bordeaux .btn-large}
