Run the Application¶
Option 1: Without Docker¶
Install Dependencies:

pnpm install
If pnpm is not installed, install it using:


sudo npm install -g pnpm
Start the Application:

pnpm run dev
This will start the Remix Vite development server. You will need Google Chrome Canary to run this locally if you use Chrome! It's an easy install and a good browser for web development anyway.
Option 2: With Docker¶
Prerequisites¶
Ensure Git, Node.js, and Docker are installed: Download Docker
Steps¶
Build the Docker Image:
Use the provided NPM scripts:


npm run dockerbuild
Alternatively, use Docker commands directly:


docker build . --target codeuiapp-ai-development
Run the Container:
Use Docker Compose profiles to manage environments:

docker compose --profile development up
With the development profile, changes to your code will automatically reflect in the running container (hot reloading).
Update Your Local Version to the Latest¶
To keep your local version of codeuiapp up to date with the latest changes, follow these steps for your operating system:

1. Navigate to your project folder¶
Navigate to the directory where you cloned the repository and open a terminal:

2. Fetch the Latest Changes¶
Use Git to pull the latest changes from the main repository:


git pull origin main
3. Update Dependencies¶
After pulling the latest changes, update the project dependencies by running the following command:


pnpm install
4. Rebuild and Start the Application¶
If using Docker, ensure you rebuild the Docker image to avoid using a cached version:

docker compose --profile development up --build
If not using Docker, you can start the application as usual with:

pnpm run dev
This ensures that you're running the latest version of codeuiapp and can take advantage of all the newest features and bug fixes.

Adding New LLMs:¶
To make new LLMs available to use in this version of codeuiapp, head on over to app/utils/constants.ts and find the constant MODEL_LIST. Each element in this array is an object that has the model ID for the name (get this from the provider's API documentation), a label for the frontend model dropdown, and the provider.

By default, Anthropic, OpenAI, Groq, and Ollama are implemented as providers, but the YouTube video for this repo covers how to extend this to work with more providers if you wish!

When you add a new model to the MODEL_LIST array, it will immediately be available to use when you run the app locally or reload it. For Ollama models, make sure you have the model installed already before trying to use it here!

Available Scripts¶
pnpm run dev: Starts the development server.
pnpm run build: Builds the project.
pnpm run start: Runs the built application locally using Wrangler Pages. This script uses bindings.sh to set up necessary bindings so you don't have to duplicate environment variables.
pnpm run preview: Builds the project and then starts it locally, useful for testing the production build. Note, HTTP streaming currently doesn't work as expected with wrangler pages dev.
pnpm test: Runs the test suite using Vitest.
pnpm run typecheck: Runs TypeScript type checking.
pnpm run typegen: Generates TypeScript types using Wrangler.
pnpm run deploy: Builds the project and deploys it to Cloudflare Pages.
Development¶
To start the development server:


pnpm run dev
This will start the Remix Vite development server. You will need Google Chrome Canary to run this locally if you use Chrome! It's an easy install and a good browser for web development anyway.

Tips and Tricks¶
Here are some tips to get the most out of codeuiapp:

Be specific about your stack: If you want to use specific frameworks or libraries (like Astro, Tailwind, ShadCN, or any other popular JavaScript framework), mention them in your initial prompt to ensure Codeuiapp scaffolds the project accordingly.

Use the enhance prompt icon: Before sending your prompt, try clicking the 'enhance' icon to have the AI model help you refine your prompt, then edit the results before submitting.

Scaffold the basics first, then add features: Make sure the basic structure of your application is in place before diving into more advanced functionality. This helps Codeuiapp understand the foundation of your project and ensure everything is wired up right before building out more advanced functionality.

Batch simple instructions: Save time by combining simple instructions into one message. For example, you can ask Codeuiapp to change the color scheme, add mobile responsiveness, and restart the dev server, all in one go saving you time and reducing API credit consumption significantly.
