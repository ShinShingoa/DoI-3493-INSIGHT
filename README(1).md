# SCP Foundation Personnel File - Site 72

A GitHub Pages conversion of an SCP Wiki personnel file for Supervisory Agent "Insight" (I.N. 3493).

## Features

- **Modal Warning System**: Initial access warning with security clearance information
- **Tab Navigation**: Switch between Introduction/Notes and Personnel File sections
- **Interactive Annotations**: Hover over highlighted text to see additional information
- **Collapsible Email Records**: Expand/collapse personnel records and documents
- **Medical File Display**: Detailed medical information in a structured table format
- **Responsive Design**: Mobile-friendly layout that adapts to different screen sizes

## Deployment to GitHub Pages

### Option 1: Quick Deploy (Recommended)

1. Create a new repository on GitHub
2. Upload these files to your repository:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md` (optional)

3. Go to your repository Settings → Pages
4. Under "Source", select "Deploy from a branch"
5. Select the `main` branch and `/ (root)` folder
6. Click Save
7. Your site will be available at: `https://[your-username].github.io/[repository-name]/`

### Option 2: Using Git Command Line

```bash
# Initialize a new Git repository
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial commit: SCP Personnel File"

# Add your GitHub repository as remote
git remote add origin https://github.com/[your-username]/[repository-name].git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in your repository settings as described in Option 1, steps 3-7.

## File Structure

```
.
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # Interactive functionality
└── README.md       # This file
```

## Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --base-color: rgb(100, 3, 15);
    --hover-color: rgb(100, 46, 44);
    --ec-popup-color: 153, 0, 0;
    /* Add more customizations here */
}
```

### Adding More Content

To add new personnel records:

1. Open `index.html`
2. Find the `<!-- Personnel Records -->` section
3. Copy an existing record block and modify the content
4. Update the collapsible button text and email content

### Modifying the Modal

Edit the modal content in `index.html` under `<!-- Modal Warning Overlay -->`:

- Change clearance levels
- Update date/time information
- Modify warning messages

## Browser Compatibility

Tested and working on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features Breakdown

### Interactive Elements

1. **Hover Annotations**: Colored highlights that show additional info on hover
   - Red (`.bi-r`): General information
   - Yellow (`.bi-y`): Important notes
   - Green (`.bi-g`): References
   - Blue (`.bi-b`): Technical details

2. **Collapsible Sections**: Click buttons to expand email records and files

3. **Tab System**: Navigate between different document sections

4. **Modal Warning**: Initial security warning that must be dismissed

### Responsive Features

- Mobile-optimized layout
- Touch-friendly buttons
- Stacked tables on small screens
- Adaptive font sizes

## Credits

Original design and coding style inspired by SCP-8980 by Yossipossi on the SCP Wiki.

Converted to standard HTML/CSS/JavaScript for GitHub Pages compatibility.

## License

This is a fan work based on the SCP Foundation universe, which is licensed under Creative Commons Attribution-ShareAlike 3.0 (CC BY-SA 3.0).

## Troubleshooting

### Images Not Loading
- Make sure image URLs are accessible (some may be from the SCP Wiki and might have CORS restrictions)
- Consider downloading and hosting images in your repository

### Fonts Not Displaying Correctly
- The page uses Roboto Mono from Google Fonts
- Ensure you have internet connectivity for fonts to load

### JavaScript Not Working
- Check browser console for errors
- Ensure `script.js` is in the same directory as `index.html`
- Verify the script tag in HTML is correct

### GitHub Pages Not Updating
- Changes can take a few minutes to deploy
- Try clearing your browser cache
- Check the Actions tab in your repository for build status

## Support

For issues or questions:
- Check the GitHub repository issues
- Review the SCP Wiki documentation
- Contact @shingop (as mentioned in original code)

---

**Secure, Contain, Protect**
