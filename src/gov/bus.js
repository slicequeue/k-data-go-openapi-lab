const Axios = require('axios');

const config = require('../config/index');

const seoulBusApiUrl = 'http://ws.bus.go.kr/api/rest/buspos';

const dataType = 'JSON'

const seoulBusPositionAxios = Axios.create({
  baseURL: seoulBusApiUrl,
  params: {
    serviceKey: config.govApi.key,
    resultType: dataType,
  }
});

const seoul = {

  /**
   * 
   * @param {*} param0 
   * @returns 
   */
  getBusPosByRouteStList: ({
    busRouteId,
    startOrd,
    endOrd,
  }) => {
    return seoulBusPositionAxios.get('/getBusPosByRouteStList', {
      params: {
        busRouteId,
        startOrd,
        endOrd,
      }
    });
  },

  /**
   * 노선ID로 차량들의 위치정보를 조회한다
   * @param {string} param.busRouteId 노선 ID
   * @returns 
   */
  getBusPosByRtidList: ({
    busRouteId,
  }) => {
    return seoulBusPositionAxios.get('/getBusPosByRtid', {
      params: {
        busRouteId,
      }
    });
  }
}

module.exports = {
  seoul,
}
