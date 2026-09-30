FROM node:20-alpine

# Set production environment
ENV NODE_ENV=production

WORKDIR /usr/src/app

# Install dependencies 
COPY package*.json ./
RUN npm ci --omit=dev

# Copy application source
COPY . .

# Run as non-root user for security
USER node

# Match your application port
EXPOSE 3000

CMD ["node", "server.js"]