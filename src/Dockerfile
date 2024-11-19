# Use Node.js LTS as the base image
FROM node:18-slim

# Set the working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml to install dependencies
COPY package.json tsconfig.json ./
RUN npm install -g pnpm && pnpm install

# Copy application code
COPY src ./src

# Build the TypeScript code
RUN pnpm run build

# Expose the application port
EXPOSE 3000

# Start the application using the compiled code
CMD ["node", "dist/index.js"]
