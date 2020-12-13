var faker = require('faker');
const { uuid } = require('uuidv4');
const { uniq } = require('lodash');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const getMeRandomAmenities = (els) => {
    const arry = ['free_parking','free_wifi','pets','restaurant','gym','pool','spa'];
    var result = [];
    for (let i = 0; i < els; i++) {
        result.push(arry[Math.floor(Math.random()*arry.length)]);
    }
    return uniq(result);
};

const generateRooms = count => {
    const name = ["Single",
        "Double",
        "Triple",
        "Quad",
        "Queen",
        "King",
        "Twin",
        "Double-double",
        "Studio",
        "Deluxe-suite"];

    let results = [];
    for (let id = 0; id < count; id++) {
        results.push({
            "id":  uuid(),
            "name": name[Math.floor(Math.random()*name.length)],
            "description": faker.lorem.paragraph(),
            "price_in_usd": faker.random.number({
                'min': 100,
                'max': 1000,
                'precision': 1
            }),
            "max_occupancy": Number(faker.random.number({
                'min': 1,
                'max': 5,
            }))

        });
    }

    return results;
};

const callUnsplash = async count  => {
   try {
       const response = await  axios.get(`https://api.unsplash.com/photos/random/?query=hotel&count=${count}`,
           { headers: { Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`}});

       return response.data.map(image => image.urls.full)

   } catch (err) {
       return []
   }
}

const getMeImages = async count => {
    const result = await callUnsplash(count);

    return result;
};

const generateHotels = async () => {
    let results = [];
    for (let id = 0; id < 1; id++) {
        const categories = ['low', 'medium', 'high'];

        results.push({
            "id": uuid(),
            "name": `${faker.name.findName()} Hotel`,
            "description": faker.lorem.paragraphs(),
            "distance_to_venue": faker.random.number({
                'min': 100,
                'max': 1000
            }),
            "rating": Number(faker.random.number({
                'min': 0,
                'max': 5,
                'precision': 0.1
            }).toFixed(1)),
            "price_category":  categories[Math.floor(Math.random() * categories.length)],
            "amenities": getMeRandomAmenities(faker.random.number({
                'min': 1,
                'max': 7,
            })),
            "images": await getMeImages(faker.random.number({ 'min': 2, 'max': 10 })),
            rooms: generateRooms(Number(faker.random.number({
                'min': 5,
                'max': 30,
            }))),
        });
    }

    return results;
};

module.exports = {
    getHotels: async () => {
        return await generateHotels();
    },
    getUser: () => ([{ id: 1, name: 'Jane', last_name: 'Doe', email: 'jane.doe@gmail.com', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80' }])
};
