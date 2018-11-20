exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('users').insert(
      { id: 1,
        first_name: 'Ravi',
        last_name: 'Vora',
        email: 'ravivora@email.com',
        password: '1234',
        profile_image: '/images/ravi-vora-avatar.jpg',
        website_url: 'http://www.ravivora.com/',
        instagram_url: 'https://www.instagram.com/ravivora/',
        facebook_url: 'null',
        twitter_url: 'https://twitter.com/RaviVora',
        location: 'Los Angeles',
        user_type_id: 1
      }),
    knex('users').insert(
      { id: 2,
        first_name: 'Olya',
        last_name: 'Kobruseva',
        email: 'olyakobruseva@email.com',
        password: '1234',
        profile_image: '/images/olya-kobruseva-avatar.jpg',
        website_url: 'http://kobruseva.com/',
        instagram_url: 'null',
        facebook_url: 'https://www.facebook.com/LeelooTheFirst',
        twitter_url: 'https://twitter.com/RaviVora',
        location: 'Barcelona',
        user_type_id: 1
      }),
    knex('users').insert(
      { id: 3,
        first_name: 'Tim',
        last_name: 'Flach',
        email: 'timflach@email.com',
        password: '1234',
        profile_image: '/images/tim-flach-avatar.jpg',
        website_url: 'https://timflach.com/',
        instagram_url: 'https://www.instagram.com/timflachphotography/',
        facebook_url: 'https://www.facebook.com/timflachphoto/',
        twitter_url: 'https://twitter.com/TimFlach',
        location: 'London',
        user_type_id: 1
      }),
    knex('users').insert(
      { id: 4,
        first_name: 'Lucie',
        last_name: 'Urban',
        email: 'lucyurban@email.com',
        password: '1234',
        profile_image: '/images/lucy-urban-avatar.jpg',
        website_url: 'http://lucieurban.cz/',
        instagram_url: 'https://www.instagram.com/urban_photographe/',
        facebook_url: 'https://www.facebook.com/URBANPHOTOGRAPHE',
        twitter_url: 'null',
        location: 'Prague',
        user_type_id: 1
      }),
    knex('users').insert(
      { id: 5,
        first_name: 'Jenn',
        last_name: 'Repp',
        email: 'jennrepp@email.com',
        password: '1234',
        profile_image: '/images/jenn-repp-avatar.jpg',
        website_url: 'http://www.jennrepp.com/',
        instagram_url: 'https://www.instagram.com/jennreppphoto/',
        facebook_url: 'http://www.facebook.com/photo.jennrepp',
        twitter_url: 'https://twitter.com/jennreppPhoto',
        location: 'Seattle',
        user_type_id: 1
      }),
    knex('users').insert(
      { id: 6,
        first_name: 'Michael',
        last_name: 'Wilson',
        email: 'mwilson@email.com',
        password: '1234',
        profile_image: '/images/michael-avatar.jpg',
        website_url: 'null',
        instagram_url: 'null',
        facebook_url: 'null',
        twitter_url: 'null',
        location: 'null',
        user_type_id: 2
      }),
    knex('users').insert(
      { id: 7,
        first_name: 'Carey',
        last_name: 'Brown',
        email: 'careybrown@email.com',
        password: '1234',
        profile_image: '/images/carey-avatar.jpg',
        website_url: 'null',
        instagram_url: 'null',
        facebook_url: 'null',
        twitter_url: 'null',
        location: 'null',
        user_type_id: 2
      }),
    knex('users').insert(
      { id: 8,
        first_name: 'Rondell',
        last_name: 'Staton',
        email: 'rrrondell@email.com',
        password: '1234',
        profile_image: '/images/rondell-avatar.jpg',
        website_url: 'null',
        instagram_url: 'null',
        facebook_url: 'null',
        twitter_url: 'null',
        location: 'null',
        user_type_id: 2
      })
  ]);
};
