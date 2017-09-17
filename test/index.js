import http from 'http';
import assert from 'assert';

describe('Server Wake Up', () => {
  it('response 200 OK', (done) => {
    http.get('http://localhost:3000/', (res) => {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});
