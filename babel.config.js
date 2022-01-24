const presets = [
    ['@babel/preset-env', { // какой пресет использовать
        targets: { // какие версии браузеров поддерживать
            edge: '17',
            ie: '11',
            firefox: '50',
            chrome: '64',
            safari: '11.1'
        },
        corejs: '^3.20.3',
        // использовать полифиллы для браузеров из свойства target
        // по умолчанию babel использует поллифиллы библиотеки core-js
        useBuiltIns: "entry",
        corejs: 3
    }]
];

module.exports = { presets }; 