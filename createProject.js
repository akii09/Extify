const inquirer = require('inquirer'); // Consider using npm init prompts instead
const fs = require('fs-extra');
const path = require('path');

const templatesDir = path.join(__dirname, 'templates');

async function createProject(answers) {
  // If using prompts.js, remove the following lines and access prompts from answers
  const { projectName, framework } = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'Enter your project name:',
    },
    {
      type: 'list',
      name: 'framework',
      message: 'Select a framework:',
      choices: ['React', 'Vue', 'JavaScript (Vanilla)'],
    },
  ]);

  const frameworkToTemplateMap = {
    React: 'react',
    Vue: 'vue',
    'JavaScript (Vanilla)': 'javascript'
  };

  const templatePath = path.join(templatesDir, frameworkToTemplateMap[framework]);

  try {
    await fs.copy(templatePath, projectName);
    console.log(`Project '${projectName}' created successfully!`);
  } catch (error) {
    console.error('Error creating project:', error);
  }
}

module.exports = createProject
