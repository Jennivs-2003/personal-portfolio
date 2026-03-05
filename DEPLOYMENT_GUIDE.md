# Portfolio Deployment Guide

Follow these steps to deploy your portfolio website and make it live!

## Option 1: GitHub Pages (Recommended - FREE) ⭐

### Step 1: Create a GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository name: `portfolio` (or any name you like)
4. Description: "My Personal Portfolio Website"
5. Make it **Public** (required for free GitHub Pages)
6. **DO NOT** check "Initialize with README"
7. Click **"Create repository"**

### Step 2: Upload Your Files
1. On the new repository page, you'll see instructions
2. Open your project folder in File Explorer (`C:\Users\PC\OneDrive\Desktop\New folder`)
3. **Select all files** (index.html, styles.css, script.js, resume.pdf.pdf)
4. **Drag and drop** them into the GitHub repository page
   - OR use GitHub Desktop
   - OR use Git commands (see below)

### Step 3: Enable GitHub Pages
1. In your repository, go to **Settings** (top menu)
2. Scroll down to **Pages** (left sidebar)
3. Under **Source**, select **"Deploy from a branch"**
4. Branch: **main** (or **master**)
5. Folder: **/ (root)**
6. Click **Save**
7. Wait 1-2 minutes for deployment

### Step 4: Access Your Live Website
- Your website will be available at:
  `https://jennivs-2003.github.io/portfolio/`
- (Replace `portfolio` with your repository name if different)

---

## Option 2: Netlify (Easiest - FREE) 🚀

### Step 1: Prepare Your Files
1. Make sure all files are in one folder:
   - index.html
   - styles.css
   - script.js
   - resume.pdf.pdf
   - (Remove .md files if you want)

### Step 2: Deploy to Netlify
1. Go to [Netlify.com](https://www.netlify.com)
2. Click **"Sign up"** (use GitHub to sign in - easiest)
3. After login, click **"Add new site"** → **"Deploy manually"**
4. **Drag and drop** your entire folder onto Netlify
5. Wait for deployment (takes ~30 seconds)
6. Your site is live! Netlify gives you a URL like: `random-name-123.netlify.app`

### Step 3: Custom Domain (Optional)
- In Netlify dashboard → **Domain settings**
- You can add a custom domain later
- **Note:** You need to purchase a domain first (e.g., from Namecheap, GoDaddy, Google Domains)
- Domain format: `yourname.com` or `www.yourname.com` (no spaces!)

---

## Option 3: Vercel (Also Easy - FREE) ⚡

### Step 1: Sign Up
1. Go to [Vercel.com](https://vercel.com)
2. Click **"Sign Up"** (use GitHub)
3. Authorize Vercel to access your GitHub

### Step 2: Deploy
1. Click **"Add New Project"**
2. Import your GitHub repository (if you uploaded to GitHub)
   - OR drag and drop your folder
3. Click **"Deploy"**
4. Your site is live in seconds!

---

## Quick Method: Using Git Commands (GitHub Pages)

If you have Git installed:

```bash
# Open terminal/command prompt in your project folder
cd "C:\Users\PC\OneDrive\Desktop\New folder"

# Initialize Git
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - Portfolio website"

# Add GitHub repository (replace with your repo URL)
git remote add origin https://github.com/Jennivs-2003/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in repository settings (Step 3 above).

---

## Important Notes Before Deploying:

### ✅ Checklist:
- [ ] All files are in the same folder
- [ ] Resume file name matches in code (`resume.pdf.pdf`)
- [ ] Contact form Formspree ID is configured
- [ ] All links work (GitHub, LinkedIn, Email)
- [ ] Test locally first (open index.html in browser)

### 🔧 After Deployment:

1. **Test Your Live Site:**
   - Check all navigation links
   - Test contact form
   - Test resume download
   - Check on mobile device

2. **Update Formspree (if needed):**
   - Formspree works on any domain
   - No changes needed

3. **Share Your Portfolio:**
   - Share your live URL
   - Add to LinkedIn profile
   - Add to resume
   - Share on social media

---

## Troubleshooting:

### Resume Not Downloading?
- Make sure `resume.pdf.pdf` is in the same folder
- Check browser console for errors (F12)
- Some browsers block downloads - check settings

### Contact Form Not Working?
- Verify Formspree Form ID in `script.js`
- Check Formspree dashboard for submissions
- Check spam folder for test emails

### Images Not Loading?
- Make sure image URLs are correct
- Unsplash images should work fine
- Check browser console for 404 errors

### Styling Issues?
- Clear browser cache (Ctrl+F5)
- Check CSS file is uploaded
- Verify file paths are correct

---

## Recommended: GitHub Pages

**Why GitHub Pages?**
- ✅ Free forever
- ✅ Easy to update (just push changes)
- ✅ Professional URL
- ✅ Fast and reliable
- ✅ You already have GitHub account

**Your Live URL will be:**
`https://jennivs-2003.github.io/portfolio/`

---

## Need Help?

If you encounter any issues:
1. Check browser console (F12) for errors
2. Verify all files are uploaded
3. Check file names match exactly
4. Make sure repository is Public (for free GitHub Pages)

Good luck with your deployment! 🚀
