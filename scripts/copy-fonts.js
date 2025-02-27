#!/usr/bin/env node

/**
 * This script copies Geist font files from node_modules to the public directory
 * Run with: node scripts/copy-fonts.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FONT_WEIGHTS = ['Regular', 'Medium', 'Bold'];

// Ensure directories exist
const sansDir = path.join(__dirname, '../public/fonts/geist-sans');
const monoDir = path.join(__dirname, '../public/fonts/geist-mono');

fs.mkdirSync(sansDir, { recursive: true });
fs.mkdirSync(monoDir, { recursive: true });

// Copy Geist Sans fonts
FONT_WEIGHTS.forEach(weight => {
  const src = path.join(__dirname, `../node_modules/geist/dist/fonts/geist-sans/Geist-${weight}.woff2`);
  const dest = path.join(sansDir, `Geist-${weight}.woff2`);
  
  try {
    fs.copyFileSync(src, dest);
    console.log(`✅ Copied ${src} to ${dest}`);
  } catch (error) {
    console.error(`❌ Error copying ${src}: ${error.message}`);
  }
});

// Copy Geist Mono fonts
FONT_WEIGHTS.forEach(weight => {
  const src = path.join(__dirname, `../node_modules/geist/dist/fonts/geist-mono/GeistMono-${weight}.woff2`);
  const dest = path.join(monoDir, `GeistMono-${weight}.woff2`);
  
  try {
    fs.copyFileSync(src, dest);
    console.log(`✅ Copied ${src} to ${dest}`);
  } catch (error) {
    console.error(`❌ Error copying ${src}: ${error.message}`);
  }
});

console.log('✨ Font copying complete!');