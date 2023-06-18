const categoryList = {
    Femmes: {
      Vetements: ['Top et haut', 'Robe Cérémonie', 'Tenue Mariage', 'Soirée', 'Fêtes et cérémonies', 'Bureau', 'Décontracté et Sportswear', 'Pyjama', 'lingerie'],
      Chaussures: ['clog', 'slippers'],
      accessories: ['earrings', 'necklace']
    },
    Hommes: {
      Vetements: ['suits', 'pant'],
      Chaussures: ['Sandales', 'Babouche', 'Mocassin', 'Chaussures de ville'],
      Accessories: ['Bijoux', 'Montres', 'Lunettes de Soleil', 'Cravate',  'Foulard', 'Noeud Papillon', 'Chapeau', 'Bonnet', 'Autres']

    },
    Enfants: {
        Fille: ['Tenue de cérémonie', 'Jupe', 'Pantalon', 'Ensemble', 'Robe', 'T-shirt', 'Pull', 'Gilet', 'Manteau', 'Veste', 'Pyjama', 'Sous-vêtement', 'Chaussettes', 'Chaussures'],
        Garcon: ['Habit traditionnel', 'Habit de cérémonie', 'Pantalon', 'Tee-shirt, chemise', 'Gilet, veste', 'Accessoires'],
        Bebe: ['Vêtements unisexe', 'Linge, gigoteuse, accessoire de lit', 'Éveil, peluches']
    },
    Beaute: {
        Parfums: ['Parfums', 'Eau de toilette', 'Eau de parfum', 'Eau de cologne', 'Eau de senteur', 'Déodorant', 'Coffret parfum'],
        Maquillage: ['Teint', 'Yeux', 'Lèvres', 'Ongles', 'Accessoires', 'Coffret maquillage'],
        Soin: ['Visage', 'Corps', 'Cheveux', 'Solaire', 'Homme', 'Coffret soin'],
        Hygiène: ['Bain', 'Douche', 'Déodorant', 'Savon', 'Gel', 'Mousse', 'Crème', 'Lait', 'Huile', 'Gommage', 'Exfoliant', 'Gelée', 'Sels de bain', 'Coffret hygiène'],
        Santé: ['Complément alimentaire', 'Soin', 'Coffret santé'],
        Bio: ['Visage', 'Corps', 'Cheveux', 'Homme', 'Enfant', 'Accessoires', 'Coffret bio'],
        Coffret: ['Coffret parfum', 'Coffret maquillage', 'Coffret soin', 'Coffret cheveux', 'Coffret homme', 'Coffret enfant', 'Coffret accessoires', 'Coffret hygiène', 'Coffret minceur', 'Coffret santé', 'Coffret bio'],
        Cheveux: ['Shampoing', 'Après-shampoing', 'Masque', 'Soin sans rinçage', 'Coloration', 'Décoloration', 'Lissage', 'Boucles', 'Accessoires', 'Coffret cheveux'],
        Accessoires: ['Pinceaux', 'Éponges', 'Ciseaux', 'Pince à épiler', 'Recourbe-cils', 'Taille-crayon', 'Trousses', 'Vernis à ongles', 'Dissolvant', 'Coffret accessoires'],
        Homme: ['Parfums', 'Soin', 'Rasage', 'Coffret homme'],
        Enfant: ['Parfums', 'Soin', 'Coffret enfant'],

    },
    Maison: {
        Deco: ['Décoration murale', 'Objet de décoration à poseradres', 'Rangement déco', 'Luminaires et parfums d’ambiance'],
        Textiles: ['Linge de lit', 'Linge de table', 'Coussin et Rideau', 'Linge de salle de bain'],
        Meubles: ['Salon', 'Cuisine et salle à manger', 'Chambre', 'Salle de bain, WC', 'Jardin, balcon, terrasse' ]
    },
}


export default categoryList;