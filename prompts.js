module.exports = [
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
  ];
  