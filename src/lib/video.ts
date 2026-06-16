export type VideoType = "youtube" | "vimeo" | "local";

export function getVideoEmbed(url: string): { type: VideoType; embedUrl: string } {
  if (url.startsWith("http://") || url.startsWith("https://")) {
    const ytMatch = url.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    if (ytMatch) {
      return { type: "youtube", embedUrl: `https://www.youtube.com/embed/${ytMatch[1]}` };
    }

    const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if (vimeoMatch) {
      return { type: "vimeo", embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}` };
    }
  }

  return { type: "local", embedUrl: url };
}
