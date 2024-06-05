
function extractBodyFromResponse(res) { // for food api
  const data = res.data;
  if (!data.header || !data.header.resultCode || data.header.resultCode != '00') {
    throw Error(`gov api error: ${data.body}`);
  }
  return data.body;
}

function extractItemArrayOrDefualtEmptyArrayFromBody(body) { // for food api
  let result = [];
  if (body && body.items) {
    if (!Array.isArray(body.items)) {
      result = [body.items];
    } else {
      result = body.items;
    }
  }
  return result;
}

function extractPagingInfoOrDefaultEmptyObjectFromBody(body, appendObject = {}) {
  let paging = {
    numOfRows: Number(body.numOfRows),
    pageNo: body.pageNo,
    totalCount: body.totalCount,
  }

  Object.keys(appendObject).forEach(key => {
    paging[key] = appendObject[key];
  });

  return paging;
}

module.exports = {
  extractBodyFromResponse,
  extractItemArrayOrDefualtEmptyArrayFromBody,
  extractPagingInfoOrDefaultEmptyObjectFromBody,
}
