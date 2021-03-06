# Backend

API Endpoints for "Airbnb Optimal Price 2"

#### users Schema

| field       | data type        | metadata                                            |
| :---------- | :--------------- | :-------------------------------------------------- |
| id          | unsigned integer | primary key, auto-increments, generated by database |
| username    | string           | required, unique                                    |
| password    | string           | required                                            |

#### listings Schema

| field        | data type        | metadata                                            |
| :----------- | :--------------- | :-------------------------------------------------- |
| id           | unsigned integer | primary key, auto-increments, generated by database |
| label        | string           | required                                            |
| neighborhood | string           | required                                            |
| accomodates  | integer          | required                                            |
| bedrooms     | integer          | required                                            |
| bathrooms    | float            | required                                            |
| room_type    | string           | required                                            |
| wifi         | boolean          | required                                            |
| tv           | boolean          | required                                            |
|Laptop_friendly_workspace| boolean | required                                          |
|family_kid_friendly | boolean    | required                                            |
|smoking_allowed | boolean        | required                                            |
|minimum_nights| integer          | required                                            |
| extra_people | integer          | required                                            |
| cleaning_fee | integer          | required                                            |
|optimal_price | integer          | coming from the data science endpoint               |
| users_id     | integer          | foreign key referencing users.id, required          |

# REGISTER A USER

- Request

POST /api/auth/register

- Response

HTTP 201 OK

Status: 201 OK
Content-Type: application/json
{
  message: "User has been created",
   user_id: saved.id,
  token
}

# LOGIN WITH A REGISTERED USER

- Request

POST /api/auth/login

- Response

HTTP 200 OK

Status: 200 OK
Content-Type: application/json
{
  message: `Welcome ${user.username}!`,
  user_id: `${user.id}`,
  token
}

# UPDATE USER

- Request

PUT /api/auth/user/:id

- Response

HTTP 200 OK

Status: 200 OK
Content-Type: application/json

Requires:
 user_id: id, and body

# DELETE USER

- Request

DELETE /api/auth/user/:id

- Response

HTTP 200 OK

Status: 200 OK
Content-Type: application/json
{ "message": "User deleted successfully." }

Requires:
  user_id: id

# GET LIST OF ALL LISTINGS FOR A USER

- Request

GET /api/user/:id/listings

- Response

HTTP 200 OK

Status: 200 OK
Content-Type: application/json
{ "listings": [] }

Requires:
 Authorization: token 
 users_id: id

# GET LIST OF ALL LISTINGS

- Request

GET /api/listings

- Response

HTTP 200 OK

Status: 200 OK
Content-Type: application/json
{ "listings": [] }

Requires header:
 Authorization: token 

# GET LISTING BY ID

- Request

GET /api/listings/:id

- Response

HTTP 200 OK

Status: 200 OK
Content-Type: application/json
{ listing }

Requires:
 Authorization: token 
 listings.id: id

# POST LISTING

- Request

POST /api/user/:id/listings

- Response

HTTP 201 OK

Status: 201 OK
Content-Type: application/json
{ listing }

Requires:
 Authorization: token 
 users_id: id

# UPDATE LISTING

- Request

PUT /api/listings/:id

- Response

HTTP 201 OK

Status: 201 OK
Content-Type: application/json
{ listing }

Requires header:
 Authorization: token 
 listings.id

# DELETE LISTING

- Request

DELETE /api/listings/:id

- Response

HTTP 200 OK

Status: 200 OK
Content-Type: application/json
{ "message": "Listing deleted successfully" }

Requires header:
 Authorization: token 
 listings.id: id
