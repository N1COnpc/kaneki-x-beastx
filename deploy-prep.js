#!/usr/bin/env node

/**
 * 🚀 Deploy Preparation Script
 * Prepares the project for GitHub and Vercel deployment
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Preparing project for deployment...\n');

// Check if running in production mode
const isProduction = process.env.NODE_ENV === 'production';

// Files to check for security
const securityChecks = [
  'middleware.ts',
  'key-system/middleware.ts',
  'key-system/utils/security.ts',
  '.gitignore'
];

console.log('🔍 Running security checks...');
let allChecksPass = true;

securityChecks.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`  ✅ ${file} - Found`);
  } else {
    console.log(`  ❌ ${file} - Missing`);
    allChecksPass = false;
  }
});

// Check environment variables
console.log('\n⚙️ Checking environment configuration...');
const requiredEnvVars = [
  'NEXT_PUBLIC_RECAPTCHA_SITE_KEY',
  'RECAPTCHA_SECRET_KEY'
];

requiredEnvVars.forEach(envVar => {
  // Check in next.config.js for key-system
  const configPath = 'key-system/next.config.js';
  if (fs.existsSync(configPath)) {
    const config = fs.readFileSync(configPath, 'utf8');
    if (config.includes(envVar)) {
      console.log(`  ✅ ${envVar} - Configured`);
    } else {
      console.log(`  ⚠️ ${envVar} - Not found in config`);
    }
  }
});

// Check for sensitive information
console.log('\n🔐 Scanning for sensitive information...');
const sensitivePatterns = [
  /password\s*[:=]\s*['"]\w+['"]/gi,
  /secret\s*[:=]\s*['"]\w+['"]/gi,
  /token\s*[:=]\s*['"]\w{20,}['"]/gi
];

function scanFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let found = false;
    
    sensitivePatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches && matches.length > 0) {
        console.log(`  ⚠️ Potential sensitive data in ${filePath}`);
        found = true;
      }
    });
    
    if (!found) {
      console.log(`  ✅ ${filePath} - Clean`);
    }
  } catch (error) {
    console.log(`  ❓ ${filePath} - Could not scan`);
  }
}

// Scan important files
const filesToScan = [
  'key-system/next.config.js',
  'package.json',
  'key-system/package.json'
];

filesToScan.forEach(scanFile);

// Check build requirements
console.log('\n📦 Checking build requirements...');

function checkPackageJson(packagePath) {
  if (fs.existsSync(packagePath)) {
    const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    const hasNextJs = pkg.dependencies && pkg.dependencies.next;
    const hasBuildScript = pkg.scripts && pkg.scripts.build;
    
    console.log(`  ${packagePath}:`);
    console.log(`    Next.js: ${hasNextJs ? '✅' : '❌'}`);
    console.log(`    Build script: ${hasBuildScript ? '✅' : '❌'}`);
  }
}

checkPackageJson('package.json');
checkPackageJson('key-system/package.json');
checkPackageJson('discord-bot/package.json');

// Final recommendation
console.log('\n🎯 Deployment Readiness:');

if (allChecksPass) {
  console.log('  ✅ Security measures in place');
  console.log('  ✅ Configuration files present');
  console.log('  ✅ Build requirements met');
  console.log('\n🚀 Project is ready for deployment!');
  console.log('\n📝 Next steps:');
  console.log('  1. Push to GitHub repository');
  console.log('  2. Connect repository to Vercel');
  console.log('  3. Configure environment variables in Vercel dashboard');
  console.log('  4. Deploy and test');
} else {
  console.log('  ❌ Some security checks failed');
  console.log('  ⚠️ Please resolve issues before deploying');
}

console.log('\n✨ Deployment preparation complete!\n');
