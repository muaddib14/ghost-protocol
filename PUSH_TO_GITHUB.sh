#!/bin/bash

# Ghost Protocol - Push to GitHub
# Run these commands AFTER creating your GitHub repository

echo "🚀 Ghost Protocol GitHub Push Commands"
echo "======================================="
echo ""
echo "1. Copy the entire folder /workspace/ghost-protocol to your local machine"
echo "2. Create a new repository on GitHub.com called 'ghost-protocol'"
echo "3. Open terminal/command prompt in your local ghost-protocol folder"
echo "4. Run these commands:"
echo ""
echo "# Initialize git repository"
echo "git init"
echo ""
echo "# Add all files"
echo "git add ."
echo ""
echo "# Commit with message"
echo 'git commit -m "Initial commit: Ghost Protocol - zk-powered Web3 browser interface'
echo ""
echo "# Add your GitHub repository as remote"
echo "# (Replace YOUR_USERNAME with your actual GitHub username)"
echo "git remote add origin https://github.com/YOUR_USERNAME/ghost-protocol.git"
echo ""
echo "# Push to GitHub"
echo "git branch -M main"
echo "git push -u origin main"
echo ""
echo "✅ Done! Your Ghost Protocol will be on GitHub!"
echo ""
echo "🌐 Next: Deploy to Vercel at https://vercel.com"
