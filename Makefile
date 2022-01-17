STYLE := tailwindcss -c tailwind.cjs -i tailwind.css -o src/style.css
BUILD := node esbuild.js

build:
	mkdir -p out
	npx ${STYLE}
	npx ${BUILD}
	cp src/index.html out/index.html

build-watch:
	mkdir -p out
	cp src/index.html out/index.html
	npx ${BUILD} -w

style-watch:
	npx ${STYLE} -w

clean:
	rm -fr out src/style.css

.PHONY: build build-watch style-watch clean
