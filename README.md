# Rhys Pritchard's Art Portfolio Website

[www.rhyspritchard.com](https://www.rhyspritchard.com/), the art portfolio website of Rhys Pritchard (my brother).

The site was generated in 2011 with [Blogofile](http://www.blogofile.com/) from Mako templates. The Blogofile source project was probably on Bitbucket and has not been recovered, so this repository holds the generated output, pulled on 2026-09-17 from the S3 bucket `www.rhyspritchard.com` that hosted the site from 2011 until then.

## Hosting

GitHub Pages serves the site from the root of the `master` branch of this repository. `.nojekyll` makes GitHub publish the files as they are, without a Jekyll build.

- `CNAME` sets the custom domain to `www.rhyspritchard.com`. GitHub redirects the apex domain to `www`.
- DNS is at Hover. `www` is a CNAME to `rhys-p.github.io`. The apex has A records for the GitHub Pages addresses 185.199.108.153, 185.199.109.153, 185.199.110.153 and 185.199.111.153.
- Do not add a wildcard DNS record. Any hostname that resolves to a shared hosting endpoint can be claimed by whoever registers that name with the host. That happened to `ftp.rhyspritchard.com` in September 2026 while a wildcard pointed at S3.

The S3 bucket `www.rhyspritchard.com` is the former host and is no longer referenced by DNS.

## Copyright and Licenses

All images are copyright Rhys Pritchard. They are licensed under the Creative Commons Attribution license (CC BY).

All code is copyright Adam Pritchard and licensed under the GPLv3 and MIT licenses.
