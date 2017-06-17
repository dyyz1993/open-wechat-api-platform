/**
 * @Author: yingzhou xu
 * @Date:   2017-06-15T13:32:40+08:00
 * @Email:  dyyz1993@qq.com
 * @Filename: util.js
 * @Last modified by:   yingzhou xu
 * @Last modified time: 2017-06-17T12:29:48+08:00
 */



'use strict';

/*!
 * 对返回结果的一层封装，如果遇见微信返回的错误，将返回一个错误
 * 参见：http://mp.weixin.qq.com/wiki/17/fa4e1434e57290788bde25603fa2fcbd.html
 */
exports.wrapper = function(callback) {
    return function(err, data, res) {
        callback = callback || function() {};
        if (err) {
            err.name = 'WeChatAPI' + err.name;
            return callback(err, data, res);
        }
        if (data && data.errcode) {
            err = new Error(data.errmsg);
            err.name = 'WeChatAPIError';
            err.code = data.errcode;
            return callback(err, data, res);
        }
        if (data == null) {
            err = new Error("No data received.");
            err.name = 'WeChatAPIError';
            err.code = -1;
            return callback(err, data, res);
        }
        callback(null, data, res);
    };
};

/*!
 * 对提交参数一层封装，当POST JSON，并且结果也为JSON时使用
 */
exports.postJSON = function(data) {
    return {
        dataType: 'json',
        type: 'POST',
        data: data,
        headers: {
            'Content-Type': 'application/json'
        }
    };
};

exports.make = function(host, name, fn) {
    host[name] = function() {
        this.preRequest(this['_' + name], arguments);
    };
    host['_' + name] = fn;
};

var request = require('request');
exports.post = function(url, postData) {
    return new Promise((resolve, reject) => {
        request({
            method: 'POST',
            url: url,
            json: postData,
        }, (err, res, body) => {
            if (err) {
                reject(err);
            }
            resolve(body || {});
        });
    });
}
exports.get = function(url) {
    return new Promise((resolve, reject) => {
        request({
            method: 'GET',
            url: url,
        }, (err, res, body) => {
            if (err) {
                 reject(err);
            }
             resolve(body || {});
        });
    });
}

exports.strToJson = function (value) {
    if (typeof value === 'string') {
        value = JSON.parse(value);
    }
    return value
}
