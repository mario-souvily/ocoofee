# Garder la base Supabase toujours active

## Le problème

Le projet Supabase `ocoofee` est sur le **plan free**. Supabase met automatiquement un
projet **en pause après 7 jours sans activité** (aucune requête SQL, aucun appel API).
C'est pour ça que la base « se coupe » quand on ne touche pas au projet pendant
plusieurs jours.

Deux points importants :

- Un ping **empêche** la mise en pause, mais il ne **réveille pas** un projet déjà en
  pause. Un projet en pause doit être relancé à la main (bouton *Restore* sur
  [le dashboard Supabase](https://supabase.com/dashboard/project/nlzxblkfezrkpqemesrs)).
- `pg_cron` côté Supabase ne sert à rien ici : l'activité interne à la base ne compte pas
  comme de l'activité pour le compteur de mise en pause. Le ping doit venir de l'extérieur.

## La solution mise en place

Le workflow [.github/workflows/supabase-keepalive.yml](.github/workflows/supabase-keepalive.yml)
ouvre une connexion à la base **une fois par jour** (06:17 UTC) depuis les serveurs de
GitHub. Le compteur d'inactivité Supabase ne dépasse donc jamais 1 jour, très loin des
7 jours fatidiques.

Pourquoi GitHub Actions et pas un cron Vercel : le projet n'est **pas déployé sur Vercel**
aujourd'hui. GitHub Actions tourne dans le cloud, sans dépendre de ton PC — si la machine
est éteinte, le ping passe quand même.

## Mise en route : 2 étapes obligatoires

### 1. Créer le secret GitHub

Sur `https://github.com/mario-souvily/ocoofee` →
**Settings** → **Secrets and variables** → **Actions** → **New repository secret**

| Champ | Valeur |
| --- | --- |
| Name | `SUPABASE_PING_URL` |
| Secret | la valeur de **`DIRECT_URL`** du fichier `.env` (pooler, port **5432**) |

```
postgresql://postgres.nlzxblkfezrkpqemesrs:<MOT_DE_PASSE>@aws-1-us-east-1.pooler.supabase.com:5432/postgres
```

⚠️ Utiliser bien `DIRECT_URL` (port 5432) et **pas** `DATABASE_URL` (port 6543) : le
paramètre `?pgbouncer=true` de cette dernière n'est pas compris par `psql` et ferait
échouer le ping.

Le dépôt est public, mais un *secret* GitHub n'est jamais exposé dans les logs ni
accessible aux forks. Le workflow n'affiche jamais l'URL.

### 2. Mettre le workflow sur la branche `main`

GitHub ne déclenche les workflows planifiés **que depuis la branche par défaut**. Tant que
le fichier n'est que sur une branche de feature, le cron ne tourne pas.

```bash
git checkout main
git checkout <branche-actuelle> -- .github/workflows/supabase-keepalive.yml SUPABASE_KEEPALIVE.md
git add .github/workflows/supabase-keepalive.yml SUPABASE_KEEPALIVE.md
git commit -m "ci: ping quotidien pour empecher la mise en pause de Supabase"
git push origin main
```

### 3. Vérifier (recommandé)

Onglet **Actions** → **Supabase Keep-Alive** → **Run workflow**. Le job doit afficher
`pong 2026-...` et se terminer en vert. C'est le vrai test : il valide le secret et la
connexion.

## Points de vigilance

- **Dépôt public + 60 jours** : GitHub désactive un workflow planifié après 60 jours sans
  activité sur le dépôt. Le dernier step du workflow pousse un commit minuscule
  (`.github/keepalive.txt`) **uniquement si le dépôt est resté muet 45 jours**, ce qui
  relance ce compteur. GitHub envoie aussi un mail d'avertissement avant de désactiver :
  si ça arrive, il suffit de réactiver le workflow dans l'onglet Actions.
- **Horaire approximatif** : les crons GitHub peuvent être décalés de plusieurs minutes
  (voire de plus en période de charge). Sans importance ici, la marge est de 7 jours.
- **Si le mot de passe de la base change**, il faut mettre à jour le secret
  `SUPABASE_PING_URL`, sinon le ping échoue silencieusement (GitHub envoie un mail
  d'échec à chaque run raté).
- **Plan free, 2 projets actifs maximum** par organisation Supabase. L'organisation
  contient `ocoofee`, `fit-tracker-dev-mario` et `nextjs-postgres` : garder un œil dessus
  si un jour une restauration est refusée.
- **Le jour du déploiement sur Vercel**, un *Cron Job* Vercel sur une route
  `/api/ping` peut remplacer ce workflow (1 cron/jour autorisé sur le plan Hobby). Le
  workflow GitHub reste valable dans tous les cas.
