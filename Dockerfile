FROM php:8.3.2-fpm-alpine

# Copy composer.lock and composer.json
COPY composer.lock composer.json /var/www/app/

# Set working directory
WORKDIR /var/www/app

# Install dependencies
# RUN apt-get update && apt-get install -y \
RUN apk update && apk add --no-cache \
    # build-essential \
    libpng-dev \
    # libonig-dev \
    # libjpeg62-turbo-dev \
    freetype-dev \
    libjpeg-turbo-dev \
    # libfreetype6-dev \
    libzip-dev \
    # oniguruma \
    # locales \
    bash \
    zip \
    unzip \
    # jpegoptim optipng pngquant gifsicle \
    nano \
    vim \
    git \
    curl \
    supervisor

# Clear cache
# RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install extensions
RUN docker-php-ext-install \
    bcmath \
    pdo_mysql \
    # mbstring \
    zip \
    exif \
    pcntl \
    gd

# RUN docker-php-ext-configure gd --with-gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ --with-png-dir=/usr/include/
RUN docker-php-ext-configure gd --with-freetype --with-jpeg

# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Add user for laravel application
RUN addgroup -g 1000 www
RUN adduser -u 1000 -D -s /bin/bash -G www www

# Copy existing application directory contents
COPY . /var/www/app
# VOLUME /var/www/app

# Copy existing application directory permissions
COPY --chown=www:www . /var/www/app

# Change current user to www-data
USER www

RUN composer install --no-scripts --no-autoloader --ansi --no-interaction

RUN composer dump-autoload -o \
    # && chown -R www:www /var/www/app \
    && chmod -R 775 /var/www/app/storage /var/www/app/bootstrap/cache

# Expose port 80 and start php-fpm server
EXPOSE 80

CMD ["php-fpm"]
# CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=80"]

# run supervisor
# CMD ["/usr/bin/supervisord", "-n", "-c", "/etc/supervisord.conf"]