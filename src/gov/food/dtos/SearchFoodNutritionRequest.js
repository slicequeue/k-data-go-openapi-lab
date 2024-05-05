
class SearchFoodNutritionRequest {

  /** @property {string} foodNameKr - 식품명 */
  foodNameKr;
  /** @property {string} foodNameKr - 데이터생성일자 */
  researchYearMonthDate;
  /** @property {string} foodNameKr - 업체명 */
  makerName;

  constructor({
    foodNameKr,
    researchYearMonthDate,
    makerName,
  }) {
    this.foodNameKr = foodNameKr;
    this.researchYearMonthDate = researchYearMonthDate;
    this.makerName = makerName;
  }

  vaildate() {
    return (this.foodNameKr !== undefined && this.foodNameKr !== null);
  }
}

module.exports = SearchFoodNutritionRequest;
