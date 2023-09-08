# Avanti-Bootcamp-Challenge02
Challenge proposed in Atlantico's Avanti bootcamp

# Express API Documentation

Welcome to the Express API documentation for managing players, teams, and championships. This API provides endpoints to perform CRUD (Create, Read, Update, Delete) operations for these entities.

## Player Routes

### Get All Players

- **Route:** `/players`
- **Method:** GET
- **Description:** Retrieve a list of all players.
- **Controller:** `findAllPlayers.handle`

### Get Player by ID

- **Route:** `/player/:id`
- **Method:** GET
- **Description:** Retrieve a player by their unique ID.
- **Controller:** `findOnePlayer.handle`

### Create Player

- **Route:** `/player`
- **Method:** POST
- **Description:** Create a new player.
- **Controller:** `createPlayer.handle`

### Update Player by ID

- **Route:** `/player/:id`
- **Method:** PUT
- **Description:** Update a player's information by their unique ID.
- **Controller:** `updatePlayer.handle`

### Delete Player by ID

- **Route:** `/player/:id`
- **Method:** DELETE
- **Description:** Delete a player by their unique ID.
- **Controller:** `deletePlayer.handle`

## Team Routes

### Create Team

- **Route:** `/team`
- **Method:** POST
- **Description:** Create a new team.
- **Controller:** `createTeam.handle`

### Delete Team by ID

- **Route:** `/team/:id`
- **Method:** DELETE
- **Description:** Delete a team by its unique ID.
- **Controller:** `deleteTeam.handle`

### Get All Teams

- **Route:** `/teams`
- **Method:** GET
- **Description:** Retrieve a list of all teams.
- **Controller:** `findAllTeam.handle`

### Get Team by ID

- **Route:** `/team/:id`
- **Method:** GET
- **Description:** Retrieve a team by its unique ID.
- **Controller:** `findOneTeam.handle`

### Update Team by ID

- **Route:** `/team/:id`
- **Method:** PUT
- **Description:** Update a team's information by its unique ID.
- **Controller:** `updateTeam.handle`

## Championship Routes

### Create Championship

- **Route:** `/championship`
- **Method:** POST
- **Description:** Create a new championship.
- **Controller:** `createChampionship.handle`

### Delete Championship by ID

- **Route:** `/championship/:id`
- **Method:** DELETE
- **Description:** Delete a championship by its unique ID.
- **Controller:** `deleteChampionship.handle`

### Get All Championships

- **Route:** `/championships`
- **Method:** GET
- **Description:** Retrieve a list of all championships along with their associated teams.
- **Controller:** `findAllChampionships.handle`

### Get Championship by ID

- **Route:** `/championship/:id`
- **Method:** GET
- **Description:** Retrieve a championship by its unique ID along with its associated teams.
- **Controller:** `findOneChampionship.handle`

### Update Championship by ID

- **Route:** `/championship/:id`
- **Method:** PUT
- **Description:** Update a championship's information by its unique ID, including its associated teams.
- **Controller:** `updateChampionship.handle`

## Usage

- Make HTTP requests to the specified routes using your preferred API client or tool.
- Ensure you provide the necessary data in the request body when creating or updating entities.
- Use the provided route parameters (e.g., `:id`) to specify the target entity when retrieving, updating, or deleting.

Feel free to reach out if you have any questions or need further assistance with using the API.
