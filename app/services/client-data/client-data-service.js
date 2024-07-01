// import fs from 'fs';

// export default function writeToDataFile(dataObject) {
//     const filePath = '../../../../glows-auto-detailing-data/data.json';
//     console.log('writeToDateFile',dataObject)
//     fs.readFile(filePath, 'utf8', (readErr, existingData) => {
//         let jsonData = [];

//         if (readErr) {
//             if (readErr.code === 'ENOENT') {
//                 existingData = '[]';
//             } else {
//                 console.error('Error reading file:', readErr);
//                 return;
//             }
//         } else {
//             try {
//                 jsonData = JSON.parse(existingData);
//                 jsonData.push(dataObject);
//                 fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), writeErr => {
//                     if (writeErr) {
//                         console.error('Error writing file:', writeErr);
//                         return;
//                     }
//                     console.log('Data appended to file successfully.');
//                 });
//             } catch (parseError) {
//                 console.error('Error parsing JSON:', parseError);
//                 return;
//             }
//         }

       
//     });
// }
 


// //create a meathod that uses the fs object to write a json file into the file system under the path /app/data/data.json
// //meathod should take an object created by the form and append it to the data.json file
