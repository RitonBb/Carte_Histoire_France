#!/usr/bin/env node

/**
 * Verification Script for Event Icon Positioning Fix
 * 
 * This script verifies that the fix for the icon positioning bug is correctly applied.
 * It checks that:
 * 1. iconSize matches the CSS definition (36x36)
 * 2. iconAnchor is properly set to center the icon (18, 18)
 */

const fs = require('fs');
const path = require('path');

// ANSI color codes for output
const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    bold: '\x1b[1m'
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

function logSuccess(message) {
    log(`✓ ${message}`, 'green');
}

function logError(message) {
    log(`✗ ${message}`, 'red');
}

function logInfo(message) {
    log(`ℹ ${message}`, 'blue');
}

function logWarning(message) {
    log(`⚠ ${message}`, 'yellow');
}

// Read and verify app.js
function verifyAppJS() {
    log('\n' + '='.repeat(60), 'bold');
    log('VERIFICATION: Event Icon Positioning Fix', 'bold');
    log('='.repeat(60), 'bold');
    log('');

    const appJsPath = path.join(__dirname, 'app.js');
    
    try {
        const content = fs.readFileSync(appJsPath, 'utf8');
        
        // Check for iconSize
        const iconSizeRegex = /iconSize:\s*\[(\d+),\s*(\d+)\]/;
        const iconSizeMatch = content.match(iconSizeRegex);
        
        // Check for iconAnchor
        const iconAnchorRegex = /iconAnchor:\s*\[(\d+),\s*(\d+)\]/;
        const iconAnchorMatch = content.match(iconAnchorRegex);
        
        let allTestsPassed = true;
        
        // Test 1: iconSize should be [36, 36]
        logInfo('Test 1: Checking iconSize...');
        if (iconSizeMatch) {
            const width = parseInt(iconSizeMatch[1]);
            const height = parseInt(iconSizeMatch[2]);
            
            if (width === 36 && height === 36) {
                logSuccess(`iconSize is correctly set to [36, 36]`);
            } else {
                logError(`iconSize is [${width}, ${height}] but should be [36, 36]`);
                allTestsPassed = false;
            }
        } else {
            logError('iconSize property not found in app.js');
            allTestsPassed = false;
        }
        
        // Test 2: iconAnchor should be [18, 18]
        logInfo('\nTest 2: Checking iconAnchor...');
        if (iconAnchorMatch) {
            const x = parseInt(iconAnchorMatch[1]);
            const y = parseInt(iconAnchorMatch[2]);
            
            if (x === 18 && y === 18) {
                logSuccess(`iconAnchor is correctly set to [18, 18]`);
            } else {
                logError(`iconAnchor is [${x}, ${y}] but should be [18, 18]`);
                allTestsPassed = false;
            }
        } else {
            logError('iconAnchor property not found in app.js');
            logWarning('Without iconAnchor, the icon will default to [0, 0] anchor point');
            allTestsPassed = false;
        }
        
        // Test 3: iconAnchor should be half of iconSize (for centering)
        logInfo('\nTest 3: Verifying icon is centered...');
        if (iconSizeMatch && iconAnchorMatch) {
            const width = parseInt(iconSizeMatch[1]);
            const height = parseInt(iconSizeMatch[2]);
            const anchorX = parseInt(iconAnchorMatch[1]);
            const anchorY = parseInt(iconAnchorMatch[2]);
            
            if (anchorX === width / 2 && anchorY === height / 2) {
                logSuccess(`Icon is properly centered (anchor is at icon center)`);
                logInfo(`  → iconSize: [${width}, ${height}]`);
                logInfo(`  → iconAnchor: [${anchorX}, ${anchorY}] = [width/2, height/2]`);
            } else {
                logError(`Icon is not centered`);
                logWarning(`  Expected anchor: [${width/2}, ${height/2}]`);
                logWarning(`  Actual anchor: [${anchorX}, ${anchorY}]`);
                allTestsPassed = false;
            }
        }
        
        // Verify styles.css for consistency
        logInfo('\nTest 4: Checking CSS consistency...');
        const cssPath = path.join(__dirname, 'styles.css');
        const cssContent = fs.readFileSync(cssPath, 'utf8');
        
        const cssWidthMatch = cssContent.match(/\.custom-marker\s*{[^}]*width:\s*(\d+)px/s);
        const cssHeightMatch = cssContent.match(/\.custom-marker\s*{[^}]*height:\s*(\d+)px/s);
        
        if (cssWidthMatch && cssHeightMatch) {
            const cssWidth = parseInt(cssWidthMatch[1]);
            const cssHeight = parseInt(cssHeightMatch[1]);
            
            if (iconSizeMatch) {
                const jsWidth = parseInt(iconSizeMatch[1]);
                const jsHeight = parseInt(iconSizeMatch[2]);
                
                if (cssWidth === jsWidth && cssHeight === jsHeight) {
                    logSuccess(`CSS and JavaScript icon sizes match (${cssWidth}x${cssHeight})`);
                } else {
                    logError(`CSS size (${cssWidth}x${cssHeight}) doesn't match JS size (${jsWidth}x${jsHeight})`);
                    allTestsPassed = false;
                }
            }
        } else {
            logWarning('Could not verify CSS consistency');
        }
        
        // Final result
        log('\n' + '='.repeat(60), 'bold');
        if (allTestsPassed) {
            logSuccess('ALL TESTS PASSED ✓');
            log('');
            logInfo('The fix has been correctly applied:');
            logInfo('  • Icon size matches CSS (36x36)');
            logInfo('  • Icon anchor is properly set (18, 18)');
            logInfo('  • Icon is centered on geographical coordinates');
            log('');
            logSuccess('Event icons should now stay at their correct positions when zooming!');
        } else {
            logError('SOME TESTS FAILED ✗');
            log('');
            logWarning('The fix may not be complete. Please review the errors above.');
        }
        log('='.repeat(60), 'bold');
        log('');
        
        process.exit(allTestsPassed ? 0 : 1);
        
    } catch (error) {
        logError(`Error reading files: ${error.message}`);
        process.exit(1);
    }
}

// Run verification
verifyAppJS();
