FROM serversideup/php:8.3-fpm-nginx

# Switch to root for system setup
USER root

WORKDIR /var/www/html

# Copy application files
COPY --chown=9999:9999 . /var/www/html

# Install production PHP dependencies
RUN composer install --no-dev --no-interaction --prefer-dist --optimize-autoloader

# Setup storage and SQLite database permissions
RUN touch /var/www/html/database/database.sqlite \
    && chown -R 9999:9999 /var/www/html/storage /var/www/html/bootstrap/cache /var/www/html/database \
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache /var/www/html/database

# Switch back to non-root web user (serversideup standard)
USER 9999

# Production environment configuration
ENV WEB_ROOT=/var/www/html/public
ENV APP_ENV=production
ENV APP_DEBUG=false
ENV LOG_CHANNEL=stderr
ENV DB_CONNECTION=sqlite
ENV DB_DATABASE=/var/www/html/database/database.sqlite
ENV SESSION_DRIVER=file
ENV CACHE_STORE=file

EXPOSE 8080
