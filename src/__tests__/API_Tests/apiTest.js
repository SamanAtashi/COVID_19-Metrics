import { fetchContinents, fetchCountries } from '../../myredux/myreducer';

describe('fetching from api', () => {
  describe('Continents Fetching', () => {
    test('data type', async () => {
      const data = await fetchContinents();
      expect(data).toBeInstanceOf(Object);
    });
    test('data contains object indeed', async () => {
      const data = await fetchContinents();
      expect.objectContaining(data);
    });
  });

  describe('Countries Fetching', () => {
    test('data type', async () => {
      const data = await fetchCountries();
      expect(data).toBeInstanceOf(Object);
    });
    test('data contains object indeed', async () => {
      const data = await fetchCountries();
      expect.objectContaining(data);
    });
  });
});
