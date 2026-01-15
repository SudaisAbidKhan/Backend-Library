# API Documentation

## Base URL

https://localhost:4000/

---

## Task APIs

### Add new Book

**URL:** `/api/book/add-book`  
**Method:** `POST`

**Request Body:**

```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "genre": "Fiction",
  "publishedYear": "1925-04-10T00:00:00.000Z",
  "available": true
}
```

---

### Get all Books

**URL:** `/api/book/get-all-book`  
**Method:** `GET`

---

### Get single Book

**URL:** `/api/book/get-single-book/:_id`  
**Method:** `GET`

---

### Get single Book Available

**URL:** `/api/book/get-single-book-available?available=true`  
**Method:** `GET`

---

### Update single Book

**URL:** `/api/book/update-book/:_id`  
**Method:** `PUT`

```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "genre": "Fiction",
  "publishedYear": "1925-04-10T00:00:00.000Z",
  "available": false
}
```

---

### Delete single Book

**URL:** `/api/book/delete-book/:_id`  
**Method:** `DELETE`

---
