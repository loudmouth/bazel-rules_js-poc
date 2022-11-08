# bazel-yarn-workspace
demo bazel yarn workspace

Goals
- [x] build `//lib/lib-a` 
- [x] build `//lib/lib-data` 
- [x] build `//app/app-a:main`
- [ ] run `//lib/lib-a` which includes `//lib/lib-data`
  - Failing here ☝️ "Cannot find module './data.json'"
