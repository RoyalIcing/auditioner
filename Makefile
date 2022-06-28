all_packages_json := $(wildcard packages/**/package.json)
all_packages_dirs := $(basename $(dir $(all_packages_json)))

list:
	@echo $(all_packages_dirs)

.PHONY: $(all_packages_dirs)
$(foreach package_dir,$(all_packages_dirs),$(package_dir)):
	cd $@ && pwd

install:
	cd packages/core && npm ci

test:
	cd packages/core && npm run test

build:
	cd packages/core && npm run build

toc:
	npx doctoc README.md --maxlevel 3 --notitle
