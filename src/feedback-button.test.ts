import { FeedbackButton } from "./feedback-button.js";

describe("FeedbackButton", () => {
  describe("constructor", () => {
    it("uses default label and url when no options provided", () => {
      const button = new FeedbackButton();
      expect(button.label).toBe("Feedback");
      expect(button.url).toBe(
        "https://github.com/anthropics/claude-code/issues"
      );
    });

    it("accepts custom label", () => {
      const button = new FeedbackButton({ label: "Report Bug" });
      expect(button.label).toBe("Report Bug");
    });

    it("accepts custom url", () => {
      const button = new FeedbackButton({
        url: "https://example.com/feedback",
      });
      expect(button.url).toBe("https://example.com/feedback");
    });

    it("accepts both custom label and url", () => {
      const button = new FeedbackButton({
        label: "Send Feedback",
        url: "https://example.com/feedback",
      });
      expect(button.label).toBe("Send Feedback");
      expect(button.url).toBe("https://example.com/feedback");
    });
  });

  describe("render", () => {
    it("returns an HTML button with default values", () => {
      const button = new FeedbackButton();
      const html = button.render();
      expect(html).toContain("<button");
      expect(html).toContain("Feedback");
      expect(html).toContain(
        "https://github.com/anthropics/claude-code/issues"
      );
    });

    it("returns an HTML button with custom values", () => {
      const button = new FeedbackButton({
        label: "Report Issue",
        url: "https://example.com",
      });
      const html = button.render();
      expect(html).toContain("Report Issue");
      expect(html).toContain("https://example.com");
    });
  });

  describe("toMarkdown", () => {
    it("returns a markdown link with default values", () => {
      const button = new FeedbackButton();
      expect(button.toMarkdown()).toBe(
        "[Feedback](https://github.com/anthropics/claude-code/issues)"
      );
    });

    it("returns a markdown link with custom values", () => {
      const button = new FeedbackButton({
        label: "Help",
        url: "https://example.com/help",
      });
      expect(button.toMarkdown()).toBe("[Help](https://example.com/help)");
    });
  });

  describe("getUrl", () => {
    it("returns the feedback url", () => {
      const button = new FeedbackButton();
      expect(button.getUrl()).toBe(
        "https://github.com/anthropics/claude-code/issues"
      );
    });
  });
});
