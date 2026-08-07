#!/usr/bin/env bash
#
# Publish dist/ to the gh-pages branch as a single orphan commit.
#
# All three published concept sites deploy this way, on purpose. Two of them
# used to self-publish from a GitHub Actions workflow, which meant a push to
# main was the deploy — until 2026-08-06, when Actions went into a major
# outage and neither site could ship at all while the branch-based build
# went out fine. One model across all three also removes the "check which
# model this repo uses before expecting a push to go live" trap.
#
# The tradeoff, stated plainly: PUSHING TO main NO LONGER DEPLOYS. Publishing
# is always this deliberate second step.
#
# Branch-based Pages runs Jekyll over the branch and hard-fails without
# .nojekyll, so that file comes from public/.nojekyll via the build and this
# script refuses to run without it. Force-pushing an orphan commit keeps the
# branch exactly dist/ and nothing else -- the gh-pages npm package cannot do
# that, because its --remove default never matches dotfiles.
#
set -euo pipefail

REPO_URL="git@github.com:pachets13/fire-protection-demo.git"
cd "$(dirname "$0")/.."

[ -d dist ] || { echo "dist/ missing -- run npm run build first" >&2; exit 1; }
[ -f dist/.nojekyll ] || { echo "dist/.nojekyll missing -- Pages will hard-fail" >&2; exit 1; }

# The anonymity gate runs on every build, but a build can only reach its PARTIAL
# tier when the paired private repo is absent -- and the term rules do not run
# there. Publication is the one moment a leak reaches anyone, so this is where
# the full check is mandatory rather than best-effort. Same posture as .nojekyll
# above: refuse to publish rather than publish something unverified.
node scripts/check-anonymity.mjs --require-full
node scripts/check-anonymity.mjs --dist

# Git does not forget, and the two rules above only read the present: the working
# tree and the bytes about to ship. Both pass on a repo whose history still
# carries the leak in an older commit -- which is exactly the state all three of
# these forks were in on 2026-08-07, publicly fetchable, after two separate
# passes had declared them clean. main's own root commit is permanently
# reachable, so "it gets garbage-collected eventually" is not true of it.
#
# This walks every object in the graph with the same term list, rather than the
# hand-picked string search that has now missed the leak twice.
node scripts/check-anonymity.mjs --history

# And prove the gate still catches what it is for. A gate nobody has verified is
# a comment: if a regex edit or a path change quietly stopped it matching, every
# line above would still exit 0. This is the assertion that the 0s mean anything.
node scripts/test-anonymity-gate.mjs

cd dist
rm -rf .git
git init -q
git add -A
git -c user.email=shawn@pachet.ca -c user.name=pachets13 commit -q -m "Deploy"
git push -q --force "$REPO_URL" HEAD:gh-pages
rm -rf .git

echo "Published to gh-pages."
echo "Pages takes 1-2 min. Verify the LIVE bundle hash, not this exit code."
