#!/bin/bash
# Deploy to ai-studio-dev project on Vercel

echo "Deploying dev branch to ai-studio-dev project..."

# Backup current project config
mv .vercel/project.json .vercel/project-prod-temp.json 2>/dev/null || true

# Use dev project config
cp .vercel/project-dev-backup.json .vercel/project.json

# Deploy to production on dev project
vercel --yes --prod

# Restore production project config
mv .vercel/project-prod-temp.json .vercel/project.json

echo "✓ Deployed to https://ai-studio-dev.vercel.app"
