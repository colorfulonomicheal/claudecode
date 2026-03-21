export interface FeedbackOptions {
  label?: string;
  url?: string;
}

const DEFAULT_LABEL = "Feedback";
const DEFAULT_URL = "https://github.com/anthropics/claude-code/issues";

export class FeedbackButton {
  readonly label: string;
  readonly url: string;

  constructor(options: FeedbackOptions = {}) {
    this.label = options.label ?? DEFAULT_LABEL;
    this.url = options.url ?? DEFAULT_URL;
  }

  render(): string {
    return `<button onclick="window.open('${this.url}', '_blank')">${this.label}</button>`;
  }

  toMarkdown(): string {
    return `[${this.label}](${this.url})`;
  }

  getUrl(): string {
    return this.url;
  }
}
