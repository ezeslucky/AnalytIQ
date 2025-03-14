# Use the official Node.js image as the base
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Expose the Next.js default port
EXPOSE 3000



# Run Prisma migrations
RUN yarn prisma generate

# Build the application
RUN yarn build

# Start the application
CMD ["yarn", "start"]
