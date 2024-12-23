<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Charger l'autoloader de Composer
require 'vendor/autoload.php';

// Création d'une instance de PHPMailer
$mail = new PHPMailer(true);

try {
    // Paramètres du serveur
    $mail->SMTPDebug = SMTP::DEBUG_OFF; // Désactiver ou utiliser SMTP::DEBUG_SERVER pour des tests
    $mail->isSMTP();
    $mail->Host       = 'anatide.ulrichanani.com'; // Serveur SMTP
    $mail->SMTPAuth   = true;                     // Activer l'authentification SMTP
    $mail->Username   = 'anatidejlanani@anatide.ulrichanani.com'; // Nom d'utilisateur
    $mail->Password   = 'KI7C79h1FWTG';     // Remplacez par le mot de passe de votre compte
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // SSL/TLS
    $mail->Port       = 465;                      // Port SMTP pour SSL

    // Destinataires
    $mail->setFrom('anatidejlanani@anatide.ulrichanani.com', 'Mailer'); // Adresse de l'expéditeur
    $mail->addAddress('anatidejlanani@gmail.com', 'User'); // Ajouter un destinataire
    $mail->addReplyTo('anatidejlanani@gmail.com', 'Information'); // Optionnel : adresse de réponse

    // Contenu
    $mail->isHTML(true);                          // Format email HTML
    $mail->Subject = 'Secure Email Test';
    $mail->Body    = 'This is the <b>HTML</b> message body.';
    $mail->AltBody = 'This is the plain text message body for non-HTML mail clients.';

    // Envoi de l'email
    $mail->send();
    echo 'Message has been sent successfully!';
} catch (Exception $e) {
    // Gestion des erreurs
    error_log("Mailer Error: {$mail->ErrorInfo}"); // Journaliser les erreurs
    echo 'Message could not be sent. Please try again later.';
}
