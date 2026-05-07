const fs = require('fs');
const path = require('path');

const srcHero = "C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\7ab7bce4-7267-41a1-853b-e3513a868b87\\hero_archive_system_1778124668186.png";
const srcAbout = "C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\7ab7bce4-7267-41a1-853b-e3513a868b87\\about_education_office_1778124705244.png";
const destHero = path.join(__dirname, 'public', 'hero.png');
const destAbout = path.join(__dirname, 'public', 'about.png');

try {
    fs.copyFileSync(srcHero, destHero);
    console.log('Hero image copied successfully');
    fs.copyFileSync(srcAbout, destAbout);
    console.log('About image copied successfully');
} catch (err) {
    console.error('Error copying files:', err);
}
