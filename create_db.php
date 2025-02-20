<?php
// Paramètres de connexion à la base de données
$host = 'localhost'; // 'localhost' est souvent le bon choix sur les hébergements partagés
$username = 'ton_utilisateur';  // Ton utilisateur MySQL, tu l'as fourni lors de la création du compte sur LWS
$password = 'ton_mot_de_passe';  // Le mot de passe de ton utilisateur MySQL

try {
    // Création de la connexion
    $conn = new PDO("mysql:host=$host", $username, $password);
    // On définit le mode de gestion des erreurs
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Créer la base de données
    $conn->exec("CREATE DATABASE IF NOT EXISTS leaderboard");
    echo "Base de données créée avec succès.\n";

    // Sélectionner la base de données
    $conn->exec("USE leaderboard");

    // Créer la table
    $sql = "
    CREATE TABLE IF NOT EXISTS scores (
        id INT AUTO_INCREMENT PRIMARY KEY,
        player_name VARCHAR(255) NOT NULL,
        score INT NOT NULL,
        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )";
    
    $conn->exec($sql);
    echo "Table 'scores' créée avec succès.\n";
    
} catch (PDOException $e) {
    echo "Erreur : " . $e->getMessage();
}
?>
