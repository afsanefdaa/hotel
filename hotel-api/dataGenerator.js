var faker = require('faker');
const { uuid } = require('uuidv4');

const removeDuplicate = array => [... new Set(array)];

const getMeRandomAmenities = (els) => {
    const arry = ['free_parking','free_wifi','pets','restaurant','gym','pool','spa'];
    var result = [];
    for (let i = 0; i < els; i++) {
        result.push(arry[Math.floor(Math.random()*arry.length)]);
    }
    return removeDuplicate(result);
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

const getMeImages = count => {
    const arry = [
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        "https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        "https://images.unsplash.com/photo-1553653924-39b70295f8da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        "https://images.unsplash.com/photo-1519449556851-5720b33024e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80",
        "https://images.unsplash.com/photo-1515362778563-6a8d0e44bc0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        "https://images.unsplash.com/photo-1536625737227-92a1fc042e7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    ];
    var result = [];
    for (let i = 0; i < count; i++) {
        result.push(arry[Math.floor(Math.random()*arry.length)]);
    }
    return removeDuplicate(result);
};

const generateHotels = () => {
    let results = [];
    for (let id = 0; id < 34; id++) {
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
            "images": getMeImages(faker.random.number({ 'min': 2, 'max': 10 })),
            rooms: generateRooms(Number(faker.random.number({
                'min': 5,
                'max': 30,
            }))),
        });
    }

    return results;
};

module.exports = { hotels: generateHotels(), users: { id: 1, name: 'Jane', last_name: 'Doe', email: 'jane.doe@gmail.com', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80' }};
