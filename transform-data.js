import { writeFileSync } from 'fs';

export const exportToJson = (data, filename) => {
  const content = JSON.stringify(data, null, 2);
  writeFileSync(filename, content, 'utf8', (err) => {
    if (err) throw err;
    console.log(`${filename} has been saved.`);
  });
};

export const exportToCsv = (data, filename) => {
  const csvRows = [
    'Name,Type,Address,Entity,Canton,Municipality,Latitude,Longitude,Phone,Email,Url,Owner'
  ]; // Header row
  data.forEach(item => {
    const row = [
      item.Name,
      item.Type,
      item.Address,
      item.Entity,
      item.Canton,
      item.Municipality,
      item.Latitude,
      item.Longitude,
      item.Phone,
      item.Email,
      item.Url || item.WebAddress || '', // Adjust for Url or WebAddress
      item.Owner
    ].map(field => `"${field}"`); // Enclose each field in quotes
    csvRows.push(row.join(','));
  });
  
  const content = csvRows.join('\n');
  writeFileSync(filename, content, 'utf8', (err) => {
    if (err) throw err;
    console.log(`${filename} has been saved.`);
  });
};

export const replaceChars = (schools) => schools.map(school => {
  const replaceChars = (str) => {
    const replacements = {
      'ć': 'c', 'č': 'c', 'ž': 'z', 'đ': 'dj', 'š': 's',
      'Ć': 'C', 'Č': 'C', 'Ž': 'Z', 'Đ': 'Dj', 'Š': 'S'
    };
    return str.replace(/[ćčžđšĆČŽĐŠ]/g, match => replacements[match]);
  };
  let modifiedString = {};
  for (let key in school) {
    if (typeof school[key] === 'string') {
      modifiedString[key] = replaceChars(school[key]);
    } else {
      modifiedString[key] = school[key];
    }
  }
  return modifiedString;
});