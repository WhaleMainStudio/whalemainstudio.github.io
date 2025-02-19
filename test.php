<?php
// Connexion à la base de données
$host = 'localhost';
$dbname = 'leaderboard';
$username = 'root';
$password = '';
$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

// Récupérer les données JSON de la requête POST
$data = json_decode(file_get_contents('php://input'), true);

// Vérifier les données reçues
if (isset($data['score']) && isset($data['player_name'])) {
    $score = $data['score'];
    $player_name = $data['player_name'];

    // Insérer dans la base de données
    $query = "INSERT INTO scores (player_name, score) VALUES (:player_name, :score)";
    $stmt = $conn->prepare($query);
    $stmt->bindParam(':player_name', $player_name);
    $stmt->bindParam(':score', $score);
    $stmt->execute();

    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error", "message" => "Invalid data"]);
}
?>
