GIT_TAG := $(shell git describe --tags --always --dirty)

pull:
	-docker pull jackhoman/idiet-frontend:${GIT_TAG}

build: pull
	docker build . -t jackhoman/idiet-frontend:${GIT_TAG}

push: build
	docker push jackhoman/idiet-frontend:${GIT_TAG}

run: build
	docker run --name idiet-frontend --rm -d -p 3000:3000 jackhoman/idiet-frontend:${GIT_TAG}

stop:
	echo "\n\n"
	echo "$(shell date)" >> idiet-docker-logs.log
	docker logs idiet-frontend >> idiet-docker-logs.log
	docker stop idiet-frontend

