

## API Documentation: Blog Post Management

### Base URL
```
http://localhost:3000/api/blogs
```

### Available Routes

---

### 1. **Create a Blog Post**

- **Endpoint**: `POST /api/blogs`
- **Description**: Creates a new blog post.
- **Request Body** (JSON):
```json
{
  "title": "Blog Post Title",
  "imageUrl": "https://example.com/image.jpg",
  "author": "Author Name",
  "authorUrl": "https://authorprofile.com",
  "postUrl": "https://example.com/blog-post-url"
}
```
- **Response**:
  - **Success (201 Created)**:
    ```json
    {
      "_id": "newly_generated_id",
      "title": "Blog Post Title",
      "imageUrl": "https://example.com/image.jpg",
      "author": "Author Name",
      "authorUrl": "https://authorprofile.com",
      "postUrl": "https://example.com/blog-post-url",
      "timestamp": "2024-11-08T14:00:00.000Z"
    }
    ```
  - **Error (500 Internal Server Error)**:
    ```json
    {
      "error": "Failed to create blog post"
    }
    ```

---

### 2. **Get All Blog Posts**

- **Endpoint**: `GET /api/blogs`
- **Description**: Retrieves all blog posts.
- **Response**:
  - **Success (200 OK)**:
    ```json
    [
      {
        "_id": "blog_id_1",
        "title": "Blog Post Title",
        "imageUrl": "https://example.com/image1.jpg",
        "author": "Author Name",
        "authorUrl": "https://authorprofile1.com",
        "postUrl": "https://example.com/blog-post-url-1",
        "timestamp": "2024-11-08T14:00:00.000Z"
      },
      {
        "_id": "blog_id_2",
        "title": "Another Blog Post Title",
        "imageUrl": "https://example.com/image2.jpg",
        "author": "Author Name",
        "authorUrl": "https://authorprofile2.com",
        "postUrl": "https://example.com/blog-post-url-2",
        "timestamp": "2024-11-08T14:10:00.000Z"
      }
    ]
    ```
  - **Error (500 Internal Server Error)**:
    ```json
    {
      "error": "Failed to fetch blog posts"
    }
    ```

---

### 3. **Get a Single Blog Post**

- **Endpoint**: `GET /api/blogs/:id`
- **Description**: Retrieves a single blog post by its ID.
- **Path Parameter**:
  - `id` (required): The unique identifier of the blog post (e.g., `blog_id_1`).
- **Response**:
  - **Success (200 OK)**:
    ```json
    {
      "_id": "blog_id_1",
      "title": "Blog Post Title",
      "imageUrl": "https://example.com/image1.jpg",
      "author": "Author Name",
      "authorUrl": "https://authorprofile1.com",
      "postUrl": "https://example.com/blog-post-url-1",
      "timestamp": "2024-11-08T14:00:00.000Z"
    }
    ```
  - **Error (404 Not Found)**:
    ```json
    {
      "error": "Blog post not found"
    }
    ```

---

### 4. **Update a Blog Post**

- **Endpoint**: `PUT /api/blogs/:id`
- **Description**: Updates an existing blog post by its ID.
- **Path Parameter**:
  - `id` (required): The unique identifier of the blog post (e.g., `blog_id_1`).
- **Request Body** (JSON):
  ```json
  {
    "title": "Updated Blog Post Title",
    "imageUrl": "https://example.com/updated-image.jpg",
    "author": "Updated Author Name",
    "authorUrl": "https://updated-authorprofile.com",
    "postUrl": "https://example.com/updated-blog-post-url"
  }
  ```
- **Response**:
  - **Success (200 OK)**:
    ```json
    {
      "_id": "blog_id_1",
      "title": "Updated Blog Post Title",
      "imageUrl": "https://example.com/updated-image.jpg",
      "author": "Updated Author Name",
      "authorUrl": "https://updated-authorprofile.com",
      "postUrl": "https://example.com/updated-blog-post-url",
      "timestamp": "2024-11-08T14:20:00.000Z"
    }
    ```
  - **Error (404 Not Found)**:
    ```json
    {
      "error": "Blog post not found"
    }
    ```

---

### 5. **Delete a Blog Post**

- **Endpoint**: `DELETE /api/blogs/:id`
- **Description**: Deletes a blog post by its ID.
- **Path Parameter**:
  - `id` (required): The unique identifier of the blog post (e.g., `blog_id_1`).
- **Response**:
  - **Success (200 OK)**:
    ```json
    {
      "_id": "blog_id_1",
      "title": "Blog Post Title",
      "imageUrl": "https://example.com/image1.jpg",
      "author": "Author Name",
      "authorUrl": "https://authorprofile1.com",
      "postUrl": "https://example.com/blog-post-url-1",
      "timestamp": "2024-11-08T14:00:00.000Z"
    }
    ```
  - **Error (404 Not Found)**:
    ```json
    {
      "error": "Blog post not found"
    }
    ```

---

### CORS Configuration

- **Allowed Origins**: `['https://zeke-site.vercel.app', 'http://localhost:5173']`
- **Allowed Methods**: `['GET', 'POST', 'PUT', 'DELETE']`
- **Allowed Headers**: `['Content-Type']`

---

### Notes:
- **Authentication**: This API does not currently require authentication.
- **MongoDB**: The blog posts are stored in a MongoDB database, which must be connected via the `MONGO_URI` environment variable.

---

