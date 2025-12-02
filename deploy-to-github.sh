#!/bin/bash

# Ghost Protocol - GitHub Deployment Script
# This script helps push your Ghost Protocol project to GitHub

echo "🚀 Ghost Protocol GitHub Deployment"
echo "===================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the ghost-protocol project directory"
    exit 1
fi

echo "📁 Current directory: $(pwd)"
echo "📦 Project: Ghost Protocol Web3 Browser Interface"

# Initialize git if not already done
if [ ! -d ".git" ]; then
    echo "🔧 Initializing git repository..."
    git init
else
    echo "✅ Git repository already initialized"
fi

# Add all files
echo "📤 Adding files to git..."
git add .

# Commit with message
echo "💾 Committing changes..."
git commit -m "Initial commit: Ghost Protocol - zk-powered Web3 browser interface

Features:
- Phantom wallet integration
- Cyberpunk neon UI with glassmorphism
- Privacy-focused dashboard
- Web3 search interface
- Next.js with TypeScript + Tailwind CSS"

echo ""
echo "✅ Files committed to local git repository!"
echo ""
echo "🔗 Next steps:"
echo "1. Create a new repository on GitHub.com"
echo "2. Copy the repository URL"
echo "3. Run: git remote add origin YOUR_REPO_URL"
echo "4. Run: git push -u origin main"
echo ""
echo "📚 See GITHUB_DEPLOYMENT_GUIDE.md for detailed instructions"
