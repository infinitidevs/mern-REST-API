# MERN |  REST API using MongoDB, Express & NodeJS

## Populate the seed

To populate the exercises seed run the command:
      
      npm run seed

It will create a database `workout` with a collection `exercises` in your MongoDB.

## Start the server

To start the server run on your terminal: 

      npm run start

it will automatically connect to the MongoDB host `127.0.0.1` on the port `27017`.

To run the server on watch mode:

      npm run dev

## API Data Structure

The JSON Data that the API is gonna return has the following format:

```json
{
  "_id": "serial",
  "name": "Name of the exercise",
  "type": "Type of exercise: Push, Pull, Legs",
  "primary_muscles": "Main muscles involved",
  "url": "Youtube video of the exercise"
}
```

## Documentation for API Endpoints

All URIs are relative to _https://localhost:4001/api_

| HTTP request                       | Description        |
| ---------------------------------- | ---------------    |
| **GET** /exercises                 | Get Exercises      |
| **GET** /exercises/{exerciseId}    | Get Exercise By Id |
| **POST** /exercises                | Create Exercise    |
| **PUT** /exercises/{exerciseId}    | Update Exercise    |
| **DELETE** /exercises/{exerciseId} | Delete Exercise    |
