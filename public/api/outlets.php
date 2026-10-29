<?php
require_once __DIR__ . '/db.php';

try {
    $pdo = getDbConnection();

    $zone = isset($_GET['zone']) ? trim($_GET['zone']) : '';
    $userLat = isset($_GET['lat']) ? floatval($_GET['lat']) : null;
    $userLng = isset($_GET['lng']) ? floatval($_GET['lng']) : null;

    $params = [];
    $where = [];

    if (!empty($zone) && $zone !== 'All') {
        $where[] = "`zone` = :zone";
        $params[':zone'] = $zone;
    }

    $whereSql = count($where) > 0 ? "WHERE " . implode(" AND ", $where) : "";

    // Proximity calculation using spherical law of cosines / Haversine (distance in kilometers)
    if ($userLat !== null && $userLng !== null) {
        $sql = "SELECT *, 
                (6371 * acos(
                    cos(radians(:userLat1)) * cos(radians(`lat`)) * cos(radians(`lng`) - radians(:userLng)) + 
                    sin(radians(:userLat2)) * sin(radians(`lat`))
                )) AS `distanceKm`
                FROM `outlets`
                {$whereSql}
                ORDER BY `distanceKm` ASC";

        $params[':userLat1'] = $userLat;
        $params[':userLat2'] = $userLat;
        $params[':userLng']  = $userLng;
    } else {
        $sql = "SELECT * FROM `outlets` {$whereSql} ORDER BY `name` ASC";
    }

    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    $rows = $stmt->fetchAll();

    // Decode keywords JSON array
    $results = array_map(function($row) {
        $kw = json_decode($row['keywords'], true);
        $row['keywords'] = is_array($kw) ? $kw : [];
        $row['lat'] = floatval($row['lat']);
        $row['lng'] = floatval($row['lng']);
        $row['in_stock'] = (bool)$row['in_stock'];
        if (isset($row['distanceKm'])) {
            $row['distanceKm'] = round(floatval($row['distanceKm']), 2);
        }
        return $row;
    }, $rows);

    echo json_encode([
        'success' => true,
        'count'   => count($results),
        'outlets' => $results
    ]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error'   => 'Failed to retrieve outlets.'
    ]);
}
