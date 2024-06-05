

class NutritionComponent {

  /** @property {string} name - 영양소명 */
  name;
  /** @property {string} label - 화면표시용 레이블 */
  label;
  /** @property {float} value - 영양소명 */
  value;
  /** @property {string} unit - 영양소 단위 */
  unit;

  constructor({
    name,
    label,
    value,
    unit,
  }) {
    this.name = name;
    this.label = label;
    this.value = value;
    this.unit = unit;
  }
}

module.exports = NutritionComponent;
