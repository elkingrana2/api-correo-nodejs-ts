# Up mongodb

```sh
docker-compose up -d mongodb
```

# Check

```sh
docker-compose ps
```

# Connect to container

```sh
docker-compose exec mongodb bash
```

## Connect with mongosh

```sh
mongosh "mongodb://root:root123@localhost:27017/?authMechanism=DEFAULT&tls=false"
```

```sh
show dbs
```

```sh
use("db_parking")
```
```sh
db.products.find()
```