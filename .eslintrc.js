module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: [
        'alloy',
        'alloy/react',
        'alloy/typescript'
    ],
    globals: {
        __WORKER__: 'readonly'
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            strict: true,
        },
        ecmaVersion: 2016,
        sourceType: 'module',
    },
    plugins: [
    ],
    rules: {
        // 采用 4 空格的缩进
        indent: [1, 4],
        '@typescript-eslint/indent': [1, 4],
    },
};
