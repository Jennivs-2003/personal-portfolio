# Custom Domain Setup Guide

## ❌ Error: "elegant portfolio" is not properly formatted

### The Problem:
You entered **"elegant portfolio"** as a custom domain, but custom domains must be:
- ✅ Valid domain names (like `elegantportfolio.com`)
- ✅ No spaces allowed
- ✅ Must be a real domain you own

### Solution Options:

## Option 1: Use Free GitHub Pages URL (Recommended for Now) ✅

**Just use the free GitHub Pages URL:**
```
https://jennivs-2003.github.io/portfolio/
```

**Steps:**
1. Go to your GitHub repository
2. Settings → Pages
3. **Remove** the custom domain field (leave it empty)
4. Click Save
5. Your site works perfectly with the free URL!

**Advantages:**
- ✅ Free forever
- ✅ Works immediately
- ✅ No setup needed
- ✅ Professional enough for portfolios

---

## Option 2: Get a Real Custom Domain (If You Want One)

### Step 1: Purchase a Domain
Buy a domain from:
- **Namecheap.com** (~$10-15/year)
- **GoDaddy.com** (~$12-20/year)
- **Google Domains** (~$12/year)
- **Cloudflare** (~$8-10/year - cheapest)

**Good domain name ideas:**
- `jananivs.dev` (if available)
- `jananivs-portfolio.com`
- `jananivsportfolio.com`
- `jananivs.tech`
- `elegantportfolio.dev` (if available)

### Step 2: Configure Domain in GitHub Pages

1. **In GitHub Repository:**
   - Go to Settings → Pages
   - Under "Custom domain", enter: `yourdomain.com` (NO SPACES!)
   - Example: `jananivs.dev` or `www.jananivs.dev`
   - Check "Enforce HTTPS"
   - Click Save

2. **In Your Domain Provider (Namecheap/GoDaddy/etc.):**
   - Go to DNS settings
   - Add these records:
   
   **For apex domain (yourdomain.com):**
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   ```
   
   **For www subdomain (www.yourdomain.com):**
   ```
   Type: CNAME
   Name: www
   Value: jennivs-2003.github.io
   ```

3. **Wait 24-48 hours** for DNS to propagate
4. Your custom domain will work!

---

## Quick Fix Right Now:

### To Fix the Error:

1. **Go to GitHub Repository:**
   - Click on your repository
   - Go to **Settings** (top menu)
   - Click **Pages** (left sidebar)

2. **Remove Custom Domain:**
   - Find the "Custom domain" field
   - **Delete** "elegant portfolio" 
   - **Leave it empty**
   - Click **Save**

3. **Your Site Works:**
   - Access it at: `https://jennivs-2003.github.io/portfolio/`
   - This URL works perfectly fine!

---

## Important Notes:

### ✅ Valid Domain Formats:
- `example.com`
- `www.example.com`
- `portfolio.example.com`
- `jananivs.dev`

### ❌ Invalid Domain Formats:
- `elegant portfolio` (has spaces)
- `my portfolio` (has spaces)
- `portfolio` (not a full domain)
- `just a name` (has spaces)

### Domain Requirements:
- Must be purchased from a domain registrar
- Must be a real, registered domain
- No spaces allowed
- Usually costs $8-20 per year

---

## Recommendation:

**For now, just use the free GitHub Pages URL:**
```
https://jennivs-2003.github.io/portfolio/
```

It's:
- ✅ Free
- ✅ Professional
- ✅ Works immediately
- ✅ No setup needed

You can always add a custom domain later if you want!

---

## Need Help?

1. **Remove the custom domain** from GitHub Pages settings
2. **Use the free URL** - it works perfectly!
3. If you want a custom domain later, purchase one first, then configure it

Your portfolio is already live and working - just use the GitHub Pages URL! 🚀
