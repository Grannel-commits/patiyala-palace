<?php
require_once __DIR__ . '/db.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed.']);
    exit();
}

$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    $input = $_POST;
}

$email = isset($input['email']) ? trim(substr($input['email'], 0, 150)) : '';

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'A valid email address is required.']);
    exit();
}

try {
    $pdo = getDbConnection();
    $ip = $_SERVER['REMOTE_ADDR'] ?? null;

    $stmt = $pdo->prepare("INSERT INTO `royal_circle_members` (`email`, `status`, `ip_address`) VALUES (:email, 'active', :ip) ON DUPLICATE KEY UPDATE `status` = 'active'");
    $stmt->execute([
        ':email' => $email,
        ':ip'    => $ip
    ]);

    echo json_encode([
        'success' => true,
        'message' => 'Welcome to The Royal Circle. Your membership has been registered.'
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Failed to register membership.']);
}
