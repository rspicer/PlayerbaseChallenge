.PHONY: all build-backend build-frontend deploy

all: build-backend build-frontend

build-backend:
	npm install

build-frontend:
	cd ./playerbase-dota-frontend && npm install

filename = 'playerbase_'`date +'%s'`'.zip'

deploy: build-frontend
	rm -rf ./public/*

	cd ./playerbase-dota-frontend && npm run build
	cd ./playerbase-dota-frontend/build && cp -r * ../../public

	cp -r ./bin ./deploy
	cp -r ./public ./deploy
	cp ./app.js ./deploy
	cp ./package.json ./deploy
	cp ./package-lock.json ./deploy

	zip -r ${filename} ./deploy
	rm -rf ./deploy
	rm -rf ./public/*