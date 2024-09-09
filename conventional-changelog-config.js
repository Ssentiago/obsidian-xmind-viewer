module.exports = {
    preset: 'conventionalcommits',
    releaseCount: 1,
    outputUnreleased: true,
    skipUnconventional: false,
    types: [
        { type: 'feat', section: 'Features' },
        { type: 'fix', section: 'Bug Fixes' },
        { type: 'docs', section: 'Documentation' },
        { type: 'style', section: 'Styling' },
        { type: 'refactor', section: 'Refactoring' },
        { type: 'perf', section: 'Performance Improvements' },
        { type: 'test', section: 'Tests' },
        { type: 'build', section: 'Build System' },
        { type: 'ci', section: 'Continuous Integration' },
        { type: 'chore', section: 'Chores' },
        { type: 'revert', section: 'Reverts' },
    ],
    appendUnconventionalCommits: true,
    writerOpts: {
        commitPartial: `* {{#if scope}}**{{scope}}:** {{/if}}{{header}} {{#if body}}- {{body}}{{/if}}`,
    },
};
