const express = require('express');

const app = express();

app.use(express.json());

let books = [
    {
        id: 100,
        name: "Mybook 1",
        price: 400
    },
    {
        id: 101,
        name: "Mybook 2",
        price: 500
    }
];

// GET: Retrieve all books
app.get('/book', (req, res) => {
    res.json(books);
});

// POST: Add a new book
app.post('/book', (req, res) => {
    const newb = {
        id: books.length + 1,
        name: req.body.name,
        price: req.body.price
    };

    books.push(newb);

    res.status(201).json({
        message: "Book added successfully",
        book: newb
    });
});

// PUT: Update an existing book
app.put('/book/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const book = books.find(b => b.id === id);

    if (!book) {
        return res.status(404).json({
            message: "Book id not found"
        });
    }

    book.name = req.body.name;
    book.price = req.body.price;

    res.json({
        message: "Book updated",
        book: book
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});