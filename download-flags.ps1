# Script to download round flag icons from GlobalArtInc/round-flags
# Repository: https://github.com/GlobalArtInc/round-flags

Write-Host "Starting download of round flag icons..." -ForegroundColor Green

# Create directory for flags
$flagsDir = "d:\NN8LIVESCORE\assets\round-flags"
if (-not (Test-Path $flagsDir)) {
    New-Item -ItemType Directory -Path $flagsDir -Force | Out-Null
    Write-Host "Created directory: $flagsDir" -ForegroundColor Yellow
}

# Base URL for raw GitHub content (trying different paths)
$baseUrls = @(
    "https://raw.githubusercontent.com/GlobalArtInc/round-flags/main/flags",
    "https://raw.githubusercontent.com/GlobalArtInc/round-flags/master/flags",
    "https://raw.githubusercontent.com/GlobalArtInc/round-flags/main",
    "https://raw.githubusercontent.com/GlobalArtInc/round-flags/master"
)

# List of country codes (ISO 3166-1 alpha-2) - most common ones
$countries = @(
    "ad", "ae", "af", "ag", "al", "am", "ao", "ar", "at", "au", "az",
    "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "bj", "bn", "bo", "br", "bs", "bt", "bw", "by", "bz",
    "ca", "cd", "cf", "cg", "ch", "ci", "cl", "cm", "cn", "co", "cr", "cu", "cv", "cy", "cz",
    "de", "dj", "dk", "dm", "do", "dz",
    "ec", "ee", "eg", "er", "es", "et",
    "fi", "fj", "fr",
    "ga", "gb", "gd", "ge", "gh", "gi", "gm", "gn", "gq", "gr", "gt", "gw", "gy",
    "hk", "hn", "hr", "ht", "hu",
    "id", "ie", "il", "in", "iq", "ir", "is", "it",
    "jm", "jo", "jp",
    "ke", "kg", "kh", "km", "kn", "kp", "kr", "kw", "kz",
    "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly",
    "ma", "mc", "md", "me", "mg", "mk", "ml", "mm", "mn", "mo", "mr", "mt", "mu", "mv", "mw", "mx", "my", "mz",
    "na", "ne", "ng", "ni", "nl", "no", "np", "nz",
    "om",
    "pa", "pe", "pg", "ph", "pk", "pl", "ps", "pt", "py",
    "qa",
    "ro", "rs", "ru", "rw",
    "sa", "sb", "sc", "sd", "se", "sg", "si", "sk", "sl", "sn", "so", "sr", "ss", "sv", "sy", "sz",
    "td", "tg", "th", "tj", "tl", "tm", "tn", "to", "tr", "tt", "tw", "tz",
    "ua", "ug", "us", "uy", "uz",
    "va", "vc", "ve", "vn",
    "ws",
    "ye",
    "za", "zm", "zw"
)

$successCount = 0
$failCount = 0
$workingUrl = $null

# Test which base URL works
Write-Host "Testing base URLs..." -ForegroundColor Yellow
foreach ($testUrl in $baseUrls) {
    try {
        $testFile = "$testUrl/us.svg"
        Invoke-WebRequest -Uri $testFile -Method Head -ErrorAction Stop | Out-Null
        $workingUrl = $testUrl
        Write-Host "Found working URL: $workingUrl" -ForegroundColor Green
        break
    }
    catch {
        continue
    }
}

if (-not $workingUrl) {
    Write-Host "Could not find working URL. Trying alternative repository..." -ForegroundColor Yellow
    # Try HatScripts/circle-flags as alternative
    $workingUrl = "https://raw.githubusercontent.com/HatScripts/circle-flags/gh-pages/flags"
    Write-Host "Using alternative: HatScripts/circle-flags" -ForegroundColor Cyan
}

foreach ($country in $countries) {
    $url = "$workingUrl/$country.svg"
    $outputPath = "$flagsDir\$country.svg"
    
    try {
        Write-Host "Downloading $country.svg..." -NoNewline
        Invoke-WebRequest -Uri $url -OutFile $outputPath -ErrorAction Stop
        Write-Host " OK" -ForegroundColor Green
        $successCount++
    }
    catch {
        Write-Host " FAILED" -ForegroundColor Red
        $failCount++
    }
    
    Start-Sleep -Milliseconds 50
}

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "Download Complete!" -ForegroundColor Green
Write-Host "Success: $successCount files" -ForegroundColor Green
Write-Host "Failed: $failCount files" -ForegroundColor Red
Write-Host "Location: $flagsDir" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
