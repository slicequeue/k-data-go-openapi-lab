
const 

AmtNumDataType = Object.freeze({
  AMT_NUM1: { label: '에너지(kcal)', unit: 'kcal', name: '에너지' },
  AMT_NUM2: { label: '수분(g)', unit: 'g', name: '수분' },
  AMT_NUM3: { label: '단백질(g)', unit: 'g', name: '단백질' },
  AMT_NUM4: { label: '지방(g)', unit: 'g', name: '지방' },
  AMT_NUM5: { label: '회분(g)', unit: 'g', name: '회분' },
  AMT_NUM6: { label: '탄수화물(g)', unit: 'g', name: '탄수화물' },
  AMT_NUM7: { label: '당류(g)', unit: 'g', name: '당류' },
  AMT_NUM8: { label: '식이섬유(g)', unit: 'g', name: '식이섬유' },
  AMT_NUM9: { label: '칼슘(mg)', unit: 'mg', name: '칼슘' },
  AMT_NUM10: { label: '철(mg)', unit: 'mg', name: '철' },
  AMT_NUM11: { label: '인(mg)', unit: 'mg', name: '인' },
  AMT_NUM12: { label: '칼륨(mg)', unit: 'mg', name: '칼륨' },
  AMT_NUM13: { label: '나트륨(mg)', unit: 'mg', name: '나트륨' },
  AMT_NUM14: { label: '비타민 A(μg RAE)', unit: 'μg RAE', name: '비타민 A' },
  AMT_NUM15: { label: '레티놀(μg)', unit: 'μg', name: '레티놀' },
  AMT_NUM16: { label: '베타카로틴(μg)', unit: 'μg', name: '베타카로틴' },
  AMT_NUM17: { label: '티아민(mg)', unit: 'mg', name: '티아민' },
  AMT_NUM18: { label: '리보플라빈(mg)', unit: 'mg', name: '리보플라빈' },
  AMT_NUM19: { label: '니아신(mg)', unit: 'mg', name: '니아신' },
  AMT_NUM20: { label: '비타민 C(mg)', unit: 'mg', name: '비타민 C' },
  AMT_NUM21: { label: '비타민 D(μg)', unit: 'μg', name: '비타민 D' },
  AMT_NUM22: { label: '콜레스테롤(mg)', unit: 'mg', name: '콜레스테롤' },
  AMT_NUM23: { label: '포화지방산(g)', unit: 'g', name: '포화지방산' },
  AMT_NUM24: { label: '트랜스지방산(g)', unit: 'g', name: '트랜스지방산' },
  AMT_NUM25: { label: '니코틴산(mg)', unit: 'mg', name: '니코틴산' },
  AMT_NUM26: { label: '니코틴아마이드(mg)', unit: 'mg', name: '니코틴아마이드' },
  AMT_NUM27: { label: '비오틴 / 바이오틴(μg)', unit: 'μg', name: '비오틴' },
  AMT_NUM28: { label: '비타민 B6(mg)', unit: 'mg', name: '비타민 B6' },
  AMT_NUM29: { label: '비타민 B12(μg)', unit: 'μg', name: '비타민 B12' },
  AMT_NUM30: { label: '엽산(DFE)(μg)', unit: 'μg', name: '엽산' },
  AMT_NUM31: { label: '콜린(mg)', unit: 'mg', name: '콜린' },
  AMT_NUM32: { label: '판토텐산(mg)', unit: 'mg', name: '판토텐산' },
  AMT_NUM33: { label: '비타민 D2(μg)', unit: 'μg', name: '비타민 D2' },
  AMT_NUM34: { label: '비타민 D3(μg)', unit: 'μg', name: '비타민 D3' },
  AMT_NUM35: { label: '비타민 E(mg α-TE)', unit: 'mg α-TE', name: '비타민 E' },
  AMT_NUM36: { label: '토코페롤(mg)', unit: 'mg', name: '토코페롤' },
  AMT_NUM37: { label: '알파 토코페롤(mg)', unit: 'mg', name: '알파 토코페롤' },
  AMT_NUM38: { label: '베타 토코페롤(mg)', unit: 'mg', name: '베타 토코페롤' },
  AMT_NUM39: { label: '감마 토코페롤(mg)', unit: 'mg', name: '감마 토코페롤' },
  AMT_NUM40: { label: '델타 토코페롤(mg)', unit: 'mg', name: '델타 토코페롤' },
  AMT_NUM41: { label: '토코트리에놀(mg)', unit: 'mg', name: '토코트리에놀' },
  AMT_NUM42: { label: '알파 토코트리에놀(mg)', unit: 'mg', name: '알파 토코트리에놀' },
  AMT_NUM43: { label: '베타 토코트리에놀(mg)', unit: 'mg', name: '베타 토코트리에놀' },
  AMT_NUM44: { label: '감마 토코트리에놀(mg)', unit: 'mg', name: '감마 토코트리에놀' },
  AMT_NUM45: { label: '델타 토코트리에놀(mg)', unit: 'mg', name: '델타 토코트리에놀' },
  AMT_NUM46: { label: '비타민 K(μg)', unit: 'μg', name: '비타민 K' },
  AMT_NUM47: { label: '비타민 K1(μg)', unit: 'μg', name: '비타민 K1' },
  AMT_NUM48: { label: '비타민 K2(μg)', unit: 'μg', name: '비타민 K2' },
  AMT_NUM49: { label: '갈락토오스(g)', unit: 'g', name: '갈락토오스' },
  AMT_NUM50: { label: '과당(g)', unit: 'g', name: '과당' },
  AMT_NUM51: { label: '당알콜(g)', unit: 'g', name: '당알콜' },
  AMT_NUM52: { label: '맥아당(g)', unit: 'g', name: '맥아당' },
  AMT_NUM53: { label: '알룰로오스(g)', unit: 'g', name: '알룰로오스' },
  AMT_NUM54: { label: '에리스리톨(g)', unit: 'g', name: '에리스리톨' },
  AMT_NUM55: { label: '유당(g)', unit: 'g', name: '유당' },
  AMT_NUM56: { label: '자당(g)', unit: 'g', name: '자당' },
  AMT_NUM57: { label: '타가토스(g)', unit: 'g', name: '타가토스' },
  AMT_NUM58: { label: '포도당(g)', unit: 'g', name: '포도당' },
  AMT_NUM59: { label: '불포화지방(g)', unit: 'g', name: '불포화지방' },
  AMT_NUM60: { label: 'EPA + DHA(mg)', unit: 'mg', name: 'EPA + DHA' },
  AMT_NUM61: { label: '가돌레산(20:1 n-11) / 에이코센산(20:1 n-9)(mg)', unit: 'mg', name: '가돌레산/에이코센산' },
  AMT_NUM62: { label: '가돌레산(20:1)(g)', unit: 'g', name: '가돌레산' },
  AMT_NUM63: { label: '감마 리놀렌산(18:3 n-6)(mg)', unit: 'mg', name: '감마 리놀렌산' },
  AMT_NUM64: { label: '감마 리놀렌산(18:3(n-6))(g)', unit: 'g', name: '감마 리놀렌산' },
  AMT_NUM65: { label: '네르본산(24:1)(mg)', unit: 'mg', name: '네르본산' },
  AMT_NUM66: { label: '도코사디에노산(22:2)(mg)', unit: 'mg', name: '도코사디에노산' },
  AMT_NUM67: { label: '도코사펜타에노산(22:5(n-3))(g)', unit: 'g', name: '도코사펜타에노산' },
  AMT_NUM68: { label: '도코사펜타에노산(DPA, 22:5 n-3)(mg)', unit: 'mg', name: '도코사펜타에노산(DPA)' },
  AMT_NUM69: { label: '도코사헥사에노산(22:6(n-3))(g)', unit: 'g', name: '도코사헥사에노산' },
  AMT_NUM70: { label: '도코사헥사에노산(DHA, 22:6 n-3)(mg)', unit: 'mg', name: '도코사헥사에노산(DHA)' },
  AMT_NUM71: { label: '디호모리놀렌산(20:3 n-3)(mg)', unit: 'mg', name: '디호모리놀렌산' },
  AMT_NUM72: { label: '라우르산(12:0)(g)', unit: 'g', name: '라우르산' },
  AMT_NUM73: { label: '라우르산(12:0)(mg)', unit: 'mg', name: '라우르산' },
  AMT_NUM74: { label: '리그노세르산(24:0)(mg)', unit: 'mg', name: '리그노세르산' },
  AMT_NUM75: { label: '리놀레산(18:2 n-6)(g)', unit: 'g', name: '리놀레산' },
  AMT_NUM76: { label: '미리스톨레산(14:1)(g)', unit: 'g', name: '미리스톨레산' },
  AMT_NUM77: { label: '미리스톨레산(14:1)(mg)', unit: 'mg', name: '미리스톨레산' },
  AMT_NUM78: { label: '미리스트산(14:0)(g)', unit: 'g', name: '미리스트산' },
  AMT_NUM79: { label: '미리스트산(14:0)(mg)', unit: 'mg', name: '미리스트산' },
  AMT_NUM80: { label: '박센산(18:1 n-7)(mg)', unit: 'mg', name: '박센산' },
  AMT_NUM81: { label: '박센산(18:1(n-7))(g)', unit: 'g', name: '박센산' },
  AMT_NUM82: { label: '베헨산(22:0)(mg)', unit: 'mg', name: '베헨산' },
  AMT_NUM83: { label: '부티르산(4:0)(g)', unit: 'g', name: '부티르산' },
  AMT_NUM84: { label: '부티르산(4:0)(mg)', unit: 'mg', name: '부티르산' },
  AMT_NUM85: { label: '스테아르산(18:0)(g)', unit: 'g', name: '스테아르산' },
  AMT_NUM86: { label: '스테아르산(18:0)(mg)', unit: 'mg', name: '스테아르산' },
  AMT_NUM87: { label: '스테아리돈산(18:4 n-3)(mg)', unit: 'mg', name: '스테아리돈산' },
  AMT_NUM88: { label: '아라키돈산(20:4 n-6)(mg)', unit: 'mg', name: '아라키돈산' },
  AMT_NUM89: { label: '아라키돈산(20:4(n-6))(g)', unit: 'g', name: '아라키돈산' },
  AMT_NUM90: { label: '아라키드산(20:0)(g)', unit: 'g', name: '아라키드산' },
  AMT_NUM91: { label: '아라키드산(20:0)(mg)', unit: 'mg', name: '아라키드산' },
  AMT_NUM92: { label: '알파 리놀렌산(18:3(n-3))(g)', unit: 'g', name: '알파 리놀렌산' },
  AMT_NUM93: { label: '에루크산(22:1)(mg)', unit: 'mg', name: '에루크산' },
  AMT_NUM94: { label: '에이코사디에노산(20:2 n-6)(mg)', unit: 'mg', name: '에이코사디에노산' },
  AMT_NUM95: { label: '에이코사디에노산(20:2(n-6))(g)', unit: 'g', name: '에이코사디에노산' },
  AMT_NUM96: { label: '에이코사트리에노산(20:3 n-6)(mg)', unit: 'mg', name: '에이코사트리에노산' },
  AMT_NUM97: { label: '에이코사트리에노산(20:3(n-6))(g)', unit: 'g', name: '에이코사트리에노산' },
  AMT_NUM98: { label: '에이코사펜타에노산(20:5(n-3))(g)', unit: 'g', name: '에이코사펜타에노산' },
  AMT_NUM99: { label: '에이코사펜타에노산(EPA, 20:5 n-3)(mg)', unit: 'mg', name: 'EPA' },
  AMT_NUM100: { label: '오메가3 지방산(g)', unit: 'g', name: '오메가3 지방산' },
  AMT_NUM101: { label: '오메가6 지방산(g)', unit: 'g', name: '오메가6 지방산' },
  AMT_NUM102: { label: '올레산(18:1 n-9)(mg)', unit: 'mg', name: '올레산' },
  AMT_NUM103: { label: '올레산(18:1(n-9))(g)', unit: 'g', name: '올레산' },
  AMT_NUM104: { label: '카프로산(6:0)(g)', unit: 'g', name: '카프로산' },
  AMT_NUM105: { label: '카프로산(6:0)(mg)', unit: 'mg', name: '카프로산' },
  AMT_NUM106: { label: '카프르산(10:0)(g)', unit: 'g', name: '카프르산' },
  AMT_NUM107: { label: '카프르산(10:0)(mg)', unit: 'mg', name: '카프르산' },
  AMT_NUM108: { label: '카프릴산(8:0)(g)', unit: 'g', name: '카프릴산' },
  AMT_NUM109: { label: '카프릴산(8:0)(mg)', unit: 'mg', name: '카프릴산' },
  AMT_NUM110: { label: '트라이데칸산(13:0)(mg)', unit: 'mg', name: '트라이데칸산' },
  AMT_NUM111: { label: '트랜스 리놀레산(18:2t)(g)', unit: 'g', name: '트랜스 리놀레산' },
  AMT_NUM112: { label: '트랜스 리놀레산(18:2t)(mg)', unit: 'mg', name: '트랜스 리놀레산' },
  AMT_NUM113: { label: '트랜스 리놀렌산(18:3t)(g)', unit: 'g', name: '트랜스 리놀렌산' },
  AMT_NUM114: { label: '트랜스 리놀렌산(18:3t)(mg)', unit: 'mg', name: '트랜스 리놀렌산' },
  AMT_NUM115: { label: '카페인(mg)', unit: 'mg', name: '카페인' },
  AMT_NUM116: { label: '트랜스 올레산(18:1 trans n-9)(mg)', unit: 'mg', name: '트랜스 올레산' },
  AMT_NUM117: { label: '트랜스 올레산(18:1(n-9)t)(g)', unit: 'g', name: '트랜스 올레산' },
  AMT_NUM118: { label: '트리코산산(23:0)(mg)', unit: 'mg', name: '트리코산산' },
  AMT_NUM119: { label: '팔미톨레산(16:1)(g)', unit: 'g', name: '팔미톨레산' },
  AMT_NUM120: { label: '팔미톨레산(16:1)(mg)', unit: 'mg', name: '팔미톨레산' },
  AMT_NUM121: { label: '팔미트산(16:0)(g)', unit: 'g', name: '팔미트산' },
  AMT_NUM122: { label: '팔미트산(16:0)(mg)', unit: 'mg', name: '팔미트산' },
  AMT_NUM123: { label: '펜타데칸산(15:0)(mg)', unit: 'mg', name: '펜타데칸산' },
  AMT_NUM124: { label: '헨에이코산산(21:0)(mg)', unit: 'mg', name: '헨에이코산산' },
  AMT_NUM125: { label: '헵타데센산(17:1)(mg)', unit: 'mg', name: '헵타데센산' },
  AMT_NUM126: { label: '헵타데칸산(17:0)(mg)', unit: 'mg', name: '헵타데칸산' },
  AMT_NUM127: { label: '구리(mg)', unit: 'mg', name: '구리' },
  AMT_NUM128: { label: '구리(μg)', unit: 'μg', name: '구리' },
  AMT_NUM129: { label: '마그네슘(mg)', unit: 'mg', name: '마그네슘' },
  AMT_NUM130: { label: '망간(mg)', unit: 'mg', name: '망간' },
  AMT_NUM131: { label: '몰리브덴(μg)', unit: 'μg', name: '몰리브덴' },
  AMT_NUM132: { label: '불소(mg)', unit: 'mg', name: '불소' },
  AMT_NUM133: { label: '셀레늄(μg)', unit: 'μg', name: '셀레늄' },
  AMT_NUM134: { label: '아연(mg)', unit: 'mg', name: '아연' },
  AMT_NUM135: { label: '염소(mg)', unit: 'mg', name: '염소' },
  AMT_NUM136: { label: '요오드(μg)', unit: 'μg', name: '요오드' },
  AMT_NUM137: { label: '크롬(μg)', unit: 'μg', name: '크롬' },
  AMT_NUM138: { label: '아미노산(mg)', unit: 'mg', name: '아미노산' },
  AMT_NUM139: { label: '필수아미노산(mg)', unit: 'mg', name: '필수아미노산' },
  AMT_NUM140: { label: '비필수아미노산(mg)', unit: 'mg', name: '비필수아미노산' },
  AMT_NUM141: { label: '글루탐산(mg)', unit: 'mg', name: '글루탐산' },
  AMT_NUM142: { label: '글리신(mg)', unit: 'mg', name: '글리신' },
  AMT_NUM143: { label: '라이신(mg)', unit: 'mg', name: '라이신' },
  AMT_NUM144: { label: '류신 / 루신(mg)', unit: 'mg', name: '류신/루신' },
  AMT_NUM145: { label: '메티오닌(mg)', unit: 'mg', name: '메티오닌' },
  AMT_NUM146: { label: '발린(mg)', unit: 'mg', name: '발린' },
  AMT_NUM147: { label: '세린(mg)', unit: 'mg', name: '세린' },
  AMT_NUM148: { label: '시스테인(mg)', unit: 'mg', name: '시스테인' },
  AMT_NUM149: { label: '아르기닌(mg)', unit: 'mg', name: '아르기닌' },
  AMT_NUM150: { label: '아스파르트산(mg)', unit: 'mg', name: '아스파르트산' },
  AMT_NUM151: { label: '알라닌(mg)', unit: 'mg', name: '알라닌' },
  AMT_NUM152: { label: '이소류신 / 이소루신(mg)', unit: 'mg', name: '이소류신/이소루신' },
  AMT_NUM153: { label: '타우린(mg)', unit: 'mg', name: '타우린' },
  AMT_NUM154: { label: '트레오닌(mg)', unit: 'mg', name: '트레오닌' },
  AMT_NUM155: { label: '트립토판(mg)', unit: 'mg', name: '트립토판' },
  AMT_NUM156: { label: '티로신(mg)', unit: 'mg', name: '티로신' },
  AMT_NUM157: { label: '페닐알라닌(mg)', unit: 'mg', name: '페닐알라닌' },
  AMT_NUM158: { label: '프롤린(mg)', unit: 'mg', name: '프롤린' },
  AMT_NUM159: { label: '히스티딘(mg)', unit: 'mg', name: '히스티딘' }
});

module.exports = AmtNumDataType;
