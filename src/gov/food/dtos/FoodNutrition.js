
class FoodNutrition {

  nutritionComponents = [];

  constructor({
    num,
    foodCode,
    foodNameKr,
    dbGroupCode,
    dbGroupName,
    foodOriginCode,
    foodOriginName,
    foodCategory1Code,
    foodCategory1Name,
    foodRepresentCode,
    foodRepresentName,
    foodCategory2Code,
    foodCategory2Name,
    foodCategory3Code,
    foodCategory3Name,
    foodCategory4Code,
    foodCategory4Name,
    servingSize,
    subReferenceCode,
    subReferenceName,
    nutritionalAmountPerServing,
    foodWeight,
    itemReportNum,
    makerName,
    importManufacturerName,
    sellerManufacturerName,
    importYesOrNo,
    nationCode,
    nationName,
    creationMethodCode,
    creationMethodName,
    researchDate,
    updateDate,
    nutritionComponents,
  }) {
    /** @property {string} num - 음식 일련번호 NUM */
    this.num = num;
    /** @property {string} foodCode - 식품코드 FOOD_CD */
    this.foodCode = foodCode;
    /** @property {string} foodNameKr - 식품명 FOOD_NM_KR */
    this.foodNameKr = foodNameKr;
    /** @property {string} dbGroupCode - 데이터구분코드 DB_GRP_CM */
    this.dbGroupCode = dbGroupCode;
    /** @property {string} dbGroupName - 데이터구분명 DB_GRP_NM */
    this.dbGroupName = dbGroupName;
    /** @property {string} foodOriginCode - 식품기원코드 FOOD_OR_CD */
    this.foodOriginCode = foodOriginCode;
    /** @property {string} foodOriginName - 식품기원명 FOOD_OR_NM */
    this.foodOriginName = foodOriginName;
    /** @property {string} foodCategory1Code - 식품대분류코드 FOOD_CAT1_CD */
    this.foodCategory1Code = foodCategory1Code;
    /** @property {string} foodCategory1Name - 식품대분류명 FOOD_CAT1_NM */
    this.foodCategory1Name = foodCategory1Name;
    /** @property {string} foodRepresentCode - 대표식품코드 FOOD_REF_CD */
    this.foodRepresentCode = foodRepresentCode;
    /** @property {string} foodRepresentName - 대표식품명 FOOD_REF_NM */
    this.foodRepresentName = foodRepresentName;
    /** @property {string} foodCategory2Code - 식품중분류코드 FOOD_CAT2_CD */
    this.foodCategory2Code = foodCategory2Code;
    /** @property {string} foodCategory2Name - 식품중분류명 FOOD_CAT2_NM */
    this.foodCategory2Name = foodCategory2Name;
    /** @property {string} foodCategory3Code - 식품소분류코드 FOOD_CAT3_CD */
    this.foodCategory3Code = foodCategory3Code;
    /** @property {string} foodCategory3Name - 식품소분류명 FOOD_CAT3_NM */
    this.foodCategory3Name = foodCategory3Name;
    /** @property {string} foodCategory4Code - 식품세분류코드 FOOD_CAT4_CD */
    this.foodCategory4Code = foodCategory4Code;
    /** @property {string} foodCategory4Name - 식품세분류명 FOOD_CAT4_NM */
    this.foodCategory4Name = foodCategory4Name;
    /** @property {string} servingSize - 영양성분함량기준량 SERVING_SIZE */
    this.servingSize = servingSize;

    /** @property {string} subReferenceCode - 출처코드 SUB_REF_CM */
    this.subReferenceCode = subReferenceCode;
    /** @property {string} subReferenceName - 출처명 SUB_REF_NAME */
    this.subReferenceName = subReferenceName;

    /** @property {string} nutritionalAmountPerServing - 1회 섭취참고량 NUTRI_AMOUNT_SERVING */
    this.nutritionalAmountPerServing = nutritionalAmountPerServing;
    /** @property {string} foodWeight - 식품중량 Z10500 */
    this.foodWeight = foodWeight;
    /** @property {string} itemReportNum - 품목제조보고번호 ITEM_REPORT_NO */
    this.itemReportNum = itemReportNum;
    /** @property {string} makerName - 업체명 MAKER_NM */
    this.makerName = makerName;
    /** @property {string} importManufacturerName - 수입업체명 IMP_MANUFAC_NM */
    this.importManufacturerName = importManufacturerName;
    /** @property {string} sellerManufacturerName - 유통업체명 SELLER_MANUFAC_NM */
    this.sellerManufacturerName = sellerManufacturerName;
    /** @property {string} importYesOrNo - 수입여부 IMP_YN */
    this.importYesOrNo = importYesOrNo;
    /** @property {string} nationCode - 원산지국코드 NATION_CM */
    this.nationCode = nationCode;
    /** @property {string} nationName - 원산지국명 NATION_NM */
    this.nationName = nationName;
    /** @property {string} creationMethodCode - 데이터생성방법코드 CRT_MTH_CD */
    this.creationMethodCode = creationMethodCode;
    /** @property {string} creationMethodName - 데이터생성방법명 CRT_MTH_NM */
    this.creationMethodName = creationMethodName;
    /** @property {string} researchDate - 데이터생성일자 RESEARCH_YMD */
    this.researchDate = researchDate;
    /** @property {string} updateDate - 데이터기준일자 UPDATE_YMD */
    this.updateDate = updateDate;

    /** @property {array} nutritionComponents - 영양소 성분 리스트 */
    this.nutritionComponents = nutritionComponents;
  }

}

module.exports = FoodNutrition;
