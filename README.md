# Avanti-Bootcamp-Challenge02
Challenge proposed in Atlantico's Avanti bootcamp

# Express API Documentation

Express API documentation for managing players, teams, and championships. This API provides endpoints to perform CRUD (Create, Read, Update, Delete) operations for these entities.

## Player Routes

| Route               | Method | Description                               | Controller            |
|---------------------|--------|-------------------------------------------|-----------------------|
| `/players`          | GET    | Retrieve a list of all players.          | `findAllPlayers.handle` |
| `/player/:id`       | GET    | Retrieve a player by their unique ID.    | `findOnePlayer.handle`  |
| `/player`           | POST   | Create a new player.                     | `createPlayer.handle`  |
| `/player/:id`       | PUT    | Update a player's information by ID.     | `updatePlayer.handle`  |
| `/player/:id`       | DELETE | Delete a player by ID.                   | `deletePlayer.handle`  |

### Create Player (POST /player):

**Required Data:**
- `playerName` (String): The name of the player.
- `playerNumber` (Int): The player's number.

**Optional Data:**
- `associatedTeamId` (String): The ID of the team associated with the player.

### Update Player by ID (PUT /player/:id):

**Optional Data:**
- `playerName` (String): The updated name of the player.
- `playerNumber` (Int): The updated player's number.
- `associatedTeamId` (String): The updated ID of the team associated with the player.

## Team Routes

| Route           | Method | Description                         | Controller        |
|-----------------|--------|-------------------------------------|-------------------|
| `/team`         | POST   | Create a new team.                  | `createTeam.handle` |
| `/team/:id`     | DELETE | Delete a team by ID.               | `deleteTeam.handle` |
| `/teams`        | GET    | Retrieve a list of all teams.      | `findAllTeam.handle` |
| `/team/:id`     | GET    | Retrieve a team by its unique ID.  | `findOneTeam.handle` |
| `/team/:id`     | PUT    | Update a team's information by ID. | `updateTeam.handle` |

### Create Team (POST /team):

**Required Data:**
- `teamName` (String): The name of the team.

**Optional Data:**
- None.

### Update Team by ID (PUT /team/:id):

**Optional Data:**
- `teamName` (String): The updated name of the team.

## Championship Routes

| Route               | Method | Description                                           | Controller                |
|---------------------|--------|-------------------------------------------------------|---------------------------|
| `/championship`     | POST   | Create a new championship.                            | `createChampionship.handle` |
| `/championship/:id` | DELETE | Delete a championship by its unique ID.              | `deleteChampionship.handle` |
| `/championships`    | GET    | Retrieve a list of all championships with teams.    | `findAllChampionships.handle` |
| `/championship/:id` | GET    | Retrieve a championship by its unique ID with teams. | `findOneChampionship.handle` |
| `/championship/:id` | PUT    | Update a championship by its unique ID with teams.   | `updateChampionship.handle` |

### Create Championship (POST /championship):

**Required Data:**
- `championshipName` (String): The name of the championship.
- Include an empty array when there are no teams associated with the championship on creation.

**Optional Data:**
- `startingDate` (DateTime): The starting date of the championship (defaulted to the current date).
- `endDate` (DateTime): The end date of the championship (defaulted to one year from the current date).
- `competingTeams` (Array of Team IDs): An array of team IDs that will compete in the championship. 

### Update Championship by ID (PUT /championship/:id):

**Optional Data:**
- `championshipName` (String): The updated name of the championship.
- `startingDate` (DateTime): The updated starting date of the championship.
- `endDate` (DateTime): The updated end date of the championship.
- `competingTeams` (Array of Team IDs): An array of updated team IDs that will compete in the championship.

These definitions should help you understand what data is required and optional for each CRUD operation on your Player, Team, and Championship entities. Be sure to include the required data when making POST or PUT requests and provide any optional data as needed for your specific use case.

