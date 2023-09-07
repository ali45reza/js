let DAY = Number(prompt("entrez un chiffre de semaine:"));
switch (DAY){
     case 1:
        document.write('Lundi');
        break;
    case 2:
        document.write('Mardi');
        break;

    case 3:
        document.write('Mercredi');
        break;
    case 4:
        document.write('jeudi');
        break;
    case 5:
        document.write('vendredi');
        break;
    case 6:
        document.write('Samedi');
        break;
    case 7:
        document.write('Dimanche');
        break;

    default:
        document.write("N'exist pas un jour correspond à votre numéro");
     }