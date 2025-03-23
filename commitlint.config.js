module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [
        2,
        'always',
        [
          'feat',      // New features
          'fix',       // Bug fixes
          'docs',      // Documentation changes
          'style',     // Code style (formatting, missing semi-colons, etc.)
          'refactor',  // Refactoring code
          'perf',      // Performance improvements
          'test',      // Adding or updating tests
          'build',     // Changes affecting build system or dependencies
          'ci',        // Changes to CI configuration
          'chore',     // Other changes that don’t modify src or test files
          'revert'     // Reverts a previous commit
        ]
      ],
      'subject-case': [0, 'never'], // Allow lowercase or mixed case subject line
      'header-max-length': [2, 'always', 100] // Enforce a max length for commit header
    }
  };
