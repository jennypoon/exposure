exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('images').insert(
      { title: 'Airport Sunset',
        description: 'A plane on a sunny evening.',
        featured: 'false',
        category: 'commercial, plane',
        src: '/images/AAM-1114-022.jpg',
        image_owner: 1
      }),
    knex('images').insert(
      { title: 'Floating',
        description: 'Portrait of a woman floating in a pond.',
        featured: 'true',
        category: 'nature, portrait',
        src: '/images/AV_8549.jpg',
        image_owner: 1
      }),
    knex('images').insert(
      { title: 'Ford Canada Shoot',
        description: 'A shoot I did Ford Canada.',
        featured: 'true',
        category: 'commercial, car, nature',
        src: '/images/RAVI_VORA_FORDCANADA__DSC6182.jpg',
        image_owner: 1
      }),
    knex('images').insert(
      { title: 'Haley Permenter 1',
        description: 'Shoot I did with Haley Permenter in Vegas.',
        featured: 'false',
        category: 'portrait, commercial',
        src: '/images/RAVI_VORA_HALEY_PERMENTER__RAV5758.jpg',
        image_owner: 1
      }),
    knex('images').insert(
      { title: 'Haley Permenter 2',
        description: 'Shoot I did with Haley Permenter in Vegas.',
        featured: 'true',
        category: 'portrait, commercial',
        src: '/images/RAVI_VORA_HALEY_PERMENTER__RAV5940.jpg',
        image_owner: 1
      }),
    knex('images').insert(
      { title: 'Haley Permenter 3',
        description: 'Shoot I did with Haley Permenter in Vegas.',
        featured: 'false',
        category: 'portrait, commercial',
        src: '/images/RAVI_VORA_HALEY_PERMENTER__RAV6025.jpg',
        image_owner: 1
      }),
    knex('images').insert(
      { title: 'Jelena Marija',
        description: 'Shoot I did with Jelena Marija in 2017.',
        featured: 'false',
        category: 'portrait, commercial',
        src: '/images/RAVI_VORA_JELENA_MARIJA__RAV3688.jpg',
        image_owner: 1
      }),
    knex('images').insert(
      { title: 'Manny Pacquiao',
        description: 'A shoot I did for NIKE.',
        featured: 'true',
        category: 'portrait, commercial',
        src: '/images/RAVI_VORA_MANNY_PACQUIAO_NIKE_01.jpg',
        image_owner: 1
      }),
    knex('images').insert(
      { title: 'Training Josh Bridges',
        description: 'A shoot I did with Josh Bridges for NIKE.',
        featured: 'false',
        category: 'commercial',
        src: '/images/RAVI_VORA_NIKE_TRAINING_JOSH_BRIDGES__RAV4952.jpg',
        image_owner: 1
      }),
    knex('images').insert(
      { title: 'Norway',
        description: 'A NIKE shoot in Norway.',
        featured: 'false',
        category: 'commercial, nature, landscape',
        src: '/images/RAVI_VORA_RAVI_VORA_NORWAY__RAV3397_nike.jpg',
        image_owner: 1
      }),
    knex('images').insert(
      { title: 'Sarah',
        description: 'I was lucky enough to shoot Sarah Curr in 2018.',
        featured: 'false',
        category: 'portrait, commercial',
        src: '/images/RAVI_VORA_SARAH_CURR__RAV0626.jpg',
        image_owner: 1
      }),
    knex('images').insert(
      { title: 'Untitled',
        description: 'While shooting for NIKE in the mountains a happy accident happened.',
        featured: 'true',
        category: 'commercial, nature, landscape, outdoors',
        src: '/images/RAVI_VORA_untitled__DSC0932_lowres.jpg',
        image_owner: 1
      }),
    knex('images').insert(
      { title: 'Visit Jordan',
        description: 'Raging river has cut through the rock.',
        featured: 'false',
        category: 'commercial, nature, landscape',
        src: '/images/RAVI_VORA_VISIT_JORDAN__RAV1638.jpg',
        image_owner: 1
      }),
    knex('images').insert(
      { title: 'Elder',
        description: 'A portrait of a mother in a small rural town.',
        featured: 'false',
        category: 'commercial, nature, portrait',
        src: '/images/RAVI_VORA_VISIT_JORDAN__RAV3651.jpg',
        image_owner: 1
      }),
    knex('images').insert(
      { title: 'In Love',
        description: 'Portrait of couple.',
        featured: 'true',
        category: 'portrait, wedding',
        src: '/images/1-6ab7b3e07f4cbaac394bcc26fe6088f2.jpg',
        image_owner: 2
      }),
    knex('images').insert(
      { title: 'Out the door',
        description: 'A wedding shoot in Black and White.',
        featured: 'false',
        category: 'portrait, wedding',
        src: '/images/1-dd2f249bbeb60461904d79951cd374d3.jpg',
        image_owner: 2
      }),
    knex('images').insert(
      { title: 'The Kiss',
        description: 'An engagement portrait session.',
        featured: 'true',
        category: 'portrait, wedding, commercial',
        src: '/images/2-2a210c36a9ae1790513ca13e3273ca81.jpg',
        image_owner: 2
      }),
    knex('images').insert(
      { title: 'Young Love',
        description: 'An engagement portrait session.',
        featured: 'true',
        category: 'portrait, wedding, commercial',
        src: '/images/2-2c095f1e5537fa58293a26df01f45031.jpg',
        image_owner: 2
      }),
    knex('images').insert(
      { title: 'Love On The Floor',
        description: 'An engagement portrait session.',
        featured: 'true',
        category: 'portrait, wedding, commercial',
        src: '/images/2-3ed541342a098484c4b88c55f215c200.jpg',
        image_owner: 2
      }),
    knex('images').insert(
      { title: 'I Do',
        description: 'A wedding shoot by the sea.',
        featured: 'false',
        category: 'portrait, wedding, commercial',
        src: '/images/2-63dec5918630d8bcb1eff8106f851524.jpg',
        image_owner: 2
      }),
    knex('images').insert(
      { title: 'The Isle',
        description: 'A Black and White wedding shoot.',
        featured: 'false',
        category: 'portrait, wedding',
        src: '/images/2-cbfd373bcc3e5d2d8f35ee0500f66bd4.jpg',
        image_owner: 2
      }),
    knex('images').insert(
      { title: 'Ocean Girl',
        description: 'A wedding shoot by the sea.',
        featured: 'false',
        category: 'portrait, wedding',
        src: '/images/2-f7eb9069a6a9ae9ccc2bdbfb3008edec.jpg',
        image_owner: 2
      }),
    knex('images').insert(
      { title: 'The View Over Here',
        description: 'A scenic landscape view.',
        featured: 'false',
        category: 'landscape, nature, summer',
        src: '/images/2000-54dd0b0a04a5a03910154d4f228775fc.jpg',
        image_owner: 2
      }),
    knex('images').insert(
      { title: 'The Door',
        description: 'A shot of where I was staying in Europe.',
        featured: 'false',
        category: 'landscape, commercial',
        src: '/images/2000-e6c0dc027b73d333d0533566c38ec19e.jpg',
        image_owner: 2
      }),
    knex('images').insert(
      { title: 'Aerial Shot Of Tundra',
        description: 'A shoot up North from a plane.',
        featured: 'false',
        category: 'landscape, nature',
        src: '/images/Aerial-Shot-of-Tundra-1600x1021.jpg',
        image_owner: 3
      }),
    knex('images').insert(
      { title: 'Crown Cranes',
        description: 'A wildlife shot of Cranes in winter.',
        featured: 'true',
        category: 'landscape, nature, birds, animals, winter',
        src: '/images/Crown-Cranes-1600x1021.jpg',
        image_owner: 3
      }),
    knex('images').insert(
      { title: 'Green Winged Macaws',
        description: 'Green Winged Macaws on the side of a cliff.',
        featured: 'true',
        category: 'landscape, nature, birds, animals',
        src: '/images/Green-Winged-Macaws-on-Claylick-1600x1021.jpg',
        image_owner: 3
      }),
    knex('images').insert(
      { title: 'Kaisers Newt',
        description: 'A newt in water.',
        featured: 'true',
        category: 'nature, newt, animals',
        src: '/images/Kaisers-Newt-1600x1021.jpg',
        image_owner: 3
      }),
    knex('images').insert(
      { title: 'Military Macaw 1',
        description: 'A portrait of a Military Macaw',
        featured: 'false',
        category: 'nature, bird, animals',
        src: '/images/Military-Macaw-1600x1021.jpg',
        image_owner: 3
      }),
    knex('images').insert(
      { title: 'Military Macaw 2',
        description: 'A portrait of a Military Macaw in flight.',
        featured: 'false',
        category: 'nature, bird, animals',
        src: '/images/Military-Macaw-Flying-1600x1021.jpg',
        image_owner: 3
      }),
    knex('images').insert(
      { title: 'Polar Bear Footprints',
        description: 'Polar Bear footprints in the snow.',
        featured: 'false',
        category: 'nature, landscape, animals, winter',
        src: '/images/Polar-Bear-Footprints-1600x1021.jpg',
        image_owner: 3
      }),
    knex('images').insert(
      { title: 'Polar Bears',
        description: 'Polar Bears on the ice.',
        featured: 'false',
        category: 'nature, landscape, animals, winter, bear',
        src: '/images/Polar-Bears_2-1600x1021.jpg',
        image_owner: 3
      }),
    knex('images').insert(
      { title: 'Whiteback Vultures',
        description: 'Whiteback Vultures descending on a meal.',
        featured: 'false',
        category: 'nature, animals, birds',
        src: '/images/Whiteback-Vultures-1600x1021.jpg',
        image_owner: 3
      }),
    knex('images').insert(
      { title: 'Yellow Eye Tree Frog',
        description: 'A portrait of a Yellow Eye Tree Frog',
        featured: 'true',
        category: 'nature, animals, frog',
        src: '/images/Yellow-Eye-Tree-Frog-3-1600x1021.jpg',
        image_owner: 3
      }),
    knex('images').insert(
      { title: 'Wedding Table',
        description: 'A night Wedding shoot.',
        featured: 'true',
        category: 'wedding, commercial',
        src: '/images/A-1350x900.jpg',
        image_owner: 4
      }),
    knex('images').insert(
      { title: 'The Bride',
        description: 'A portrait of a Bride preparing to walk down the isle.',
        featured: 'false',
        category: 'wedding, commercial, portrait',
        src: '/images/B-1350x900.jpg',
        image_owner: 4
      }),
    knex('images').insert(
      { title: 'I Do',
        description: 'A happy couple kissing during their big day.',
        featured: 'false',
        category: 'wedding, portrait',
        src: '/images/C-1350x900.jpg',
        image_owner: 4
      }),
    knex('images').insert(
      { title: 'The Moment',
        description: 'A happy couple after saying their vows and being pronounced man and whife.',
        featured: 'true',
        category: 'wedding, portrait',
        src: '/images/E-1350x900.jpg',
        image_owner: 4
      }),
    knex('images').insert(
      { title: 'Bridesmaids',
        description: 'Bridesmaids getting ready for the ceremony to start.',
        featured: 'true',
        category: 'wedding, portrait',
        src: '/images/G-1350x900.jpg',
        image_owner: 4
      }),
    knex('images').insert(
      { title: 'Morning is hard',
        description: 'Portrait of a loved one waking up.',
        featured: 'true',
        category: 'portrait',
        src: '/images/IMG_3954-1350x900.jpg',
        image_owner: 4
      }),
    knex('images').insert(
      { title: 'Closer Inspection',
        description: 'Portrait of a sibling.',
        featured: 'true',
        category: 'portrait',
        src: '/images/IMG_4140-1350x900.jpg',
        image_owner: 4
      }),
    knex('images').insert(
      { title: 'The Square',
        description: 'A historic building someplace romantic.',
        featured: 'false',
        category: 'landscape',
        src: '/images/IMG_6978-1350x900.jpg',
        image_owner: 4
      }),
    knex('images').insert(
      { title: 'Minis',
        description: 'Woman resting on a mini on a suny day.',
        featured: 'true',
        category: 'portrait, car',
        src: '/images/IMG_7264-1350x900.jpg',
        image_owner: 4
      }),
    knex('images').insert(
      { title: 'Bug',
        description: 'An old VW Bug in all it\'s glory',
        featured: 'false',
        category: 'portrait, car',
        src: '/images/IMG_7480-1347x900.jpg',
        image_owner: 4
      }),
    knex('images').insert(
      { title: 'Dunes',
        description: 'Sand dunes at the beach.',
        featured: 'false',
        category: 'landscape, beach',
        src: '/images/IMG_7696-1350x900.jpg',
        image_owner: 4
      }),
    knex('images').insert(
      { title: 'Preperation',
        description: 'A Bride dressing for her wedding.',
        featured: 'false',
        category: 'portrait, wedding',
        src: '/images/K-1350x900.jpg',
        image_owner: 4
      }),
    knex('images').insert(
      { title: 'The Ultimate',
        description: 'Gorgeous cupcakes sitting on a table for a wedding.',
        featured: 'false',
        category: 'wedding, food, decor',
        src: '/images/O-1350x900.jpg',
        image_owner: 4
      }),
    knex('images').insert(
      { title: 'Happy Family',
        description: 'A happy family expecting a new member.',
        featured: 'false',
        category: 'portrait, children, family',
        src: '/images/jennrepp_portraits_001.jpg',
        image_owner: 5
      }),
    knex('images').insert(
      { title: 'Cute',
        description: 'A young girl in the summer.',
        featured: 'true',
        category: 'portrait, children',
        src: '/images/jennrepp_portraits_002.jpg',
        image_owner: 5
      }),
    knex('images').insert(
      { title: 'Sweet',
        description: 'A young girl among the dasies.',
        featured: 'true',
        category: 'portrait, children',
        src: '/images/jennrepp_portraits_003.jpg',
        image_owner: 5
      }),
    knex('images').insert(
      { title: 'Playtime',
        description: 'A portrait of a young boy and his toys.',
        featured: 'false',
        category: 'portrait, children',
        src: '/images/jennrepp_portraits_005.jpg',
        image_owner: 5
      }),
    knex('images').insert(
      { title: 'Joy',
        description: 'A baby ni the hands of a loved one.',
        featured: 'true',
        category: 'portrait, baby, family',
        src: '/images/jennrepp_portraits_007.jpg',
        image_owner: 5
      }),
    knex('images').insert(
      { title: 'Young and Youngest',
        description: 'Sister and new baby getting to know each other.',
        featured: 'true',
        category: 'portrait, baby, family, children',
        src: '/images/jennrepp_portraits_009.jpg',
        image_owner: 5
      }),
    knex('images').insert(
      { title: 'The Center of Attention',
        description: 'A happy couple and their faithful best friend.',
        featured: 'true',
        category: 'portrait, family, dog, animals',
        src: '/images/jennrepp_portraits_012.jpg',
        image_owner: 5
      }),
    knex('images').insert(
      { title: 'Cat Freaks',
        description: 'A couple in their home with their furry babies on proud display.',
        featured: 'true',
        category: 'portrait, family, cat, animals',
        src: '/images/jennrepp_portraits_013.jpg',
        image_owner: 5
      }),
    knex('images').insert(
      { title: 'Young Family',
        description: 'Portrait of a young family.',
        featured: 'false',
        category: 'portrait, family, baby',
        src: '/images/jennrepp_portraits_015.jpg',
        image_owner: 5
      }),
    knex('images').insert(
      { title: 'Hoooo are you?',
        description: 'Portrait of a costumed child on the couch.',
        featured: 'true',
        category: 'portrait, family, baby',
        src: '/images/jennrepp_portraits_017.jpg',
        image_owner: 5
      }),
    knex('images').insert(
      { title: 'The Happiest Guy',
        description: 'Portrait of a baby boy all dressed up in a chair.',
        featured: 'false',
        category: 'portrait, family, baby',
        src: '/images/jennrepp_portraits_019.jpg',
        image_owner: 5
      }),
    knex('images').insert(
      { title: '2 + 1',
        description: 'A portrait of young siblings.',
        featured: 'true',
        category: 'portrait, family, children',
        src: '/images/jennrepp_portraits_021.jpg',
        image_owner: 5
      }),
    knex('images').insert(
      { title: 'Summer Vacation',
        description: 'Visiting the ocean on a beautiful sunny day.',
        featured: 'false',
        category: 'portrait, family, children',
        src: '/images/jennrepp_portraits_023.jpg',
        image_owner: 5
      }),
    knex('images').insert(
      { title: 'Snuggle Bunch',
        description: 'Two siblings together on a bed.',
        featured: 'true',
        category: 'portrait, family, children',
        src: '/images/jennrepp_portraits_027.jpg',
        image_owner: 5
      }),
    knex('images').insert(
      { title: 'Desk Dog on the Job',
        description: 'The best coworker.',
        featured: 'true',
        category: 'portrait, pet, dog, puppy, animal',
        src: '/images/Otis.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Laying in the Sun',
        description: 'Nap time',
        featured: 'false',
        category: 'portrait, pet, dog, puppy, animal',
        src: '/images/CrazyEyes.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Tabby Cat',
        description: 'Meow',
        featured: 'false',
        category: 'portrait, pet, cat, kitty, kitten, stray, animal',
        src: '/images/TorontoCat.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Beach Dog',
        description: 'Ocean spray',
        featured: 'true',
        category: 'portrait, pet, dog, puppy, animal',
        src: '/images/SydneyDog.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Lola the Pug',
        description: 'Enjoying a day at the park',
        featured: 'false',
        category: 'portrait, pet, dog, puppy, animal',
        src: '/images/Lola.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Patiently Waiting',
        description: 'Temporarily abandoned for Kmart',
        featured: 'false',
        category: 'portrait, pet, dog, puppy, animal',
        src: '/images/KmartDoxie.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Little Blue Penguin',
        description: 'Emerging from the rocks at St. Kilda Beach, Melbourne',
        featured: 'false',
        category: 'portrait, wild, penguin, animal',
        src: '/images/LilBluePenguin.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Spread your Wings',
        description: 'Beautiful butterfly',
        featured: 'false',
        category: 'portrait, butterfly, animal',
        src: '/images/Butterfly.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Not a pig, not a hamster',
        description: 'Round boi',
        featured: 'false',
        category: 'portrait, animal, guinea pig',
        src: '/images/GuineaPig.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Best Friends Forever',
        description: 'True friendship',
        featured: 'false',
        category: 'portrait, animal, bunny, rabbit, guinea pig',
        src: '/images/GuineaBunny.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Tongue Out',
        description: 'Pure happiness',
        featured: 'true',
        category: 'portrait, pet, dog, puppy',
        src: '/images/BeachCollie.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Leisurely Lay',
        description: 'Stray cat in Kobe',
        featured: 'false',
        category: 'portrait, animal, cat, stray, kitten',
        src: '/images/KobeCat.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Alert',
        description: 'Waiting for its next meal',
        featured: 'false',
        category: 'portrait, wild, hawk, bird',
        src: '/images/Hawk.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Sheep Community',
        description: 'Cotton ball hills',
        featured: 'false',
        category: 'animal, sheep',
        src: '/images/HobbitSheep.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Why Hello',
        description: 'Curiousity',
        featured: 'false',
        category: 'portrait, animal, wild, deer',
        src: '/images/NaraDeer.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Are those rice crackers?',
        description: '-bows-',
        featured: 'false',
        category: 'portrait, animal, wild, deer',
        src: '/images/NaraDeer2.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Stylish Pup',
        description: 'Even fashion trendsetters need to nap',
        featured: 'false',
        category: 'portrait, animal, dog, puppy',
        src: '/images/NaraDog.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Koala Family',
        description: 'A bond between mother and child',
        featured: 'false',
        category: 'portrait, wild, koala, joey',
        src: '/images/Koala.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Feast',
        description: 'Rotund squirrel',
        featured: 'false',
        category: 'portrait, animal, wild, squirrel',
        src: '/images/StanleySquirrel.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Beach Day',
        description: 'Enjoying the sun',
        featured: 'false',
        category: 'portrait, animal, dog, puppy, pet',
        src: '/images/StKildaDog.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Stoic Fellow',
        description: 'Capybara',
        featured: 'false',
        category: 'animal, capybara, portrait',
        src: '/images/Capybara.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Stoic Fellow Looking Away',
        description: 'Capybara',
        featured: 'false',
        category: 'portrait, animal, capybara',
        src: '/images/Capybara2.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Happy Husky',
        description: 'Husky at the dog park',
        featured: 'false',
        category: 'portrait, animal, wild, deer',
        src: '/images/HydePark.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Supernova',
        description: 'Australian Shepherd puppy, Nova',
        featured: 'false',
        category: 'portrait, animal, dog, puppy, pet',
        src: '/images/Nova.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Rocking the High Pony',
        description: 'Beautiful girl Molly',
        featured: 'false',
        category: 'portrait, pet, puppy, dog',
        src: '/images/Molly.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Harley Davidson',
        description: 'He real thirsty',
        featured: 'false',
        category: 'portrait, animal, dog, pet, puppy',
        src: '/images/Harley.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Snacktime',
        description: 'Nom nom nom',
        featured: 'false',
        category: 'portrait, animal, wild, chipmunk',
        src: '/images/Chipmunk.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Just Keep Swimming',
        description: 'Quacker',
        featured: 'false',
        category: 'portrait, animal, wild, duck, bird',
        src: '/images/Duck.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Poppin Out to Say Hello',
        description: 'LOOK AT MY BABY',
        featured: 'true',
        category: 'portrait, wild, kangaroo, joey',
        src: '/images/Kangaroo.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'So Sleepy',
        description: 'All I wanna do is eat and sleep bro',
        featured: 'false',
        category: 'portrait, animal, wild, koala',
        src: '/images/Koala2.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Soft Fur, Softer Heart',
        description: 'ITS SO FLUFFY IM GONNA DIE',
        featured: 'false',
        category: 'portrait, animal, alpaca',
        src: '/images/Alpaca.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Lil Blue Birb',
        description: 'Sho Shmol',
        featured: 'false',
        category: 'portrait, animal, wild, bird',
        src: '/images/LilBirb.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Rainbow Birb',
        description: 'Watching the world from above',
        featured: 'false',
        category: 'portrait, wild, bird, animal',
        src: '/images/PerthBirb.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'To the Right',
        description: 'Whoosh',
        featured: 'false',
        category: 'portrait, animal, wild, bird',
        src: '/images/PerthBirb2.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Quokka Joey',
        description: 'Not a mouse, not even a rodent, but a...',
        featured: 'false',
        category: 'portrait, animal, wild, quokka',
        src: '/images/Quokka.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Another Quokka Joey',
        description: 'Bathed in sun',
        featured: 'false',
        category: 'portrait, animal, wild, quokka',
        src: '/images/Quokka2.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Quokka Fam',
        description: 'Dont ever talk to me or my son ever again',
        featured: 'false',
        category: 'portrait, animal, wild, quokka',
        src: '/images/Quokka3.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Wanna Be Friends?',
        description: 'If happiness was an animal',
        featured: 'true',
        category: 'portrait, animal, wild, quokka',
        src: '/images/Quokka4.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Leave Me Alone',
        description: 'Shuns',
        featured: 'false',
        category: 'portrait, animal, pet, cat, kitten',
        src: '/images/Catfe.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Stuck Inside',
        description: 'Watching the world from above',
        featured: 'false',
        category: 'portrait, pet, cat, kitten, animal',
        src: '/images/Catfe2.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Wallflower',
        description: 'People watching',
        featured: 'false',
        category: 'portrait, pet, cat, kitten, animal',
        src: '/images/Catfe3.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Emerald Eyes',
        description: 'Jewel cateye',
        featured: 'false',
        category: 'portrait, pet, cat, kitten, animal',
        src: '/images/Catfe4.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Cloud on the Ground',
        description: 'Floofer',
        featured: 'false',
        category: 'portrait, animal, pet, dog, puppy',
        src: '/images/QuebecCity.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Magpie',
        description: 'Australias crow',
        featured: 'false',
        category: 'portrait, animal, bird, magpie',
        src: '/images/Magpie.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Ripple Effect',
        description: 'Float along',
        featured: 'false',
        category: 'portrait, animal, wild, bird, duck',
        src: '/images/Duck2.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Balancing on One Foot',
        description: 'Leg goals tbh',
        featured: 'false',
        category: 'portrait, wild, bird, animal',
        src: '/images/Heron.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Fluffy Butts',
        description: 'Squad goals',
        featured: 'false',
        category: 'portrait, animal, wild, bird, duckling',
        src: '/images/DuckButts.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Sitting in a Tree, K-I-S-S-I-N-G',
        description: 'On a date',
        featured: 'false',
        category: 'portrait, animal, wild, bird',
        src: '/images/AdelaideBirbs.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Charlie the Cockatoo',
        description: 'What a weave',
        featured: 'true',
        category: 'portrait, animal, pet, bird, cockatoo',
        src: '/images/Charlie.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Photogenic Shibe',
        description: 'Yes I know Im handsome',
        featured: 'false',
        category: 'portrait, animal, pet, dog, puppy',
        src: '/images/Shiba.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Crazy Eyes',
        description: 'AKA Heterochromia',
        featured: 'false',
        category: 'portrait, animal, pet, dog, puppy',
        src: '/images/CrazyEyes2.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Let Me Sleep',
        description: 'Why do you do this to me?!',
        featured: 'false',
        category: 'portrait, animal, pet, dog, puppy',
        src: '/images/Cola.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Again?!',
        description: 'Let me enter my eternal slumber',
        featured: 'false',
        category: 'portrait, animal, pet, dog, puppy',
        src: '/images/Cola2.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Leg Out',
        description: 'Chillin',
        featured: 'false',
        category: 'portrait, animal, pet, dog, puppy',
        src: '/images/Arklay.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Paws',
        description: 'The couch is too comfy',
        featured: 'false',
        category: 'portrait, animal, pet, dog, puppy',
        src: '/images/Cola3.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Side Sleeper',
        description: 'Comfy pup',
        featured: 'false',
        category: 'portrait, animal, pet, dog, puppy',
        src: '/images/Arklay2.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Hanging Off the Couch',
        description: 'Stay cool',
        featured: 'false',
        category: 'portrait, animal, pet, dog, puppy',
        src: '/images/Arklay3.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Feed Me Already',
        description: '??????',
        featured: 'false',
        category: 'portrait, animal, pet, dog, puppy',
        src: '/images/Doris.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Sweet Grass',
        description: 'The grass is as tall as my stumps',
        featured: 'false',
        category: 'portrait, animal, pet, dog, puppy',
        src: '/images/Doris2.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Loooong Tongue',
        description: 'So happy',
        featured: 'false',
        category: 'portrait, animal, pet, dog, puppy',
        src: '/images/Loki.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Always Smiling',
        description: 'I love you',
        featured: 'false',
        category: 'portrait, animal, pet, dog, puppy',
        src: '/images/Loki2.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Find a Reason to Smile',
        description: 'Like this dog',
        featured: 'false',
        category: 'portrait, animal, pet, dog, puppy',
        src: '/images/Loki3.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Legs Crossed',
        description: 'Grass Pupper',
        featured: 'false',
        category: 'portrait, animal, pet, dog, puppy',
        src: '/images/Loki4.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Flower Boy',
        description: 'The dog is prettier than the flowers',
        featured: 'true',
        category: 'portrait, animal, pet, dog, puppy',
        src: '/images/Loki5.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'The Light of my Life',
        description: 'Sun shines upon him',
        featured: 'false',
        category: 'portrait, animal, pet, dog, puppy',
        src: '/images/Loki6.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Medium Blue Birb',
        description: 'Chirp',
        featured: 'false',
        category: 'portrait, animal, bird',
        src: '/images/QueenE.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Dingo',
        description: 'Actual wild doggo',
        featured: 'false',
        category: 'portrait, animal, wild, dingo',
        src: '/images/Dingo.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Lil Legs',
        description: 'Lil sad but its ok',
        featured: 'false',
        category: 'portrait, animal, pet, dog, puppy',
        src: '/images/Doris3.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Sad Eyes',
        description: 'Even though my life is literally perfect',
        featured: 'false',
        category: 'portrait, animal, pet, dog, puppy',
        src: '/images/Doris4.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Stumps Out',
        description: 'Its hard to be this cute',
        featured: 'false',
        category: 'portrait, animal, pet, dog, puppy',
        src: '/images/Doris5.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'My Best Friend',
        description: 'Ballin',
        featured: 'false',
        category: 'portrait, animal, pet, dog, puppy',
        src: '/images/Doris6.jpg',
        image_owner: 9
      }),
    knex('images').insert(
      { title: 'Grass Feels So Good',
        description: 'Let me stay here forever',
        featured: 'true',
        category: 'portrait, animal, pet, dog, puppy',
        src: '/images/Doris7.jpg',
        image_owner: 9
      })
  ]);
};