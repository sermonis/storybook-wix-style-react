import _ from 'lodash/fp';

export const GEOCODE_RESULT = JSON.parse(
  '{"formatted_address":"_formatted_address_","address_components":[{"types":["street_number"],"long_name":123}]}',
);

GEOCODE_RESULT.geometry = {
  location: {
    lat: () => 31.12,
    lng: () => 33.34,
  },
};

export class GmapsTestClient {
  autocomplete({ request }) {
    if (request.input === 'dontfind') {
      return Promise.resolve([]);
    }

    return Promise.resolve([
      { description: JSON.stringify(request) + ' - 1', id: 0 },
      { description: JSON.stringify(request) + ' - 2', id: 1 },
    ]);
  }

  geocode({ request }) {
    const { address, placeId } = request;
    if (address || placeId) {
      return Promise.resolve([
        _.extend({}, GEOCODE_RESULT, { __called__: JSON.stringify(request) }),
      ]);
    }
    throw new Error('geocode() request params are malformed');
  }

  placeDetails({ request }) {
    const { placeId } = request;
    if (placeId) {
      return Promise.resolve([
        _.extend({}, GEOCODE_RESULT, { __called__: JSON.stringify(request) }),
      ]);
    }
    throw new Error('placeDetails() request params are malformed');
  }
}

export class GmapsTestClientWithFields extends GmapsTestClient {
  placeDetails({ request }) {
    const { fields } = request;
    if (fields) {
      return Promise.resolve([
        _.extend({}, GEOCODE_RESULT, { __called__: JSON.stringify(request) }),
      ]);
    }
    throw new Error('placeDetails() request params are malformed');
  }
}
