const path = require('path');
var { Router } = require('express');
var router = Router();

const config = require('../config');
const logger = require('../lib/logger');

const {
  seoul : govBusApi
} = require('../gov/bus');
const axios = require('axios');


router.get('/', function (req, res, next) {
  logger.log('info', req, '연결 테스트 수행');
  res.json({ title: config.basic.name, ver: config.basic.version });
});

router.use('/api/rest', async (req, res, next) => {
  // 뒷주소 받기
  const {
    path,
    body,
    query,
    method,
    headers,
  } = req;
  console.log('path', path);
  console.log('body', body);
  console.log('method', method);
  console.log('query', query);
  console.log('headers', headers);

  query.serviceKey = config.govApi.key;

  try {
    const govRes = await axios.request({
      // baseURL: 'http://ws.bus.go.kr/api/rest/buspos',
      url: `http://ws.bus.go.kr/api/rest/buspos${path}`,
      method,
      params: query,
      headers: headers,
    });
  } catch (err) {
    next(err);
  }

  res.json({msg:'ok'});
});

router.use('/bus/seoul', async (req, res) =>  {
  const govRes = await govBusApi.getBusPosByRtidList({
    busRouteId: 124000038,
  });
  console.log('res', govRes);
  res.json({msg:'ok'});
});

module.exports = router;
