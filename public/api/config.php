<?php
/**
 * Patiyala Palace - Database Configuration
 * Update these details with your Hostinger MySQL database credentials
 * Created in Hostinger hPanel -> Databases -> MySQL Databases
 */

return [
    'host'     => getenv('DB_HOST') ?: 'localhost',
    'dbname'   => getenv('DB_NAME') ?: 'u123456789_patiala',
    'username' => getenv('DB_USER') ?: 'u123456789_patiala_user',
    'password' => getenv('DB_PASS') ?: 'YourStrongPassword123!',
    'charset'  => 'utf8mb4'
];
