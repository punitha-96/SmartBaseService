// Create generateMigrations.js in the project directory
import dotenv from 'dotenv';
dotenv.config();
const config = require('./config/config.js');
// ... rest of your application code

const fs = require('fs');
const path = require('path');

const migrationsFolder = path.join(__dirname, 'migrations');

if (!fs.existsSync(migrationsFolder)) {
  fs.mkdirSync(migrationsFolder);
}

function generateMigrationFile() {
  const timestamp = new Date().toISOString().replace(/\D/g, '').slice(0, -1);
  const fileName = `${timestamp}-migration.js`;
  const filePath = path.join(migrationsFolder, fileName);

  const template = `
    'use strict';

    module.exports = {
      up: async (queryInterface, Sequelize) => {
        // Migration logic goes here
      },

      down: async (queryInterface, Sequelize) => {
        // Revert logic goes here
      }
    };
  `;

  fs.writeFileSync(filePath, template);
  console.log(`Generated migration file: ${fileName}`);
}

const numberOfMigrations = process.argv[2] || 10; // Default to 10 migrations if no argument is provided
for (let i = 0; i < numberOfMigrations; i++) {
  generateMigrationFile();
}
