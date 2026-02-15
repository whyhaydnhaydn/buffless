# Quick WordPress Import Guide

## 🚀 Fastest Method: Copy & Paste

### Step 1: Install Required Plugin
Install **"Simple Custom CSS and JS"** plugin from WordPress.org

### Step 2: Add CSS
1. Go to WordPress Admin → **Appearance → Customize → Additional CSS**
2. Open `css/main.css` in a text editor
3. Copy all contents and paste into Additional CSS box
4. Click **Publish**

### Step 3: Add JavaScript
1. Go to **Custom CSS & JS → Add Custom JS**
2. Open `js/main.js` in a text editor
3. Copy all contents and paste
4. Set to load in **Footer**
5. Click **Publish**

### Step 4: Add Tailwind CSS
1. Go to **Custom CSS & JS → Add Custom CSS**
2. Open `css/tailwind.css` in a text editor
3. Copy all contents and paste
4. Click **Publish**

### Step 5: Create Pages

#### Home Page
1. Create new page: **Pages → Add New**
2. Title: "Home"
3. Use **Custom HTML block** or switch to **Code Editor**
4. Open `index.html` and copy ONLY the content between `<main>` and `</main>` tags
5. Paste into the page
6. Set as **Front Page**: Go to **Settings → Reading → Homepage displays → Static page**

#### Shop Page
1. Create new page: "Shop"
2. Copy content from `shop.html` (between `<main>` tags)
3. Paste into Custom HTML block
4. Publish

#### Product Detail Page
1. Create new page: "Product Detail"
2. Copy content from `product-detail.html` (between `<main>` tags)
3. Paste into Custom HTML block
4. Publish

#### Return Policy Page
1. Create new page: "Return Policy"
2. Copy content from `return-policy.html` (between `<main>` tags)
3. Paste into Custom HTML block
4. Publish

### Step 6: Create Menu
1. Go to **Appearance → Menus**
2. Create new menu: "Main Menu"
3. Add pages: Home, Shop, Return Policy
4. Set as **Primary Menu**

### Step 7: Add Header & Footer

#### For Block Themes:
1. Go to **Appearance → Editor → Template Parts**
2. Edit Header: Copy header HTML from any page file
3. Edit Footer: Copy footer HTML from any page file

#### For Classic Themes:
1. Edit `header.php` in child theme
2. Copy header HTML from any page file
3. Edit `footer.php` in child theme
4. Copy footer HTML from any page file

---

## 📦 Alternative: Using a Page Builder

### Elementor Method

1. **Install Elementor** (free version works)

2. **Add Custom CSS**
   - Elementor → Custom CSS (Pro) OR
   - Use Additional CSS in Customizer

3. **Create Pages**
   - Create page with Elementor
   - Add "HTML" widget
   - Paste main content from each HTML file

4. **Header & Footer**
   - Elementor Pro: Create custom header/footer templates
   - Free: Use theme's default header/footer

### Divi Method

1. **Use Divi Builder**

2. **Add Code Module**
   - Add new section
   - Insert Code Module
   - Paste HTML content

3. **Custom CSS**
   - Divi → Theme Options → Custom CSS
   - Paste CSS from `css/main.css`

---

## ⚡ Super Quick (5 Minutes)

If you just want to see it working immediately:

1. **Install "Insert Headers and Footers" plugin**

2. **Add to Header** (Settings → Insert Headers and Footers):
```html
<link rel="stylesheet" href="https://YOUR-SITE.com/wp-content/uploads/buffless/css/tailwind.css">
<link rel="stylesheet" href="https://YOUR-SITE.com/wp-content/uploads/buffless/css/main.css">
```

3. **Add to Footer**:
```html
<script src="https://YOUR-SITE.com/wp-content/uploads/buffless/js/main.js"></script>
```

4. **Upload Files**:
   - Create folder in `wp-content/uploads/buffless/`
   - Upload css and js folders there

5. **Create pages with Custom HTML** blocks containing the content

Done!

---

## 🎨 Making It Editable

### Option 1: Convert to Gutenberg Blocks
- Create custom blocks for each section
- Use "@wordpress/blocks" package
- Make content editable via block attributes

### Option 2: Use ACF (Advanced Custom Fields)
- Create field groups for page sections
- Replace static content with ACF field values
- Example:
```php
<?php the_field('hero_title'); ?>
```

### Option 3: Widget Areas
- Register widget areas for each section
- Add Text/HTML widgets with content
- Users can edit via Appearance → Widgets

---

## 🔄 Making Products Dynamic

### Option 1: Custom Post Type
```php
// Add to functions.php
function create_product_post_type() {
    register_post_type('product', array(
        'labels' => array(
            'name' => 'Products',
            'singular_name' => 'Product'
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail')
    ));
}
add_action('init', 'create_product_post_type');
```

Then create template file `archive-product.php` for product listing.

### Option 2: Use WooCommerce
- Install WooCommerce plugin
- Convert product cards to WooCommerce product layout
- Use WooCommerce shortcodes
- Instant shopping cart, checkout, payments

---

## 📱 Mobile Testing

After import, test on:
- Mobile phone (actual device)
- Tablet
- Desktop
- Different browsers

Common issues:
- Menu toggle not working → Check JavaScript loaded
- Styles missing → Verify CSS file paths
- Images not loading → Use relative paths

---

## ✅ Checklist

- [ ] CSS files added and loading
- [ ] JavaScript file added and loading
- [ ] All 4 pages created
- [ ] Menu created and assigned
- [ ] Header/Footer added
- [ ] Mobile menu works
- [ ] Forms show success messages
- [ ] Product cards clickable
- [ ] Search works on Shop page
- [ ] Animations working
- [ ] Images loading
- [ ] Responsive on mobile

---

## 🆘 Quick Fixes

**Styles not applying?**
```
Clear cache: Install "WP Super Cache" and clear it
Check CSS loaded: View page source, search for tailwind.css
```

**JavaScript not working?**
```
Check console: Right-click → Inspect → Console tab
No errors? JS is loaded correctly
```

**Menu not showing?**
```
Go to Appearance → Menus
Assign menu to "Primary Menu" location
```

**Images missing?**
```
Download images from URLs in HTML
Upload to Media Library
Replace URLs with uploaded image URLs
```

---

## 🎓 Resources

- [WordPress Theme Development](https://developer.wordpress.org/themes/)
- [Elementor Documentation](https://elementor.com/help/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [WordPress Custom Post Types](https://wordpress.org/support/article/post-types/)

---

**Need help?** Post in WordPress.org support forums with:
- WordPress version
- Theme name
- Exact error message
- Link to this guide
