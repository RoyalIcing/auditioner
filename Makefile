install:
	npm ci

test:
	npm t

build:
	npm run build

toc:
	npx doctoc README.md --maxlevel 3 --notitle
