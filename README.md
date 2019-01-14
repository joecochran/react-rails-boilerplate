# React + Rails Blog

[![CircleCI](https://circleci.com/gh/joecochran/react-rails-blog.svg?style=svg)](https://circleci.com/gh/joecochran/react-rails-blog)

A simple blog written in rails with a react admin area.

## Requirements:

- Ruby 2.5.3
- Rails 5.2.2
- Postgres 11.1

## Installation

- `git clone git@github.com:joecochran/react-rails-blog.git`
- `cd react-rails-blog`
- `bundle install`
- `rails db:migrate`
- `bin/setup`
- `yarn install`

## Running

- `bin/rails s`
- `bin/webpack-dev-server`

## Testing

- Jest / Enzyme tests `yarn test`
