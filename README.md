Wechat API
===========
微信公共平台API。
## 为WechatAPI做出一点点改变，将其修改成支持第三方平台开发的库
-不同点：WechaApi的初始化有点不同，具体调用如下
```js
  function updateTokenCall(token) {
    console.log("updateToken", token)
    open.updateAuthAccessToken(appid, token);
  }
  const option = {
        refreshUrl:'refreshUrl', 
        getTokenUrl:'getTokenUrl',
        appid:'appid'
  }
  /**
  * refreshUrl跟getTokenUrl都必须返回JSON数据:
  * {authorizer_access_token,expires_in}
  **/
  api = new WechatAPI(option, [updateTokenCall],[saveToken],[getToken]);
```

-最后感谢一下wechat.js的作者,[传送门](https://github.com/node-webot/wechat-api)
## 模块状态
- [![NPM version](https://badge.fury.io/js/wechat-api.png)](http://badge.fury.io/js/wechat)
- [![Build Status](https://travis-ci.org/node-webot/wechat-api.png?branch=master)](https://travis-ci.org/node-webot/wechat-api)
- [![Dependencies Status](https://david-dm.org/node-webot/wechat-api.png)](https://david-dm.org/node-webot/wechat-api)
- [![Coverage Status](https://coveralls.io/repos/node-webot/wechat-api/badge.png)](https://coveralls.io/r/node-webot/wechat-api)

## 功能列表
- 发送客服消息（文本、图片、语音、视频、音乐、图文）
- 菜单操作（查询、创建、删除）
- 二维码（创建临时、永久二维码，查看二维码URL）
- 分组操作（查询、创建、修改、移动用户到分组）
- 用户信息（查询用户基本信息、获取关注者列表）
- 媒体文件（上传、获取）
- 群发消息（文本、图片、语音、视频、图文）
- 客服记录（查询客服记录，查看客服、查看在线客服）
- 群发消息
- 公众号支付（发货通知、订单查询）
- 微信小店（商品管理、库存管理、邮费模板管理、分组管理、货架管理、订单管理、功能接口）
- 模版消息
- 网址缩短
- 语义查询
- 数据分析
- JSSDK服务端支持
- 素材管理
- 摇一摇周边

详细参见[API文档](http://doxmate.cool/node-webot/wechat-api/api.html)


## Installation

```sh
$ npm install wechat-api-platform
```

## License
The MIT license.


## 感谢
感谢以下贡献者：

```

 project  : wechat-api
 repo age : 1 year, 9 months
 active   : 97 days
 commits  : 211
 files    : 72
 authors  :
   136  Jackson Tian       64.5%
    10  tedyyu             4.7%
     9  greenkeeperio-bot  4.3%
     7  Limjoe             3.3%
     6  Guan Bo            2.8%
     5  SunLn              2.4%
     4  shuhankuang        1.9%
     4  Lou                 Lin   1.9%
     3  minxianlong        1.4%
     2  Colt Xie           0.9%
     2  xuming314          0.9%
     1  brucewar           0.5%
     1  dan                0.5%
     1  ifeiteng           0.5%
     1  kai_hao            0.5%
     1  liuxiaodong        0.5%
     1  looping            0.5%
     1  simonyan           0.5%
     1  wuxq               0.5%
     1  wxhuang            0.5%
     1  xumian.wei         0.5%
     1  yelo               0.5%
     1  BeeSui             0.5%
     1  yuyuan             0.5%
     1  Eric               0.5%
     1  Ezios              0.5%
     1  JaydanHuang        0.5%
     1  Lin@Cloud+         0.5%
     1  Monson Shao        0.5%
     1  Qun Lin            0.5%
     1  Silver Lao         0.5%
     1  Table              0.5%
     1  Wang Yitong        0.5%
     1  Will               0.5%

```

