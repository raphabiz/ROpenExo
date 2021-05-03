# ROpenExo

Il nous tout d'abord avoir une base de données : 

  Nous avons decider d'implementer notre projet grace à la base de données NOSQL MongoDB.
  Pour y avoir accès il vous faut installer MongoBD sur votre poste. Nous vous conseillons d'installer aussi MongoCompass pour avoir une interface utilisateur afin d'importer nos fichiers de données.
  
  Une fois l'installation terminée : lancez la commande mongod dans votre terminal.
  
  Ouvrez l'interface MongoCompass et creer une nouvelle base de données avec le bouton : create collection en vert 
  
  Importez ensuite nos fichiers de données modele.json et piece.json grace à : in your collection -> add data -> import file 
  

Pour lancer notre plateforme web :
  
 placez vous sur la branche frontROpenExo et lancez: NPM INSTALL 
 faites de même avec la branche apiROpenExo

 afin de lancer notre api placez vous sur la branche API lancez la commande npm start dans votre terminal.
 
 placez vous maintenant dans notre front et lancez ng build ou ng serve afin de lancer l'application web.
 

Si vous rencontrez une erreur liée au CORS un add-on doit être ajouté au navigateur :
https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=fr


