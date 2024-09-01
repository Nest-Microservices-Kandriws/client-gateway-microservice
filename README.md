# Client Gateway Microservice

This is the Client Gateway Microservice, built with [NestJS](https://nestjs.com/). It serves as an intermediary between the client and other microservices such as the Products Microservice and the Orders Microservice. The Client Gateway Microservice uses TCP connections to efficiently communicate with these services, ensuring fast and reliable data exchange.

## Features
- **TCP Connectivity**: Secure and efficient TCP connections to microservices.
- **Scalable Architecture**: Built on top of NestJS, leveraging its modular architecture for easy scalability.
- **Error Handling**: Robust error handling mechanisms to ensure smooth communication between microservices.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: v16.x or higher
- **npm**: v7.x or higher (comes with Node.js)
- **Nest CLI**: Install globally using `npm install -g @nestjs/cli`
- **Microservices**: The Products Microservice and Orders Microservice should be running and accessible.

## Getting Started

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/client-gateway-microservice.git
cd client-gateway-microservice
```

### 2. Install Dependencies

Install the necessary dependencies using npm:

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root of the project to configure environment variables:

```env
# TCP Connection Configuration
PRODUCTS_MICROSERVICE_HOST=localhost
PRODUCTS_MICROSERVICE_PORT=3001
```

Adjust the values according to your environment setup.

### 4. Running the Microservice

To start the microservice in development mode, use the following command:

```bash
npm run start:dev
```

For production mode:

```bash
npm run start:prod
```

### 5. Testing the Microservice

NestJS comes with a built-in testing framework. To run the unit tests for the microservice:

```bash
npm run test
```

## Project Structure

Here is a brief overview of the project structure:

- **`app.module.ts`**: The root module that imports all other modules.
- **`main.ts`**: The main entry point of the application where the NestJS application is created.
- **`products/`**: Contains the logic related to the Products Microservice.

## Common Issues

### 1. Connection Refused

If you encounter a `Connection Refused` error, ensure that the Products Microservice and Orders Microservice are running and that the host and port configurations in the `.env` file are correct.

### 2. Port Conflicts

Ensure that the ports specified in the `.env` file are not being used by other services. If they are, modify the port numbers accordingly.

## Contributing

If you would like to contribute to this project, please fork the repository and create a pull request. Contributions, issues, and feature requests are welcome!

