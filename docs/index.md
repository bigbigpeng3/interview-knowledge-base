# Welcome to MkDocs

For full documentation visit [mkdocs.org](https://www.mkdocs.org).

## Commands

* `mkdocs new [dir-name]` - Create a new project.
* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs build` - Build the documentation site.
* `mkdocs -h` - Print help message and exit.
* `mkdocs gh-deploy` - Github Pages.

## Project layout 

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files.


### 使用虚拟环境
1. 创建一个虚拟环境：
   ```bash
   python3 -m venv .env
   ```
2. 激活虚拟环境：
   ```bash
   source .env/bin/activate
   ```
3. 然后在虚拟环境中安装 `mkdocs-material`：
   ```bash
   pip install mkdocs
   pip install mkdocs-material
   ```


### git ignore
    .env/

