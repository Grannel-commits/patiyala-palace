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

$location = isset($input['searched_location']) ? trim(substr($input['searched_location'], 0, 150)) : '';
$contact  = isset($input['contact_info']) ? trim(substr($input['contact_info'], 0, 120)) : '';

if (empty($location) || empty($contact)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Location and contact information are required.']);
    exit();
}

try {
    $pdo = getDbConnection();
    $ip = $_SERVER['REMOTE_ADDR'] ?? null;

    $stmt = $pdo->prepare("INSERT INTO `waitlist_notifications` (`searched_location`, `contact_info`, `ip_address`, `status`) VALUES (:location, :contact, :ip, 'pending')");
    $stmt->execute([
        ':location' => $location,
        ':contact'  => $contact,
        ':ip'       => $ip
    ]);

    echo json_encode([
        'success' => true,
        'message' => 'Thank you! You have been added to the royal priority waitlist.'
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Failed to save waitlist notification.']);
}
