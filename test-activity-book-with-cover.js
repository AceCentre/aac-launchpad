const {
  generateActivityBookWithCover,
} = require("./packages/board-to-pdf/dist/activity-book-with-cover");
const fs = require("fs");
const path = require("path");

async function testActivityBookWithCover() {
  try {
    // Mock guide template
    const mockGuide = {
      templateId: "test-activity",
      templateType: "guide",
      title: "Test Activity",
      category: "Test Category",
      badgeText: "Level 1",
      mainImage: "activity-book/test-image.png",
      sections: [
        {
          heading: "One switch does one thing (press and release)",
          body: "This is a test activity description.",
        },
        {
          heading: "What you'll need",
          body: "You'll need a switch and some equipment.",
          image: "activity-book/bigmack-switch.png",
        },
      ],
    };

    console.log("Generating activity book with cover...");

    const result = await generateActivityBookWithCover({
      template: mockGuide,
      userName: "John Doe",
      rootToImages: path.resolve(__dirname, "apps/backend/public"),
    });

    // Save the files
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");

    fs.writeFileSync(`test-cover-page-${timestamp}.docx`, result.docxBuffer);
    fs.writeFileSync(`test-activity-book-${timestamp}.pdf`, result.pdfBuffer);

    console.log("✅ Success! Files generated:");
    console.log(`- Cover page: test-cover-page-${timestamp}.docx`);
    console.log(`- Activity book: test-activity-book-${timestamp}.pdf`);
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

testActivityBookWithCover();
