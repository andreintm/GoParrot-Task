DOCKER_COMPOSE = docker-compose -p goparrot
TOOLS = $(DOCKER_COMPOSE) run --rm app

up:
	@$(DOCKER_COMPOSE) up -d --no-recreate
down:
	@$(DOCKER_COMPOSE) down --remove-orphans
build:
	@$(DOCKER_COMPOSE) build --force-rm
sh:
	@$(DOCKER_COMPOSE) exec app sh
logs:
	@$(DOCKER_COMPOSE) logs -f


