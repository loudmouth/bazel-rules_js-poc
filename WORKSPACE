load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "493bb318d98bb7492cb30e534ad33df2fc5539b43d4dcc4e294a5cc60a126902",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/5.5.4/rules_nodejs-5.5.4.tar.gz"],
)

load("@build_bazel_rules_nodejs//:repositories.bzl", "build_bazel_rules_nodejs_dependencies")

build_bazel_rules_nodejs_dependencies()

load("@build_bazel_rules_nodejs//:index.bzl", "node_repositories", "yarn_install")

# to get checksums, go to https://nodejs.org/es/blog/release/v16.17.0 and replace with the version number of interest
node_repositories(
    node_repositories = {
        "16.17.0-linux_arm64": ("node-v16.17.0-linux-arm64.tar.gz", "node-v16.17.0-linux-arm64", "0e83e93bd3658f4ae516b5f1f174190bd87aaae3d691eb91a8945eed04dc8491"),
        "16.17.0-linux_amd64": ("node-v16.17.0-linux-x64.tar.gz", "node-v16.17.0-linux-x64", "4827808e50b8ee42b4dadf056835287dac267b9cff56cea56e70843bf8cecb79"),
        "16.17.0-darwin_amd64": ("node-v16.17.0-darwin-x64.tar.gz", "node-v16.17.0-darwin-x64", "b85eaa537f9d60a68c704e23839db65b5a75f14b37d6855c5d4e31a6bcef26c6"),
        "16.17.0-darwin_arm64": ("node-v16.17.0-darwin-arm64.tar.gz", "node-v16.17.0-darwin-arm64", "96eefac1e168ec1bf39c5ae1e7b2760522624adfbe2e0c92875cd33ef9a07792"),
        "16.17.0-windows_amd64": ("node-v16.17.0-win-x64.zip", "node-v16.17.0-win-x64", "c1a3be05342166cb9304d01da7ff8b23df6d4b16f9c98ae33b9b4fff79d8d0e2"),
    },
    node_version = "16.17.0",
)

yarn_install(
    name = "npm",
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
)
