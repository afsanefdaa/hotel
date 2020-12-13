const fs = require('fs');
const {flatten} = require('lodash');
const { getHotels, getUser } = require('./../dataGenerator')

// Helper to erase and write to a file
const writeFile = (path, content) => {
    const buffer = Buffer.from(content);

    return new Promise((resolve, reject) =>
        fs.open(path, 'a+', (err, file) => {
            if (err) return reject(err);

            return fs.write(file, buffer, 0, buffer.length, null, (err) => {
                if (err) return reject(err);
                return fs.close(file, () => resolve());
            });
        })
    );
};

// Helper to delete a file
const deleteFile = (path) => new Promise((resolve) => fs.unlink(path, () => resolve()));


(async () => {
   try {
       const namespaceHotel = 'hotels';
       const namespaceRoom = 'rooms';
       const namespaceUser = 'users';
       const outputDir = './static';
       const outputFileHotels = `${outputDir}/${namespaceHotel}.json`;
       const outputFileRooms = `${outputDir}/${namespaceRoom}.json`;
       const outputFileUsers = `${outputDir}/${namespaceUser}.json`;
       console.warn('\nStart fetching data!\n');

       const hotels = await getHotels();
       const rooms = hotels.map(el => el.rooms);
       const flattenRooms = flatten(rooms);
       const users = await getUser();

       await deleteFile(outputFileHotels);
       await deleteFile(outputFileRooms);
       await deleteFile(outputFileUsers);

       await writeFile(outputFileHotels, JSON.stringify(hotels));
       await writeFile(outputFileRooms, JSON.stringify(flattenRooms));
       await writeFile(outputFileUsers, JSON.stringify(users));

       console.warn('\nCompleted fetching data!\n');
   } catch (error) {
       console.log('\nError happened in fetching data!\n', error);
   }
})();
