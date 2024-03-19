# capstone-static

The Caselaw Access Project is a large-scale digitization project hosted by the [Harvard Law School Library Innovation Lab](http://lil.law.harvard.edu/).

This is a static, archival port of the [website originally hosted at case.law](https://github.com/harvard-lil/capstone), which served court opinions and an accompanying suite of tools to users in a variety of formats. The static website uses client-side javascript to allow browsing of the static case data hosted at https://static.case.law.

This repository does not itself contain case data: visit the [website](https://case.law) to browse and download case data.

---

## Summary
- [Local Development](#local-development)
- [Tests and linting](#tests-and-linting)
- [Deployment](#deployment)


---

## Local Development

This project has no external dependencies: point any web server at the project directory, and you should be good to go!


### Python

For convenience, `run.py`, a simple wrapper for python's `http.server` is provided. Run `python3 run.py` and visit `http://127.0.0.1:5501`in your web browser. Or, run `python3 run.py --help` for a full list of flags and options.


### VS Code's "LiveServer" Plugin

[Visual Studio Code](https://code.visualstudio.com/) users may prefer to install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.

A basic configuration is included in `.vscode`. See Github for a [complete list of options](https://github.com/ritwickdey/vscode-live-server/blob/HEAD/docs/settings.md).


[👆 Back to the summary](#summary)

---

## Tests and Linting

Run `npm install` to install `prettier`, and then run `npm run prettier-format-fix` to reformat code.


[👆 Back to the summary](#summary)
