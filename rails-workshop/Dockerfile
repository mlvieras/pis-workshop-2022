FROM ruby:3.1.1

RUN gem install bundler -v 2.3.7 && \
    apt-get update && \
    apt-get install -y ffmpeg libvips

WORKDIR /app

ENV BUNDLE_PATH=/bundle \
    BUNDLE_BIN=/bundle/bin \
    GEM_HOME=/bundle
ENV PATH="${BUNDLE_BIN}:${PATH}"

# Start the main process.
CMD ["./run.sh"]
