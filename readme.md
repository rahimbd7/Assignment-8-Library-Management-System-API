# Library Management System API

![Library Management System](https://i.ibb.co.com/SDkfKXH1/https-dev-to-uploads-s3-amazonaws-com-uploads-articles-igua11pvuq4cf80d1dgz.png)

### Live Link: [Library Management System API](https://assignment-8-library-management-system-api.vercel.app)


## Base URL
```
https://assignment-8-library-management-system-api.vercel.app/api
```

## Endpoints

### 📚 Book Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/books` | Create a new book |
| `GET` | `/books` | Get all books |
| `GET` | `/books/:bookId` | Get a book by its ID |
| `PUT` | `/books/:bookId` | Update book details |
| `DELETE` | `/books/:bookId` | Delete a book |

### 👤 Member Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/members` | Create a new member |
| `GET` | `/members` | Get all members |
| `GET` | `/members/:memberId` | Get a member by their ID |
| `PUT` | `/members/:memberId` | Update member details |
| `DELETE` | `/members/:memberId` | Delete a member |

### 📖 Borrow & Return Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/borrow` | Borrow a book |
| `POST` | `/return` | Return a borrowed book |

### ⏳ Overdue Borrow List
| Method | Endpoint | Description |
|--------|---------|-------------|
| `GET` | `/borrow/overdue` | Get a list of overdue books |

## 📌 Usage
- Use the `POST` endpoints to create books and members.
- Use `GET` to retrieve book or member details.
- Borrow and return books using the respective endpoints.
- Check overdue books with the `/borrow/overdue` endpoint.

## 🚀 Deployment
The API is deployed on Vercel and can be accessed via the base URL provided.

## 🛠 Technologies Used
- Node.js
- Express.js
- Prisma
- PostgreSQL
- TypeScript

## 📩 Contact
For any issues or queries, please reach out via GitHub or email.

