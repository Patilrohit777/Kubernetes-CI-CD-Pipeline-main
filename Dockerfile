# Use nginx to serve static HTML/JS/CSS
FROM nginx:alpine

# Copy app files
COPY app /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]