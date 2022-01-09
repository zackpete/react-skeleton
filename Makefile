STYLE := tailwindcss -c tailwind.cjs -i src/style.css -o out/style.css
BUILD := node esbuild.js

build:
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
	rm -fr out

.PHONY: build build-watch style-watch clean
