---
layout: page
title: "Témoignages"
subtitle: "Elles ont osé les 100%"
permalink: /temoignages/
---

## Ce que vivent mes clientes

{% for temoignage in site.data.testimonials.temoignages %}

---

### {{ temoignage.nom }}, {{ temoignage.age }} ans
**{{ temoignage.profession }}** | {{ temoignage.situation }}

> {{ temoignage.citation_courte }}

{{ temoignage.temoignage_complet }}

**Ce qu'elle a transformé :**

{% for resultat in temoignage.resultats %}
- ✓ {{ resultat }}
{% endfor %}

*Parcours accompli : {{ temoignage.date | date: "%B %Y" }}*

{% endfor %}

---

## Statistiques (anonymes)

Depuis que j'accompagne des personnes dans leur sexualité authentique :

- **{{ site.data.testimonials.statistiques.total_clients }} personnes accompagnées**
- **{{ site.data.testimonials.statistiques.femmes_pourcentage }}% de femmes**, {{ site.data.testimonials.statistiques.hommes_pourcentage }}% d'hommes
- **Âge moyen : {{ site.data.testimonials.statistiques.age_moyen }} ans**
- **{{ site.data.testimonials.statistiques.satisfaction }}% de satisfaction** (basé sur questionnaire post-parcours)
- **{{ site.data.testimonials.statistiques.recommandation }}% recommanderaient** le parcours à une amie

---

## Résultats fréquemment observés

{% for resultat in site.data.testimonials.resultats_frequents %}
- {{ resultat }}
{% endfor %}

**Important :** Ces résultats ne sont pas garantis. Chaque personne est unique, chaque parcours est différent. Ce qui compte, c'est VOTRE transformation, pas celle des autres.

---

## Pourquoi ces témoignages sont anonymisés ?

Par respect pour la vie privée de mes clientes.

La sexualité est un sujet intime. Même si ces femmes sont fières de leur transformation, je préfère protéger leur identité en changeant leurs prénoms et certains détails.

L'authenticité des témoignages reste intacte. Seuls les noms ont été modifiés.

---

## Et vous ?

Si ces témoignages résonnent en vous...

Si vous reconnaissez vos propres douleurs dans ces histoires...

Si vous aspirez à vivre cette même transformation...

Commencez par réserver votre **Séance Diagnostic de 60 minutes offerte**.

On clarifiera ensemble où vous en êtes et si le passage à 100% est fait pour vous maintenant.

[Réserver ma Séance Offerte]({{ '/seance-diagnostic/' | relative_url }}){: .btn .btn-bordeaux .btn-large}
