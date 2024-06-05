
const { extractItemArrayOrDefualtEmptyArrayFromBody, extractPagingInfoOrDefaultEmptyObjectFromBody } = require('../common/utils');
const api = require('./api');
const mapper = require('./mapper');
const SearchFoodNutritionRequest = require('./dtos/SearchFoodNutritionRequest');
const SeachFoodNutritionResponse = require('./dtos/SeachFoodNutritionResponse');
const AmtNumDataType = require('./types/AmtNumDataType');

/**
 * `식품의약품안전처_식품영양성분DB정보` 음식 정보 검색 
 * @param {SearchFoodNutritionRequest} searchFoodNutritionRequest 요청 인자
 * @returns {SeachFoodNutritionResponse} 검색 결과
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

function getNutritionComponentTypes() {
  return mapper.toAmtCodeTypeResponse(AmtNumDataType);
}

module.exports = {
  searchFoodNutritionInfo,
  getNutritionComponentTypes,
}
