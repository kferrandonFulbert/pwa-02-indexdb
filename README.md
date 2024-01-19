# pwa-02-IndexDb Stockage des Bières

Une application web simple pour répertorier et rechercher des bières. L'application utilise IndexedDB pour stocker localement les données des bières et récupère des informations supplémentaires sur les bières depuis l'API Punk en utilisant l'API Fetch.

## attendu

https://kferrandonfulbert.github.io/pwa-02-indexdb/

## Mise en route

Ces instructions vous aideront à configurer et à exécuter l'application Liste de Bières sur votre machine locale.

### Prérequis

- Navigateur web moderne
- Serveur local (par exemple, extension [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) pour Visual Studio Code)

### Installation

1. Clonez le dépôt sur votre machine locale :

    ```bash
    git clone https://github.com/kferrandonFulbert/pwa-02-indexdb
    ```

2. Ouvrez le dossier du projet dans votre éditeur de code préféré.
3. Lancez un serveur local pour exécuter l'application.
4. Ouvrez l'application dans votre navigateur web.

## Fonctionnalités à développer

- **Stockage Local :** Utilise IndexedDB pour stocker localement les données des bières pour un accès hors ligne.
- Pour cela si la base de données locale est vide, tu dois intérogger l'api pour inserrer toutes les bières dans la base.
- Si la base de données locales à déja des enregistrements, on interrogera la base de données locale pour afficher les bieres.
- /!\ de bien initialiser la DB et de sa structure à l'initialisation de la page.

## Utilisation

1. Ouvrez l'application dans votre navigateur web.
2. Utilisez la barre de recherche pour trouver des bières par nom.
3. Explorez la liste des bières affichée sur la page.

## Construit Avec

- HTML5
- Bootstrap 5.3.2
- JavaScript

## Remerciements

- Punk API pour fournir les données des bières.
- Bootstrap pour le design responsive.

## Contribuer

Si vous souhaitez contribuer au projet, veuillez suivre ces étapes :

1. Fork le dépôt sur GitHub.
2. Clonez votre fork localement.
3. Créez une nouvelle branche avec un nom descriptif.
4. Effectuez vos modifications et effectuez un commit.
5. Poussez vos modifications vers votre fork.
6. Soumettez une pull request vers le dépôt principal.

