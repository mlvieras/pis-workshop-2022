FROM ruby:3.1.1

RUN gem install bundler -v 2.3.7

# Change user to avoid running commands with root user.
RUN groupadd --gid 1000 ruby \
  && useradd --uid 1000 --gid ruby --shell /bin/bash --create-home ruby

WORKDIR /code

COPY --chown=ruby:ruby . .

RUN bundle install

USER ruby
EXPOSE 3000

ENV RAILS_ENV=production

CMD rm -f tmp/pids/server.pid && \
  bundle exec rails db:migrate && \
  bundle exec puma -p 3000
