import { useEffect, useMemo, useState } from "react";
import "./styles/PortfolioSections.css";

type ReelCardProps = {
  title: string;
  link: string;
  description?: string;
};

type OEmbedData = {
  title?: string;
  author_name?: string;
};

function toInstagramEmbed(url: string): string | null {
  const match = url.match(/instagram\.com\/(?:p|reel)\/([^/?#]+)/i);
  if (!match?.[1]) return null;
  return `https://www.instagram.com/reel/${match[1]}/embed`;
}

function sanitizeTitle(text: string): string {
  return text
    .replace(/on\s+Instagram:\s*/i, "")
    .replace(/\s*[-|]\s*Instagram.*$/i, "")
    .trim();
}

function handleFromName(name?: string): string | null {
  if (!name) return null;
  return name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9._]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

const ReelCard = ({ title, link, description }: ReelCardProps) => {
  const [meta, setMeta] = useState<OEmbedData | null>(null);
  const embed = toInstagramEmbed(link);

  useEffect(() => {
    let cancelled = false;

    const fetchMeta = async () => {
      try {
        const res = await fetch(`https://noembed.com/embed?url=${encodeURIComponent(link)}`);
        if (!res.ok) return;
        const data = (await res.json()) as OEmbedData;
        if (!cancelled) {
          setMeta(data);
        }
      } catch {
        // Keep fallback title/description silently.
      }
    };

    fetchMeta();

    return () => {
      cancelled = true;
    };
  }, [link]);

  const computed = useMemo(() => {
    const handle = handleFromName(meta?.author_name);
    const caption = meta?.title ? sanitizeTitle(meta.title) : null;

    const autoTitle = caption && caption.length > 6 ? caption.slice(0, 72) : title;
    const autoDescription = handle
      ? `Published by @${handle}. ${caption ? caption.slice(0, 140) : description || "Visual reel from the brand showcase."}`
      : description || "Visual reel from the brand showcase.";

    return {
      displayTitle: autoTitle,
      displayDescription: autoDescription,
    };
  }, [meta?.author_name, meta?.title, title, description]);

  return (
    <article className="portfolio-card reel-card-wrap">
      <div className="reel-frame">
        {embed ? (
          <iframe
            src={embed}
            title={computed.displayTitle}
            loading="lazy"
            allow="autoplay; encrypted-media"
            className="reel-iframe"
          />
        ) : (
          <a className="reel-fallback" href={link} target="_blank" rel="noreferrer">
            Open reel
          </a>
        )}
      </div>
      <div className="reel-meta">
        <h4>{computed.displayTitle}</h4>
        <p>{computed.displayDescription}</p>
      </div>
    </article>
  );
};

export default ReelCard;
