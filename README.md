#ROpenExo #

Il est important d'avoir MongoDb installer sur son poste .
Nous recommandons Mongo Compass qui permet d'avoir une interface utilisateur de la base de données .

Après installation de MongoDb,lancez la commande mongod ,créez dans MongoCompass la base de donnée exo-api et y importer 2 collections qui sont présente sous forme de fichier json (modele.json piece.json) dans apiRaph.

Pour lancer le site il faut récupérer dans deux fichiers diférents les branches apiRaph et frontRaph.

Ensuite il faut lancer la commande npm install sur le front et le back

Et pour finir la commande npm start .





Si vous rencontrez une erreur lié au CORS un add-on doit être ajouté au navigateur :
https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=fr

