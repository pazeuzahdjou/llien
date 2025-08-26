/* 
const http = require('http');
const port = 3000

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });

  res.end("<h1 >Bienvenue sur notre API<h1>");
});

server.listen(port, () => {
  console.log('Server running at http://localhost:3000/');
}); */


const http = require("http");
const fs = require('fs'); 
 

 const  serveur = http.createServer((requete, reponse)=>{

 
    // definition de l'en-tete
  reponse.setHeader( "content-type" , "text/html");

  // definition de la reponse selon la demande du client 
  let fichier = "";
  if(requete.url==="/Acceuil"){
       fichier = "./HTML/acceuil.html";
  }else if(requete.url==="/profil"){
       fichier = "./HTML/profil.html";    
  }else{
    fichier  = "./HTML/erreur.html";
  }

  // lecture du fichier html et envoi
  fs.readFile(fichier, (erreur, donnee)=>{
    if(erreur){
      console.log(erreur);
      reponse.end();
      
    }else{
      reponse.end(donnee);
      
    }
  })
 });
      serveur.listen(3001, ()=>{
          console.log("tout est bon deja pour écouter les requetes au port 3001"); 
     })


