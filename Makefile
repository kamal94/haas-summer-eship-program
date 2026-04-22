deploy:
	npm run build
	npx wrangler pages deploy dist --project-name haas-summer-program --branch main --commit-dirty=true
