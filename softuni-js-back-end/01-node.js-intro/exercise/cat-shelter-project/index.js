const http = require('http');
const { db } = require('./database.js');
const { indexTemplate, citeCss, indexCatTemplate, addBreedTemplate, addCatTemplate, catShelterTemplate,
    editCatTemplate, addCatOptionTemplate } = require('./views/templates.js');


const server = http.createServer(async (req, res) => {
    console.log('Server is called at: ' + req.url);


    if (req.method == 'POST') {
        if (req.url == '/database') {

            let body = '';
            req.on('data', (data) => {
                console.log('POST data received at: ' + req.url);
                body += data;
            });
            req.on('end', () => {
                console.log('POST response sent back to requester.');
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(body);
            });
        }

    } else if (req.method == 'GET') {
        if (req.url == '/' || req.url == '/index.html' || req.url == '/index') {
            const catsHTML = db.cats.map(cat => indexCatTemplate(cat.img, cat.name, cat.breed, cat.description)).join('');
            const indexHTML = indexTemplate.replace('{{cats}}', catsHTML);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(indexHTML);

        } else if (req.url == '/cats/add-breed') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(addBreedTemplate);

        } else if (req.url == '/cats/add-cat') {
            const breedsHTML = db.breeds.map(breed => addCatOptionTemplate(breed.name)).join('');
            const addCatHTML = addCatTemplate.replace('{{breeds}}', breedsHTML);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(addCatHTML);

        } else if (req.url == '/cat-shelter') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(catShelterTemplate);

        } else if (req.url == '/cats/edit-cat') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(editCatTemplate);

        } else if (req.url == '/styles/site.css') {
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.write(citeCss);

        } else if (req.url == '/database') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify(db, null, 2));

        }

        res.end();
    }

});

server.listen(5000, () => console.log('Server is running on port 5000...'));

