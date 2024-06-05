
class AmtCodeTypeItem {
  code;
  label;
  name;
  unit;

  constructor({
    code,
    label,
    name,
    unit,
  }) {
    this.code = code;
    this.label = label;
    this.name = name;
    this.unit = unit;
  }
}

class AmtCodeTypeResponse {
  static AmtCodeTypeItem = AmtCodeTypeItem;

  /** @property {Array} items - AmtCodeTypeItem 리스트 */
  items;

  constructor(amtCodeTypes) {
    this.items = amtCodeTypes;
  }

  set items(values) {
    if (!Array.isArray(values) || !values.every(each => each instanceof AmtCodeTypeItem)) {
      throw new Error('items 형식에 맞지 않습니다.');
    }
    this.items = values;
  }
}

module.exports = AmtCodeTypeResponse;
