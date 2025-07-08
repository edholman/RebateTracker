#!/bin/bash

# Deploy WhyRebate to GitHub Repository
# Repository: https://github.com/edholman/RebateTracker

echo "Setting up GitHub remote..."
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/edholman/RebateTracker.git

echo "Checking git status..."
git status

echo "Adding any new changes..."
git add .

echo "Committing latest changes..."
git commit -m "Complete WhyRebate landing page with HomeSmart branding and legal disclosures" 2>/dev/null || echo "No new changes to commit"

echo "Setting main branch..."
git branch -M main

echo "Pushing to GitHub..."
git push -u origin main

echo "✅ Successfully deployed to GitHub!"
echo "🔗 Repository: https://github.com/edholman/RebateTracker"