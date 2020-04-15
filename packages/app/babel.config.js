module.exports = function(api) {
    api.cache(true);
    const presets = [
        [
            "@babel/preset-env",
            {
                debug: false,
                corejs: "3",
                useBuiltIns: "usage",
            },
        ],
        "@babel/preset-react",
    ];
    const plugins = [
        "react-hot-loader/babel",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-optional-chaining",
        "@babel/plugin-proposal-nullish-coalescing-operator",
    ];
    return {
        presets,
        plugins,
    };
};
