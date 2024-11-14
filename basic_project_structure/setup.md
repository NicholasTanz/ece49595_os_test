```markdown
## Basic Project Setup

### Prerequisites
Before running the project with `docker-compose up`, make sure you have the following dependencies installed:

1. **Docker**: Ensure that Docker and Docker Compose are installed on your machine. You can install Docker from [here](https://www.docker.com/get-started).

2. **Node.js**: Ensure that you have Node.js installed to build the React frontend. You can download it from [here](https://nodejs.org/).

3. **Python**: The Flask backend requires Python. Make sure you have Python 3.x installed. You can install it from [here](https://www.python.org/downloads/).

### Installing Dependencies

#### 1. **Backend (Flask) Dependencies**
The backend is built with **Flask** and uses the following dependencies:
- Flask
- Flask-CORS (for handling Cross-Origin Resource Sharing)
- psycopg2 (for PostgreSQL database connection)

To install backend dependencies:

1. Navigate to the backend folder:
   cd comp-backend

2. Create a virtual environment and activate it:
   python3 -m venv venv
   source venv/bin/activate   # On Windows: venv\Scripts\activate

3. Install Python dependencies:
   pip install <dependency>

#### 2. **Frontend (React) Dependencies**

The frontend is built with **React** and uses **VexFlow** and **Tone.js** for rendering musical scores and handling playback.

To install frontend dependencies:

1. Navigate to the frontend folder:
   ```bash
   cd comp-frontend
   ```

2. Install Node.js dependencies:
   ```bash
   npm install
   ```

### Docker Setup

To run the entire project (frontend + backend + database) using Docker and Docker Compose, follow these steps:

1. Ensure Docker and Docker Compose are installed on your machine.
   
2. Navigate to the root project directory (where the `docker-compose.yaml` file is located).

3. Run the following command to start the containers:
   ```bash
   docker-compose up --build
   ```

   This will:
   - Build the frontend and backend Docker images.
   - Start the services (frontend, backend, and database) as containers.

### Backend Configuration

- The backend is a **Flask** API that listens on port `5000`. It provides an endpoint to fetch score data.
- It can interact with a **PostgreSQL** database, but in this setup, it serves only basic API routes for testing.

### Frontend Configuration

- The frontend is a **React** app that interacts with the Flask backend. It should be accessible at `http://localhost:3000/`.

### Stopping the Containers

To stop the containers once you're done, run the following:

```bash
docker-compose down
```

This will stop and remove all containers.