FROM registry.janpolak.eu/php8.3-fpm-alpine:1.0.0


# FROM php:8.3.2-fpm-alpine

# # Copy composer.lock and composer.json
# COPY composer.lock composer.json /var/www/app/

# # Install dependencies
# RUN apk update && apk add --no-cache \
#     libpng-dev \
#     freetype-dev \
#     libjpeg-turbo-dev \
#     libzip-dev \
#     bash \
#     zip \
#     unzip \
#     nano \
#     vim \
#     git \
#     curl \
#     supervisor

# # Install extensions
# RUN docker-php-ext-install \
#     bcmath \
#     pdo_mysql \
#     zip \
#     exif \
#     pcntl \
#     gd

# # Configure GD
# RUN docker-php-ext-configure gd --with-freetype --with-jpeg

# # Install composer
# RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# # Add user for laravel application
# RUN addgroup -g 1000 www
# RUN adduser -u 1000 -D -s /bin/bash -G www www

# Set working directory
WORKDIR /var/www/app

# Copy existing application directory contents
COPY . /var/www/app

COPY .env.production /var/www/app/.env

# Copy existing application directory permissions
COPY --chown=www:www . /var/www/app

RUN chown www.www /var/www/app

# Change current user to www-data
USER www

RUN mkdir vendor

RUN composer install --no-scripts --no-autoloader --ansi --no-interaction

RUN composer dump-autoload -o \
    # && chown -R www:www /var/www/app \
    && chmod -R 775 /var/www/app/storage /var/www/app/bootstrap/cache

RUN php artisan optimize:clear
RUN php artisan optimize

# Expose port 80 and start php-fpm server
EXPOSE 80

# CMD ["php-fpm"]
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=80"]

# run supervisor
# CMD ["/usr/bin/supervisord", "-n", "-c", "/etc/supervisord.conf"]