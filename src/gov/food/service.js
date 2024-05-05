
const { extractItemArrayOrDefualtEmptyArrayFromBody, extractPagingInfoOrDefaultEmptyObjectFromBody } = require('../common/utils');
const api = require('./api');
const mapper = require('./mapper');
const SearchFoodNutritionRequest = require('./dtos/SearchFoodNutritionRequest');
const SeachFoodNutritionResponse = require('./dtos/SeachFoodNutritionResponse');

/**
 * 음식 정보 검색 
 * @param {SearchFoodNutritionRequest} searchFoodNutritionRequest 
 * @returns {SeachFoodNutritionResponse} 
 */
async function searchFoodNutritionInfo(searchFoodNutritionRequest) {
  if (!searchFoodNutritionRequest instanceof SearchFoodNutritionRequest) {
    throw new Error('요청인자 형식에 맞지 않음');
  } console.log(searchFoodNutritionRequest);

  const body = await api.getFoodNutritionComponentDatabaseInquery(
    searchFoodNutritionRequest.foodNameKr,
    searchFoodNutritionRequest.researchYearMonthDate,
    searchFoodNutritionRequest.makerName,
  );

  const foodNutritions = extractItemArrayOrDefualtEmptyArrayFromBody(body)
    .map(each => mapper.toFoodNutrition(each));

  const paging = extractPagingInfoOrDefaultEmptyObjectFromBody(body);

  return new SeachFoodNutritionResponse({
    data: foodNutritions,
    paging,
  });
}

module.exports = {
  searchFoodNutritionInfo,
}

// FIXME 아래 임시 테스트
// const main = async () => {
//   const request = new SearchFoodNutritionRequest({
//     foodNameKr: '오므라이스',
//   });
//   const seachFoodNutritionResponse = await searchFoodNutritionInfo(request);
//   console.log('seachFoodNutritionResponse', seachFoodNutritionResponse.data[0]);
// }

// main().catch(console.error);
