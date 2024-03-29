/* eslint-disable linebreak-style */
//  Need to install the karma-cli package
//      npm install -g karma-cli
//  To run the test:  karma start

// Increase timeout interval for longer running http calls.

var appsettings;
jasmine.getFixtures().fixturesPath = 'base/';
var f = readFixtures('appsettings.json');
appsettings = JSON.parse(f);

if (appsettings.DEFAULT_TIMEOUT_INTERVAL) {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = appsettings.DEFAULT_TIMEOUT_INTERVAL;
}

describe('AppComponent', () => {
  beforeEach(module('myApp'));

  let http;
  let flush;

  /**
   * Configure the container for the http service.
   */
  beforeEach(() => {
    const i = angular.injector(['ng']);
    const rs = i.get('$rootScope');
    http = i.get('$http');

    flush = function () {
      rs.$apply();
    };

    module('myApp', ($provide) => {
      $provide.value('$http', http);
      $provide.value('$rootScope', rs);
    });
  });

  /**
   * Configure the rootScope container.
   */
  beforeEach(inject(($controller, $rootScope) => {
    rootScope = $rootScope;
    scope = $rootScope.$new();
    controller = $controller('AppController', { $scope: scope });
  }));

  /**
   * Test the createDatabase method.
   */
  it('createDatabase should return a status code of 201 when creating a new database', (done) => {
    let returnCode = 0;
    returnCode = scope.createDatabase(
      appsettings.PIWebAPI,
      appsettings.AFServerName,
      appsettings.Username,
      appsettings.Password,
      appsettings.AuthType
    );
    returnCode.then(function (result) {
      expect(result).toEqual(201);
      done();
    });
    flush();
  });

  /**
   * Test the createCategory method.
   */
  it('createCategory should return a status code of 201 when creating a new category', (done) => {
    let returnCode = 0;
    returnCode = scope.createCategory(
      appsettings.PIWebAPI,
      appsettings.AFServerName,
      appsettings.Username,
      appsettings.Password,
      appsettings.AuthType
    );
    returnCode.then(function (result) {
      expect(result).toEqual(201);
      done();
    });
    flush();
  });

  /**
   * Test the createTemplate method.
   */
  it('createTemplate should return a status code of 201 when creating a new template', (done) => {
    let returnCode = 0;
    returnCode = scope.createTemplate(
      appsettings.PIWebAPI,
      appsettings.AFServerName,
      appsettings.DataArchiveName,
      appsettings.Username,
      appsettings.Password,
      appsettings.AuthType
    );
    returnCode.then(function (result) {
      expect(result).toEqual(201);
      done();
    });
    flush();
  });

  /**
   * Test the createElement method.
   */
  it('createElement should return a status code of 200 when creating a new element', (done) => {
    let returnCode = 0;
    returnCode = scope.createElement(
      appsettings.PIWebAPI,
      appsettings.AFServerName,
      appsettings.Username,
      appsettings.Password,
      appsettings.AuthType
    );
    returnCode.then(function (result) {
      expect(result).toEqual(200);
      done();
    });
    flush();
  });

  /**
   * Test the writeSingleValue method.
   */
  it('writeSingleValue should return a status code of 202 when writing a single value', function (done) {
    let returnCode = 0;
    returnCode = scope.writeSingleValue(
      appsettings.PIWebAPI,
      appsettings.AFServerName,
      appsettings.Username,
      appsettings.Password,
      appsettings.AuthType
    );
    returnCode.then(function (result) {
      expect(result).toEqual(202);
      done();
    });
    flush();
  });

  /**
   * Test the writeSetOfValues method.
   */
  it('writeSetOfValues should return a status code of 202 when writing a set of values', function (done) {
    let returnCode = 0;
    returnCode = scope.writeSetOfValues(
      appsettings.PIWebAPI,
      appsettings.AFServerName,
      appsettings.Username,
      appsettings.Password,
      appsettings.AuthType
    );
    returnCode.then(function (result) {
      expect(result).toEqual(202);
      done();
    });
    flush();
  });

  /**
   * Test the updateAttributeValue method.
   */
  it('updateAttributeValue should return a status code of 204 when updating an attribute value', function (done) {
    let returnCode = 0;
    returnCode = scope.updateAttributeValue(
      appsettings.PIWebAPI,
      appsettings.AFServerName,
      appsettings.Username,
      appsettings.Password,
      appsettings.AuthType
    );
    returnCode.then(function (result) {
      expect(result).toEqual(204);
      done();
    });
    flush();
  });

  /**
   * Test the readSingleValue method.
   */
  it('readSingleValue should return a status code of 200 when reading a single value', function (done) {
    let returnCode = 0;
    returnCode = scope.readSingleValue(
      appsettings.PIWebAPI,
      appsettings.AFServerName,
      appsettings.Username,
      appsettings.Password,
      appsettings.AuthType
    );
    returnCode.then(function (result) {
      expect(result).toEqual(200);
      done();
    });
    flush();
  });

  /**
   * Test the readSetofValues method.
   */
  it('readSetOfValues should return a status code of 200 when reading a set of values', function (done) {
    let returnCode = 0;
    returnCode = scope.readSetOfValues(
      appsettings.PIWebAPI,
      appsettings.AFServerName,
      appsettings.Username,
      appsettings.Password,
      appsettings.AuthType
    );
    returnCode.then(function (result) {
      expect(result).toEqual(200);
      done();
    });
    flush();
  });

  /**
   * Test the reducePayloadWithSelectedFields method.
   */
  it('reducePayloadWithSelectedFields should return a status code of 200 when reducing payload with selected fields', function (done) {
    let returnCode = 0;
    returnCode = scope.reducePayloadWithSelectedFields(
      appsettings.PIWebAPI,
      appsettings.AFServerName,
      appsettings.Username,
      appsettings.Password,
      appsettings.AuthType
    );
    returnCode.then(function (result) {
      expect(result).toEqual(200);
      done();
    });
    flush();
  });

  /**
   * Test the doBatchCall method.
   */
  it('doBatchCall should return a status code of 207 when performing a batch call', function (done) {
    let returnCode = 0;
    returnCode = scope.doBatchCall(
      appsettings.PIWebAPI,
      appsettings.AFServerName,
      appsettings.Username,
      appsettings.Password,
      appsettings.AuthType
    );
    returnCode.then(function (result) {
      expect(result).toEqual(207);
      done();
    });
    flush();
  });

  /**
   * Test the deleteElement method.
   */
  it('deleteElement should return a status code of 204 when deleteing the element', function (done) {
    let returnCode = 0;
    returnCode = scope.deleteElement(
      appsettings.PIWebAPI,
      appsettings.AFServerName,
      appsettings.Username,
      appsettings.Password,
      appsettings.AuthType
    );
    returnCode.then(function (result) {
      expect(result).toEqual(204);
      done();
    });
    flush();
  });

  /**
   * Test the deleteTemplate method.
   */
  it('deleteTemplate should return a status code of 204 when deleteing the template', function (done) {
    let returnCode = 0;
    returnCode = scope.deleteTemplate(
      appsettings.PIWebAPI,
      appsettings.AFServerName,
      appsettings.Username,
      appsettings.Password,
      appsettings.AuthType
    );
    returnCode.then(function (result) {
      expect(result).toEqual(204);
      done();
    });
    flush();
  });

  /**
   * Test the deleteCategory method.
   */
  it('deleteCategory should return a status code of 204 when deleteing the category', function (done) {
    let returnCode = 0;
    returnCode = scope.deleteCategory(
      appsettings.PIWebAPI,
      appsettings.AFServerName,
      appsettings.Username,
      appsettings.Password,
      appsettings.AuthType
    );
    returnCode.then(function (result) {
      expect(result).toEqual(204);
      done();
    });
    flush();
  });

  /**
   * Test the deleteDatabase method.
   */
  it('deleteDatabase should return a status code of 204 when deleteing the database', function (done) {
    let returnCode = 0;
    returnCode = scope.deleteDatabase(
      appsettings.PIWebAPI,
      appsettings.AFServerName,
      appsettings.Username,
      appsettings.Password,
      appsettings.AuthType
    );
    returnCode.then(function (result) {
      expect(result).toEqual(204);
      done();
    });
    flush();
  });
});
