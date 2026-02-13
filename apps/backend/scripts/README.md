# Generate Activity Book Previews

This script generates PNG preview images from the first page of each activity book guide PDF.

# Generate Activity Book All-Guides PDF

This script generates a pre-stored PDF containing all activity book guides. Used for fast "select all" bulk downloads (avoids timeout).

**When to run:** Whenever guides are added or updated.

```bash
yarn --cwd apps/backend generate-all-guides
```

Output: `public/boards/activity-book-all-guides.pdf`

**Note:** The bulk-download endpoint uses this file when the user selects all guides without a custom switch image. If the file is missing, it falls back to generating all guides on demand (which may timeout).

## Prerequisites

1. **Install GraphicsMagick** (required for PDF to image conversion):

   **macOS:**

   ```bash
   brew install graphicsmagick
   ```

   **Linux (Ubuntu/Debian):**

   ```bash
   sudo apt-get update
   sudo apt-get install graphicsmagick
   ```

   **Linux (CentOS/RHEL):**

   ```bash
   sudo yum install GraphicsMagick
   ```

2. **Install Ghostscript** (required for GraphicsMagick to read PDF files):

   **macOS:**

   ```bash
   brew install ghostscript
   ```

   **Linux (Ubuntu/Debian):**

   ```bash
   sudo apt-get install ghostscript
   ```

   **Linux (CentOS/RHEL):**

   ```bash
   sudo yum install ghostscript
   ```

3. **Install npm dependencies:**

   ```bash
   cd /Users/admin.stephen/Documents/Work/launch/aac-launchpad/apps/backend
   npm install
   ```

   This will install:

   - `pdf2pic` - for PDF to image conversion
   - `ts-node` - for running TypeScript scripts

4. **Verify installations:**
   ```bash
   gm version    # Should output GraphicsMagick version
   gs --version  # Should output Ghostscript version
   ```
   Both commands should output version information.

## Usage

### Generate all previews:

```bash
npm run generate-previews
```

### What it does:

1. Generates PDFs for each guide template
2. Converts the first page of each PDF to a PNG image
3. Saves previews to: `public/activity-book/previews/{templateId}.png`
4. Shows progress and summary

### Output:

Preview images will be saved to:

```
public/activity-book/previews/
├── dance-selector.png
├── simon-says.png
├── morning-greetings.png
└── ... (one for each guide)
```

## When to Run

Run this script whenever:

- ✅ New guides are added
- ✅ Guide templates are updated
- ✅ PDF generation logic changes
- ✅ You want to refresh all previews

## Troubleshooting

### Error: "GraphicsMagick not found"

- Make sure GraphicsMagick is installed: `gm version`
- On macOS, ensure Homebrew is up to date: `brew update`

### Error: "Ghostscript not found"

- Make sure Ghostscript is installed: `gs --version`
- GraphicsMagick needs Ghostscript to read PDF files
- Install with: `brew install ghostscript` (macOS) or `sudo apt-get install ghostscript` (Linux)

### Error: "Cannot find module 'pdf2pic'"

- Run: `npm install`

### Error: "Cannot find module 'ts-node'"

- Run: `npm install`

### Preview images are not showing

- Check that previews exist in `public/activity-book/previews/`
- Verify file names match `{templateId}.png`
- Check file permissions

## Manual Override

If you need to manually replace a specific preview:

1. Generate the PDF manually
2. Take a screenshot of the first page
3. Save as: `public/activity-book/previews/{templateId}.png`
4. The endpoint will automatically serve it
