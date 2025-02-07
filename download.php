<?php
// --- IP Logging Section ---
// Retrieve the visitor's IP address.
$visitor_ip = $_SERVER['REMOTE_ADDR'];

// Prepare a log entry with a timestamp.
$log_entry = date('Y-m-d H:i:s') . " - IP: " . $visitor_ip . PHP_EOL;

// Append the log entry to a file named 'ip_log.txt'.
// Make sure this file is writable by the web server.
file_put_contents('ip_log.txt', $log_entry, FILE_APPEND);

// --- File Download Section ---
// Path to your resume file. Ensure that 'resume.pdf' is in the same directory.
$resume_file = 'resume.pdf';

// Check if the resume file exists.
if (file_exists($resume_file)) {
    // Set headers to force the file download.
    header('Content-Description: File Transfer');
    header('Content-Type: application/pdf');
    header('Content-Disposition: attachment; filename="' . basename($resume_file) . '"');
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: ' . filesize($resume_file));
    
    // Flush system output buffer and read the file.
    flush();
    readfile($resume_file);
    exit;
} else {
    echo "Sorry, the resume file is not available.";
}
?>
