# Rhys Pritchard's Art Portfolio Website

The deployed files for [www.rhyspritchard.com](http://www.rhyspritchard.com/), the art portfolio website of Rhys Pritchard (my brother), as pulled from the S3 bucket `www.rhyspritchard.com` on 2026-09-17.

The site was generated in 2011 with [Blogofile](http://www.blogofile.com/) from Mako templates. That Blogofile source project has not been recovered. What is here is the generated output, plus `index.html.mako.orig` and `css/style.css.orig`, stray backup files that Blogofile copied through and that are the only surviving fragments of the source.

## Hosting

- The site is S3 static website hosting: bucket `www.rhyspritchard.com`, region us-east-1, index document `index.html`, error document `404.html`. It is plain HTTP only, because S3 website endpoints do not serve TLS.
- DNS is at Hover. `www` is a CNAME to `www.rhyspritchard.com.s3-website-us-east-1.amazonaws.com`. The apex uses Hover's forwarding to `www`.
- Do not add a wildcard DNS record pointing at S3. Any hostname that resolves to an S3 website endpoint can be claimed by anyone who creates a bucket with that name. That happened to `ftp.rhyspritchard.com` in September 2026.

## Syncing with the bucket

Pull the bucket into this directory, using an AWS CLI profile with read access to the bucket:

```
aws s3 sync s3://www.rhyspritchard.com . --profile <profile>
```

Pushing is the same command with the source and destination swapped and `--exclude ".git/*"` added.

## Copyright and Licenses

All images are copyright Rhys Pritchard. They are licensed under the Creative Commons Attribution license (CC BY).

All code is copyright Adam Pritchard and licensed under the GPLv3 and MIT licenses.
