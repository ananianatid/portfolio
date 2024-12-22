<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Vérification des champs requis
    if (!empty($name) && !empty($email) && !empty($message)) {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Préparer l'email
            $to = "ananijoellanatide@gmail.com"; // Remplacez par votre adresse email
            $subject = "Nouveau message de $name via le formulaire de contact";
            $emailBody = "
                Vous avez reçu un nouveau message via le formulaire de contact :
                
                Nom : $name
                Email : $email
                
                Message :
                $message
            ";

            $headers = "From: $email\r\n";
            $headers .= "Reply-To: $email\r\n";
            $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

            // Envoyer l'email
            if (mail($to, $subject, $emailBody, $headers)) {
                // Redirection après succès
                header("Location: index.html?status=success");
                exit();
            } else {
                // Redirection en cas d'échec
                header("Location: index.html?status=error");
                exit();
            }
        } else {
            // Redirection en cas d'email invalide
            header("Location: index.html?status=invalid_email");
            exit();
        }
    } else {
        // Redirection si des champs sont manquants
        header("Location: index.html?status=missing_fields");
        exit();
    }
}
?>
