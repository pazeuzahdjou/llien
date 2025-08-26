const fs = require('fs');

/* //Gestion des dossiers

if(fs.existsSync('./mesFichiers')){
   fs.rmdir('./mesFichiers',(erreur)=>{
        if(erreur){
            console.log(erreur);
        }else
            console.log('Dossier a été suipprimé avec succès');
   })
} else
        fs.mkdir('./mesFichiers',(erreur)=>{
             if(erreur){
                 console.log(erreur);
             }else
                  console.log('Dossier crée avec succès');
}); */







// créatgion d'un fichier
/* const fs = require('fs')
fs.writeFile('./mesFichiers/log.txt', 'Bonjour ,je suis un developpeur fullstack',()=>{
    console.log('fichier crée avec succès !')
}); */


//lecture d'un fichier




/* 
fs.readFile('./mesFichiers/log.txt', (erreur, donnee)=>{
    if(erreur){
        console.log(erreur);
    }else
        console.log(donnee.toString()); 
}); */




// suppression d'un fichier

if(fs.existsSync('./mesFichiers/log.txt')){
    fs.unlink('./mesFichiers/log.txt',(erreur)=>{
        if(erreur){
            console.log(erreur);
        }else{
            console.log('Fichier supprimé avec suucèes !')
        }
            
    })
} else{
    console.log("Impossible de supprimer un fichier qui n'existe pas");
}
