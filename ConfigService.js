var config = {};

exports.getParam = function(k) {
    return config[k];
};

exports.setParam = function(k, v) {
    config[k] = v;
};
