const Axios = require('axios');

const config = require('../../config/index');
const { extractBodyFromResponse } = require('../common/utils');

const DataType = {
  XML: 'xml',
  JSON: 'json',
}

const API_URL = 'http://apis.data.go.kr/1471000/FoodNtrCpntDbInfo';

const axios = Axios.create({
  baseURL: API_URL,
  params: {
    serviceKey: config.govApi.key,
    type: DataType.JSON,
  }
});

// 영양 성분 조회
async function getFoodNutritionComponentDatabaseInquery(
  foodNameKr, 
  researchYearMonthDate, 
  makerName,
  pageNo = 1, 
  numOfRows = 10,
) {
  const res = await axios.get('/getFoodNtrCpntDbInq', {
    params: {
      FOOD_NM_KR: foodNameKr,
      RESEARCH_YMD: researchYearMonthDate,
      MAKER_NM: makerName,
      pageNo,
      numOfRows,
    }
  }); // 응답 형태 주소: https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15127578#/API%20%EB%AA%A9%EB%A1%9D/getFoodNtrCpntDbInq
  return extractBodyFromResponse(res);
};

module.exports = {
  getFoodNutritionComponentDatabaseInquery,
};
