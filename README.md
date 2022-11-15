# bazel-rules_js-poc
POC bazel rules_js, rules_ts, rules_webpack

Goals
- [x] build `//lib/lib-a` 
- [x] build `//lib/lib-data` 
- [x] build `//app/app-a:main`
- [ ] run `//lib/lib-a` which includes `//lib/lib-data`
  - Failing here ☝️ "Cannot find module './data.json'"
