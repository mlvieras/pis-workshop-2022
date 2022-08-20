# Rails Workshop

## Setting up the project

### Install the appropriate version of Ruby

There's a multitude of ways to install and manage Ruby versions. Usually, projects will require you to be able to spin up many versions of Ruby. It's simply too annoying to uninstall and install a different version each time. That's why there exist different version managers that support Ruby. Some of them are `rbenv`, `rvm` and `asdf`.

At Xmartlabs we've mostly used [rbenv](https://github.com/rbenv/rbenv), so these next instructions take for granted that you have it installed on your machine.

```sh
rbenv install 3.1.1
rbenv rehash
```

### Install bundler

```sh
gem install bundler
```

### Install Rails

```sh
gem install rails -v 7.0.3.1
```

### Generate a rails project

```sh
rails new --database postgresql --api rails-workshop --no-git
```

### Start the rails server

```sh
cd rails-workshop
bundle exec rails s
```

You should see an output similar to this:

```
=> Booting Puma
=> Rails 7.0.3.1 application starting in development
=> Run `bin/rails server --help` for more startup options
Puma starting in single mode...
* Puma version: 5.6.4 (ruby 3.1.1-p18) ("Birdie's Version")
*  Min threads: 5
*  Max threads: 5
*  Environment: development
*          PID: 13939
* Listening on http://127.0.0.1:3000
* Listening on http://[::1]:3000
Use Ctrl-C to stop
```

### The database

Make sure you have Postgres installed and running on your machine. Then, you'll need to provide Rails with credentials to connect to it. If you already know the credentials then just add them to
