import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('test for correct add and delete', () => {
  const movieAvengers2 = new Movie(
    1,
    'Мстители 2',
    'The Avengers',
    true,
    2014,
    'США',
    'Avengers Assemble',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    137,
    '02.17',
    750,
  );

  const movieAvengers = new Movie(
    2,
    'Мстители',
    'The Avengers',
    false,
    2012,
    'США',
    'Avengers Assemble',
    ['фантастика', 'фэнтези', 'приключения'],
    137,
    '02.17',
    400,
  );

  const movieAvengers3 = new Movie(
    3,
    'Мстители 3',
    'The Avengers',
    false,
    2015,
    'США',
    'Avengers Assemble',
    ['фантастика', 'фэнтези', 'приключения'],
    137,
    '02.17',
    320,
  );

  const cart = new Cart();

  cart.add(movieAvengers2);
  cart.add(movieAvengers);
  cart.add(movieAvengers3);
  cart.deleteItem(2);
  cart.totalPrice();
  cart.totalPriceWithDiscount(50);

  const expected = {
    _items: [{
      id: 1,
      name: 'Мстители 2',
      nameEng: 'The Avengers',
      imax: true,
      year: 2014,
      contry: 'США',
      slogan: 'Avengers Assemble',
      genre: ['фантастика', 'боевик', 'фэнтези', 'приключения'],
      timeMinutes: 137,
      timeHour: '02.17',
      price: 750,
    },
    {
      id: 3,
      name: 'Мстители 3',
      nameEng: 'The Avengers',
      imax: false,
      year: 2015,
      contry: 'США',
      slogan: 'Avengers Assemble',
      genre: ['фантастика', 'фэнтези', 'приключения'],
      timeMinutes: 137,
      timeHour: '02.17',
      price: 320,
    }],
    conterCount: 2,
    _totalPrice: 1070,
    _totalPriceWithDiscount: 535,
  };

  expect(cart).toEqual(expected);
});
